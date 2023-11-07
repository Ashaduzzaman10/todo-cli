const { log } = require("console");
const fs = require("fs");
module.exports.saveFile = (data, fileName) => {
  try {
    fs.writeFileSync(fileName, JSON.stringify(data));
  } catch (err) {
    log(err.message);
    throw new Error(err);
  }
};

module.exports.readFile = (fileName) => {
  try {
    fs.readFileSync(fileName, "utf-8");
  } catch (err) {
    log(err.message);
    throw new Error(err);
  }
};
