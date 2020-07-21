export const Contract = (abi, address) => {
  const ContractFactory = window.web3.eth.contract(abi)
  const ContractAddress = address

  return ContractFactory.at(ContractAddress)
}
