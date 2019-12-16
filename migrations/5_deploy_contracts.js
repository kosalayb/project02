var contract = artifacts.require("AdvancedStorage.sol");

module.exports = function(deployer) {
  deployer.deploy(contract);
};