var Contract02 = artifacts.require("HelloWorld.sol");

module.exports = function(deployer) {
  deployer.deploy(Contract02);
};