const core = require('@actions/core');
const github = require('@actions/github');
const util = require('./util')
try {
  const pathArr = util.getInputAsArray('path',{
    required: true
  })
  console.log(`Hello ${pathArr}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("hash", time);

} catch (error) {
  core.setFailed(error.message);
}
