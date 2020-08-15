import { utils } from 'web3'

export default dna => {
  let toHex = utils.toHex(dna)
  let padLeft = utils.padLeft(toHex, 36)
  let dnaArray = utils.hexToBytes(padLeft)

  return dnaArray
}
