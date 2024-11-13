require("babel-register");
require("babel-polyfill");
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privateKey = "private-key-goes-here";
const endpointUrl = "endpoint-goes-here";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
  },
  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis/",
  compilers: {
    solc: {
      version: "0.8.27", // Use the available Solidity version
      optimizer: {
        enabled: true,
        runs: 1,
      },
      evmVersion: "byzantium",
    },
  },
};
