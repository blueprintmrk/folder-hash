const core = require('@actions/core');
const github = require('@actions/github');
const util = require('./util')
try {
  const pathArr = util.getInputAsArray('path',{
    required: true
  })
 util.getHashFromFolder(pathArr).then(data=>{
    core.setOutput("hash", data);
  }).catch(error=>{
    core.setFailed(error.message);
  })

} catch (error) {
  core.setFailed(error.message);
}
