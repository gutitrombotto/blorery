const BloryToken = artifacts.require("BloryToken");

module.exports = function (deployer) {
  deployer.deploy(BloryToken);
};
