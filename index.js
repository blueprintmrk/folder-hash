const core = require('@actions/core');
const fs = require('fs-extra')
const util = require('./util')
try {
  core.debug(`start folder-hash`)
  let pathArr = util.getInputAsArray('path',{
    required: true
  })
  core.debug(`paths: ${pathArr}`)
  const promises = pathArr.map(item=>fs.pathExists(item))
  // filter exist path
  Promise.all(promises).then(existes=>{
    pathArr = pathArr.filter((_,index)=>{
        return existes[index];
    })
  })
  if(pathArr.length>0){
    util.getHashFromFolder(pathArr).then(data=>{
      core.debug(`folder hash ${data}`)
      core.setOutput("hash", data);
    }).catch(error=>{
      core.error(`get hash error: ${error.message}`)
      core.setFailed(error.message);
    })
  }else{
    core.warn(`folder not exists, return empty string`)
    core.setOutput("hash", "");
  }

} catch (error) {
  core.setFailed(error.message);
}
