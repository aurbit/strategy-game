import { Libp2pCryptoIdentity } from '@textile/threads-core'

// Naieve implementation for idenity

// Create a random keypair-based identity
// Identity will be cached in browsor for future sessions
// May need to use the wallet address so the users identity is static
export const getIdentity = async () => {
  try {
    var storedIdent = localStorage.getItem('identity')
    if (storedIdent === null) {
      throw new Error('No identity')
    }
    const restored = Libp2pCryptoIdentity.fromString(storedIdent)
    return restored
  } catch (e) {
    // If error - We generate a new identity
    try {
      const identity = await Libp2pCryptoIdentity.fromRandom()
      const identityString = identity.toString()
      localStorage.setItem('identity', identityString)
      return identity
    } catch (err) {
      return err.message
    }
  }
}
