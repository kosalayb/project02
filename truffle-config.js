const fs = require('fs');
const HDWalletProvider = require("truffle-hdwallet-provider");
const secrets = JSON.parse(
  fs.readFileSync(".secrets").toString().trim()
);

module.exports = {
  networks: {
    ropsten:{
      provider:() =>
        new HDWalletProvider(
              secrets.seed,
              'https://ropsten.infura.io/v3/${secrets.projectId}'
          ),
        network_id: 3 // 3 is the network id for ropsten
    }
  //   development: {
  //     host: "127.0.0.1", // connect to Ganache
  //     port: 9545,
  //     network_id: "*" // Match any network id
  //   }
 }
  // solc: {
  //   optimizer: {
  //     enabled: true,
  //     runs: 200
  //   }
  // }
}
