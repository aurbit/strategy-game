
    module.exports = {
      "network": "development",
      "address": "0x8f1A69555d18587277937D06A6dF3C07459d1dA9",
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
      "type": "function",
      "constant": true
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
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"govaddy\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"AuthorizedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Burned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"RevokedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Sent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"authorizeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnInternal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultOperators\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"granularity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"isOperatorFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mintInternal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorSend\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"revokeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"send\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.     * Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Note that accounts cannot have allowance issued by their operators.\"},\"authorizeOperator(address)\":{\"details\":\"See {IERC777-authorizeOperator}.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by an account (`tokenHolder`).\"},\"burn(uint256,bytes)\":{\"details\":\"See {IERC777-burn}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"decimals()\":{\"details\":\"See {ERC20-decimals}.     * Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility).\"},\"defaultOperators()\":{\"details\":\"See {IERC777-defaultOperators}.\"},\"granularity()\":{\"details\":\"See {IERC777-granularity}.     * This implementation always returns `1`.\"},\"isOperatorFor(address,address)\":{\"details\":\"See {IERC777-isOperatorFor}.\"},\"name()\":{\"details\":\"See {IERC777-name}.\"},\"operatorBurn(address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorBurn}.     * Emits {Burned} and {IERC20-Transfer} events.\"},\"operatorSend(address,address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorSend}.     * Emits {Sent} and {IERC20-Transfer} events.\"},\"revokeOperator(address)\":{\"details\":\"See {IERC777-revokeOperator}.\"},\"send(address,uint256,bytes)\":{\"details\":\"See {IERC777-send}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"symbol()\":{\"details\":\"See {IERC777-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC777-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract.     * Also emits a {Sent} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.    * Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators).    * Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events.\"}}},\"userdoc\":{\"methods\":{},\"notice\":\"Author: Chris Markov 2020 Project Aurbit\"}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/AURToken.sol\":\"AURToken\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/AURToken.sol\":{\"keccak256\":\"0x9e74f137be0a4fd1d38e1a728fecec2172c7645e23db1ac0510c0482b92ca341\",\"urls\":[\"bzz-raw://1be9136c623a8bd8f48cb2d3531b5fe225ee96843fa6ad97fb57856240440ec8\",\"dweb:/ipfs/QmZfJj5mgW3e7Nqf6S54y3QnSCKYaSReXjPjt12WbrTCsw\"]},\"/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/IAURGov.sol\":{\"keccak256\":\"0x3bff931b2e29ce41de07fa77ee70f7e0395e0e47e32fe90d4e39c2f7c605ffe9\",\"urls\":[\"bzz-raw://7f3acf46107c3e4ae595cf123135ff7dbf5361e24bdeb7879ac15fd9f30d5f9e\",\"dweb:/ipfs/QmepsFvwFt1FxHte6pPXtaBfuuttM62orhwjBo4LgNLYTi\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/IERC1820Registry.sol\":{\"keccak256\":\"0xdf8d7d1a119fc0d9f73a5c7a5d21bb0a4e0acb2a61e393c26334d397db628768\",\"urls\":[\"bzz-raw://1e471d73d901c48a465167257403f331454f4c34a945fb5cec10a57690193686\",\"dweb:/ipfs/QmemL8Nxf6SdTkQPq2SZMyNpkMAts5sL2dB2iHktzgPKeR\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/token/ERC777/ERC777.sol\":{\"keccak256\":\"0xb05eb2b0516eabc19a112b20fe61940bf8100644f1c1fd8d090baabad3972e1a\",\"urls\":[\"bzz-raw://d139ba2135f975466dbdc519c6ac5561e408db09c69c806d9e59f16e0b5903a1\",\"dweb:/ipfs/Qmb3SD7Zw1QirY1PqSkQRyBT7ss3BDi1vJ2KjJz1dnVu7T\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0x7846aa81baa00557eba6215442eab916bc98f2e692fdc7b8523cf31122dc8e28\",\"urls\":[\"bzz-raw://40a5491dcdcdbea4bf8695e1c75f5f723dcd19c1392e8ff7a5fc56e13b5794e1\",\"dweb:/ipfs/QmcAFeKKXAFFEzCShHhT65smF8SDhhMg5oWmU3TWKPpTFT\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol\":{\"keccak256\":\"0xc9e219f9060c261ab6d140f448ccdcb207ce9835f0d2868d2c5d4a93486d2208\",\"urls\":[\"bzz-raw://a03ae88229a14e3c0060e558300ba7ab5bdcea10aa814c80d6148e0914d4fdf3\",\"dweb:/ipfs/QmYS76B2bAVTcuzmtYVAt6mY4qr16tZSsWP7dUWdcAgRww\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Sender.sol\":{\"keccak256\":\"0xe4be617d1e043920582d2ec0bc1fe3985a3a49cfedac80c0cf0b9ea5d31044b5\",\"urls\":[\"bzz-raw://1beb3d95ab30460159efed1fc39f9253a3bb66ce50253fc487d927b7fe32165d\",\"dweb:/ipfs/QmVtVWHT6vVfFknNX9gxtrX1xYoLbq8YeZLZrSKYcCyKY8\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200425738038062004257833981810160405260208110156200003757600080fd5b81019080805190602001909291905050506040518060400160405280600c81526020017f41757262697420546f6b656e00000000000000000000000000000000000000008152506040518060400160405280600381526020017f41555200000000000000000000000000000000000000000000000000000000008152506000604051908082528060200260200182016040528015620000e55781602001602082028038833980820191505090505b508260029080519060200190620000fe92919062000d40565b5081600390805190602001906200011792919062000d40565b5080600490805190602001906200013092919062000dc7565b5060008090505b600480549050811015620001e357600160056000600484815481106200015957fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550808060010191505062000137565b50731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d3060405180807f455243373737546f6b656e000000000000000000000000000000000000000000815250600b0190506040518091039020306040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b158015620002e957600080fd5b505af1158015620002fe573d6000803e3d6000fd5b50505050731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff166329965a1d3060405180807f4552433230546f6b656e00000000000000000000000000000000000000000000815250600a0190506040518091039020306040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019350505050600060405180830381600087803b1580156200040757600080fd5b505af11580156200041c573d6000803e3d6000fd5b50505050505050600069d3c21bcecceda1000000905033600960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000549600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260405180602001604052806000815250604051806020016040528060008152506200055160201b60201c565b505062000ec4565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415620005f5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b600062000607620008a560201b60201c565b90506200061e8160008787620008ad60201b60201c565b6200063a84600154620008b360201b62002fdc1790919060201c565b60018190555062000698846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620008b360201b62002fdc1790919060201c565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550620006f38160008787878760016200093c60201b60201c565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156200079157808201518184015260208101905062000774565b50505050905090810190601f168015620007bf5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015620007fa578082015181840152602081019050620007dd565b50505050905090810190601f168015620008285780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a38473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b600033905090565b50505050565b60008082840190508381101562000932576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015620009fb57600080fd5b505afa15801562000a10573d6000803e3d6000fd5b505050506040513d602081101562000a2757600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161462000c5d578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101562000b8157808201518184015260208101905062000b64565b50505050905090810190601f16801562000baf5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101562000bea57808201518184015260208101905062000bcd565b50505050905090810190601f16801562000c185780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801562000c3e57600080fd5b505af115801562000c53573d6000803e3d6000fd5b5050505062000cea565b811562000ce95762000c908673ffffffffffffffffffffffffffffffffffffffff1662000cf460201b620030641760201c565b1562000ce8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d8152602001806200420a604d913960600191505060405180910390fd5b5b5b5050505050505050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801562000d3757506000801b8214155b92505050919050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000d8357805160ff191683800117855562000db4565b8280016001018555821562000db4579182015b8281111562000db357825182559160200191906001019062000d96565b5b50905062000dc3919062000e56565b5090565b82805482825590600052602060002090810192821562000e43579160200282015b8281111562000e425782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000de8565b5b50905062000e52919062000e7e565b5090565b62000e7b91905b8082111562000e7757600081600090555060010162000e5d565b5090565b90565b62000ec191905b8082111562000ebd57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690555060010162000e85565b5090565b90565b6133368062000ed46000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806395d89b41116100ad578063dd62ed3e11610071578063dd62ed3e1461080f578063df4fbfff14610887578063fad8b32a146108b5578063fc673c4f146108f9578063fe9d930314610a755761012c565b806395d89b4114610597578063990be2481461061a5780639bd9bbc614610648578063a9059cbb1461072d578063d95b6371146107935761012c565b8063313ce567116100f4578063313ce5671461031d578063556f0dc71461034157806362ad1b831461035f57806370a08231146104fb578063959b8c3f146105535761012c565b806306e485381461013157806306fdde0314610190578063095ea7b31461021357806318160ddd1461027957806323b872dd14610297575b600080fd5b610139610b3a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561017c578082015181840152602081019050610161565b505050509050019250505060405180910390f35b610198610bc8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025f6004803603604081101561022957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c6a565b604051808215151515815260200191505060405180910390f35b610281610c8d565b6040518082815260200191505060405180910390f35b610303600480360360608110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c97565b604051808215151515815260200191505060405180910390f35b610325610ef5565b604051808260ff1660ff16815260200191505060405180910390f35b610349610efe565b6040518082815260200191505060405180910390f35b6104f9600480360360a081101561037557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103dc57600080fd5b8201836020820111156103ee57600080fd5b8035906020019184600183028401116401000000008311171561041057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561047357600080fd5b82018360208201111561048557600080fd5b803590602001918460018302840111640100000000831117156104a757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610f07565b005b61053d6004803603602081101561051157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f83565b6040518082815260200191505060405180910390f35b6105956004803603602081101561056957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcb565b005b61059f611242565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105df5780820151818401526020810190506105c4565b50505050905090810190601f16801561060c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106466004803603602081101561063057600080fd5b81019080803590602001909291905050506112e4565b005b61072b6004803603606081101561065e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106a557600080fd5b8201836020820111156106b757600080fd5b803590602001918460018302840111640100000000831117156106d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611348565b005b6107796004803603604081101561074357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611372565b604051808215151515815260200191505060405180910390f35b6107f5600480360360408110156107a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611496565b604051808215151515815260200191505060405180910390f35b6108716004803603604081101561082557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611647565b6040518082815260200191505060405180910390f35b6108b36004803603602081101561089d57600080fd5b81019080803590602001909291905050506116ce565b005b6108f7600480360360208110156108cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116fb565b005b610a736004803603608081101561090f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561095657600080fd5b82018360208201111561096857600080fd5b8035906020019184600183028401116401000000008311171561098a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109ed57600080fd5b8201836020820111156109ff57600080fd5b80359060200191846001830284011164010000000083111715610a2157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611972565b005b610b3860048036036040811015610a8b57600080fd5b810190808035906020019092919080359060200190640100000000811115610ab257600080fd5b820183602082011115610ac457600080fd5b80359060200191846001830284011164010000000083111715610ae657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506119ea565b005b60606004805480602002602001604051908101604052809291908181526020018280548015610bbe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b74575b5050505050905090565b606060028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c605780601f10610c3557610100808354040283529160200191610c60565b820191906000526020600020905b815481529060010190602001808311610c4357829003601f168201915b5050505050905090565b600080610c75611a10565b9050610c82818585611a18565b600191505092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061321c6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610da4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806132956026913960400191505060405180910390fd5b6000610dae611a10565b9050610ddc818686866040518060200160405280600081525060405180602001604052806000815250611c0f565b610e08818686866040518060200160405280600081525060405180602001604052806000815250611f29565b610ebb8582610eb68660405180606001604052806029815260200161326c60299139600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122389092919063ffffffff16565b611a18565b610ee981868686604051806020016040528060008152506040518060200160405280600081525060006122f8565b60019150509392505050565b60006012905090565b60006001905090565b610f18610f12611a10565b86611496565b610f6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613240602c913960400191505060405180910390fd5b610f7c85858585856001612693565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610fea611a10565b73ffffffffffffffffffffffffffffffffffffffff161415611057576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061318a6024913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561114157600760006110b5611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690556111de565b60016006600061114f611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6111e6611a10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112da5780601f106112af576101008083540402835291602001916112da565b820191906000526020600020905b8154815290600101906020018083116112bd57829003601f168201915b5050505050905090565b6112ec6127fc565b6112f557600080fd5b61134533826040518060400160405280600b81526020017f4d494e544544434f494e530000000000000000000000000000000000000000008152506040518060200160405280600081525061298d565b50565b61136d611353611a10565b848484604051806020016040528060008152506001612693565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061321c6024913960400191505060405180910390fd5b6000611403611a10565b9050611431818286866040518060200160405280600081525060405180602001604052806000815250611c0f565b61145d818286866040518060200160405280600081525060405180602001604052806000815250611f29565b61148b81828686604051806020016040528060008152506040518060200160405280600081525060006122f8565b600191505092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806115ae5750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156115ad5750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b8061163f5750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6116d66127fc565b6116df57600080fd5b6116f881604051806020016040528060008152506119ea565b50565b611703611a10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611787576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806131ae6021913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561187a576001600760006117e7611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061190e565b60066000611886611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b611916611a10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61198361197d611a10565b85611496565b6119d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613240602c913960400191505060405180910390fd5b6119e484848484612cb4565b50505050565b611a0c6119f5611a10565b838360405180602001604052806000815250612cb4565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806130fa6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806132de6023913960400191505060405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611ccd57600080fd5b505afa158015611ce1573d6000803e3d6000fd5b505050506040513d6020811015611cf757600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611f20578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611e4f578082015181840152602081019050611e34565b50505050905090810190601f168015611e7c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611eb5578082015181840152602081019050611e9a565b50505050905090810190601f168015611ee25780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611f0757600080fd5b505af1158015611f1b573d6000803e3d6000fd5b505050505b50505050505050565b611f3586868686612fd6565b611fa083604051806060016040528060278152602001613141602791396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122389092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612033836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612fdc90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561212857808201518184015260208101905061210d565b50505050905090810190601f1680156121555780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561218e578082015181840152602081019050612173565b50505050905090810190601f1680156121bb5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a48373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b60008383111582906122e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122aa57808201518184015260208101905061228f565b50505050905090810190601f1680156122d75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156123b657600080fd5b505afa1580156123ca573d6000803e3d6000fd5b505050506040513d60208110156123e057600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461260c578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561253757808201518184015260208101905061251c565b50505050905090810190601f1680156125645780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561259d578082015181840152602081019050612582565b50505050905090810190601f1680156125ca5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156125ef57600080fd5b505af1158015612603573d6000803e3d6000fd5b50505050612689565b8115612688576126318673ffffffffffffffffffffffffffffffffffffffff16613064565b15612687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d8152602001806131cf604d913960600191505060405180910390fd5b5b5b5050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415612719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061311f6022913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156127bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a2073656e6420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b60006127c6611a10565b90506127d6818888888888611c0f565b6127e4818888888888611f29565b6127f3818888888888886122f8565b50505050505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635e01bfc6336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561289d57600080fd5b505afa1580156128b1573d6000803e3d6000fd5b505050506040513d60208110156128c757600080fd5b81019080805190602001909291905050508061293057503373ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b806129885750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b905090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612a30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6000612a3a611a10565b9050612a498160008787612fd6565b612a5e84600154612fdc90919063ffffffff16565b600181905550612ab5846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612fdc90919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612b088160008787878760016122f8565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba4578082015181840152602081019050612b89565b50505050905090810190601f168015612bd15780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c0a578082015181840152602081019050612bef565b50505050905090810190601f168015612c375780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a38473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612d3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806131686022913960400191505060405180910390fd5b6000612d44611a10565b9050612d538186600087612fd6565b612d6281866000878787611c0f565b612dcd846040518060600160405280602381526020016132bb602391396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122389092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612e24846001546130af90919063ffffffff16565b6001819055508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ec6578082015181840152602081019050612eab565b50505050905090810190601f168015612ef35780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612f2c578082015181840152602081019050612f11565b50505050905090810190601f168015612f595780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b50505050565b60008082840190508381101561305a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156130a657506000801b8214155b92505050919050565b60006130f183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612238565b90509291505056fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220d69781b9cb9349e1ea1a34a8e9ad8835a1ba6b22b5afbf3842a888696382423f64736f6c634300060200334552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e74",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061012c5760003560e01c806395d89b41116100ad578063dd62ed3e11610071578063dd62ed3e1461080f578063df4fbfff14610887578063fad8b32a146108b5578063fc673c4f146108f9578063fe9d930314610a755761012c565b806395d89b4114610597578063990be2481461061a5780639bd9bbc614610648578063a9059cbb1461072d578063d95b6371146107935761012c565b8063313ce567116100f4578063313ce5671461031d578063556f0dc71461034157806362ad1b831461035f57806370a08231146104fb578063959b8c3f146105535761012c565b806306e485381461013157806306fdde0314610190578063095ea7b31461021357806318160ddd1461027957806323b872dd14610297575b600080fd5b610139610b3a565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561017c578082015181840152602081019050610161565b505050509050019250505060405180910390f35b610198610bc8565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101d85780820151818401526020810190506101bd565b50505050905090810190601f1680156102055780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025f6004803603604081101561022957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c6a565b604051808215151515815260200191505060405180910390f35b610281610c8d565b6040518082815260200191505060405180910390f35b610303600480360360608110156102ad57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c97565b604051808215151515815260200191505060405180910390f35b610325610ef5565b604051808260ff1660ff16815260200191505060405180910390f35b610349610efe565b6040518082815260200191505060405180910390f35b6104f9600480360360a081101561037557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156103dc57600080fd5b8201836020820111156103ee57600080fd5b8035906020019184600183028401116401000000008311171561041057600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019064010000000081111561047357600080fd5b82018360208201111561048557600080fd5b803590602001918460018302840111640100000000831117156104a757600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610f07565b005b61053d6004803603602081101561051157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610f83565b6040518082815260200191505060405180910390f35b6105956004803603602081101561056957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fcb565b005b61059f611242565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156105df5780820151818401526020810190506105c4565b50505050905090810190601f16801561060c5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6106466004803603602081101561063057600080fd5b81019080803590602001909291905050506112e4565b005b61072b6004803603606081101561065e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156106a557600080fd5b8201836020820111156106b757600080fd5b803590602001918460018302840111640100000000831117156106d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611348565b005b6107796004803603604081101561074357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611372565b604051808215151515815260200191505060405180910390f35b6107f5600480360360408110156107a957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611496565b604051808215151515815260200191505060405180910390f35b6108716004803603604081101561082557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611647565b6040518082815260200191505060405180910390f35b6108b36004803603602081101561089d57600080fd5b81019080803590602001909291905050506116ce565b005b6108f7600480360360208110156108cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116fb565b005b610a736004803603608081101561090f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561095657600080fd5b82018360208201111561096857600080fd5b8035906020019184600183028401116401000000008311171561098a57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001906401000000008111156109ed57600080fd5b8201836020820111156109ff57600080fd5b80359060200191846001830284011164010000000083111715610a2157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050611972565b005b610b3860048036036040811015610a8b57600080fd5b810190808035906020019092919080359060200190640100000000811115610ab257600080fd5b820183602082011115610ac457600080fd5b80359060200191846001830284011164010000000083111715610ae657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506119ea565b005b60606004805480602002602001604051908101604052809291908181526020018280548015610bbe57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610b74575b5050505050905090565b606060028054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c605780601f10610c3557610100808354040283529160200191610c60565b820191906000526020600020905b815481529060010190602001808311610c4357829003601f168201915b5050505050905090565b600080610c75611a10565b9050610c82818585611a18565b600191505092915050565b6000600154905090565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610d1e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061321c6024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415610da4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806132956026913960400191505060405180910390fd5b6000610dae611a10565b9050610ddc818686866040518060200160405280600081525060405180602001604052806000815250611c0f565b610e08818686866040518060200160405280600081525060405180602001604052806000815250611f29565b610ebb8582610eb68660405180606001604052806029815260200161326c60299139600860008c73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122389092919063ffffffff16565b611a18565b610ee981868686604051806020016040528060008152506040518060200160405280600081525060006122f8565b60019150509392505050565b60006012905090565b60006001905090565b610f18610f12611a10565b86611496565b610f6d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613240602c913960400191505060405180910390fd5b610f7c85858585856001612693565b5050505050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b8073ffffffffffffffffffffffffffffffffffffffff16610fea611a10565b73ffffffffffffffffffffffffffffffffffffffff161415611057576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061318a6024913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561114157600760006110b5611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690556111de565b60016006600061114f611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505b6111e6611a10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112da5780601f106112af576101008083540402835291602001916112da565b820191906000526020600020905b8154815290600101906020018083116112bd57829003601f168201915b5050505050905090565b6112ec6127fc565b6112f557600080fd5b61134533826040518060400160405280600b81526020017f4d494e544544434f494e530000000000000000000000000000000000000000008152506040518060200160405280600081525061298d565b50565b61136d611353611a10565b848484604051806020016040528060008152506001612693565b505050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156113f9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602481526020018061321c6024913960400191505060405180910390fd5b6000611403611a10565b9050611431818286866040518060200160405280600081525060405180602001604052806000815250611c0f565b61145d818286866040518060200160405280600081525060405180602001604052806000815250611f29565b61148b81828686604051806020016040528060008152506040518060200160405280600081525060006122f8565b600191505092915050565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614806115ae5750600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1680156115ad5750600760008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16155b5b8061163f5750600660008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff165b905092915050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6116d66127fc565b6116df57600080fd5b6116f881604051806020016040528060008152506119ea565b50565b611703611a10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611787576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806131ae6021913960400191505060405180910390fd5b600560008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561187a576001600760006117e7611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061190e565b60066000611886611a10565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690555b611916611a10565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61198361197d611a10565b85611496565b6119d8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613240602c913960400191505060405180910390fd5b6119e484848484612cb4565b50505050565b611a0c6119f5611a10565b838360405180602001604052806000815250612cb4565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a9e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806130fa6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611b24576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806132de6023913960400191505060405180910390fd5b80600860008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b158015611ccd57600080fd5b505afa158015611ce1573d6000803e3d6000fd5b505050506040513d6020811015611cf757600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614611f20578073ffffffffffffffffffffffffffffffffffffffff166375ab97828888888888886040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611e4f578082015181840152602081019050611e34565b50505050905090810190601f168015611e7c5780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015611eb5578082015181840152602081019050611e9a565b50505050905090810190601f168015611ee25780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611f0757600080fd5b505af1158015611f1b573d6000803e3d6000fd5b505050505b50505050505050565b611f3586868686612fd6565b611fa083604051806060016040528060278152602001613141602791396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122389092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612033836000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612fdc90919063ffffffff16565b6000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561212857808201518184015260208101905061210d565b50505050905090810190601f1680156121555780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561218e578082015181840152602081019050612173565b50505050905090810190601f1680156121bb5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a48373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b60008383111582906122e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156122aa57808201518184015260208101905061228f565b50505050905090810190601f1680156122d75780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b6000731820a4b7618bde71dce8cdc73aab6c95905fad2473ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca877fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60001b6040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060206040518083038186803b1580156123b657600080fd5b505afa1580156123ca573d6000803e3d6000fd5b505050506040513d60208110156123e057600080fd5b81019080805190602001909291905050509050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461260c578073ffffffffffffffffffffffffffffffffffffffff166223de298989898989896040518763ffffffff1660e01b8152600401808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561253757808201518184015260208101905061251c565b50505050905090810190601f1680156125645780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b8381101561259d578082015181840152602081019050612582565b50505050905090810190601f1680156125ca5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b1580156125ef57600080fd5b505af1158015612603573d6000803e3d6000fd5b50505050612689565b8115612688576126318673ffffffffffffffffffffffffffffffffffffffff16613064565b15612687576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d8152602001806131cf604d913960600191505060405180910390fd5b5b5b5050505050505050565b600073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415612719576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061311f6022913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614156127bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a2073656e6420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b60006127c6611a10565b90506127d6818888888888611c0f565b6127e4818888888888611f29565b6127f3818888888888886122f8565b50505050505050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16635e01bfc6336040518263ffffffff1660e01b8152600401808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060206040518083038186803b15801561289d57600080fd5b505afa1580156128b1573d6000803e3d6000fd5b505050506040513d60208110156128c757600080fd5b81019080805190602001909291905050508061293057503373ffffffffffffffffffffffffffffffffffffffff16600960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16145b806129885750600b60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16145b905090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612a30576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433737373a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b6000612a3a611a10565b9050612a498160008787612fd6565b612a5e84600154612fdc90919063ffffffff16565b600181905550612ab5846000808873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054612fdc90919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612b088160008787878760016122f8565b8473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ba4578082015181840152602081019050612b89565b50505050905090810190601f168015612bd15780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612c0a578082015181840152602081019050612bef565b50505050905090810190601f168015612c375780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a38473ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161415612d3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806131686022913960400191505060405180910390fd5b6000612d44611a10565b9050612d538186600087612fd6565b612d6281866000878787611c0f565b612dcd846040518060600160405280602381526020016132bb602391396000808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546122389092919063ffffffff16565b6000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550612e24846001546130af90919063ffffffff16565b6001819055508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015612ec6578082015181840152602081019050612eab565b50505050905090810190601f168015612ef35780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015612f2c578082015181840152602081019050612f11565b50505050905090810190601f168015612f595780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a3600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef866040518082815260200191505060405180910390a35050505050565b50505050565b60008082840190508381101561305a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f91508082141580156130a657506000801b8214155b92505050919050565b60006130f183836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250612238565b90509291505056fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a2646970667358221220d69781b9cb9349e1ea1a34a8e9ad8835a1ba6b22b5afbf3842a888696382423f64736f6c63430006020033",
  "sourceMap": "218:2788:1:-:0;;;614:475;8:9:-1;5:2;;;30:1;27;20:12;5:2;614:475:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;614:475:1;;;;;;;;;;;;;;;;2645:623:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;718:1:1;704:16;;;;;;;;;;;;;;;;;;;;;;29:2:-1;21:6;17:15;117:4;105:10;97:6;88:34;148:4;140:6;136:17;126:27;;0:157;704:16:1;;;;2789:4:20;2781:5;:12;;;;;;;;;;;;:::i;:::-;;2813:6;2803:7;:16;;;;;;;;;;;;:::i;:::-;;2855;2830:22;:41;;;;;;;;;;;;:::i;:::-;;2886:9;2898:1;2886:13;;2881:136;2905:22;:29;;;;2901:1;:33;2881:136;;;3002:4;2955:17;:44;2973:22;2996:1;2973:25;;;;;;;;;;;;;;;;;;;;;;;;;2955:44;;;;;;;;;;;;;;;;:51;;;;;;;;;;;;;;;;;;2936:3;;;;;;;2881:136;;;;1235:42;3058:41;;;3108:4;3115:24;;;;;;;;;;;;;;;;;;;3149:4;3058:97;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3058:97:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3058:97:20;;;;1235:42;3165:41;;;3215:4;3222:23;;;;;;;;;;;;;;;;;;;3255:4;3165:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3165:96:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3165:96:20;;;;2645:623;;;736:22:1::1;761:16;736:41;;927:10;919:5;;:18;;;;;;;;;;;;;;;;;;964:7;947:6;;:25;;;;;;;;;;;;;;;;;;996:7;982:11;;:21;;;;;;;;;;;;;;;;;;1046:36;1052:5;;;;;;;;;;;1059:14;1046:36;;;;;;;;;;;::::0;::::1;;;;;;;;;;;::::0;:5:::1;;;:36;;:::i;:::-;614:475;::::0;218:2788;;10335:725:20;10533:1;10514:21;;:7;:21;;;;10506:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;:10;;;:12;;:::i;:::-;10583:31;;10625:59;10646:8;10664:1;10668:7;10677:6;10625:20;;;:59;;:::i;:::-;10744:24;10761:6;10744:12;;:16;;;;;;:24;;;;:::i;:::-;10729:12;:39;;;;10799:30;10822:6;10799:9;:18;10809:7;10799:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;10778:9;:18;10788:7;10778:18;;;;;;;;;;;;;;;:51;;;;10840:88;10860:8;10878:1;10882:7;10891:6;10899:8;10909:12;10923:4;10840:19;;;:88;;:::i;:::-;10961:7;10944:57;;10951:8;10944:57;;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11037:7;11016:37;;11033:1;11016:37;;;11046:6;11016:37;;;;;;;;;;;;;;;;;;10335:725;;;;;:::o;590:104:9:-;643:15;677:10;670:17;;590:104;:::o;17189:110:20:-;;;;;:::o;874:176:13:-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;15873:688:20:-;16130:19;1235:42;16152:41;;;16194:2;1883:66;16198:32;;16152:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16152:79:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16152:79:20;;;;;;;;;;;;;;;;16130:101;;16268:1;16245:25;;:11;:25;;;16241:314;;16303:11;16286:44;;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16286:96:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:20;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;:13;;;;;;;:15;;:::i;:::-;16446:16;16438:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16399:156;16241:314;15873:688;;;;;;;;:::o;718:610:24:-;778:4;1036:16;1062:19;1084:66;1062:88;;;;1251:7;1239:20;1227:32;;1290:11;1278:8;:23;;:42;;;;;1317:3;1305:15;;:8;:15;;1278:42;1270:51;;;;718:610;;;:::o;218:2788:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "218:2788:1:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;218:2788:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7012:122:20;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;7012:122:20;;;;;;;;;;;;;;;;;3322:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3322:90:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8539:189;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8539:189:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4083:115;;;:::i;:::-;;;;;;;;;;;;;;;;;;;9093:672;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;9093:672:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3746:74;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3935:87;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7253:366;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7253:366:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7253:366:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7253:366:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7253:366:20;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7253:366:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7253:366:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7253:366:20;;;;;;;;;;;;;;;:::i;:::-;;4298:142;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4298:142:20;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6081:405;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6081:405:20;;;;;;;;;;;;;;;;;;;:::i;:::-;;3468:94;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3468:94:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1342:316:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1342:316:1;;;;;;;;;;;;;;;;;:::i;:::-;;4570:156:20;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4570:156:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;4570:156:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;4570:156:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;4570:156:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;4570:156:20;;;;;;;;;;;;;;;:::i;:::-;;4957:431;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4957:431:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5701:313;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5701:313:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;8258:143;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8258:143:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1664:111:1;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1664:111:1;;;;;;;;;;;;;;;;;:::i;:::-;;6550:396:20;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6550:396:20;;;;;;;;;;;;;;;;;;;:::i;:::-;;7740:279;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;7740:279:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7740:279:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7740:279:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7740:279:20;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;7740:279:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7740:279:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;7740:279:20;;;;;;;;;;;;;;;:::i;:::-;;5518:120;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5518:120:20;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;5518:120:20;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;5518:120:20;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5518:120:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;5518:120:20;;;;;;;;;;;;;;;:::i;:::-;;7012:122;7070:16;7105:22;7098:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7012:122;:::o;3322:90::-;3368:13;3400:5;3393:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3322:90;:::o;8539:189::-;8613:4;8629:14;8646:12;:10;:12::i;:::-;8629:29;;8668:32;8677:6;8685:7;8694:5;8668:8;:32::i;:::-;8717:4;8710:11;;;8539:189;;;;:::o;4083:115::-;4153:7;4179:12;;4172:19;;4083:115;:::o;9093:672::-;9191:4;9236:1;9215:23;;:9;:23;;;;9207:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9315:1;9297:20;;:6;:20;;;;9289:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9371:15;9389:12;:10;:12::i;:::-;9371:30;;9412:61;9430:7;9439:6;9447:9;9458:6;9412:61;;;;;;;;;;;;;;;;;;;;;;;;:17;:61::i;:::-;9484:49;9490:7;9499:6;9507:9;9518:6;9484:49;;;;;;;;;;;;;;;;;;;;;;;;:5;:49::i;:::-;9543:112;9552:6;9560:7;9569:85;9602:6;9569:85;;;;;;;;;;;;;;;;;:11;:19;9581:6;9569:19;;;;;;;;;;;;;;;:28;9589:7;9569:28;;;;;;;;;;;;;;;;:32;;:85;;;;;:::i;:::-;9543:8;:112::i;:::-;9666:70;9686:7;9695:6;9703:9;9714:6;9666:70;;;;;;;;;;;;;;;;;;;;;;;;9730:5;9666:19;:70::i;:::-;9754:4;9747:11;;;9093:672;;;;;:::o;3746:74::-;3787:5;3811:2;3804:9;;3746:74;:::o;3935:87::-;3988:7;4014:1;4007:8;;3935:87;:::o;7253:366::-;7460:35;7474:12;:10;:12::i;:::-;7488:6;7460:13;:35::i;:::-;7452:92;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7554:58;7560:6;7568:9;7579:6;7587:4;7593:12;7607:4;7554:5;:58::i;:::-;7253:366;;;;;:::o;4298:142::-;4385:7;4411:9;:22;4421:11;4411:22;;;;;;;;;;;;;;;;4404:29;;4298:142;;;:::o;6081:405::-;6177:8;6161:24;;:12;:10;:12::i;:::-;:24;;;;6153:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6241:17;:27;6259:8;6241:27;;;;;;;;;;;;;;;;;;;;;;;;;6237:185;;;6291:24;:38;6316:12;:10;:12::i;:::-;6291:38;;;;;;;;;;;;;;;:48;6330:8;6291:48;;;;;;;;;;;;;;;;6284:55;;;;;;;;;;;6237:185;;;6407:4;6370:10;:24;6381:12;:10;:12::i;:::-;6370:24;;;;;;;;;;;;;;;:34;6395:8;6370:34;;;;;;;;;;;;;;;;:41;;;;;;;;;;;;;;;;;;6237:185;6466:12;:10;:12::i;:::-;6437:42;;6456:8;6437:42;;;;;;;;;;;;6081:405;:::o;3468:94::-;3516:13;3548:7;3541:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3468:94;:::o;1342:316:1:-;1405:14;:12;:14::i;:::-;1397:23;;;;;;1430:44;1436:10;1448:6;1430:44;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;1342:316;:::o;4570:156:20:-;4665:54;4671:12;:10;:12::i;:::-;4685:9;4696:6;4704:4;4665:54;;;;;;;;;;;;4714:4;4665:5;:54::i;:::-;4570:156;;;:::o;4957:431::-;5035:4;5080:1;5059:23;;:9;:23;;;;5051:72;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5134:12;5149;:10;:12::i;:::-;5134:27;;5172:56;5190:4;5196;5202:9;5213:6;5172:56;;;;;;;;;;;;;;;;;;;;;;;;:17;:56::i;:::-;5239:44;5245:4;5251;5257:9;5268:6;5239:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;5294:65;5314:4;5320;5326:9;5337:6;5294:65;;;;;;;;;;;;;;;;;;;;;;;;5353:5;5294:19;:65::i;:::-;5377:4;5370:11;;;4957:431;;;;:::o;5701:313::-;5815:4;5850:11;5838:23;;:8;:23;;;:120;;;;5878:17;:27;5896:8;5878:27;;;;;;;;;;;;;;;;;;;;;;;;;:79;;;;;5910:24;:37;5935:11;5910:37;;;;;;;;;;;;;;;:47;5948:8;5910:47;;;;;;;;;;;;;;;;;;;;;;;;;5909:48;5878:79;5838:120;:169;;;;5974:10;:23;5985:11;5974:23;;;;;;;;;;;;;;;:33;5998:8;5974:33;;;;;;;;;;;;;;;;;;;;;;;;;5838:169;5831:176;;5701:313;;;;:::o;8258:143::-;8340:7;8366:11;:19;8378:6;8366:19;;;;;;;;;;;;;;;:28;8386:7;8366:28;;;;;;;;;;;;;;;;8359:35;;8258:143;;;;:::o;1664:111:1:-;1727:14;:12;:14::i;:::-;1719:23;;;;;;1752:16;1757:6;1752:16;;;;;;;;;;;;:4;:16::i;:::-;1664:111;:::o;6550:396:20:-;6639:12;:10;:12::i;:::-;6627:24;;:8;:24;;;;6619:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6704:17;:27;6722:8;6704:27;;;;;;;;;;;;;;;;;;;;;;;;;6700:185;;;6798:4;6747:24;:38;6772:12;:10;:12::i;:::-;6747:38;;;;;;;;;;;;;;;:48;6786:8;6747:48;;;;;;;;;;;;;;;;:55;;;;;;;;;;;;;;;;;;6700:185;;;6840:10;:24;6851:12;:10;:12::i;:::-;6840:24;;;;;;;;;;;;;;;:34;6865:8;6840:34;;;;;;;;;;;;;;;;6833:41;;;;;;;;;;;6700:185;6926:12;:10;:12::i;:::-;6900:39;;6916:8;6900:39;;;;;;;;;;;;6550:396;:::o;7740:279::-;7875:36;7889:12;:10;:12::i;:::-;7903:7;7875:13;:36::i;:::-;7867:93;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7970:42;7976:7;7985:6;7993:4;7999:12;7970:5;:42::i;:::-;7740:279;;;;:::o;5518:120::-;5594:37;5600:12;:10;:12::i;:::-;5614:6;5622:4;5594:37;;;;;;;;;;;;:5;:37::i;:::-;5518:120;;:::o;590:104:9:-;643:15;677:10;670:17;;590:104;:::o;13892:335:20:-;14003:1;13985:20;;:6;:20;;;;13977:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14084:1;14065:21;;:7;:21;;;;14057:69;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14168:5;14137:11;:19;14149:6;14137:19;;;;;;;;;;;;;;;:28;14157:7;14137:28;;;;;;;;;;;;;;;:36;;;;14205:7;14188:32;;14197:6;14188:32;;;14214:5;14188:32;;;;;;;;;;;;;;;;;;13892:335;;;:::o;14700:484::-;14921:19;1235:42;14943:41;;;14985:4;1700:66;14991:29;;14943:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;14943:78:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;14943:78:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;14943:78:20;;;;;;;;;;;;;;;;14921:100;;15058:1;15035:25;;:11;:25;;;15031:147;;15090:11;15076:39;;;15116:8;15126:4;15132:2;15136:6;15144:8;15154:12;15076:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15076:91:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15076:91:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;15076:91:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;15076:91:20;;;;15031:147;14700:484;;;;;;;:::o;13227:527::-;13436:48;13457:8;13467:4;13473:2;13477:6;13436:20;:48::i;:::-;13513:70;13533:6;13513:70;;;;;;;;;;;;;;;;;:9;:15;13523:4;13513:15;;;;;;;;;;;;;;;;:19;;:70;;;;;:::i;:::-;13495:9;:15;13505:4;13495:15;;;;;;;;;;;;;;;:88;;;;13609:25;13627:6;13609:9;:13;13619:2;13609:13;;;;;;;;;;;;;;;;:17;;:25;;;;:::i;:::-;13593:9;:13;13603:2;13593:13;;;;;;;;;;;;;;;:41;;;;13671:2;13650:56;;13665:4;13650:56;;13655:8;13650:56;;;13675:6;13683:8;13693:12;13650:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13650:56:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13650:56:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13736:2;13721:26;;13730:4;13721:26;;;13740:6;13721:26;;;;;;;;;;;;;;;;;;13227:527;;;;;;:::o;1746:187:13:-;1832:7;1864:1;1859;:6;;1867:12;1851:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1851:29:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1890:9;1906:1;1902;:5;1890:17;;1925:1;1918:8;;;1746:187;;;;;:::o;15873:688:20:-;16130:19;1235:42;16152:41;;;16194:2;1883:66;16198:32;;16152:79;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16152:79:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:20;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;16152:79:20;;;;;;;;;;;;;;;;16130:101;;16268:1;16245:25;;:11;:25;;;16241:314;;16303:11;16286:44;;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;16286:96:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16286:96:20;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:20;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;:13;;;:15::i;:::-;16446:16;16438:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16399:156;16241:314;15873:688;;;;;;;;:::o;11536:654::-;11778:1;11762:18;;:4;:18;;;;11754:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11851:1;11837:16;;:2;:16;;;;11829:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11901:16;11920:12;:10;:12::i;:::-;11901:31;;11943:69;11961:8;11971:4;11977:2;11981:6;11989:8;11999:12;11943:17;:69::i;:::-;12023:57;12029:8;12039:4;12045:2;12049:6;12057:8;12067:12;12023:5;:57::i;:::-;12091:92;12111:8;12121:4;12127:2;12131:6;12139:8;12149:12;12163:19;12091;:92::i;:::-;11536:654;;;;;;;:::o;1781:257:1:-;1827:4;1924:6;;;;;;;;;;;:15;;;1940:10;1924:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1924:27:1;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1924:27:1;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1924:27:1;;;;;;;;;;;;;;;;:64;;;;1977:10;1968:19;;:5;;;;;;;;;;;:19;;;1924:64;:107;;;;2019:11;;;;;;;;;;;2005:25;;:10;:25;;;1924:107;1905:126;;1781:257;:::o;10335:725:20:-;10533:1;10514:21;;:7;:21;;;;10506:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;:10;:12::i;:::-;10583:31;;10625:59;10646:8;10664:1;10668:7;10677:6;10625:20;:59::i;:::-;10744:24;10761:6;10744:12;;:16;;:24;;;;:::i;:::-;10729:12;:39;;;;10799:30;10822:6;10799:9;:18;10809:7;10799:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;10778:9;:18;10788:7;10778:18;;;;;;;;;;;;;;;:51;;;;10840:88;10860:8;10878:1;10882:7;10891:6;10899:8;10909:12;10923:4;10840:19;:88::i;:::-;10961:7;10944:57;;10951:8;10944:57;;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;10944:57:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11037:7;11016:37;;11033:1;11016:37;;;11046:6;11016:37;;;;;;;;;;;;;;;;;;10335:725;;;;;:::o;12495:726::-;12687:1;12671:18;;:4;:18;;;;12663:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12739:16;12758:12;:10;:12::i;:::-;12739:31;;12781:56;12802:8;12812:4;12826:1;12830:6;12781:20;:56::i;:::-;12848:73;12866:8;12876:4;12890:1;12894:6;12902:4;12908:12;12848:17;:73::i;:::-;12984:66;13004:6;12984:66;;;;;;;;;;;;;;;;;:9;:15;12994:4;12984:15;;;;;;;;;;;;;;;;:19;;:66;;;;;:::i;:::-;12966:9;:15;12976:4;12966:15;;;;;;;;;;;;;;;:84;;;;13075:24;13092:6;13075:12;;:16;;:24;;;;:::i;:::-;13060:12;:39;;;;13132:4;13115:50;;13122:8;13115:50;;;13138:6;13146:4;13152:12;13115:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13115:50:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;13115:50:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13203:1;13180:34;;13189:4;13180:34;;;13207:6;13180:34;;;;;;;;;;;;;;;;;;12495:726;;;;;:::o;17189:110::-;;;;;:::o;874:176:13:-;932:7;951:9;967:1;963;:5;951:17;;991:1;986;:6;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;1035:8;;;874:176;;;;:::o;718:610:24:-;778:4;1036:16;1062:19;1084:66;1062:88;;;;1251:7;1239:20;1227:32;;1290:11;1278:8;:23;;:42;;;;;1317:3;1305:15;;:8;:15;;1278:42;1270:51;;;;718:610;;;:::o;1321:134:13:-;1379:7;1405:43;1409:1;1412;1405:43;;;;;;;;;;;;;;;;;:3;:43::i;:::-;1398:50;;1321:134;;;;:::o",
  "source": "pragma solidity ^0.6.0;\n\n//import \"@openzeppelin/contracts/GSN/Context.sol\";\nimport \"@openzeppelin/contracts/token/ERC777/ERC777.sol\";\nimport \"./IAURGov.sol\";\n\n/**\n    Author: Chris Markov 2020\n    Project Aurbit\n */\n\ncontract AURToken is ERC777 {\n    address payable owner;\n    IAURGov private AURGov;\n    address payable govContract;\n\n    //address payable planet;\n    //maybe have a list of admins and a list of planets rather than just \"minters\"\n    //address payable[] minters; //array of authed minters, which will be planet cotnracts\n    //address[] dOperators;//dunno what would go here but not needed\n    constructor(address payable govaddy)\n        public\n        ERC777(\"Aurbit Token\", \"AUR\", new address[](0))\n    {\n        uint256 initialBalance = 1000000 * 10**18;\n        //do this shit with safe math or whatever\n        //if this is the officially best way to write this then i am disappointed\n        owner = msg.sender;\n        AURGov = IAURGov(govaddy);\n        govContract = govaddy;\n        //minters.push(planet0);\n        _mint(owner, initialBalance, \"\", \"\");\n    }\n\n    //figure out user and operator data fields nad what to do with them\n    //figure out how to send and receive them in the Planet contract\n    //figure out how to burn them and if you need to use approve functions\n    //must register send hook?\n    function mintInternal(uint256 amount) public {\n        require(ismintAuthed());\n        _mint(msg.sender, amount, \"MINTEDCOINS\", \"\");\n        //gets minted to sender, depositing them in the contract where corresponding users can WD them\n        //not sure what dod do with data fields, has to do with send hook\n    }\n\n    function burnInternal(uint256 amount) public {\n        require(ismintAuthed());\n        burn(amount, \"\");\n    }\n\n    function ismintAuthed() private view returns (bool) {\n        //gov contract and planets and owner can mint or burn\n        return\n            AURGov.isPlanet(msg.sender) ||\n            (owner == msg.sender) ||\n            (msg.sender == govContract);\n    }\n    //    function ismintAuthed() public view returns (bool){\n    //\tbool out = false;\n    //        out = out || (owner==msg.sender);//owner can mint\n    //        for (uint i = 0;i<minters.length;i++){\n    //               if (out){break;}\n    //               out = out || (msg.sender==minters[i]);\n    //        }\n    //        return out;\n    //    }\n\n    //function approveInternal(address holder, address spender, uint256 value) public {\n    //    _approve(holder, spender, value);\n    //}\n    /*    function authMinter(address payable _minter) public{\n       require(ismintAuthed());\n       minters.push(_minter);\n    }\n    function deauthMinter(address payable _minter) public{\n        for (uint i = 0;i<minters.length;i++){\n               if (minters[i]==_minter){delete minters[i];}\n           //need to figure out exactly what this does, \n          //  what i will get when i call minter[i] now? if it sets to 0 that is ok. must test\n        } \n    }\n*/\n}\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/AURToken.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/AURToken.sol",
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
        "sourceUnit": 5998,
        "src": "77:57:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/IAURGov.sol",
        "file": "./IAURGov.sol",
        "id": 541,
        "nodeType": "ImportDirective",
        "scope": 655,
        "sourceUnit": 1128,
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
              "referencedDeclaration": 5997,
              "src": "239:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC777_$5997",
                "typeString": "contract ERC777"
              }
            },
            "id": 543,
            "nodeType": "InheritanceSpecifier",
            "src": "239:6:1"
          }
        ],
        "contractDependencies": [
          3454,
          3854,
          5997,
          6142
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit",
        "fullyImplemented": true,
        "id": 654,
        "linearizedBaseContracts": [
          654,
          5997,
          3854,
          6142,
          3454
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
              "typeIdentifier": "t_contract$_IAURGov_$1127",
              "typeString": "contract IAURGov"
            },
            "typeName": {
              "contractScope": null,
              "id": 546,
              "name": "IAURGov",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1127,
              "src": "279:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                        "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                        "referencedDeclaration": 1127,
                        "src": "956:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IAURGov_$1127_$",
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
                        "typeIdentifier": "t_contract$_IAURGov_$1127",
                        "typeString": "contract IAURGov"
                      }
                    },
                    "src": "947:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                      "referencedDeclaration": 5624,
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
                  "referencedDeclaration": 5997,
                  "src": "674:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC777_$5997_$",
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
                      "referencedDeclaration": 5624,
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
                      "referencedDeclaration": 5223,
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
                              "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                          "referencedDeclaration": 1126,
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
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/AURToken.sol",
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
        "sourceUnit": 5998,
        "src": "77:57:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/contracts/contracts/IAURGov.sol",
        "file": "./IAURGov.sol",
        "id": 541,
        "nodeType": "ImportDirective",
        "scope": 655,
        "sourceUnit": 1128,
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
              "referencedDeclaration": 5997,
              "src": "239:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC777_$5997",
                "typeString": "contract ERC777"
              }
            },
            "id": 543,
            "nodeType": "InheritanceSpecifier",
            "src": "239:6:1"
          }
        ],
        "contractDependencies": [
          3454,
          3854,
          5997,
          6142
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit",
        "fullyImplemented": true,
        "id": 654,
        "linearizedBaseContracts": [
          654,
          5997,
          3854,
          6142,
          3454
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
              "typeIdentifier": "t_contract$_IAURGov_$1127",
              "typeString": "contract IAURGov"
            },
            "typeName": {
              "contractScope": null,
              "id": 546,
              "name": "IAURGov",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1127,
              "src": "279:7:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                        "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                        "referencedDeclaration": 1127,
                        "src": "956:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IAURGov_$1127_$",
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
                        "typeIdentifier": "t_contract$_IAURGov_$1127",
                        "typeString": "contract IAURGov"
                      }
                    },
                    "src": "947:25:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                      "referencedDeclaration": 5624,
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
                  "referencedDeclaration": 5997,
                  "src": "674:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC777_$5997_$",
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
                      "referencedDeclaration": 5624,
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
                      "referencedDeclaration": 5223,
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
                              "typeIdentifier": "t_contract$_IAURGov_$1127",
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
                          "referencedDeclaration": 1126,
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
  "networks": {
    "1597845373203": {
      "events": {
        "0x8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925": {
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
        "0xf4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f9": {
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
        "0xa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098": {
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
        "0x2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d": {
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
        "0x50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa1": {
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
        "0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987": {
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
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef": {
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
        }
      },
      "links": {},
      "address": "0x9FBDa871d559710256a2502A2517b794B482Db40",
      "transactionHash": "0x57769d109b98f6b02e4a01ed4c04c29f0b885db03d0d19b131d50babe310671e"
    }
  },
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-08-19T14:11:12.774Z",
  "networkType": "ethereum",
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
  