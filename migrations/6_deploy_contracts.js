var contract = artifacts.require("Crud.sol");

module.exports = function(deployer) {
  deployer.deploy(contract);
};