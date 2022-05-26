// 1. Import the ethers plugin required to interact with the contract
require('@nomiclabs/hardhat-ethers');

// 2. Import your private key from your pre-funded Moonbase Alpha testing account
const { privateKey } = require('./secrets.json');

module.exports = {
  // 3. Specify the Solidity version
  solidity: "0.8.1",

  networks: {
    // 4. Add the Moonbase Alpha network specification
    moonbase: {
      url: 'https://rpc.api.moonbase.moonbeam.network',
      chainId: 1287, // 0x507 in hex,
      accounts: [privateKey]
    }
  }
};