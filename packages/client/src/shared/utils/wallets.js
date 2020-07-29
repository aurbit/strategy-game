const addressShortener = (address = '') =>
  address.substr(0, 5) + ' ... ' + address.substr(-5, 5)

export { addressShortener }
