const core = require("@actions/core");
const util = require("./util");
try {
  core.debug(`start folder-hash`);
  let pathArr = util.getInputAsArray("path", {
    required: true,
  });
  core.debug(`paths: ${pathArr}`);
  util
    .getHashFromFolder(pathArr)
    .then((data) => {
      core.debug(`folder hash ${data}`);
      core.setOutput("hash", data);
    })
    .catch((error) => {
      core.error(`get hash error: ${error.message}`);
      core.setFailed(error.message);
    });
} catch (error) {
  core.setFailed(error.message);
}
