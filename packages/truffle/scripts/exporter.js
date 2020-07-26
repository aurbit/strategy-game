const fs = require('fs')
const path = require('path')

// creates a file in the build folder with the
// address of the deployed contract artifact
const BUILD_CONTRACTS_DIR = '../build/contracts'
const BUILD_EXPORTS_DIR = '../build/exports'
const CLIENT_CONTRACTS_DIR = '../../client/src/contracts'

module.exports = async (contractName, contractAddress, network) => {
  const contractsDir = path.join(__dirname, BUILD_CONTRACTS_DIR)
  const exportsDir = path.join(__dirname, BUILD_EXPORTS_DIR)

  // client destination directory for contract js file
  const clientContractsDir = path.join(
    __dirname,
    `${CLIENT_CONTRACTS_DIR}/${network}`
  )

  // create export directory if it doesn't exists
  const directory =
    (await fs.existsSync(exportsDir)) || fs.mkdirSync(exportsDir)

  // get the json artifact
  const contractJson = await fs.readFileSync(
    contractsDir + '/' + contractName + '.json'
  )

  // create the contract javascript file in the contract exports directory
  await fs.openSync(exportsDir + '/' + contractName + '.js', 'w')

  // write the javascript to the file
  await fs.writeFileSync(
    exportsDir + '/' + contractName + '.js',
    `
    module.exports = {
      "network": ${network},
      "address": ${contractAddress},
      "artifact": ${contractJson}
    }
  `
  )

  const source = exportsDir + '/' + contractName + '.js'
  const target = clientContractsDir + '/' + contractName + '.js'

  // create the contract folder in the client package if it doesn't exist
  const clientDirectory =
    (await fs.existsSync(clientContractsDir)) ||
    fs.mkdirSync(clientContractsDir)

  const targetFile = target
  //if target is a directory a new file with the same name will be created
  if (await fs.existsSync(target)) {
    if (await fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source))
    }
  }

  // write to the javascript files in the client package
  await fs.writeFileSync(targetFile, fs.readFileSync(source))
  console.log(
    '🍺🍺 SUCCESSFULLY BUILT AND EXPORTED \x1b[1m' +
      contractName +
      '\x1b[0m CONTRACT TO CLIENT 🍺🍺'
  )
}
