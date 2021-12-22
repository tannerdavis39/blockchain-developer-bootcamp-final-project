require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");


const mnemonicPhrase = process.env.MNEMONIC;
const api = process.env.INFURA_API_KEY

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonicPhrase,
          "https://ropsten.infura.io/v3/52bf5210c6694f2c9123ac8da8f42cee"
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true // Skip dry run before migrations? (default: false for public nets )
    }
  }
};