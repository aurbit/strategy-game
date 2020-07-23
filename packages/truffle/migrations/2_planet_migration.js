const AvatarAUR = artifacts.require('AvatarAUR')
const Planet = artifacts.require('Planet')
const AURToken = artifacts.require('AURToken')
const earthMap = require('../constants/earth-coords')
require('@openzeppelin/test-helpers/configure')({ provider: web3.currentProvider, environment: 'truffle' });
const { singletons } = require('@openzeppelin/test-helpers');



module.exports = function (deployer,network,accounts) {
    if (network === 'development') {
    // In a test environment an ERC777 token requires deploying an ERC1820 registry
    singletons.ERC1820Registry(accounts[0]);
  }

  deployer.deploy(AvatarAUR).then(avatar => {
    return  deployer.deploy(Planet, avatar.address, earthMap)
  }).then(planet => {
    return deployer.deploy(AURToken,planet.address)
  })
}
