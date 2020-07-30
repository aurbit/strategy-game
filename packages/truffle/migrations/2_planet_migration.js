const AvatarAUR = artifacts.require('AvatarAUR')
const Planet = artifacts.require('Planet')
const AURToken = artifacts.require('AURToken')
const AURGov =  artifacts.require('AURGov')
const earthMap = require('../constants/earth-coords')

require('@openzeppelin/test-helpers/configure')({
  provider: web3.currentProvider,
  environment: 'truffle'
})
const { singletons } = require('@openzeppelin/test-helpers')
const exporter = require('../scripts/exporter')

module.exports = (deployer, network, accounts) => {
  deployer.then(async () => {
    if (network === 'development') {
      // In a test environment an ERC777 token requires deploying an ERC1820 registry
      singletons.ERC1820Registry(accounts[0])
    }

    const avatar = await deployer.deploy(AvatarAUR)
    // the exporter builds a JS artifact file for the client src/contract directory
    await exporter('AvatarAUR', avatar.address, network)
    const gov = await deployer.deploy(AURGov,avatar.address)
    await exporter('AURGov', gov.address, network)
    const token = await deployer.deploy(AURToken,gov.address)
    await exporter('AURToken', token.address, network)
    const planet = await deployer.deploy(Planet, gov.address, earthMap)
    await exporter('Planet', planet.address, network)
    await gov.addPlanet(planet.address)
    await gov.setTokenContract(token.address)
  })
}
