
    module.exports = {
      "network": "development",
      "address": "0xF528cc4A89C9920801dB7044a22E45BE3D3B0432",
      "artifact": {
  "contractName": "AURToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "govaddy",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "AuthorizedOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Burned",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Minted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "RevokedOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "indexed": false,
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Sent",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "authorizeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "defaultOperators",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "granularity",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenHolder",
          "type": "address"
        }
      ],
      "name": "isOperatorFor",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "operatorBurn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        },
        {
          "internalType": "bytes",
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "operatorSend",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "revokeOperator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "send",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "holder",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mintInternal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnInternal",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"govaddy\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"AuthorizedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Burned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"RevokedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Sent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"authorizeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnInternal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultOperators\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"granularity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"isOperatorFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mintInternal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorSend\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"revokeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"send\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.     * Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Note that accounts cannot have allowance issued by their operators.\"},\"authorizeOperator(address)\":{\"details\":\"See {IERC777-authorizeOperator}.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by an account (`tokenHolder`).\"},\"burn(uint256,bytes)\":{\"details\":\"See {IERC777-burn}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"decimals()\":{\"details\":\"See {ERC20-decimals}.     * Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility).\"},\"defaultOperators()\":{\"details\":\"See {IERC777-defaultOperators}.\"},\"granularity()\":{\"details\":\"See {IERC777-granularity}.     * This implementation always returns `1`.\"},\"isOperatorFor(address,address)\":{\"details\":\"See {IERC777-isOperatorFor}.\"},\"name()\":{\"details\":\"See {IERC777-name}.\"},\"operatorBurn(address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorBurn}.     * Emits {Burned} and {IERC20-Transfer} events.\"},\"operatorSend(address,address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorSend}.     * Emits {Sent} and {IERC20-Transfer} events.\"},\"revokeOperator(address)\":{\"details\":\"See {IERC777-revokeOperator}.\"},\"send(address,uint256,bytes)\":{\"details\":\"See {IERC777-send}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"symbol()\":{\"details\":\"See {IERC777-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC777-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract.     * Also emits a {Sent} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.    * Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators).    * Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events.\"}}},\"userdoc\":{\"methods\":{},\"notice\":\"Author: Chris Markov 2020 Project Aurbit\"}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol\":\"AURToken\"},\"evmVersion\":\"constantinople\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol\":{\"keccak256\":\"0x9e74f137be0a4fd1d38e1a728fecec2172c7645e23db1ac0510c0482b92ca341\",\"urls\":[\"bzz-raw://1be9136c623a8bd8f48cb2d3531b5fe225ee96843fa6ad97fb57856240440ec8\",\"dweb:/ipfs/QmZfJj5mgW3e7Nqf6S54y3QnSCKYaSReXjPjt12WbrTCsw\"]},\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IAURGov.sol\":{\"keccak256\":\"0x3bff931b2e29ce41de07fa77ee70f7e0395e0e47e32fe90d4e39c2f7c605ffe9\",\"urls\":[\"bzz-raw://7f3acf46107c3e4ae595cf123135ff7dbf5361e24bdeb7879ac15fd9f30d5f9e\",\"dweb:/ipfs/QmepsFvwFt1FxHte6pPXtaBfuuttM62orhwjBo4LgNLYTi\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/IERC1820Registry.sol\":{\"keccak256\":\"0xdf8d7d1a119fc0d9f73a5c7a5d21bb0a4e0acb2a61e393c26334d397db628768\",\"urls\":[\"bzz-raw://1e471d73d901c48a465167257403f331454f4c34a945fb5cec10a57690193686\",\"dweb:/ipfs/QmemL8Nxf6SdTkQPq2SZMyNpkMAts5sL2dB2iHktzgPKeR\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/token/ERC777/ERC777.sol\":{\"keccak256\":\"0xb05eb2b0516eabc19a112b20fe61940bf8100644f1c1fd8d090baabad3972e1a\",\"urls\":[\"bzz-raw://d139ba2135f975466dbdc519c6ac5561e408db09c69c806d9e59f16e0b5903a1\",\"dweb:/ipfs/Qmb3SD7Zw1QirY1PqSkQRyBT7ss3BDi1vJ2KjJz1dnVu7T\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0x7846aa81baa00557eba6215442eab916bc98f2e692fdc7b8523cf31122dc8e28\",\"urls\":[\"bzz-raw://40a5491dcdcdbea4bf8695e1c75f5f723dcd19c1392e8ff7a5fc56e13b5794e1\",\"dweb:/ipfs/QmcAFeKKXAFFEzCShHhT65smF8SDhhMg5oWmU3TWKPpTFT\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol\":{\"keccak256\":\"0xc9e219f9060c261ab6d140f448ccdcb207ce9835f0d2868d2c5d4a93486d2208\",\"urls\":[\"bzz-raw://a03ae88229a14e3c0060e558300ba7ab5bdcea10aa814c80d6148e0914d4fdf3\",\"dweb:/ipfs/QmYS76B2bAVTcuzmtYVAt6mY4qr16tZSsWP7dUWdcAgRww\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Sender.sol\":{\"keccak256\":\"0xe4be617d1e043920582d2ec0bc1fe3985a3a49cfedac80c0cf0b9ea5d31044b5\",\"urls\":[\"bzz-raw://1beb3d95ab30460159efed1fc39f9253a3bb66ce50253fc487d927b7fe32165d\",\"dweb:/ipfs/QmVtVWHT6vVfFknNX9gxtrX1xYoLbq8YeZLZrSKYcCyKY8\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162002da138038062002da1833981810160405260208110156200003757600080fd5b5051604080518082018252600c81527f41757262697420546f6b656e0000000000000000000000000000000000000000602080830191825283518085018552600381527f41555200000000000000000000000000000000000000000000000000000000008183015284516000815291820190945282519293929091620000c1916002919062000999565b508151620000d790600390602085019062000999565b508051620000ed90600490602084019062000a1e565b5060005b6004548110156200014d57600160056000600484815481106200011057fe5b6000918252602080832091909101546001600160a01b031683528201929092526040019020805460ff1916911515919091179055600101620000f1565b50604080517f455243373737546f6b656e0000000000000000000000000000000000000000008152815190819003600b0181207f29965a1d0000000000000000000000000000000000000000000000000000000082523060048301819052602483019190915260448201529051731820a4b7618bde71dce8cdc73aab6c95905fad24916329965a1d91606480830192600092919082900301818387803b158015620001f757600080fd5b505af11580156200020c573d6000803e3d6000fd5b5050604080517f4552433230546f6b656e000000000000000000000000000000000000000000008152815190819003600a0181207f29965a1d0000000000000000000000000000000000000000000000000000000082523060048301819052602483019190915260448201529051731820a4b7618bde71dce8cdc73aab6c95905fad2493506329965a1d9250606480830192600092919082900301818387803b158015620002b957600080fd5b505af1158015620002ce573d6000803e3d6000fd5b505060098054336001600160a01b03199182161791829055600a805482166001600160a01b038a8116918217909255600b80549093161790915560408051602080820183526000808352835191820190935291825269d3c21bcecceda1000000985062000347975091909216945086935091506200034f565b505062000ac8565b6001600160a01b038416620003c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000620003da6001600160e01b03620005e516565b9050620003f481600087876001600160e01b03620005ea16565b6200041084600154620005f060201b62001f671790919060201c565b6001556001600160a01b038516600090815260208181526040909120546200044391869062001f67620005f0821b17901c565b6001600160a01b0386166000908152602081905260408120919091556200047b9082908787878760016001600160e01b036200066c16565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015620004fc578181015183820152602001620004e2565b50505050905090810190601f1680156200052a5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156200055f57818101518382015260200162000545565b50505050905090810190601f1680156200058d5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b335b90565b50505050565b6000828201838110156200066557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080517faabbb8ca0000000000000000000000000000000000000000000000000000000081526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156200070a57600080fd5b505afa1580156200071f573d6000803e3d6000fd5b505050506040513d60208110156200073657600080fd5b505190506001600160a01b03811615620008d457806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015620007fe578181015183820152602001620007e4565b50505050905090810190601f1680156200082c5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156200086157818101518382015260200162000847565b50505050905090810190601f1680156200088f5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015620008b557600080fd5b505af1158015620008ca573d6000803e3d6000fd5b5050505062000952565b81156200095257620008fa866001600160a01b03166200095c60201b62001fc11760201c565b1562000952576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d81526020018062002d54604d913960600191505060405180910390fd5b5050505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906200099157508115155b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620009dc57805160ff191683800117855562000a0c565b8280016001018555821562000a0c579182015b8281111562000a0c578251825591602001919060010190620009ef565b5062000a1a92915062000a84565b5090565b82805482825590600052602060002090810192821562000a76579160200282015b8281111562000a7657825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000a3f565b5062000a1a92915062000aa1565b620005e791905b8082111562000a1a576000815560010162000a8b565b620005e791905b8082111562000a1a5780546001600160a01b031916815560010162000aa8565b61227c8062000ad86000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806395d89b41116100ad578063dd62ed3e11610071578063dd62ed3e1461058b578063df4fbfff146105b9578063fad8b32a146105d6578063fc673c4f146105fc578063fe9d93031461073a5761012c565b806395d89b4114610453578063990be2481461045b5780639bd9bbc614610478578063a9059cbb14610531578063d95b63711461055d5761012c565b8063313ce567116100f4578063313ce56714610296578063556f0dc7146102b457806362ad1b83146102bc57806370a0823114610407578063959b8c3f1461042d5761012c565b806306e485381461013157806306fdde0314610189578063095ea7b31461020657806318160ddd1461024657806323b872dd14610260575b600080fd5b6101396107e5565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561017557818101518382015260200161015d565b505050509050019250505060405180910390f35b610191610847565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101cb5781810151838201526020016101b3565b50505050905090810190601f1680156101f85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102326004803603604081101561021c57600080fd5b506001600160a01b0381351690602001356108d1565b604080519115158252519081900360200190f35b61024e6108f3565b60408051918252519081900360200190f35b6102326004803603606081101561027657600080fd5b506001600160a01b038135811691602081013590911690604001356108f9565b61029e610a7c565b6040805160ff9092168252519081900360200190f35b61024e610a81565b610405600480360360a08110156102d257600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561030c57600080fd5b82018360208201111561031e57600080fd5b803590602001918460018302840111600160201b8311171561033f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561039157600080fd5b8201836020820111156103a357600080fd5b803590602001918460018302840111600160201b831117156103c457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a86945050505050565b005b61024e6004803603602081101561041d57600080fd5b50356001600160a01b0316610ae8565b6104056004803603602081101561044357600080fd5b50356001600160a01b0316610b03565b610191610c4f565b6104056004803603602081101561047157600080fd5b5035610cb0565b6104056004803603606081101561048e57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104bd57600080fd5b8201836020820111156104cf57600080fd5b803590602001918460018302840111600160201b831117156104f057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d02945050505050565b6102326004803603604081101561054757600080fd5b506001600160a01b038135169060200135610d2c565b6102326004803603604081101561057357600080fd5b506001600160a01b0381358116916020013516610e05565b61024e600480360360408110156105a157600080fd5b506001600160a01b0381358116916020013516610ea7565b610405600480360360208110156105cf57600080fd5b5035610ed2565b610405600480360360208110156105ec57600080fd5b50356001600160a01b0316610efc565b6104056004803603608081101561061257600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561064157600080fd5b82018360208201111561065357600080fd5b803590602001918460018302840111600160201b8311171561067457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156106c657600080fd5b8201836020820111156106d857600080fd5b803590602001918460018302840111600160201b831117156106f957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611048945050505050565b6104056004803603604081101561075057600080fd5b81359190810190604081016020820135600160201b81111561077157600080fd5b82018360208201111561078357600080fd5b803590602001918460018302840111600160201b831117156107a457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110a6945050505050565b6060600480548060200260200160405190810160405280929190818152602001828054801561083d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161081f575b5050505050905090565b60028054604080516020601f600019610100600187161502019094168590049384018190048102820181019092528281526060939092909183018282801561083d5780601f106108a55761010080835404028352916020019161083d565b820191906000526020600020905b8154815290600101906020018083116108b357509395945050505050565b6000806108dc6110cc565b90506108e98185856110d0565b5060019392505050565b60015490565b60006001600160a01b0383166109405760405162461bcd60e51b81526004018080602001828103825260248152602001806121626024913960400191505060405180910390fd5b6001600160a01b0384166109855760405162461bcd60e51b81526004018080602001828103825260268152602001806121db6026913960400191505060405180910390fd5b600061098f6110cc565b90506109bd8186868660405180602001604052806000815250604051806020016040528060008152506111bc565b6109e9818686866040518060200160405280600081525060405180602001604052806000815250611404565b610a438582610a3e866040518060600160405280602981526020016121b2602991396001600160a01b03808c166000908152600860209081526040808320938b1683529290522054919063ffffffff61162916565b6110d0565b610a7181868686604051806020016040528060008152506040518060200160405280600081525060006116c0565b506001949350505050565b601290565b600190565b610a97610a916110cc565b86610e05565b610ad25760405162461bcd60e51b815260040180806020018281038252602c815260200180612186602c913960400191505060405180910390fd5b610ae185858585856001611960565b5050505050565b6001600160a01b031660009081526020819052604090205490565b806001600160a01b0316610b156110cc565b6001600160a01b03161415610b5b5760405162461bcd60e51b81526004018080602001828103825260248152602001806120d06024913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff1615610bbe5760076000610b886110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff19169055610c05565b600160066000610bcc6110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff19169115159190911790555b610c0d6110cc565b6001600160a01b0316816001600160a01b03167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561083d5780601f106108a55761010080835404028352916020019161083d565b610cb8611a37565b610cc157600080fd5b610cff33826040518060400160405280600b81526020016a4d494e544544434f494e5360a81b81525060405180602001604052806000815250611add565b50565b610d27610d0d6110cc565b848484604051806020016040528060008152506001611960565b505050565b60006001600160a01b038316610d735760405162461bcd60e51b81526004018080602001828103825260248152602001806121626024913960400191505060405180910390fd5b6000610d7d6110cc565b9050610dab8182868660405180602001604052806000815250604051806020016040528060008152506111bc565b610dd7818286866040518060200160405280600081525060405180602001604052806000815250611404565b6108e981828686604051806020016040528060008152506040518060200160405280600081525060006116c0565b6000816001600160a01b0316836001600160a01b03161480610e7057506001600160a01b03831660009081526005602052604090205460ff168015610e7057506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b80610ea057506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b610eda611a37565b610ee357600080fd5b610cff81604051806020016040528060008152506110a6565b610f046110cc565b6001600160a01b0316816001600160a01b03161415610f545760405162461bcd60e51b81526004018080602001828103825260218152602001806120f46021913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff1615610fc057600160076000610f836110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff1916911515919091179055610ffe565b60066000610fcc6110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff191690555b6110066110cc565b6001600160a01b0316816001600160a01b03167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b6110596110536110cc565b85610e05565b6110945760405162461bcd60e51b815260040180806020018281038252602c815260200180612186602c913960400191505060405180910390fd5b6110a084848484611d21565b50505050565b6110c86110b16110cc565b838360405180602001604052806000815250611d21565b5050565b3390565b6001600160a01b0383166111155760405162461bcd60e51b81526004018080602001828103825260258152602001806120406025913960400191505060405180910390fd5b6001600160a01b03821661115a5760405162461bcd60e51b81526004018080602001828103825260238152602001806122246023913960400191505060405180910390fd5b6001600160a01b03808416600081815260086020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b15801561124057600080fd5b505afa158015611254573d6000803e3d6000fd5b505050506040513d602081101561126a57600080fd5b505190506001600160a01b038116156113fb57806001600160a01b03166375ab97828888888888886040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611330578181015183820152602001611318565b50505050905090810190601f16801561135d5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611390578181015183820152602001611378565b50505050905090810190601f1680156113bd5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156113e257600080fd5b505af11580156113f6573d6000803e3d6000fd5b505050505b50505050505050565b611410868686866110a0565b61145383604051806060016040528060278152602001612087602791396001600160a01b038816600090815260208190526040902054919063ffffffff61162916565b6001600160a01b038087166000908152602081905260408082209390935590861681522054611488908463ffffffff611f6716565b600080866001600160a01b03166001600160a01b0316815260200190815260200160002081905550836001600160a01b0316856001600160a01b0316876001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611539578181015183820152602001611521565b50505050905090810190601f1680156115665780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611599578181015183820152602001611581565b50505050905090810190601f1680156115c65780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a4836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b600081848411156116b85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561167d578181015183820152602001611665565b50505050905090810190601f1680156116aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b15801561174457600080fd5b505afa158015611758573d6000803e3d6000fd5b505050506040513d602081101561176e57600080fd5b505190506001600160a01b0381161561190257806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561183357818101518382015260200161181b565b50505050905090810190601f1680156118605780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561189357818101518382015260200161187b565b50505050905090810190601f1680156118c05780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156118e557600080fd5b505af11580156118f9573d6000803e3d6000fd5b50505050611956565b81156119565761191a866001600160a01b0316611fc1565b156119565760405162461bcd60e51b815260040180806020018281038252604d815260200180612115604d913960600191505060405180910390fd5b5050505050505050565b6001600160a01b0386166119a55760405162461bcd60e51b81526004018080602001828103825260228152602001806120656022913960400191505060405180910390fd5b6001600160a01b038516611a00576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611a0a6110cc565b9050611a1a8188888888886111bc565b611a28818888888888611404565b6113fb818888888888886116c0565b600a5460408051632f00dfe360e11b815233600482015290516000926001600160a01b031691635e01bfc6916024808301926020929190829003018186803b158015611a8257600080fd5b505afa158015611a96573d6000803e3d6000fd5b505050506040513d6020811015611aac57600080fd5b505180611ac357506009546001600160a01b031633145b80611ad85750600b546001600160a01b031633145b905090565b6001600160a01b038416611b38576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611b426110cc565b9050611b5181600087876110a0565b600154611b64908563ffffffff611f6716565b6001556001600160a01b038516600090815260208190526040902054611b90908563ffffffff611f6716565b6001600160a01b038616600090815260208190526040812091909155611bbd9082908787878760016116c0565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611c3c578181015183820152602001611c24565b50505050905090810190601f168015611c695780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611c9c578181015183820152602001611c84565b50505050905090810190601f168015611cc95780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b6001600160a01b038416611d665760405162461bcd60e51b81526004018080602001828103825260228152602001806120ae6022913960400191505060405180910390fd5b6000611d706110cc565b9050611d7f81866000876110a0565b611d8e818660008787876111bc565b611dd184604051806060016040528060238152602001612201602391396001600160a01b038816600090815260208190526040902054919063ffffffff61162916565b6001600160a01b038616600090815260208190526040902055600154611dfd908563ffffffff611ffd16565b600181905550846001600160a01b0316816001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611e82578181015183820152602001611e6a565b50505050905090810190601f168015611eaf5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611ee2578181015183820152602001611eca565b50505050905090810190601f168015611f0f5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516000916001600160a01b038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b600082820183811015610ea0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611ff557508115155b949350505050565b6000610ea083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061162956fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a26469706673582212207e6c16fc658c023bd1c13cc656cfda20c67155709493605e32084bcc90d1c2fc64736f6c634300060200334552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e74",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806395d89b41116100ad578063dd62ed3e11610071578063dd62ed3e1461058b578063df4fbfff146105b9578063fad8b32a146105d6578063fc673c4f146105fc578063fe9d93031461073a5761012c565b806395d89b4114610453578063990be2481461045b5780639bd9bbc614610478578063a9059cbb14610531578063d95b63711461055d5761012c565b8063313ce567116100f4578063313ce56714610296578063556f0dc7146102b457806362ad1b83146102bc57806370a0823114610407578063959b8c3f1461042d5761012c565b806306e485381461013157806306fdde0314610189578063095ea7b31461020657806318160ddd1461024657806323b872dd14610260575b600080fd5b6101396107e5565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561017557818101518382015260200161015d565b505050509050019250505060405180910390f35b610191610847565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101cb5781810151838201526020016101b3565b50505050905090810190601f1680156101f85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102326004803603604081101561021c57600080fd5b506001600160a01b0381351690602001356108d1565b604080519115158252519081900360200190f35b61024e6108f3565b60408051918252519081900360200190f35b6102326004803603606081101561027657600080fd5b506001600160a01b038135811691602081013590911690604001356108f9565b61029e610a7c565b6040805160ff9092168252519081900360200190f35b61024e610a81565b610405600480360360a08110156102d257600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561030c57600080fd5b82018360208201111561031e57600080fd5b803590602001918460018302840111600160201b8311171561033f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561039157600080fd5b8201836020820111156103a357600080fd5b803590602001918460018302840111600160201b831117156103c457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610a86945050505050565b005b61024e6004803603602081101561041d57600080fd5b50356001600160a01b0316610ae8565b6104056004803603602081101561044357600080fd5b50356001600160a01b0316610b03565b610191610c4f565b6104056004803603602081101561047157600080fd5b5035610cb0565b6104056004803603606081101561048e57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156104bd57600080fd5b8201836020820111156104cf57600080fd5b803590602001918460018302840111600160201b831117156104f057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610d02945050505050565b6102326004803603604081101561054757600080fd5b506001600160a01b038135169060200135610d2c565b6102326004803603604081101561057357600080fd5b506001600160a01b0381358116916020013516610e05565b61024e600480360360408110156105a157600080fd5b506001600160a01b0381358116916020013516610ea7565b610405600480360360208110156105cf57600080fd5b5035610ed2565b610405600480360360208110156105ec57600080fd5b50356001600160a01b0316610efc565b6104056004803603608081101561061257600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561064157600080fd5b82018360208201111561065357600080fd5b803590602001918460018302840111600160201b8311171561067457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156106c657600080fd5b8201836020820111156106d857600080fd5b803590602001918460018302840111600160201b831117156106f957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611048945050505050565b6104056004803603604081101561075057600080fd5b81359190810190604081016020820135600160201b81111561077157600080fd5b82018360208201111561078357600080fd5b803590602001918460018302840111600160201b831117156107a457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506110a6945050505050565b6060600480548060200260200160405190810160405280929190818152602001828054801561083d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161081f575b5050505050905090565b60028054604080516020601f600019610100600187161502019094168590049384018190048102820181019092528281526060939092909183018282801561083d5780601f106108a55761010080835404028352916020019161083d565b820191906000526020600020905b8154815290600101906020018083116108b357509395945050505050565b6000806108dc6110cc565b90506108e98185856110d0565b5060019392505050565b60015490565b60006001600160a01b0383166109405760405162461bcd60e51b81526004018080602001828103825260248152602001806121626024913960400191505060405180910390fd5b6001600160a01b0384166109855760405162461bcd60e51b81526004018080602001828103825260268152602001806121db6026913960400191505060405180910390fd5b600061098f6110cc565b90506109bd8186868660405180602001604052806000815250604051806020016040528060008152506111bc565b6109e9818686866040518060200160405280600081525060405180602001604052806000815250611404565b610a438582610a3e866040518060600160405280602981526020016121b2602991396001600160a01b03808c166000908152600860209081526040808320938b1683529290522054919063ffffffff61162916565b6110d0565b610a7181868686604051806020016040528060008152506040518060200160405280600081525060006116c0565b506001949350505050565b601290565b600190565b610a97610a916110cc565b86610e05565b610ad25760405162461bcd60e51b815260040180806020018281038252602c815260200180612186602c913960400191505060405180910390fd5b610ae185858585856001611960565b5050505050565b6001600160a01b031660009081526020819052604090205490565b806001600160a01b0316610b156110cc565b6001600160a01b03161415610b5b5760405162461bcd60e51b81526004018080602001828103825260248152602001806120d06024913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff1615610bbe5760076000610b886110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff19169055610c05565b600160066000610bcc6110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff19169115159190911790555b610c0d6110cc565b6001600160a01b0316816001600160a01b03167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561083d5780601f106108a55761010080835404028352916020019161083d565b610cb8611a37565b610cc157600080fd5b610cff33826040518060400160405280600b81526020016a4d494e544544434f494e5360a81b81525060405180602001604052806000815250611add565b50565b610d27610d0d6110cc565b848484604051806020016040528060008152506001611960565b505050565b60006001600160a01b038316610d735760405162461bcd60e51b81526004018080602001828103825260248152602001806121626024913960400191505060405180910390fd5b6000610d7d6110cc565b9050610dab8182868660405180602001604052806000815250604051806020016040528060008152506111bc565b610dd7818286866040518060200160405280600081525060405180602001604052806000815250611404565b6108e981828686604051806020016040528060008152506040518060200160405280600081525060006116c0565b6000816001600160a01b0316836001600160a01b03161480610e7057506001600160a01b03831660009081526005602052604090205460ff168015610e7057506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b80610ea057506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b610eda611a37565b610ee357600080fd5b610cff81604051806020016040528060008152506110a6565b610f046110cc565b6001600160a01b0316816001600160a01b03161415610f545760405162461bcd60e51b81526004018080602001828103825260218152602001806120f46021913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff1615610fc057600160076000610f836110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff1916911515919091179055610ffe565b60066000610fcc6110cc565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff191690555b6110066110cc565b6001600160a01b0316816001600160a01b03167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b6110596110536110cc565b85610e05565b6110945760405162461bcd60e51b815260040180806020018281038252602c815260200180612186602c913960400191505060405180910390fd5b6110a084848484611d21565b50505050565b6110c86110b16110cc565b838360405180602001604052806000815250611d21565b5050565b3390565b6001600160a01b0383166111155760405162461bcd60e51b81526004018080602001828103825260258152602001806120406025913960400191505060405180910390fd5b6001600160a01b03821661115a5760405162461bcd60e51b81526004018080602001828103825260238152602001806122246023913960400191505060405180910390fd5b6001600160a01b03808416600081815260086020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b15801561124057600080fd5b505afa158015611254573d6000803e3d6000fd5b505050506040513d602081101561126a57600080fd5b505190506001600160a01b038116156113fb57806001600160a01b03166375ab97828888888888886040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611330578181015183820152602001611318565b50505050905090810190601f16801561135d5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611390578181015183820152602001611378565b50505050905090810190601f1680156113bd5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156113e257600080fd5b505af11580156113f6573d6000803e3d6000fd5b505050505b50505050505050565b611410868686866110a0565b61145383604051806060016040528060278152602001612087602791396001600160a01b038816600090815260208190526040902054919063ffffffff61162916565b6001600160a01b038087166000908152602081905260408082209390935590861681522054611488908463ffffffff611f6716565b600080866001600160a01b03166001600160a01b0316815260200190815260200160002081905550836001600160a01b0316856001600160a01b0316876001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611539578181015183820152602001611521565b50505050905090810190601f1680156115665780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611599578181015183820152602001611581565b50505050905090810190601f1680156115c65780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a4836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b600081848411156116b85760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561167d578181015183820152602001611665565b50505050905090810190601f1680156116aa5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b15801561174457600080fd5b505afa158015611758573d6000803e3d6000fd5b505050506040513d602081101561176e57600080fd5b505190506001600160a01b0381161561190257806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561183357818101518382015260200161181b565b50505050905090810190601f1680156118605780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561189357818101518382015260200161187b565b50505050905090810190601f1680156118c05780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156118e557600080fd5b505af11580156118f9573d6000803e3d6000fd5b50505050611956565b81156119565761191a866001600160a01b0316611fc1565b156119565760405162461bcd60e51b815260040180806020018281038252604d815260200180612115604d913960600191505060405180910390fd5b5050505050505050565b6001600160a01b0386166119a55760405162461bcd60e51b81526004018080602001828103825260228152602001806120656022913960400191505060405180910390fd5b6001600160a01b038516611a00576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611a0a6110cc565b9050611a1a8188888888886111bc565b611a28818888888888611404565b6113fb818888888888886116c0565b600a5460408051632f00dfe360e11b815233600482015290516000926001600160a01b031691635e01bfc6916024808301926020929190829003018186803b158015611a8257600080fd5b505afa158015611a96573d6000803e3d6000fd5b505050506040513d6020811015611aac57600080fd5b505180611ac357506009546001600160a01b031633145b80611ad85750600b546001600160a01b031633145b905090565b6001600160a01b038416611b38576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611b426110cc565b9050611b5181600087876110a0565b600154611b64908563ffffffff611f6716565b6001556001600160a01b038516600090815260208190526040902054611b90908563ffffffff611f6716565b6001600160a01b038616600090815260208190526040812091909155611bbd9082908787878760016116c0565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611c3c578181015183820152602001611c24565b50505050905090810190601f168015611c695780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611c9c578181015183820152602001611c84565b50505050905090810190601f168015611cc95780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b6001600160a01b038416611d665760405162461bcd60e51b81526004018080602001828103825260228152602001806120ae6022913960400191505060405180910390fd5b6000611d706110cc565b9050611d7f81866000876110a0565b611d8e818660008787876111bc565b611dd184604051806060016040528060238152602001612201602391396001600160a01b038816600090815260208190526040902054919063ffffffff61162916565b6001600160a01b038616600090815260208190526040902055600154611dfd908563ffffffff611ffd16565b600181905550846001600160a01b0316816001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611e82578181015183820152602001611e6a565b50505050905090810190601f168015611eaf5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611ee2578181015183820152602001611eca565b50505050905090810190601f168015611f0f5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516000916001600160a01b038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b600082820183811015610ea0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611ff557508115155b949350505050565b6000610ea083836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061162956fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a26469706673582212207e6c16fc658c023bd1c13cc656cfda20c67155709493605e32084bcc90d1c2fc64736f6c63430006020033",
  "sourceMap": "218:2788:1:-:0;;;614:475;8:9:-1;5:2;;;30:1;27;20:12;5:2;614:475:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;614:475:1;2645:623:20;;;;;;;;;;;;614:475:1;2645:623:20;;;;;;;;;;;;;;;;;;;;;704:16:1;;-1:-1:-1;704:16:1;;;;;;;;2781:12:20;;2645:623;;;704:16:1;;2781:12:20;;:5;;2645:623;2781:12;:::i;:::-;-1:-1:-1;2803:16:20;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;2830:41:20;;;;:22;;:41;;;;;:::i;:::-;-1:-1:-1;2886:9:20;2881:136;2905:22;:29;2901:33;;2881:136;;;3002:4;2955:17;:44;2973:22;2996:1;2973:25;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2973:25:20;2955:44;;;;;;;;;;;;:51;;-1:-1:-1;;2955:51:20;;;;;;;;;;-1:-1:-1;2936:3:20;2881:136;;;-1:-1:-1;3115:24:20;;;;;;;;;;;;;;;;3058:97;;;3108:4;3058:97;;;;;;;;;;;;;;;;;;;1235:42;;3058:41;;:97;;;;;-1:-1:-1;;3058:97:20;;;;;;;-1:-1:-1;1235:42:20;3058:97;;;5:2:-1;;;;30:1;27;20:12;5:2;3058:97:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;3222:23:20;;;;;;;;;;;;;;;;3165:96;;;3215:4;3165:96;;;;;;;;;;;;;;;;;;;1235:42;;-1:-1:-1;3165:41:20;;-1:-1:-1;3165:96:20;;;;;-1:-1:-1;;3165:96:20;;;;;;;-1:-1:-1;1235:42:20;3165:96;;;5:2:-1;;;;30:1;27;20:12;5:2;3165:96:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;919:5:1::1;:18:::0;;927:10:::1;-1:-1:-1::0;;;;;;919:18:1;;::::1;;::::0;;;;947:6:::1;:25:::0;;;::::1;-1:-1:-1::0;;;;;947:25:1;;::::1;::::0;;::::1;::::0;;;982:11:::1;:21:::0;;;;::::1;;::::0;;;1046:36:::1;::::0;;::::1;::::0;;::::1;::::0;;-1:-1:-1;1046:36:1;;;;;;;::::1;::::0;;;;;;761:16:::1;::::0;-1:-1:-1;1046:36:1::1;::::0;-1:-1:-1;1052:5:1;;;::::1;::::0;-1:-1:-1;761:16:1;;-1:-1:-1;1046:36:1;-1:-1:-1;1046:5:1::1;:36::i;:::-;614:475;::::0;218:2788;;10335:725:20;-1:-1:-1;;;;;10514:21:20;;10506:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;-1:-1:-1;;;;;10602:10:20;:12;:::i;:::-;10583:31;-1:-1:-1;10625:59:20;10583:31;10664:1;10668:7;10677:6;-1:-1:-1;;;;;10625:20:20;:59;:::i;:::-;10744:24;10761:6;10744:12;;:16;;;;;;:24;;;;:::i;:::-;10729:12;:39;-1:-1:-1;;;;;10799:18:20;;:9;:18;;;;;;;;;;;;:30;;10822:6;;10799:22;;;;;:30;;:::i;:::-;-1:-1:-1;;;;;10778:18:20;;:9;:18;;;;;;;;;;:51;;;;10840:88;;10860:8;;10788:7;10891:6;10899:8;10909:12;10923:4;-1:-1:-1;;;;;10840:19:20;:88;:::i;:::-;10961:7;-1:-1:-1;;;;;10944:57:20;10951:8;-1:-1:-1;;;;;10944:57:20;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;10944:57:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11016:37;;;;;;;;-1:-1:-1;;;;;11016:37:20;;;11033:1;;11016:37;;;;;;;;;10335:725;;;;;:::o;590:104:9:-;677:10;590:104;;:::o;17189:110:20:-;;;;;:::o;874:176:13:-;932:7;963:5;;;986:6;;;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;874:176;-1:-1:-1;;;874:176:13:o;15873:688:20:-;16152:79;;;;;;-1:-1:-1;;;;;16152:79:20;;;;;;1883:66;16152:79;;;;;;16130:19;;1235:42;;16152:41;;:79;;;;;;;;;;;;;;;1235:42;16152:79;;;5:2:-1;;;;30:1;27;20:12;5:2;16152:79:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;16152:79:20;;-1:-1:-1;;;;;;16245:25:20;;;16241:314;;16303:11;-1:-1:-1;;;;;16286:44:20;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;-1:-1:-1;;;;;16286:96:20;-1:-1:-1;;;;;16286:96:20;;;;;;-1:-1:-1;;;;;16286:96:20;-1:-1:-1;;;;;16286:96:20;;;;;;-1:-1:-1;;;;;16286:96:20;-1:-1:-1;;;;;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;16286:96:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16286:96:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:20;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;-1:-1:-1;;;;;16447:13:20;;;;;;:15;;:::i;:::-;16446:16;16438:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15873:688;;;;;;;;:::o;718:610:24:-;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;1305:15:24;;;1278:42;1270:51;718:610;-1:-1:-1;;;;718:610:24:o;218:2788:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;218:2788:1;;;-1:-1:-1;218:2788:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;218:2788:1;-1:-1:-1;;;;;218:2788:1;;;;;;;;;;;-1:-1:-1;218:2788:1;;;;;;;-1:-1:-1;218:2788:1;;;-1:-1:-1;218:2788:1;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;218:2788:1;;;;;;;;;;;;;;",
  "deployedSourceMap": "218:2788:1:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;218:2788:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7012:122:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;7012:122:20;;;;;;;;;;;;;;;;;3322:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3322:90:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8539:189;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;8539:189:20;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;4083:115;;;:::i;:::-;;;;;;;;;;;;;;;;9093:672;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;9093:672:20;;;;;;;;;;;;;;;;;:::i;3746:74::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3935:87;;;:::i;7253:366::-;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;7253:366:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;7253:366:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7253:366:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7253:366:20;;;;;;;;-1:-1:-1;7253:366:20;;-1:-1:-1;;;;;5:28;;2:2;;;46:1;43;36:12;2:2;7253:366:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7253:366:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7253:366:20;;-1:-1:-1;7253:366:20;;-1:-1:-1;;;;;7253:366:20:i;:::-;;4298:142;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4298:142:20;-1:-1:-1;;;;;4298:142:20;;:::i;6081:405::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6081:405:20;-1:-1:-1;;;;;6081:405:20;;:::i;3468:94::-;;;:::i;1342:316:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1342:316:1;;:::i;4570:156:20:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;4570:156:20;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;4570:156:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;4570:156:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;4570:156:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;4570:156:20;;-1:-1:-1;4570:156:20;;-1:-1:-1;;;;;4570:156:20:i;4957:431::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;4957:431:20;;;;;;;;:::i;5701:313::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;5701:313:20;;;;;;;;;;:::i;8258:143::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;8258:143:20;;;;;;;;;;:::i;1664:111:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1664:111:1;;:::i;6550:396:20:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6550:396:20;-1:-1:-1;;;;;6550:396:20;;:::i;7740:279::-;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;7740:279:20;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;7740:279:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7740:279:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7740:279:20;;;;;;;;-1:-1:-1;7740:279:20;;-1:-1:-1;;;;;5:28;;2:2;;;46:1;43;36:12;2:2;7740:279:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7740:279:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7740:279:20;;-1:-1:-1;7740:279:20;;-1:-1:-1;;;;;7740:279:20:i;5518:120::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5518:120:20;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;5518:120:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;5518:120:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5518:120:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;5518:120:20;;-1:-1:-1;5518:120:20;;-1:-1:-1;;;;;5518:120:20:i;7012:122::-;7070:16;7105:22;7098:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7098:29:20;;;;;;;;;;;;;;;;;;;;;;;7012:122;:::o;3322:90::-;3400:5;3393:12;;;;;;;-1:-1:-1;;3393:12:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3368:13;;3393:12;;3400:5;;3393:12;;3400:5;3393:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3393:12:20;;3322:90;-1:-1:-1;;;;;3322:90:20:o;8539:189::-;8613:4;8629:14;8646:12;:10;:12::i;:::-;8629:29;;8668:32;8677:6;8685:7;8694:5;8668:8;:32::i;:::-;-1:-1:-1;8717:4:20;;8539:189;-1:-1:-1;;;8539:189:20:o;4083:115::-;4179:12;;4083:115;:::o;9093:672::-;9191:4;-1:-1:-1;;;;;9215:23:20;;9207:72;;;;-1:-1:-1;;;9207:72:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9297:20:20;;9289:71;;;;-1:-1:-1;;;9289:71:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9371:15;9389:12;:10;:12::i;:::-;9371:30;;9412:61;9430:7;9439:6;9447:9;9458:6;9412:61;;;;;;;;;;;;;;;;;;;;;;;;:17;:61::i;:::-;9484:49;9490:7;9499:6;9507:9;9518:6;9484:49;;;;;;;;;;;;;;;;;;;;;;;;:5;:49::i;:::-;9543:112;9552:6;9560:7;9569:85;9602:6;9569:85;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9569:19:20;;;;;;;:11;:19;;;;;;;;:28;;;;;;;;;;;:85;;:32;:85;:::i;:::-;9543:8;:112::i;:::-;9666:70;9686:7;9695:6;9703:9;9714:6;9666:70;;;;;;;;;;;;;;;;;;;;;;;;9730:5;9666:19;:70::i;:::-;-1:-1:-1;9754:4:20;;9093:672;-1:-1:-1;;;;9093:672:20:o;3746:74::-;3811:2;3746:74;:::o;3935:87::-;4014:1;3935:87;:::o;7253:366::-;7460:35;7474:12;:10;:12::i;:::-;7488:6;7460:13;:35::i;:::-;7452:92;;;;-1:-1:-1;;;7452:92:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7554:58;7560:6;7568:9;7579:6;7587:4;7593:12;7607:4;7554:5;:58::i;:::-;7253:366;;;;;:::o;4298:142::-;-1:-1:-1;;;;;4411:22:20;4385:7;4411:22;;;;;;;;;;;;4298:142::o;6081:405::-;6177:8;-1:-1:-1;;;;;6161:24:20;:12;:10;:12::i;:::-;-1:-1:-1;;;;;6161:24:20;;;6153:73;;;;-1:-1:-1;;;6153:73:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6241:27:20;;;;;;:17;:27;;;;;;;;6237:185;;;6291:24;:38;6316:12;:10;:12::i;:::-;-1:-1:-1;;;;;6291:38:20;;;;;;;;;;;;;;;;;-1:-1:-1;6291:38:20;;;:48;;;;;;;;;6284:55;;-1:-1:-1;;6284:55:20;;;6237:185;;;6407:4;6370:10;:24;6381:12;:10;:12::i;:::-;-1:-1:-1;;;;;6370:24:20;;;;;;;;;;;;;;;;;-1:-1:-1;6370:24:20;;;:34;;;;;;;;;:41;;-1:-1:-1;;6370:41:20;;;;;;;;;;6237:185;6466:12;:10;:12::i;:::-;-1:-1:-1;;;;;6437:42:20;6456:8;-1:-1:-1;;;;;6437:42:20;;;;;;;;;;;6081:405;:::o;3468:94::-;3548:7;3541:14;;;;;;;;-1:-1:-1;;3541:14:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3516:13;;3541:14;;3548:7;;3541:14;;3548:7;3541:14;;;;;;;;;;;;;;;;;;;;;;;;1342:316:1;1405:14;:12;:14::i;:::-;1397:23;;;;;;1430:44;1436:10;1448:6;1430:44;;;;;;;;;;;;;-1:-1:-1;;;1430:44:1;;;;;;;;;;;;;;;:5;:44::i;:::-;1342:316;:::o;4570:156:20:-;4665:54;4671:12;:10;:12::i;:::-;4685:9;4696:6;4704:4;4665:54;;;;;;;;;;;;4714:4;4665:5;:54::i;:::-;4570:156;;;:::o;4957:431::-;5035:4;-1:-1:-1;;;;;5059:23:20;;5051:72;;;;-1:-1:-1;;;5051:72:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5134:12;5149;:10;:12::i;:::-;5134:27;;5172:56;5190:4;5196;5202:9;5213:6;5172:56;;;;;;;;;;;;;;;;;;;;;;;;:17;:56::i;:::-;5239:44;5245:4;5251;5257:9;5268:6;5239:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;5294:65;5314:4;5320;5326:9;5337:6;5294:65;;;;;;;;;;;;;;;;;;;;;;;;5353:5;5294:19;:65::i;5701:313::-;5815:4;5850:11;-1:-1:-1;;;;;5838:23:20;:8;-1:-1:-1;;;;;5838:23:20;;:120;;;-1:-1:-1;;;;;;5878:27:20;;;;;;:17;:27;;;;;;;;:79;;;;-1:-1:-1;;;;;;5910:37:20;;;;;;;:24;:37;;;;;;;;:47;;;;;;;;;;;;5909:48;5878:79;5838:169;;;-1:-1:-1;;;;;;5974:23:20;;;;;;;:10;:23;;;;;;;;:33;;;;;;;;;;;;5838:169;5831:176;5701:313;-1:-1:-1;;;5701:313:20:o;8258:143::-;-1:-1:-1;;;;;8366:19:20;;;8340:7;8366:19;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;8258:143::o;1664:111:1:-;1727:14;:12;:14::i;:::-;1719:23;;;;;;1752:16;1757:6;1752:16;;;;;;;;;;;;:4;:16::i;6550:396:20:-;6639:12;:10;:12::i;:::-;-1:-1:-1;;;;;6627:24:20;:8;-1:-1:-1;;;;;6627:24:20;;;6619:70;;;;-1:-1:-1;;;6619:70:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6704:27:20;;;;;;:17;:27;;;;;;;;6700:185;;;6798:4;6747:24;:38;6772:12;:10;:12::i;:::-;-1:-1:-1;;;;;6747:38:20;;;;;;;;;;;;;;;;;-1:-1:-1;6747:38:20;;;:48;;;;;;;;;:55;;-1:-1:-1;;6747:55:20;;;;;;;;;;6700:185;;;6840:10;:24;6851:12;:10;:12::i;:::-;-1:-1:-1;;;;;6840:24:20;;;;;;;;;;;;;;;;;-1:-1:-1;6840:24:20;;;:34;;;;;;;;;6833:41;;-1:-1:-1;;6833:41:20;;;6700:185;6926:12;:10;:12::i;:::-;-1:-1:-1;;;;;6900:39:20;6916:8;-1:-1:-1;;;;;6900:39:20;;;;;;;;;;;6550:396;:::o;7740:279::-;7875:36;7889:12;:10;:12::i;:::-;7903:7;7875:13;:36::i;:::-;7867:93;;;;-1:-1:-1;;;7867:93:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7970:42;7976:7;7985:6;7993:4;7999:12;7970:5;:42::i;:::-;7740:279;;;;:::o;5518:120::-;5594:37;5600:12;:10;:12::i;:::-;5614:6;5622:4;5594:37;;;;;;;;;;;;:5;:37::i;:::-;5518:120;;:::o;590:104:9:-;677:10;590:104;:::o;13892:335:20:-;-1:-1:-1;;;;;13985:20:20;;13977:70;;;;-1:-1:-1;;;13977:70:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14065:21:20;;14057:69;;;;-1:-1:-1;;;14057:69:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14137:19:20;;;;;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;:36;;;14188:32;;;;;;;;;;;;;;;;;13892:335;;;:::o;14700:484::-;14943:78;;;-1:-1:-1;;;14943:78:20;;-1:-1:-1;;;;;14943:78:20;;;;;;1700:66;14943:78;;;;;;14921:19;;1235:42;;14943:41;;:78;;;;;;;;;;;;;;;1235:42;14943:78;;;5:2:-1;;;;30:1;27;20:12;5:2;14943:78:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;14943:78:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;14943:78:20;;-1:-1:-1;;;;;;15035:25:20;;;15031:147;;15090:11;-1:-1:-1;;;;;15076:39:20;;15116:8;15126:4;15132:2;15136:6;15144:8;15154:12;15076:91;;;;;;;;;;;;;-1:-1:-1;;;;;15076:91:20;-1:-1:-1;;;;;15076:91:20;;;;;;-1:-1:-1;;;;;15076:91:20;-1:-1:-1;;;;;15076:91:20;;;;;;-1:-1:-1;;;;;15076:91:20;-1:-1:-1;;;;;15076:91:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;15076:91:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15076:91:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;15076:91:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;15076:91:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;15076:91:20;;;;15031:147;14700:484;;;;;;;:::o;13227:527::-;13436:48;13457:8;13467:4;13473:2;13477:6;13436:20;:48::i;:::-;13513:70;13533:6;13513:70;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;13513:15:20;;:9;:15;;;;;;;;;;;;:70;;:19;:70;:::i;:::-;-1:-1:-1;;;;;13495:15:20;;;:9;:15;;;;;;;;;;;:88;;;;13609:13;;;;;;;:25;;13627:6;13609:25;:17;:25;:::i;:::-;13593:9;:13;13603:2;-1:-1:-1;;;;;13593:13:20;-1:-1:-1;;;;;13593:13:20;;;;;;;;;;;;:41;;;;13671:2;-1:-1:-1;;;;;13650:56:20;13665:4;-1:-1:-1;;;;;13650:56:20;13655:8;-1:-1:-1;;;;;13650:56:20;;13675:6;13683:8;13693:12;13650:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13650:56:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13650:56:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13650:56:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13736:2;-1:-1:-1;;;;;13721:26:20;13730:4;-1:-1:-1;;;;;13721:26:20;;13740:6;13721:26;;;;;;;;;;;;;;;;;;13227:527;;;;;;:::o;1746:187:13:-;1832:7;1867:12;1859:6;;;;1851:29;;;;-1:-1:-1;;;1851:29:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1851:29:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1902:5:13;;;1746:187::o;15873:688:20:-;16152:79;;;-1:-1:-1;;;16152:79:20;;-1:-1:-1;;;;;16152:79:20;;;;;;1883:66;16152:79;;;;;;16130:19;;1235:42;;16152:41;;:79;;;;;;;;;;;;;;;1235:42;16152:79;;;5:2:-1;;;;30:1;27;20:12;5:2;16152:79:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;16152:79:20;;-1:-1:-1;;;;;;16245:25:20;;;16241:314;;16303:11;-1:-1:-1;;;;;16286:44:20;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;-1:-1:-1;;;;;16286:96:20;-1:-1:-1;;;;;16286:96:20;;;;;;-1:-1:-1;;;;;16286:96:20;-1:-1:-1;;;;;16286:96:20;;;;;;-1:-1:-1;;;;;16286:96:20;-1:-1:-1;;;;;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;16286:96:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16286:96:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:20;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;-1:-1:-1;;;;;16447:13:20;;:15::i;:::-;16446:16;16438:106;;;;-1:-1:-1;;;16438:106:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15873:688;;;;;;;;:::o;11536:654::-;-1:-1:-1;;;;;11762:18:20;;11754:65;;;;-1:-1:-1;;;11754:65:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;11837:16:20;;11829:61;;;;;-1:-1:-1;;;11829:61:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11901:16;11920:12;:10;:12::i;:::-;11901:31;;11943:69;11961:8;11971:4;11977:2;11981:6;11989:8;11999:12;11943:17;:69::i;:::-;12023:57;12029:8;12039:4;12045:2;12049:6;12057:8;12067:12;12023:5;:57::i;:::-;12091:92;12111:8;12121:4;12127:2;12131:6;12139:8;12149:12;12163:19;12091;:92::i;1781:257:1:-;1924:6;;:27;;;-1:-1:-1;;;1924:27:1;;1940:10;1924:27;;;;;;1827:4;;-1:-1:-1;;;;;1924:6:1;;:15;;:27;;;;;;;;;;;;;;:6;:27;;;5:2:-1;;;;30:1;27;20:12;5:2;1924:27:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1924:27:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1924:27:1;;:64;;-1:-1:-1;1968:5:1;;-1:-1:-1;;;;;1968:5:1;1977:10;1968:19;1924:64;:107;;;-1:-1:-1;2019:11:1;;-1:-1:-1;;;;;2019:11:1;2005:10;:25;1924:107;1905:126;;1781:257;:::o;10335:725:20:-;-1:-1:-1;;;;;10514:21:20;;10506:66;;;;;-1:-1:-1;;;10506:66:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;:10;:12::i;:::-;10583:31;;10625:59;10646:8;10664:1;10668:7;10677:6;10625:20;:59::i;:::-;10744:12;;:24;;10761:6;10744:24;:16;:24;:::i;:::-;10729:12;:39;-1:-1:-1;;;;;10799:18:20;;:9;:18;;;;;;;;;;;:30;;10822:6;10799:30;:22;:30;:::i;:::-;-1:-1:-1;;;;;10778:18:20;;:9;:18;;;;;;;;;;:51;;;;10840:88;;10860:8;;10788:7;10891:6;10899:8;10909:12;10923:4;10840:19;:88::i;:::-;10961:7;-1:-1:-1;;;;;10944:57:20;10951:8;-1:-1:-1;;;;;10944:57:20;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;10944:57:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11016:37;;;;;;;;-1:-1:-1;;;;;11016:37:20;;;11033:1;;11016:37;;;;;;;;;10335:725;;;;;:::o;12495:726::-;-1:-1:-1;;;;;12671:18:20;;12663:65;;;;-1:-1:-1;;;12663:65:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12739:16;12758:12;:10;:12::i;:::-;12739:31;;12781:56;12802:8;12812:4;12826:1;12830:6;12781:20;:56::i;:::-;12848:73;12866:8;12876:4;12890:1;12894:6;12902:4;12908:12;12848:17;:73::i;:::-;12984:66;13004:6;12984:66;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;12984:15:20;;:9;:15;;;;;;;;;;;;:66;;:19;:66;:::i;:::-;-1:-1:-1;;;;;12966:15:20;;:9;:15;;;;;;;;;;:84;13075:12;;:24;;13092:6;13075:24;:16;:24;:::i;:::-;13060:12;:39;;;;13132:4;-1:-1:-1;;;;;13115:50:20;13122:8;-1:-1:-1;;;;;13115:50:20;;13138:6;13146:4;13152:12;13115:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13115:50:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13115:50:20;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13115:50:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13180:34;;;;;;;;13203:1;;-1:-1:-1;;;;;13180:34:20;;;;;;;;;;;;12495:726;;;;;:::o;874:176:13:-;932:7;963:5;;;986:6;;;;978:46;;;;;-1:-1:-1;;;978:46:13;;;;;;;;;;;;;;;;;;;;;;;;;;;718:610:24;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;1305:15:24;;;1278:42;1270:51;718:610;-1:-1:-1;;;;718:610:24:o;1321:134:13:-;1379:7;1405:43;1409:1;1412;1405:43;;;;;;;;;;;;;;;;;:3;:43::i",
  "source": "pragma solidity ^0.6.0;\n\n//import \"@openzeppelin/contracts/GSN/Context.sol\";\nimport \"@openzeppelin/contracts/token/ERC777/ERC777.sol\";\nimport \"./IAURGov.sol\";\n\n/**\n    Author: Chris Markov 2020\n    Project Aurbit\n */\n\ncontract AURToken is ERC777 {\n    address payable owner;\n    IAURGov private AURGov;\n    address payable govContract;\n\n    //address payable planet;\n    //maybe have a list of admins and a list of planets rather than just \"minters\"\n    //address payable[] minters; //array of authed minters, which will be planet cotnracts\n    //address[] dOperators;//dunno what would go here but not needed\n    constructor(address payable govaddy)\n        public\n        ERC777(\"Aurbit Token\", \"AUR\", new address[](0))\n    {\n        uint256 initialBalance = 1000000 * 10**18;\n        //do this shit with safe math or whatever\n        //if this is the officially best way to write this then i am disappointed\n        owner = msg.sender;\n        AURGov = IAURGov(govaddy);\n        govContract = govaddy;\n        //minters.push(planet0);\n        _mint(owner, initialBalance, \"\", \"\");\n    }\n\n    //figure out user and operator data fields nad what to do with them\n    //figure out how to send and receive them in the Planet contract\n    //figure out how to burn them and if you need to use approve functions\n    //must register send hook?\n    function mintInternal(uint256 amount) public {\n        require(ismintAuthed());\n        _mint(msg.sender, amount, \"MINTEDCOINS\", \"\");\n        //gets minted to sender, depositing them in the contract where corresponding users can WD them\n        //not sure what dod do with data fields, has to do with send hook\n    }\n\n    function burnInternal(uint256 amount) public {\n        require(ismintAuthed());\n        burn(amount, \"\");\n    }\n\n    function ismintAuthed() private view returns (bool) {\n        //gov contract and planets and owner can mint or burn\n        return\n            AURGov.isPlanet(msg.sender) ||\n            (owner == msg.sender) ||\n            (msg.sender == govContract);\n    }\n    //    function ismintAuthed() public view returns (bool){\n    //\tbool out = false;\n    //        out = out || (owner==msg.sender);//owner can mint\n    //        for (uint i = 0;i<minters.length;i++){\n    //               if (out){break;}\n    //               out = out || (msg.sender==minters[i]);\n    //        }\n    //        return out;\n    //    }\n\n    //function approveInternal(address holder, address spender, uint256 value) public {\n    //    _approve(holder, spender, value);\n    //}\n    /*    function authMinter(address payable _minter) public{\n       require(ismintAuthed());\n       minters.push(_minter);\n    }\n    function deauthMinter(address payable _minter) public{\n        for (uint i = 0;i<minters.length;i++){\n               if (minters[i]==_minter){delete minters[i];}\n           //need to figure out exactly what this does, \n          //  what i will get when i call minter[i] now? if it sets to 0 that is ok. must test\n        } \n    }\n*/\n}\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol",
    "exportedSymbols": {
      "AURToken": [
        654
      ]
    },
    "id": 655,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 539,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 540,
        "nodeType": "ImportDirective",
        "scope": 655,
        "sourceUnit": 5978,
        "src": "77:57:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IAURGov.sol",
        "file": "./IAURGov.sol",
        "id": 541,
        "nodeType": "ImportDirective",
        "scope": 655,
        "sourceUnit": 1105,
        "src": "135:23:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 542,
              "name": "ERC777",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5977,
              "src": "239:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC777_$5977",
                "typeString": "contract ERC777"
              }
            },
            "id": 543,
            "nodeType": "InheritanceSpecifier",
            "src": "239:6:1"
          }
        ],
        "contractDependencies": [
          3434,
          3834,
          5977,
          6122
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit",
        "fullyImplemented": true,
        "id": 654,
        "linearizedBaseContracts": [
          654,
          5977,
          3834,
          6122,
          3434
        ],
        "name": "AURToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 545,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 654,
            "src": "252:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 544,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "252:15:1",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 547,
            "name": "AURGov",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 654,
            "src": "279:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IAURGov_$1104",
              "typeString": "contract IAURGov"
            },
            "typeName": {
              "contractScope": null,
              "id": 546,
              "name": "IAURGov",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1104,
              "src": "279:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAURGov_$1104",
                "typeString": "contract IAURGov"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 549,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 654,
            "src": "307:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 548,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "307:15:1",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 593,
              "nodeType": "Block",
              "src": "726:363:1",
              "statements": [
                {
                  "assignments": [
                    564
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 564,
                      "name": "initialBalance",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 593,
                      "src": "736:22:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 563,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "736:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 570,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    },
                    "id": 569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "hexValue": "31303030303030",
                      "id": 565,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "761:7:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      },
                      "value": "1000000"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                      },
                      "id": 568,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "771:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3138",
                        "id": 567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "775:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_18_by_1",
                          "typeString": "int_const 18"
                        },
                        "value": "18"
                      },
                      "src": "771:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                      }
                    },
                    "src": "761:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "736:41:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 571,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 545,
                      "src": "919:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 572,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "927:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "927:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "919:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 575,
                  "nodeType": "ExpressionStatement",
                  "src": "919:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 576,
                      "name": "AURGov",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 547,
                      "src": "947:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAURGov_$1104",
                        "typeString": "contract IAURGov"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 578,
                          "name": "govaddy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 551,
                          "src": "964:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 577,
                        "name": "IAURGov",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1104,
                        "src": "956:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IAURGov_$1104_$",
                          "typeString": "type(contract IAURGov)"
                        }
                      },
                      "id": 579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "956:16:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAURGov_$1104",
                        "typeString": "contract IAURGov"
                      }
                    },
                    "src": "947:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IAURGov_$1104",
                      "typeString": "contract IAURGov"
                    }
                  },
                  "id": 581,
                  "nodeType": "ExpressionStatement",
                  "src": "947:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 582,
                      "name": "govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 549,
                      "src": "982:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 583,
                      "name": "govaddy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 551,
                      "src": "996:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "982:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 585,
                  "nodeType": "ExpressionStatement",
                  "src": "982:21:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 545,
                        "src": "1052:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 588,
                        "name": "initialBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 564,
                        "src": "1059:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1075:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 590,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1079:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 586,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5604,
                      "src": "1046:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1046:36:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 592,
                  "nodeType": "ExpressionStatement",
                  "src": "1046:36:1"
                }
              ]
            },
            "documentation": null,
            "id": 594,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420546f6b656e",
                    "id": 554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "681:14:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_cf84e44d4826010ab091879ca877d2c526423bf8e70b1591c6bedb66fab8e3c4",
                      "typeString": "literal_string \"Aurbit Token\""
                    },
                    "value": "Aurbit Token"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "415552",
                    "id": 555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "697:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ebc291a0f230332166ecb59bd0e56ae5135636a140999a7361b4f7ae01e19b5a",
                      "typeString": "literal_string \"AUR\""
                    },
                    "value": "AUR"
                  },
                  {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 559,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "718:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "704:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 556,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "708:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 557,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "708:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "704:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 561,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 553,
                  "name": "ERC777",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5977,
                  "src": "674:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC777_$5977_$",
                    "typeString": "type(contract ERC777)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "674:47:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 551,
                  "name": "govaddy",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 594,
                  "src": "626:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 550,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "626:15:1",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "625:25:1"
            },
            "returnParameters": {
              "id": 562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "726:0:1"
            },
            "scope": 654,
            "src": "614:475:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 612,
              "nodeType": "Block",
              "src": "1387:271:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 600,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 653,
                          "src": "1405:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 601,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1405:14:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 599,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1397:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1397:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 603,
                  "nodeType": "ExpressionStatement",
                  "src": "1397:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 605,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1436:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1436:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 607,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 596,
                        "src": "1448:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d494e544544434f494e53",
                        "id": 608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1456:13:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f5fa66e2e34b1a6133aed4f26149f22d363d7d85ea435ab9389917bc6cd5fe2f",
                          "typeString": "literal_string \"MINTEDCOINS\""
                        },
                        "value": "MINTEDCOINS"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1471:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f5fa66e2e34b1a6133aed4f26149f22d363d7d85ea435ab9389917bc6cd5fe2f",
                          "typeString": "literal_string \"MINTEDCOINS\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 604,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5604,
                      "src": "1430:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1430:44:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 611,
                  "nodeType": "ExpressionStatement",
                  "src": "1430:44:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "990be248",
            "id": 613,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 596,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 613,
                  "src": "1364:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1364:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1363:16:1"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1387:0:1"
            },
            "scope": 654,
            "src": "1342:316:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 628,
              "nodeType": "Block",
              "src": "1709:66:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 619,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 653,
                          "src": "1727:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1727:14:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 618,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1719:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1719:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 622,
                  "nodeType": "ExpressionStatement",
                  "src": "1719:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 624,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 615,
                        "src": "1757:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1765:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 623,
                      "name": "burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5203,
                      "src": "1752:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,bytes memory)"
                      }
                    },
                    "id": 626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1752:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 627,
                  "nodeType": "ExpressionStatement",
                  "src": "1752:16:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "df4fbfff",
            "id": 629,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 615,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 629,
                  "src": "1686:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 614,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1686:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1685:16:1"
            },
            "returnParameters": {
              "id": 617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1709:0:1"
            },
            "scope": 654,
            "src": "1664:111:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 652,
              "nodeType": "Block",
              "src": "1833:205:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 644,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 636,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1940:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 637,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1940:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "AURGov",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 547,
                            "src": "1924:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IAURGov_$1104",
                              "typeString": "contract IAURGov"
                            }
                          },
                          "id": 635,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isPlanet",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1103,
                          "src": "1924:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view external returns (bool)"
                          }
                        },
                        "id": 638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1924:27:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            "id": 642,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 639,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 545,
                              "src": "1968:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 640,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1977:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 641,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1977:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1968:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 643,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1967:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1924:64:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          "id": 648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 645,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2005:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 646,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2005:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 647,
                            "name": "govContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 549,
                            "src": "2019:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "2005:25:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 649,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2004:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1924:107:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 633,
                  "id": 651,
                  "nodeType": "Return",
                  "src": "1905:126:1"
                }
              ]
            },
            "documentation": null,
            "id": 653,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ismintAuthed",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1802:2:1"
            },
            "returnParameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 632,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 653,
                  "src": "1827:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 631,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1827:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1826:6:1"
            },
            "scope": 654,
            "src": "1781:257:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "scope": 655,
        "src": "218:2788:1"
      }
    ],
    "src": "0:3007:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol",
    "exportedSymbols": {
      "AURToken": [
        654
      ]
    },
    "id": 655,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 539,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 540,
        "nodeType": "ImportDirective",
        "scope": 655,
        "sourceUnit": 5978,
        "src": "77:57:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IAURGov.sol",
        "file": "./IAURGov.sol",
        "id": 541,
        "nodeType": "ImportDirective",
        "scope": 655,
        "sourceUnit": 1105,
        "src": "135:23:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 542,
              "name": "ERC777",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5977,
              "src": "239:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC777_$5977",
                "typeString": "contract ERC777"
              }
            },
            "id": 543,
            "nodeType": "InheritanceSpecifier",
            "src": "239:6:1"
          }
        ],
        "contractDependencies": [
          3434,
          3834,
          5977,
          6122
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit",
        "fullyImplemented": true,
        "id": 654,
        "linearizedBaseContracts": [
          654,
          5977,
          3834,
          6122,
          3434
        ],
        "name": "AURToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 545,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 654,
            "src": "252:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 544,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "252:15:1",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 547,
            "name": "AURGov",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 654,
            "src": "279:22:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IAURGov_$1104",
              "typeString": "contract IAURGov"
            },
            "typeName": {
              "contractScope": null,
              "id": 546,
              "name": "IAURGov",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1104,
              "src": "279:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAURGov_$1104",
                "typeString": "contract IAURGov"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 549,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 654,
            "src": "307:27:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 548,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "307:15:1",
              "stateMutability": "payable",
              "typeDescriptions": {
                "typeIdentifier": "t_address_payable",
                "typeString": "address payable"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 593,
              "nodeType": "Block",
              "src": "726:363:1",
              "statements": [
                {
                  "assignments": [
                    564
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 564,
                      "name": "initialBalance",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 593,
                      "src": "736:22:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 563,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "736:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 570,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    },
                    "id": 569,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "hexValue": "31303030303030",
                      "id": 565,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "761:7:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000_by_1",
                        "typeString": "int_const 1000000"
                      },
                      "value": "1000000"
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "*",
                    "rightExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                      },
                      "id": 568,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 566,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "771:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "**",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3138",
                        "id": 567,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "775:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_18_by_1",
                          "typeString": "int_const 18"
                        },
                        "value": "18"
                      },
                      "src": "771:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                      }
                    },
                    "src": "761:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "736:41:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 574,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 571,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 545,
                      "src": "919:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 572,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "927:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 573,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "927:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "919:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 575,
                  "nodeType": "ExpressionStatement",
                  "src": "919:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 580,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 576,
                      "name": "AURGov",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 547,
                      "src": "947:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAURGov_$1104",
                        "typeString": "contract IAURGov"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 578,
                          "name": "govaddy",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 551,
                          "src": "964:7:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        ],
                        "id": 577,
                        "name": "IAURGov",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1104,
                        "src": "956:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IAURGov_$1104_$",
                          "typeString": "type(contract IAURGov)"
                        }
                      },
                      "id": 579,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "956:16:1",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAURGov_$1104",
                        "typeString": "contract IAURGov"
                      }
                    },
                    "src": "947:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IAURGov_$1104",
                      "typeString": "contract IAURGov"
                    }
                  },
                  "id": 581,
                  "nodeType": "ExpressionStatement",
                  "src": "947:25:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 584,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 582,
                      "name": "govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 549,
                      "src": "982:11:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 583,
                      "name": "govaddy",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 551,
                      "src": "996:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "982:21:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 585,
                  "nodeType": "ExpressionStatement",
                  "src": "982:21:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 587,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 545,
                        "src": "1052:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 588,
                        "name": "initialBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 564,
                        "src": "1059:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 589,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1075:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 590,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1079:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 586,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5604,
                      "src": "1046:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 591,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1046:36:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 592,
                  "nodeType": "ExpressionStatement",
                  "src": "1046:36:1"
                }
              ]
            },
            "documentation": null,
            "id": 594,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420546f6b656e",
                    "id": 554,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "681:14:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_cf84e44d4826010ab091879ca877d2c526423bf8e70b1591c6bedb66fab8e3c4",
                      "typeString": "literal_string \"Aurbit Token\""
                    },
                    "value": "Aurbit Token"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "415552",
                    "id": 555,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "697:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_ebc291a0f230332166ecb59bd0e56ae5135636a140999a7361b4f7ae01e19b5a",
                      "typeString": "literal_string \"AUR\""
                    },
                    "value": "AUR"
                  },
                  {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "hexValue": "30",
                        "id": 559,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "718:1:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        },
                        "value": "0"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "id": 558,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "704:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 556,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "708:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 557,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "708:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 560,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "704:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 561,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 553,
                  "name": "ERC777",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5977,
                  "src": "674:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC777_$5977_$",
                    "typeString": "type(contract ERC777)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "674:47:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 552,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 551,
                  "name": "govaddy",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 594,
                  "src": "626:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 550,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "626:15:1",
                    "stateMutability": "payable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "625:25:1"
            },
            "returnParameters": {
              "id": 562,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "726:0:1"
            },
            "scope": 654,
            "src": "614:475:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 612,
              "nodeType": "Block",
              "src": "1387:271:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 600,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 653,
                          "src": "1405:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 601,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1405:14:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 599,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1397:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 602,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1397:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 603,
                  "nodeType": "ExpressionStatement",
                  "src": "1397:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 605,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1436:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 606,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1436:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 607,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 596,
                        "src": "1448:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d494e544544434f494e53",
                        "id": 608,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1456:13:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_f5fa66e2e34b1a6133aed4f26149f22d363d7d85ea435ab9389917bc6cd5fe2f",
                          "typeString": "literal_string \"MINTEDCOINS\""
                        },
                        "value": "MINTEDCOINS"
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 609,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1471:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_f5fa66e2e34b1a6133aed4f26149f22d363d7d85ea435ab9389917bc6cd5fe2f",
                          "typeString": "literal_string \"MINTEDCOINS\""
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 604,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5604,
                      "src": "1430:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1430:44:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 611,
                  "nodeType": "ExpressionStatement",
                  "src": "1430:44:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "990be248",
            "id": 613,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 597,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 596,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 613,
                  "src": "1364:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 595,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1364:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1363:16:1"
            },
            "returnParameters": {
              "id": 598,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1387:0:1"
            },
            "scope": 654,
            "src": "1342:316:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 628,
              "nodeType": "Block",
              "src": "1709:66:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 619,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 653,
                          "src": "1727:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 620,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1727:14:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 618,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1719:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 621,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1719:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 622,
                  "nodeType": "ExpressionStatement",
                  "src": "1719:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 624,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 615,
                        "src": "1757:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 625,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1765:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        },
                        "value": ""
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                          "typeString": "literal_string \"\""
                        }
                      ],
                      "id": 623,
                      "name": "burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5203,
                      "src": "1752:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,bytes memory)"
                      }
                    },
                    "id": 626,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1752:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 627,
                  "nodeType": "ExpressionStatement",
                  "src": "1752:16:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "df4fbfff",
            "id": 629,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 616,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 615,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 629,
                  "src": "1686:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 614,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1686:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1685:16:1"
            },
            "returnParameters": {
              "id": 617,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1709:0:1"
            },
            "scope": 654,
            "src": "1664:111:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 652,
              "nodeType": "Block",
              "src": "1833:205:1",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "id": 650,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 644,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 636,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "1940:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 637,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "1940:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "expression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "AURGov",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 547,
                            "src": "1924:6:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_contract$_IAURGov_$1104",
                              "typeString": "contract IAURGov"
                            }
                          },
                          "id": 635,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "isPlanet",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 1103,
                          "src": "1924:15:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_bool_$",
                            "typeString": "function (address) view external returns (bool)"
                          }
                        },
                        "id": 638,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1924:27:1",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "||",
                      "rightExpression": {
                        "argumentTypes": null,
                        "components": [
                          {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            },
                            "id": 642,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 639,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 545,
                              "src": "1968:5:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "nodeType": "BinaryOperation",
                            "operator": "==",
                            "rightExpression": {
                              "argumentTypes": null,
                              "expression": {
                                "argumentTypes": null,
                                "id": 640,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1977:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 641,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1977:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1968:19:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 643,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1967:21:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1924:64:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "||",
                    "rightExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          "id": 648,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "expression": {
                              "argumentTypes": null,
                              "id": 645,
                              "name": "msg",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -15,
                              "src": "2005:3:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_magic_message",
                                "typeString": "msg"
                              }
                            },
                            "id": 646,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "sender",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": null,
                            "src": "2005:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 647,
                            "name": "govContract",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 549,
                            "src": "2019:11:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "2005:25:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        }
                      ],
                      "id": 649,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2004:27:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1924:107:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 633,
                  "id": 651,
                  "nodeType": "Return",
                  "src": "1905:126:1"
                }
              ]
            },
            "documentation": null,
            "id": 653,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ismintAuthed",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 630,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1802:2:1"
            },
            "returnParameters": {
              "id": 633,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 632,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 653,
                  "src": "1827:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 631,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1827:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1826:6:1"
            },
            "scope": 654,
            "src": "1781:257:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "scope": 655,
        "src": "218:2788:1"
      }
    ],
    "src": "0:3007:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-08-03T04:03:12.833Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}.     * Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}.     * Note that accounts cannot have allowance issued by their operators."
      },
      "authorizeOperator(address)": {
        "details": "See {IERC777-authorizeOperator}."
      },
      "balanceOf(address)": {
        "details": "Returns the amount of tokens owned by an account (`tokenHolder`)."
      },
      "burn(uint256,bytes)": {
        "details": "See {IERC777-burn}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility."
      },
      "decimals()": {
        "details": "See {ERC20-decimals}.     * Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility)."
      },
      "defaultOperators()": {
        "details": "See {IERC777-defaultOperators}."
      },
      "granularity()": {
        "details": "See {IERC777-granularity}.     * This implementation always returns `1`."
      },
      "isOperatorFor(address,address)": {
        "details": "See {IERC777-isOperatorFor}."
      },
      "name()": {
        "details": "See {IERC777-name}."
      },
      "operatorBurn(address,uint256,bytes,bytes)": {
        "details": "See {IERC777-operatorBurn}.     * Emits {Burned} and {IERC20-Transfer} events."
      },
      "operatorSend(address,address,uint256,bytes,bytes)": {
        "details": "See {IERC777-operatorSend}.     * Emits {Sent} and {IERC20-Transfer} events."
      },
      "revokeOperator(address)": {
        "details": "See {IERC777-revokeOperator}."
      },
      "send(address,uint256,bytes)": {
        "details": "See {IERC777-send}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility."
      },
      "symbol()": {
        "details": "See {IERC777-symbol}."
      },
      "totalSupply()": {
        "details": "See {IERC777-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}.     * Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract.     * Also emits a {Sent} event."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}.    * Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators).    * Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events."
      }
    }
  },
  "userdoc": {
    "methods": {},
    "notice": "Author: Chris Markov 2020 Project Aurbit"
  }
}
    }
  