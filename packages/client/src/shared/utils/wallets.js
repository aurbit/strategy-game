const addressShortener = address => {
  if (!address) {
    return '0x00000'
  } else {
    return address.substr(0, 5) + ' ... ' + address.substr(-5, 5)
  }
}

export { addressShortener }
