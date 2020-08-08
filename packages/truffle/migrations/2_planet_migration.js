const AvatarAUR = artifacts.require('AvatarAUR')
const Planet = artifacts.require('Planet')
const AURToken = artifacts.require('AURToken')
const AURGov = artifacts.require('AURGov')
const earthMap = require('../constants/earth-coords')
const venusMap = require('../constants/venus-coords')
require('@openzeppelin/test-helpers/configure')({
  provider: web3.currentProvider,
  environment: 'truffle'
})
const { singletons } = require('@openzeppelin/test-helpers')
const exporter = require('../scripts/exporter')

module.exports = function (deployer, network, accounts) {
  deployer.then(async () => {
    if (network === 'development') {
      // In a test environment an ERC777 token requires deploying an ERC1820 registry
      await singletons.ERC1820Registry(accounts[0])
    }

    const gov = await deployer.deploy(AURGov)
    const avatar = await deployer.deploy(AvatarAUR, gov.address)
    const token = await deployer.deploy(AURToken, gov.address)
    const planet = await deployer.deploy(Planet, gov.address)

    await gov.setTokenContract(AURToken.address)
    await gov.setAvatarContract(AvatarAUR.address)
    await gov.addPlanet(Planet.address)
    await planet.setMap(earthMap)

    await exporter('AURGov', gov.address, network)
    await exporter('AvatarAUR', avatar.address, network)
    await exporter('AURToken', token.address, network)
    await exporter('Planet', planet.address, network)
  })
}
