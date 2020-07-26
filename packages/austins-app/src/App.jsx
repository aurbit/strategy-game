import React, { useState } from "react"
import "antd/dist/antd.css"
import { ethers } from "ethers"
import "./App.css"
import { Row, Col } from "antd"
import { useExchangePrice, useGasPrice, useBalance, useContractLoader, useCustomContractReader } from "./hooks"
import { Address, Header, Account, Provider, Faucet, Ramp, Contract } from "./components"
import Hints from "./Hints"

// 🛰 providers
const mainnetProvider = new ethers.providers.InfuraProvider("mainnet", "2717afb6bf164045b5d5468031b93f87")
const localProvider = new ethers.providers.JsonRpcProvider(
  process.env.REACT_APP_PROVIDER ? process.env.REACT_APP_PROVIDER : "http://localhost:8545",
)

function App () {
  const [address, setAddress] = useState()
  const [injectedProvider, setInjectedProvider] = useState()
  const price = useExchangePrice(mainnetProvider)
  const gasPrice = useGasPrice("fast")

  // 🏗 scaffold-eth is full of handy hooks like this one to get your balance:
  const yourLocalBalance = useBalance(localProvider, address)
  // just plug in different 🛰 providers to get your balance on different chains:
  const yourMainnetBalance = useBalance(mainnetProvider, address)

  // Load in your local 📝 contract and read a value from it:
  //const readContracts = useContractLoader(localProvider)
  //const owner = useCustomContractReader(readContracts?readContracts['YourContract']:"", "owner")

  return (
    <div className='App'>
      <Header />
      <div style={{ position: "fixed", textAlign: "right", right: 0, top: 0, padding: 10 }}>
        <Account
          address={address}
          setAddress={setAddress}
          localProvider={localProvider}
          injectedProvider={injectedProvider}
          setInjectedProvider={setInjectedProvider}
          mainnetProvider={mainnetProvider}
          price={price}
        />
      </div>

      {/*

        🎛 this scaffolding is full of commonly used components
        this <Contract/> component will automatically parse your ABI
        and give you a form to interact with it locally

      */}
      <Contract name='YourContract' provider={injectedProvider} address={address} />

      <Hints address={address} yourLocalBalance={yourLocalBalance} price={price} mainnetProvider={mainnetProvider} />

      <div style={{ position: "fixed", textAlign: "left", left: 0, bottom: 20, padding: 10 }}>
        <Row align='middle' gutter={4}>
          <Col span={9}>
            <Ramp price={price} address={address} />
          </Col>
          <Col span={15}>
            <Faucet localProvider={localProvider} price={price} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default App
