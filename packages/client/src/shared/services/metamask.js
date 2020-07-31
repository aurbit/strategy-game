import web3 from 'web3'

export const mintAvatar = async ({
  avatar, // the contract
  provider, // the web3 provider
  from, // the selected wallet address
  to, // the avatar contract address
  // gasLimit, // the gas limit price
  // gasPrice, // the price to pay
  value, // how much eth to send
  name, // the name of the avatar
  dnaC // the converted dna byte array
}) => {
  const rawTrx = await avatar.methods.mintAvatar(name, dnaC).encodeABI()

  return provider.eth.getTransactionCount(from, (err, txCount) => {
    // Build the transaction
    const txObject = {
      nonce: web3.utils.toHex(txCount),
      from,
      to,
      value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
      gasLimit: web3.utils.toHex(21000),
      gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei')),
      data: rawTrx
    }

    return window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [txObject]
    })
  })
}

export const getAvatarDna = async ({ avatar, address }) => {
  const balOfTokens = await avatar.methods.balanceOf(address)
  console.log(balOfTokens)
}
