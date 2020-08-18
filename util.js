const core = require("@actions/core");
const hashdirectory = require("hashdirectory");
const crypto = require("crypto");
const fs = require("fs-extra");

function getHashFromFolder(folders) {
  core.debug(`folders options: ${folders}`);
  const filesPromises = folders.map((item) => fs.pathExists(item));
  // filter exist path
  return Promise.all(filesPromises).then((existes) => {
    folders = folders.filter((_, index) => {
      return existes[index];
    });
    core.debug(`valid folders ${folders}`);
    if (folders && folders.length > 0) {
      const promises = [];
      folders.forEach((folder) => {
        promises.push(hashdirectory(folder));
      });
      return Promise.all(promises).then((data) => {
        core.debug(`folders hash ${data}`);
        const shasum = crypto.createHash("sha1");
        shasum.update(data.join(","));
        return shasum.digest("hex");
      });
    } else {
      core.warning("folders are not exists, set hash to empty");
      return "";
    }
  });
}
exports.getHashFromFolder = getHashFromFolder;

function getInputAsArray(name, options) {
  return core
    .getInput(name, options)
    .split("\n")
    .map((s) => s.trim())
    .filter((x) => x !== "");
}

exports.getInputAsArray = getInputAsArray;
