const core = require('@actions/core');
const github = require('@actions/github');
const util = require('./util')
try {
  const pathArr = util.getInputAsArray('path',{
    required: true
  })
  core.debug(`paths: ${pathArr}`)
 util.getHashFromFolder(pathArr).then(data=>{
    core.debug(`folder hash ${data}`)
    core.setOutput("hash", data);
  }).catch(error=>{
    core.error(`get hash error: ${error.message}`)
    core.setFailed(error.message);
  })

} catch (error) {
  core.setFailed(error.message);
}
