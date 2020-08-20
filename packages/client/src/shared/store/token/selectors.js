import { utils } from 'web3'
export const selectBalance = state =>
  utils.fromWei(state.token.balance.value.toString(), 'ether')
export const selectSendPlanetAur = state => state.token.sendPlanetAur
