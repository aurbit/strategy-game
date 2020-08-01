const addressShortener = address => {
  if (!address) {
    return 'Connect Wallet'
  } else {
    return address.substr(0, 5) + ' ... ' + address.substr(-5, 5)
  }
}

export { addressShortener }
