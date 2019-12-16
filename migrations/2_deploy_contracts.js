var Contract01 = artifacts.require("./SimpleContract.sol");

module.exports = function(deployer) {
  deployer.deploy(Contract01);
};