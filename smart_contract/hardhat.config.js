//https://eth-ropsten.alchemyapi.io/v2/hO8Isq8Gbc8kWY-MGdWM7emtQqu_wECT

const { solidity } = require('ethereum-waffle')

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/hO8Isq8Gbc8kWY-MGdWM7emtQqu_wECT',
      accounts: ['2c5c27c6aa126351bcf26d9619145c0fecc76c79717a20ca68e74c8fdcd2f3a8']
    }
  }
}