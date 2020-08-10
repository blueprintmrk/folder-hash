
const core = require("@actions/core");
const hashdirectory = require('hashdirectory');
const crypto = require('crypto');

function getHashFromFolder(folders){
 const promises = []
 folders.forEach(folder=>{
   promises.push(hashdirectory(folder))
 })
 return Promise.all(promises).then(data=>{   
   core.debug(`folders hash ${data}`)
    const shasum = crypto.createHash('sha1')
    shasum.update(data.join(','))
    return shasum.digest('hex') 

  })
  
}
exports.getHashFromFolder = getHashFromFolder

function getInputAsArray(
  name,
  options
) {
  return core
      .getInput(name, options)
      .split("\n")
      .map(s => s.trim())
      .filter(x => x !== "")
}

exports.getInputAsArray = getInputAsArray