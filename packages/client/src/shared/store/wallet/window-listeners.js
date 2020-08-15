import { store } from 'store'
import { ACTIONS } from './index'
import { NETWORKS } from 'shared/store/chain'

export const ethereumEventListeners = () => {
  window.ethereum.on('chainChanged', chainId => {
    switch (chainId) {
      case '0x3': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.ROPSTEN }))
        break
      }
      case '0x1': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.MAINNET }))
        alert('We have not deployed contracts to this network, yet.')
        break
      }
      case '0x2a': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.KOVAN }))
        alert('We have not deployed contracts to this network, yet.')
        break
      }
      case '0x4': {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.RINKEBY }))
        alert('We have not deployed contracts to this network, yet.')
        break
      }
      default: {
        store.dispatch(ACTIONS.setNetwork({ network: NETWORKS.DEVELOPMENT }))
        break
      }
    }
  })

  window.ethereum.on('disconnect', () => {
    store.dispatch(ACTIONS.setNetwork(null))
    store.dispatch(ACTIONS.setAddress(null))
  })

  window.ethereum.on('accountsChanged', data => {
    store.dispatch(ACTIONS.setAddress({ address: data[0] }))
  })
}
