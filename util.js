
const core = require("@actions/core");

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