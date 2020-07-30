
    module.exports = {
      "network": "development",
      "address": "0x9246dAa1990885C66Fbd08DDBA676d4BD44D2Ced",
      "artifact": {
  "contractName": "AURToken",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "planet0",
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
    },
    {
      "inputs": [],
      "name": "ismintAuthed",
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
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_minter",
          "type": "address"
        }
      ],
      "name": "authMinter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_minter",
          "type": "address"
        }
      ],
      "name": "deauthMinter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"planet0\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"AuthorizedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Burned\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"RevokedOperator\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"Sent\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_minter\",\"type\":\"address\"}],\"name\":\"authMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"authorizeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnInternal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_minter\",\"type\":\"address\"}],\"name\":\"deauthMinter\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultOperators\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"granularity\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"tokenHolder\",\"type\":\"address\"}],\"name\":\"isOperatorFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ismintAuthed\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mintInternal\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorBurn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"operatorData\",\"type\":\"bytes\"}],\"name\":\"operatorSend\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"revokeOperator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"send\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"holder\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.     * Note that operator and allowance concepts are orthogonal: operators may not have allowance, and accounts with allowance may not be operators themselves.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Note that accounts cannot have allowance issued by their operators.\"},\"authorizeOperator(address)\":{\"details\":\"See {IERC777-authorizeOperator}.\"},\"balanceOf(address)\":{\"details\":\"Returns the amount of tokens owned by an account (`tokenHolder`).\"},\"burn(uint256,bytes)\":{\"details\":\"See {IERC777-burn}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"decimals()\":{\"details\":\"See {ERC20-decimals}.     * Always returns 18, as per the [ERC777 EIP](https://eips.ethereum.org/EIPS/eip-777#backward-compatibility).\"},\"defaultOperators()\":{\"details\":\"See {IERC777-defaultOperators}.\"},\"granularity()\":{\"details\":\"See {IERC777-granularity}.     * This implementation always returns `1`.\"},\"isOperatorFor(address,address)\":{\"details\":\"See {IERC777-isOperatorFor}.\"},\"name()\":{\"details\":\"See {IERC777-name}.\"},\"operatorBurn(address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorBurn}.     * Emits {Burned} and {IERC20-Transfer} events.\"},\"operatorSend(address,address,uint256,bytes,bytes)\":{\"details\":\"See {IERC777-operatorSend}.     * Emits {Sent} and {IERC20-Transfer} events.\"},\"revokeOperator(address)\":{\"details\":\"See {IERC777-revokeOperator}.\"},\"send(address,uint256,bytes)\":{\"details\":\"See {IERC777-send}.     * Also emits a {IERC20-Transfer} event for ERC20 compatibility.\"},\"symbol()\":{\"details\":\"See {IERC777-symbol}.\"},\"totalSupply()\":{\"details\":\"See {IERC777-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Unlike `send`, `recipient` is _not_ required to implement the {IERC777Recipient} interface if it is a contract.     * Also emits a {Sent} event.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.    * Note that operator and allowance concepts are orthogonal: operators cannot call `transferFrom` (unless they have allowance), and accounts with allowance cannot call `operatorSend` (unless they are operators).    * Emits {Sent}, {IERC20-Transfer} and {IERC20-Approval} events.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol\":\"AURToken\"},\"evmVersion\":\"constantinople\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol\":{\"keccak256\":\"0x840f3a1c2e0f5a0c86281bca33f00f077cfc16784744476adec96fd74df71076\",\"urls\":[\"bzz-raw://a434c1ed50684247409dadfd522ddea30ff62404f765ffad8075464a62249ab9\",\"dweb:/ipfs/QmVsr5cFLUdaF1gxyGYyCDZQhzNUPs6MQWyJhbWFLN1Wj7\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/IERC1820Registry.sol\":{\"keccak256\":\"0xdf8d7d1a119fc0d9f73a5c7a5d21bb0a4e0acb2a61e393c26334d397db628768\",\"urls\":[\"bzz-raw://1e471d73d901c48a465167257403f331454f4c34a945fb5cec10a57690193686\",\"dweb:/ipfs/QmemL8Nxf6SdTkQPq2SZMyNpkMAts5sL2dB2iHktzgPKeR\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5c26b39d26f7ed489e555d955dcd3e01872972e71fdd1528e93ec164e4f23385\",\"urls\":[\"bzz-raw://efdc632af6960cf865dbc113665ea1f5b90eab75cc40ec062b2f6ae6da582017\",\"dweb:/ipfs/QmfAZFDuG62vxmAN9DnXApv7e7PMzPqi4RkqqZHLMSQiY5\"]},\"@openzeppelin/contracts/token/ERC777/ERC777.sol\":{\"keccak256\":\"0xb05eb2b0516eabc19a112b20fe61940bf8100644f1c1fd8d090baabad3972e1a\",\"urls\":[\"bzz-raw://d139ba2135f975466dbdc519c6ac5561e408db09c69c806d9e59f16e0b5903a1\",\"dweb:/ipfs/Qmb3SD7Zw1QirY1PqSkQRyBT7ss3BDi1vJ2KjJz1dnVu7T\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0x7846aa81baa00557eba6215442eab916bc98f2e692fdc7b8523cf31122dc8e28\",\"urls\":[\"bzz-raw://40a5491dcdcdbea4bf8695e1c75f5f723dcd19c1392e8ff7a5fc56e13b5794e1\",\"dweb:/ipfs/QmcAFeKKXAFFEzCShHhT65smF8SDhhMg5oWmU3TWKPpTFT\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol\":{\"keccak256\":\"0xc9e219f9060c261ab6d140f448ccdcb207ce9835f0d2868d2c5d4a93486d2208\",\"urls\":[\"bzz-raw://a03ae88229a14e3c0060e558300ba7ab5bdcea10aa814c80d6148e0914d4fdf3\",\"dweb:/ipfs/QmYS76B2bAVTcuzmtYVAt6mY4qr16tZSsWP7dUWdcAgRww\"]},\"@openzeppelin/contracts/token/ERC777/IERC777Sender.sol\":{\"keccak256\":\"0xe4be617d1e043920582d2ec0bc1fe3985a3a49cfedac80c0cf0b9ea5d31044b5\",\"urls\":[\"bzz-raw://1beb3d95ab30460159efed1fc39f9253a3bb66ce50253fc487d927b7fe32165d\",\"dweb:/ipfs/QmVtVWHT6vVfFknNX9gxtrX1xYoLbq8YeZLZrSKYcCyKY8\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162002ed138038062002ed1833981810160405260208110156200003757600080fd5b5051604080518082018252600c81527f41757262697420546f6b656e0000000000000000000000000000000000000000602080830191825283518085018552600381527f41555200000000000000000000000000000000000000000000000000000000008183015284516000815291820190945282519293929091620000c19160029190620009c2565b508151620000d7906003906020850190620009c2565b508051620000ed90600490602084019062000a47565b5060005b6004548110156200014d57600160056000600484815481106200011057fe5b6000918252602080832091909101546001600160a01b031683528201929092526040019020805460ff1916911515919091179055600101620000f1565b50604080517f455243373737546f6b656e0000000000000000000000000000000000000000008152815190819003600b0181207f29965a1d0000000000000000000000000000000000000000000000000000000082523060048301819052602483019190915260448201529051731820a4b7618bde71dce8cdc73aab6c95905fad24916329965a1d91606480830192600092919082900301818387803b158015620001f757600080fd5b505af11580156200020c573d6000803e3d6000fd5b5050604080517f4552433230546f6b656e000000000000000000000000000000000000000000008152815190819003600a0181207f29965a1d0000000000000000000000000000000000000000000000000000000082523060048301819052602483019190915260448201529051731820a4b7618bde71dce8cdc73aab6c95905fad2493506329965a1d9250606480830192600092919082900301818387803b158015620002b957600080fd5b505af1158015620002ce573d6000803e3d6000fd5b5050600980546001600160a01b031990811633178255600a805460018101825560009182527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180546001600160a01b038b81169190941617905591546040805160208181018352858252825190810190925293815269d3c21bcecceda10000009850620003709750911694508693509091506001600160e01b036200037816565b505062000af1565b6001600160a01b038416620003ee57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000620004036001600160e01b036200060e16565b90506200041d81600087876001600160e01b036200061316565b62000439846001546200061960201b6200206e1790919060201c565b6001556001600160a01b038516600090815260208181526040909120546200046c9186906200206e62000619821b17901c565b6001600160a01b038616600090815260208190526040812091909155620004a49082908787878760016001600160e01b036200069516565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015620005255781810151838201526020016200050b565b50505050905090810190601f168015620005535780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015620005885781810151838201526020016200056e565b50505050905090810190601f168015620005b65780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b335b90565b50505050565b6000828201838110156200068e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b604080517faabbb8ca0000000000000000000000000000000000000000000000000000000081526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156200073357600080fd5b505afa15801562000748573d6000803e3d6000fd5b505050506040513d60208110156200075f57600080fd5b505190506001600160a01b03811615620008fd57806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015620008275781810151838201526020016200080d565b50505050905090810190601f168015620008555780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b838110156200088a57818101518382015260200162000870565b50505050905090810190601f168015620008b85780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015620008de57600080fd5b505af1158015620008f3573d6000803e3d6000fd5b505050506200097b565b81156200097b5762000923866001600160a01b03166200098560201b620020c81760201c565b156200097b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252604d81526020018062002e84604d913960600191505060405180910390fd5b5050505050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590620009ba57508115155b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1062000a0557805160ff191683800117855562000a35565b8280016001018555821562000a35579182015b8281111562000a3557825182559160200191906001019062000a18565b5062000a4392915062000aad565b5090565b82805482825590600052602060002090810192821562000a9f579160200282015b8281111562000a9f57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000a68565b5062000a4392915062000aca565b6200061091905b8082111562000a43576000815560010162000ab4565b6200061091905b8082111562000a435780546001600160a01b031916815560010162000ad1565b6123838062000b016000396000f3fe608060405234801561001057600080fd5b506004361061014d5760003560e01c8063959b8c3f116100c3578063dd62ed3e1161007c578063dd62ed3e146105da578063df4fbfff14610608578063f6376e9d14610625578063fad8b32a1461064b578063fc673c4f14610671578063fe9d9303146107af5761014d565b8063959b8c3f1461047c57806395d89b41146104a2578063990be248146104aa5780639bd9bbc6146104c7578063a9059cbb14610580578063d95b6371146105ac5761014d565b8063313ce56711610115578063313ce567146102b7578063556f0dc7146102d557806362ad1b83146102dd5780636341d3011461042857806370a08231146104305780637c90b0e2146104565761014d565b806306e485381461015257806306fdde03146101aa578063095ea7b31461022757806318160ddd1461026757806323b872dd14610281575b600080fd5b61015a61085a565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561019657818101518382015260200161017e565b505050509050019250505060405180910390f35b6101b26108bc565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ec5781810151838201526020016101d4565b50505050905090810190601f1680156102195780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102536004803603604081101561023d57600080fd5b506001600160a01b038135169060200135610946565b604080519115158252519081900360200190f35b61026f610968565b60408051918252519081900360200190f35b6102536004803603606081101561029757600080fd5b506001600160a01b0381358116916020810135909116906040013561096e565b6102bf610af1565b6040805160ff9092168252519081900360200190f35b61026f610af6565b610426600480360360a08110156102f357600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561032d57600080fd5b82018360208201111561033f57600080fd5b803590602001918460018302840111600160201b8311171561036057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103b257600080fd5b8201836020820111156103c457600080fd5b803590602001918460018302840111600160201b831117156103e557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610afb945050505050565b005b610253610b5d565b61026f6004803603602081101561044657600080fd5b50356001600160a01b0316610bc4565b6104266004803603602081101561046c57600080fd5b50356001600160a01b0316610bdf565b6104266004803603602081101561049257600080fd5b50356001600160a01b0316610c51565b6101b2610d9d565b610426600480360360208110156104c057600080fd5b5035610dfe565b610426600480360360608110156104dd57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561050c57600080fd5b82018360208201111561051e57600080fd5b803590602001918460018302840111600160201b8311171561053f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e50945050505050565b6102536004803603604081101561059657600080fd5b506001600160a01b038135169060200135610e7a565b610253600480360360408110156105c257600080fd5b506001600160a01b0381358116916020013516610f53565b61026f600480360360408110156105f057600080fd5b506001600160a01b0381358116916020013516610ff5565b6104266004803603602081101561061e57600080fd5b5035611020565b6104266004803603602081101561063b57600080fd5b50356001600160a01b031661104a565b6104266004803603602081101561066157600080fd5b50356001600160a01b03166110ad565b6104266004803603608081101561068757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156106b657600080fd5b8201836020820111156106c857600080fd5b803590602001918460018302840111600160201b831117156106e957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561073b57600080fd5b82018360208201111561074d57600080fd5b803590602001918460018302840111600160201b8311171561076e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506111f9945050505050565b610426600480360360408110156107c557600080fd5b81359190810190604081016020820135600160201b8111156107e657600080fd5b8201836020820111156107f857600080fd5b803590602001918460018302840111600160201b8311171561081957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611257945050505050565b606060048054806020026020016040519081016040528092919081815260200182805480156108b257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610894575b5050505050905090565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156108b25780601f1061091a576101008083540402835291602001916108b2565b820191906000526020600020905b81548152906001019060200180831161092857509395945050505050565b600080610951611279565b905061095e81858561127d565b5060019392505050565b60015490565b60006001600160a01b0383166109b55760405162461bcd60e51b81526004018080602001828103825260248152602001806122696024913960400191505060405180910390fd5b6001600160a01b0384166109fa5760405162461bcd60e51b81526004018080602001828103825260268152602001806122e26026913960400191505060405180910390fd5b6000610a04611279565b9050610a32818686866040518060200160405280600081525060405180602001604052806000815250611369565b610a5e8186868660405180602001604052806000815250604051806020016040528060008152506115b1565b610ab88582610ab3866040518060600160405280602981526020016122b9602991396001600160a01b03808c166000908152600860209081526040808320938b1683529290522054919063ffffffff6117d616565b61127d565b610ae6818686866040518060200160405280600081525060405180602001604052806000815250600061186d565b506001949350505050565b601290565b600190565b610b0c610b06611279565b86610f53565b610b475760405162461bcd60e51b815260040180806020018281038252602c81526020018061228d602c913960400191505060405180910390fd5b610b5685858585856001611b0d565b5050505050565b6000806009546001600160a01b03163314905060005b600a54811015610bbe578115610b8857610bbe565b8180610bb45750600a8181548110610b9c57fe5b6000918252602090912001546001600160a01b031633145b9150600101610b73565b50905090565b6001600160a01b031660009081526020819052604090205490565b60005b600a54811015610c4d57816001600160a01b0316600a8281548110610c0357fe5b6000918252602090912001546001600160a01b03161415610c4557600a8181548110610c2b57fe5b600091825260209091200180546001600160a01b03191690555b600101610be2565b5050565b806001600160a01b0316610c63611279565b6001600160a01b03161415610ca95760405162461bcd60e51b81526004018080602001828103825260248152602001806121d76024913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff1615610d0c5760076000610cd6611279565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff19169055610d53565b600160066000610d1a611279565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff19169115159190911790555b610d5b611279565b6001600160a01b0316816001600160a01b03167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b25780601f1061091a576101008083540402835291602001916108b2565b610e06610b5d565b610e0f57600080fd5b610e4d33826040518060400160405280600b81526020016a4d494e544544434f494e5360a81b81525060405180602001604052806000815250611be4565b50565b610e75610e5b611279565b848484604051806020016040528060008152506001611b0d565b505050565b60006001600160a01b038316610ec15760405162461bcd60e51b81526004018080602001828103825260248152602001806122696024913960400191505060405180910390fd5b6000610ecb611279565b9050610ef9818286866040518060200160405280600081525060405180602001604052806000815250611369565b610f258182868660405180602001604052806000815250604051806020016040528060008152506115b1565b61095e818286866040518060200160405280600081525060405180602001604052806000815250600061186d565b6000816001600160a01b0316836001600160a01b03161480610fbe57506001600160a01b03831660009081526005602052604090205460ff168015610fbe57506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b80610fee57506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b611028610b5d565b61103157600080fd5b610e4d8160405180602001604052806000815250611257565b611052610b5d565b61105b57600080fd5b600a80546001810182556000919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180546001600160a01b0319166001600160a01b0392909216919091179055565b6110b5611279565b6001600160a01b0316816001600160a01b031614156111055760405162461bcd60e51b81526004018080602001828103825260218152602001806121fb6021913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff161561117157600160076000611134611279565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff19169115159190911790556111af565b6006600061117d611279565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff191690555b6111b7611279565b6001600160a01b0316816001600160a01b03167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61120a611204611279565b85610f53565b6112455760405162461bcd60e51b815260040180806020018281038252602c81526020018061228d602c913960400191505060405180910390fd5b61125184848484611e28565b50505050565b610c4d611262611279565b838360405180602001604052806000815250611e28565b3390565b6001600160a01b0383166112c25760405162461bcd60e51b81526004018080602001828103825260258152602001806121476025913960400191505060405180910390fd5b6001600160a01b0382166113075760405162461bcd60e51b815260040180806020018281038252602381526020018061232b6023913960400191505060405180910390fd5b6001600160a01b03808416600081815260086020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156113ed57600080fd5b505afa158015611401573d6000803e3d6000fd5b505050506040513d602081101561141757600080fd5b505190506001600160a01b038116156115a857806001600160a01b03166375ab97828888888888886040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156114dd5781810151838201526020016114c5565b50505050905090810190601f16801561150a5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561153d578181015183820152602001611525565b50505050905090810190601f16801561156a5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561158f57600080fd5b505af11580156115a3573d6000803e3d6000fd5b505050505b50505050505050565b6115bd86868686611251565b6116008360405180606001604052806027815260200161218e602791396001600160a01b038816600090815260208190526040902054919063ffffffff6117d616565b6001600160a01b038087166000908152602081905260408082209390935590861681522054611635908463ffffffff61206e16565b600080866001600160a01b03166001600160a01b0316815260200190815260200160002081905550836001600160a01b0316856001600160a01b0316876001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156116e65781810151838201526020016116ce565b50505050905090810190601f1680156117135780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561174657818101518382015260200161172e565b50505050905090810190601f1680156117735780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a4836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b600081848411156118655760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561182a578181015183820152602001611812565b50505050905090810190601f1680156118575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156118f157600080fd5b505afa158015611905573d6000803e3d6000fd5b505050506040513d602081101561191b57600080fd5b505190506001600160a01b03811615611aaf57806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156119e05781810151838201526020016119c8565b50505050905090810190601f168015611a0d5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611a40578181015183820152602001611a28565b50505050905090810190601f168015611a6d5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611a9257600080fd5b505af1158015611aa6573d6000803e3d6000fd5b50505050611b03565b8115611b0357611ac7866001600160a01b03166120c8565b15611b035760405162461bcd60e51b815260040180806020018281038252604d81526020018061221c604d913960600191505060405180910390fd5b5050505050505050565b6001600160a01b038616611b525760405162461bcd60e51b815260040180806020018281038252602281526020018061216c6022913960400191505060405180910390fd5b6001600160a01b038516611bad576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611bb7611279565b9050611bc7818888888888611369565b611bd58188888888886115b1565b6115a88188888888888861186d565b6001600160a01b038416611c3f576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611c49611279565b9050611c588160008787611251565b600154611c6b908563ffffffff61206e16565b6001556001600160a01b038516600090815260208190526040902054611c97908563ffffffff61206e16565b6001600160a01b038616600090815260208190526040812091909155611cc490829087878787600161186d565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611d43578181015183820152602001611d2b565b50505050905090810190601f168015611d705780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611da3578181015183820152602001611d8b565b50505050905090810190601f168015611dd05780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b6001600160a01b038416611e6d5760405162461bcd60e51b81526004018080602001828103825260228152602001806121b56022913960400191505060405180910390fd5b6000611e77611279565b9050611e868186600087611251565b611e9581866000878787611369565b611ed884604051806060016040528060238152602001612308602391396001600160a01b038816600090815260208190526040902054919063ffffffff6117d616565b6001600160a01b038616600090815260208190526040902055600154611f04908563ffffffff61210416565b600181905550846001600160a01b0316816001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611f89578181015183820152602001611f71565b50505050905090810190601f168015611fb65780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611fe9578181015183820152602001611fd1565b50505050905090810190601f1680156120165780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516000916001600160a01b038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b600082820183811015610fee576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906120fc57508115155b949350505050565b6000610fee83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117d656fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a264697066735822122085db3b1dd2bde02607d12d2c47a92f810c83733752301eb56f445fd3b0e95aac64736f6c634300060200334552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e74",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061014d5760003560e01c8063959b8c3f116100c3578063dd62ed3e1161007c578063dd62ed3e146105da578063df4fbfff14610608578063f6376e9d14610625578063fad8b32a1461064b578063fc673c4f14610671578063fe9d9303146107af5761014d565b8063959b8c3f1461047c57806395d89b41146104a2578063990be248146104aa5780639bd9bbc6146104c7578063a9059cbb14610580578063d95b6371146105ac5761014d565b8063313ce56711610115578063313ce567146102b7578063556f0dc7146102d557806362ad1b83146102dd5780636341d3011461042857806370a08231146104305780637c90b0e2146104565761014d565b806306e485381461015257806306fdde03146101aa578063095ea7b31461022757806318160ddd1461026757806323b872dd14610281575b600080fd5b61015a61085a565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561019657818101518382015260200161017e565b505050509050019250505060405180910390f35b6101b26108bc565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101ec5781810151838201526020016101d4565b50505050905090810190601f1680156102195780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102536004803603604081101561023d57600080fd5b506001600160a01b038135169060200135610946565b604080519115158252519081900360200190f35b61026f610968565b60408051918252519081900360200190f35b6102536004803603606081101561029757600080fd5b506001600160a01b0381358116916020810135909116906040013561096e565b6102bf610af1565b6040805160ff9092168252519081900360200190f35b61026f610af6565b610426600480360360a08110156102f357600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561032d57600080fd5b82018360208201111561033f57600080fd5b803590602001918460018302840111600160201b8311171561036057600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156103b257600080fd5b8201836020820111156103c457600080fd5b803590602001918460018302840111600160201b831117156103e557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610afb945050505050565b005b610253610b5d565b61026f6004803603602081101561044657600080fd5b50356001600160a01b0316610bc4565b6104266004803603602081101561046c57600080fd5b50356001600160a01b0316610bdf565b6104266004803603602081101561049257600080fd5b50356001600160a01b0316610c51565b6101b2610d9d565b610426600480360360208110156104c057600080fd5b5035610dfe565b610426600480360360608110156104dd57600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561050c57600080fd5b82018360208201111561051e57600080fd5b803590602001918460018302840111600160201b8311171561053f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610e50945050505050565b6102536004803603604081101561059657600080fd5b506001600160a01b038135169060200135610e7a565b610253600480360360408110156105c257600080fd5b506001600160a01b0381358116916020013516610f53565b61026f600480360360408110156105f057600080fd5b506001600160a01b0381358116916020013516610ff5565b6104266004803603602081101561061e57600080fd5b5035611020565b6104266004803603602081101561063b57600080fd5b50356001600160a01b031661104a565b6104266004803603602081101561066157600080fd5b50356001600160a01b03166110ad565b6104266004803603608081101561068757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b8111156106b657600080fd5b8201836020820111156106c857600080fd5b803590602001918460018302840111600160201b831117156106e957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561073b57600080fd5b82018360208201111561074d57600080fd5b803590602001918460018302840111600160201b8311171561076e57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506111f9945050505050565b610426600480360360408110156107c557600080fd5b81359190810190604081016020820135600160201b8111156107e657600080fd5b8201836020820111156107f857600080fd5b803590602001918460018302840111600160201b8311171561081957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611257945050505050565b606060048054806020026020016040519081016040528092919081815260200182805480156108b257602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311610894575b5050505050905090565b60028054604080516020601f60001961010060018716150201909416859004938401819004810282018101909252828152606093909290918301828280156108b25780601f1061091a576101008083540402835291602001916108b2565b820191906000526020600020905b81548152906001019060200180831161092857509395945050505050565b600080610951611279565b905061095e81858561127d565b5060019392505050565b60015490565b60006001600160a01b0383166109b55760405162461bcd60e51b81526004018080602001828103825260248152602001806122696024913960400191505060405180910390fd5b6001600160a01b0384166109fa5760405162461bcd60e51b81526004018080602001828103825260268152602001806122e26026913960400191505060405180910390fd5b6000610a04611279565b9050610a32818686866040518060200160405280600081525060405180602001604052806000815250611369565b610a5e8186868660405180602001604052806000815250604051806020016040528060008152506115b1565b610ab88582610ab3866040518060600160405280602981526020016122b9602991396001600160a01b03808c166000908152600860209081526040808320938b1683529290522054919063ffffffff6117d616565b61127d565b610ae6818686866040518060200160405280600081525060405180602001604052806000815250600061186d565b506001949350505050565b601290565b600190565b610b0c610b06611279565b86610f53565b610b475760405162461bcd60e51b815260040180806020018281038252602c81526020018061228d602c913960400191505060405180910390fd5b610b5685858585856001611b0d565b5050505050565b6000806009546001600160a01b03163314905060005b600a54811015610bbe578115610b8857610bbe565b8180610bb45750600a8181548110610b9c57fe5b6000918252602090912001546001600160a01b031633145b9150600101610b73565b50905090565b6001600160a01b031660009081526020819052604090205490565b60005b600a54811015610c4d57816001600160a01b0316600a8281548110610c0357fe5b6000918252602090912001546001600160a01b03161415610c4557600a8181548110610c2b57fe5b600091825260209091200180546001600160a01b03191690555b600101610be2565b5050565b806001600160a01b0316610c63611279565b6001600160a01b03161415610ca95760405162461bcd60e51b81526004018080602001828103825260248152602001806121d76024913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff1615610d0c5760076000610cd6611279565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff19169055610d53565b600160066000610d1a611279565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff19169115159190911790555b610d5b611279565b6001600160a01b0316816001600160a01b03167ff4caeb2d6ca8932a215a353d0703c326ec2d81fc68170f320eb2ab49e9df61f960405160405180910390a350565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b25780601f1061091a576101008083540402835291602001916108b2565b610e06610b5d565b610e0f57600080fd5b610e4d33826040518060400160405280600b81526020016a4d494e544544434f494e5360a81b81525060405180602001604052806000815250611be4565b50565b610e75610e5b611279565b848484604051806020016040528060008152506001611b0d565b505050565b60006001600160a01b038316610ec15760405162461bcd60e51b81526004018080602001828103825260248152602001806122696024913960400191505060405180910390fd5b6000610ecb611279565b9050610ef9818286866040518060200160405280600081525060405180602001604052806000815250611369565b610f258182868660405180602001604052806000815250604051806020016040528060008152506115b1565b61095e818286866040518060200160405280600081525060405180602001604052806000815250600061186d565b6000816001600160a01b0316836001600160a01b03161480610fbe57506001600160a01b03831660009081526005602052604090205460ff168015610fbe57506001600160a01b0380831660009081526007602090815260408083209387168352929052205460ff16155b80610fee57506001600160a01b0380831660009081526006602090815260408083209387168352929052205460ff165b9392505050565b6001600160a01b03918216600090815260086020908152604080832093909416825291909152205490565b611028610b5d565b61103157600080fd5b610e4d8160405180602001604052806000815250611257565b611052610b5d565b61105b57600080fd5b600a80546001810182556000919091527fc65a7bb8d6351c1cf70c95a316cc6a92839c986682d98bc35f958f4883f9d2a80180546001600160a01b0319166001600160a01b0392909216919091179055565b6110b5611279565b6001600160a01b0316816001600160a01b031614156111055760405162461bcd60e51b81526004018080602001828103825260218152602001806121fb6021913960400191505060405180910390fd5b6001600160a01b03811660009081526005602052604090205460ff161561117157600160076000611134611279565b6001600160a01b03908116825260208083019390935260409182016000908120918616815292529020805460ff19169115159190911790556111af565b6006600061117d611279565b6001600160a01b03908116825260208083019390935260409182016000908120918516815292529020805460ff191690555b6111b7611279565b6001600160a01b0316816001600160a01b03167f50546e66e5f44d728365dc3908c63bc5cfeeab470722c1677e3073a6ac294aa160405160405180910390a350565b61120a611204611279565b85610f53565b6112455760405162461bcd60e51b815260040180806020018281038252602c81526020018061228d602c913960400191505060405180910390fd5b61125184848484611e28565b50505050565b610c4d611262611279565b838360405180602001604052806000815250611e28565b3390565b6001600160a01b0383166112c25760405162461bcd60e51b81526004018080602001828103825260258152602001806121476025913960400191505060405180910390fd5b6001600160a01b0382166113075760405162461bcd60e51b815260040180806020018281038252602381526020018061232b6023913960400191505060405180910390fd5b6001600160a01b03808416600081815260086020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6040805163555ddc6560e11b81526001600160a01b03871660048201527f29ddb589b1fb5fc7cf394961c1adf5f8c6454761adf795e67fe149f658abe89560248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156113ed57600080fd5b505afa158015611401573d6000803e3d6000fd5b505050506040513d602081101561141757600080fd5b505190506001600160a01b038116156115a857806001600160a01b03166375ab97828888888888886040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156114dd5781810151838201526020016114c5565b50505050905090810190601f16801561150a5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561153d578181015183820152602001611525565b50505050905090810190601f16801561156a5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b15801561158f57600080fd5b505af11580156115a3573d6000803e3d6000fd5b505050505b50505050505050565b6115bd86868686611251565b6116008360405180606001604052806027815260200161218e602791396001600160a01b038816600090815260208190526040902054919063ffffffff6117d616565b6001600160a01b038087166000908152602081905260408082209390935590861681522054611635908463ffffffff61206e16565b600080866001600160a01b03166001600160a01b0316815260200190815260200160002081905550836001600160a01b0316856001600160a01b0316876001600160a01b03167f06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156116e65781810151838201526020016116ce565b50505050905090810190601f1680156117135780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b8381101561174657818101518382015260200161172e565b50505050905090810190601f1680156117735780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a4836001600160a01b0316856001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3505050505050565b600081848411156118655760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561182a578181015183820152602001611812565b50505050905090810190601f1680156118575780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6040805163555ddc6560e11b81526001600160a01b03871660048201527fb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b60248201529051600091731820a4b7618bde71dce8cdc73aab6c95905fad249163aabbb8ca91604480820192602092909190829003018186803b1580156118f157600080fd5b505afa158015611905573d6000803e3d6000fd5b505050506040513d602081101561191b57600080fd5b505190506001600160a01b03811615611aaf57806001600160a01b03166223de298989898989896040518763ffffffff1660e01b815260040180876001600160a01b03166001600160a01b03168152602001866001600160a01b03166001600160a01b03168152602001856001600160a01b03166001600160a01b031681526020018481526020018060200180602001838103835285818151815260200191508051906020019080838360005b838110156119e05781810151838201526020016119c8565b50505050905090810190601f168015611a0d5780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611a40578181015183820152602001611a28565b50505050905090810190601f168015611a6d5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b158015611a9257600080fd5b505af1158015611aa6573d6000803e3d6000fd5b50505050611b03565b8115611b0357611ac7866001600160a01b03166120c8565b15611b035760405162461bcd60e51b815260040180806020018281038252604d81526020018061221c604d913960600191505060405180910390fd5b5050505050505050565b6001600160a01b038616611b525760405162461bcd60e51b815260040180806020018281038252602281526020018061216c6022913960400191505060405180910390fd5b6001600160a01b038516611bad576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a2073656e6420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611bb7611279565b9050611bc7818888888888611369565b611bd58188888888886115b1565b6115a88188888888888861186d565b6001600160a01b038416611c3f576040805162461bcd60e51b815260206004820181905260248201527f4552433737373a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6000611c49611279565b9050611c588160008787611251565b600154611c6b908563ffffffff61206e16565b6001556001600160a01b038516600090815260208190526040902054611c97908563ffffffff61206e16565b6001600160a01b038616600090815260208190526040812091909155611cc490829087878787600161186d565b846001600160a01b0316816001600160a01b03167f2fe5be0146f74c5bce36c0b80911af6c7d86ff27e89d5cfa61fc681327954e5d868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611d43578181015183820152602001611d2b565b50505050905090810190601f168015611d705780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611da3578181015183820152602001611d8b565b50505050905090810190601f168015611dd05780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516001600160a01b038716916000917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b6001600160a01b038416611e6d5760405162461bcd60e51b81526004018080602001828103825260228152602001806121b56022913960400191505060405180910390fd5b6000611e77611279565b9050611e868186600087611251565b611e9581866000878787611369565b611ed884604051806060016040528060238152602001612308602391396001600160a01b038816600090815260208190526040902054919063ffffffff6117d616565b6001600160a01b038616600090815260208190526040902055600154611f04908563ffffffff61210416565b600181905550846001600160a01b0316816001600160a01b03167fa78a9be3a7b862d26933ad85fb11d80ef66b8f972d7cbba06621d583943a4098868686604051808481526020018060200180602001838103835285818151815260200191508051906020019080838360005b83811015611f89578181015183820152602001611f71565b50505050905090810190601f168015611fb65780820380516001836020036101000a031916815260200191505b50838103825284518152845160209182019186019080838360005b83811015611fe9578181015183820152602001611fd1565b50505050905090810190601f1680156120165780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a36040805185815290516000916001600160a01b038816917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050505050565b600082820183811015610fee576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906120fc57508115155b949350505050565b6000610fee83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117d656fe4552433737373a20617070726f76652066726f6d20746865207a65726f20616464726573734552433737373a2073656e642066726f6d20746865207a65726f20616464726573734552433737373a207472616e7366657220616d6f756e7420657863656564732062616c616e63654552433737373a206275726e2066726f6d20746865207a65726f20616464726573734552433737373a20617574686f72697a696e672073656c66206173206f70657261746f724552433737373a207265766f6b696e672073656c66206173206f70657261746f724552433737373a20746f6b656e20726563697069656e7420636f6e747261637420686173206e6f20696d706c656d656e74657220666f7220455243373737546f6b656e73526563697069656e744552433737373a207472616e7366657220746f20746865207a65726f20616464726573734552433737373a2063616c6c6572206973206e6f7420616e206f70657261746f7220666f7220686f6c6465724552433737373a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654552433737373a207472616e736665722066726f6d20746865207a65726f20616464726573734552433737373a206275726e20616d6f756e7420657863656564732062616c616e63654552433737373a20617070726f766520746f20746865207a65726f2061646472657373a264697066735822122085db3b1dd2bde02607d12d2c47a92f810c83733752301eb56f445fd3b0e95aac64736f6c63430006020033",
  "sourceMap": "137:2303:1:-:0;;;449:396;8:9:-1;5:2;;;30:1;27;20:12;5:2;449:396:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;449:396:1;2645:623:18;;;;;;;;;;;;449:396:1;2645:623:18;;;;;;;;;;;;;;;;;;;;;537:17:1;;-1:-1:-1;537:17:1;;;;;;;;2781:12:18;;2645:623;;;537:17:1;;2781:12:18;;:5;;2645:623;2781:12;:::i;:::-;-1:-1:-1;2803:16:18;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;2830:41:18;;;;:22;;:41;;;;;:::i;:::-;-1:-1:-1;2886:9:18;2881:136;2905:22;:29;2901:33;;2881:136;;;3002:4;2955:17;:44;2973:22;2996:1;2973:25;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2973:25:18;2955:44;;;;;;;;;;;;:51;;-1:-1:-1;;2955:51:18;;;;;;;;;;-1:-1:-1;2936:3:18;2881:136;;;-1:-1:-1;3115:24:18;;;;;;;;;;;;;;;;3058:97;;;3108:4;3058:97;;;;;;;;;;;;;;;;;;;1235:42;;3058:41;;:97;;;;;-1:-1:-1;;3058:97:18;;;;;;;-1:-1:-1;1235:42:18;3058:97;;;5:2:-1;;;;30:1;27;20:12;5:2;3058:97:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;3222:23:18;;;;;;;;;;;;;;;;3165:96;;;3215:4;3165:96;;;;;;;;;;;;;;;;;;;1235:42;;-1:-1:-1;3165:41:18;;-1:-1:-1;3165:96:18;;;;;-1:-1:-1;;3165:96:18;;;;;;;-1:-1:-1;1235:42:18;3165:96;;;5:2:-1;;;;30:1;27;20:12;5:2;3165:96:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;-1:-1;;741:5:1::1;:18:::0;;-1:-1:-1;;;;;;741:18:1;;::::1;749:10;741:18;::::0;;769:7:::1;27:10:-1::0;;741:18:1;23::-1;::::1;45:23:::0;;559:22:1::1;769:21:::0;;;;::::1;::::0;;-1:-1:-1;;;;;769:21:1;;::::1;::::0;;;::::1;;::::0;;806:5;;800:36:::1;::::0;;769:21:::1;800:36:::0;;::::1;::::0;;;;;;;;;::::1;::::0;;;;;;584:14:::1;::::0;-1:-1:-1;800:36:1::1;::::0;-1:-1:-1;806:5:1;::::1;::::0;-1:-1:-1;584:14:1;;-1:-1:-1;800:36:1;;-1:-1:-1;;;;;;800:5:1::1;:36:::0;:::i:1;:::-;449:396;::::0;137:2303;;10335:725:18;-1:-1:-1;;;;;10514:21:18;;10506:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;-1:-1:-1;;;;;10602:10:18;:12;:::i;:::-;10583:31;-1:-1:-1;10625:59:18;10583:31;10664:1;10668:7;10677:6;-1:-1:-1;;;;;10625:20:18;:59;:::i;:::-;10744:24;10761:6;10744:12;;:16;;;;;;:24;;;;:::i;:::-;10729:12;:39;-1:-1:-1;;;;;10799:18:18;;:9;:18;;;;;;;;;;;;:30;;10822:6;;10799:22;;;;;:30;;:::i;:::-;-1:-1:-1;;;;;10778:18:18;;:9;:18;;;;;;;;;;:51;;;;10840:88;;10860:8;;10788:7;10891:6;10899:8;10909:12;10923:4;-1:-1:-1;;;;;10840:19:18;:88;:::i;:::-;10961:7;-1:-1:-1;;;;;10944:57:18;10951:8;-1:-1:-1;;;;;10944:57:18;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;10944:57:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11016:37;;;;;;;;-1:-1:-1;;;;;11016:37:18;;;11033:1;;11016:37;;;;;;;;;10335:725;;;;;:::o;590:104:7:-;677:10;590:104;;:::o;17189:110:18:-;;;;;:::o;874:176:11:-;932:7;963:5;;;986:6;;;;978:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1042:1;874:176;-1:-1:-1;;;874:176:11:o;15873:688:18:-;16152:79;;;;;;-1:-1:-1;;;;;16152:79:18;;;;;;1883:66;16152:79;;;;;;16130:19;;1235:42;;16152:41;;:79;;;;;;;;;;;;;;;1235:42;16152:79;;;5:2:-1;;;;30:1;27;20:12;5:2;16152:79:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:18;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;16152:79:18;;-1:-1:-1;;;;;;16245:25:18;;;16241:314;;16303:11;-1:-1:-1;;;;;16286:44:18;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;-1:-1:-1;;;;;16286:96:18;-1:-1:-1;;;;;16286:96:18;;;;;;-1:-1:-1;;;;;16286:96:18;-1:-1:-1;;;;;16286:96:18;;;;;;-1:-1:-1;;;;;16286:96:18;-1:-1:-1;;;;;16286:96:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;16286:96:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16286:96:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:18;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;-1:-1:-1;;;;;16447:13:18;;;;;;:15;;:::i;:::-;16446:16;16438:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15873:688;;;;;;;;:::o;718:610:22:-;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;1305:15:22;;;1278:42;1270:51;718:610;-1:-1:-1;;;;718:610:22:o;137:2303:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;137:2303:1;;;-1:-1:-1;137:2303:1;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;137:2303:1;-1:-1:-1;;;;;137:2303:1;;;;;;;;;;;-1:-1:-1;137:2303:1;;;;;;;-1:-1:-1;137:2303:1;;;-1:-1:-1;137:2303:1;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;;137:2303:1;;;;;;;;;;;;;;",
  "deployedSourceMap": "137:2303:1:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;137:2303:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7012:122:18;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;7012:122:18;;;;;;;;;;;;;;;;;3322:90;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;3322:90:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8539:189;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;8539:189:18;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;4083:115;;;:::i;:::-;;;;;;;;;;;;;;;;9093:672;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;9093:672:18;;;;;;;;;;;;;;;;;:::i;3746:74::-;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3935:87;;;:::i;7253:366::-;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;7253:366:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;7253:366:18;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7253:366:18;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7253:366:18;;;;;;;;-1:-1:-1;7253:366:18;;-1:-1:-1;;;;;5:28;;2:2;;;46:1;43;36:12;2:2;7253:366:18;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7253:366:18;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7253:366:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7253:366:18;;-1:-1:-1;7253:366:18;;-1:-1:-1;;;;;7253:366:18:i;:::-;;1540:297:1;;;:::i;4298:142:18:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4298:142:18;-1:-1:-1;;;;;4298:142:18;;:::i;2108:330:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2108:330:1;-1:-1:-1;;;;;2108:330:1;;:::i;6081:405:18:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6081:405:18;-1:-1:-1;;;;;6081:405:18;;:::i;3468:94::-;;;:::i;1081:325:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1081:325:1;;:::i;4570:156:18:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;4570:156:18;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;4570:156:18;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;4570:156:18;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;4570:156:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;4570:156:18;;-1:-1:-1;4570:156:18;;-1:-1:-1;;;;;4570:156:18:i;4957:431::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;4957:431:18;;;;;;;;:::i;5701:313::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;5701:313:18;;;;;;;;;;:::i;8258:143::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;8258:143:18;;;;;;;;;;:::i;1411:124:1:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1411:124:1;;:::i;1983:120::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1983:120:1;-1:-1:-1;;;;;1983:120:1;;:::i;6550:396:18:-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6550:396:18;-1:-1:-1;;;;;6550:396:18;;:::i;7740:279::-;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;7740:279:18;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;7740:279:18;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7740:279:18;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7740:279:18;;;;;;;;-1:-1:-1;7740:279:18;;-1:-1:-1;;;;;5:28;;2:2;;;46:1;43;36:12;2:2;7740:279:18;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;7740:279:18;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;7740:279:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;7740:279:18;;-1:-1:-1;7740:279:18;;-1:-1:-1;;;;;7740:279:18:i;5518:120::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5518:120:18;;;;;;;;;;;;;;-1:-1:-1;;;5:28;;2:2;;;46:1;43;36:12;2:2;5518:120:18;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;5518:120:18;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;-1:-1;;;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;5518:120:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;5518:120:18;;-1:-1:-1;5518:120:18;;-1:-1:-1;;;;;5518:120:18:i;7012:122::-;7070:16;7105:22;7098:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;7098:29:18;;;;;;;;;;;;;;;;;;;;;;;7012:122;:::o;3322:90::-;3400:5;3393:12;;;;;;;-1:-1:-1;;3393:12:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3368:13;;3393:12;;3400:5;;3393:12;;3400:5;3393:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;3393:12:18;;3322:90;-1:-1:-1;;;;;3322:90:18:o;8539:189::-;8613:4;8629:14;8646:12;:10;:12::i;:::-;8629:29;;8668:32;8677:6;8685:7;8694:5;8668:8;:32::i;:::-;-1:-1:-1;8717:4:18;;8539:189;-1:-1:-1;;;8539:189:18:o;4083:115::-;4179:12;;4083:115;:::o;9093:672::-;9191:4;-1:-1:-1;;;;;9215:23:18;;9207:72;;;;-1:-1:-1;;;9207:72:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9297:20:18;;9289:71;;;;-1:-1:-1;;;9289:71:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9371:15;9389:12;:10;:12::i;:::-;9371:30;;9412:61;9430:7;9439:6;9447:9;9458:6;9412:61;;;;;;;;;;;;;;;;;;;;;;;;:17;:61::i;:::-;9484:49;9490:7;9499:6;9507:9;9518:6;9484:49;;;;;;;;;;;;;;;;;;;;;;;;:5;:49::i;:::-;9543:112;9552:6;9560:7;9569:85;9602:6;9569:85;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;9569:19:18;;;;;;;:11;:19;;;;;;;;:28;;;;;;;;;;;:85;;:32;:85;:::i;:::-;9543:8;:112::i;:::-;9666:70;9686:7;9695:6;9703:9;9714:6;9666:70;;;;;;;;;;;;;;;;;;;;;;;;9730:5;9666:19;:70::i;:::-;-1:-1:-1;9754:4:18;;9093:672;-1:-1:-1;;;;9093:672:18:o;3746:74::-;3811:2;3746:74;:::o;3935:87::-;4014:1;3935:87;:::o;7253:366::-;7460:35;7474:12;:10;:12::i;:::-;7488:6;7460:13;:35::i;:::-;7452:92;;;;-1:-1:-1;;;7452:92:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7554:58;7560:6;7568:9;7579:6;7587:4;7593:12;7607:4;7554:5;:58::i;:::-;7253:366;;;;;:::o;1540:297:1:-;1585:4;;1633:5;;-1:-1:-1;;;;;1633:5:1;1640:10;1633:17;1619:32;-1:-1:-1;1682:6:1;1677:134;1695:7;:14;1693:16;;1677:134;;;1735:3;1731:16;;;1740:5;;1731:16;1769:3;:31;;;;1789:7;1797:1;1789:10;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1789:10:1;1777;:22;1769:31;1763:37;-1:-1:-1;1710:3:1;;1677:134;;;-1:-1:-1;1827:3:1;-1:-1:-1;1540:297:1;:::o;4298:142:18:-;-1:-1:-1;;;;;4411:22:18;4385:7;4411:22;;;;;;;;;;;;4298:142::o;2108:330:1:-;2176:6;2171:260;2189:7;:14;2187:16;;2171:260;;;2241:7;-1:-1:-1;;;;;2229:19:1;:7;2237:1;2229:10;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;2229:10:1;:19;2225:44;;;2257:7;2265:1;2257:10;;;;;;;;;;;;;;;;;2250:17;;-1:-1:-1;;;;;;2250:17:1;;;2225:44;2204:3;;2171:260;;;;2108:330;:::o;6081:405:18:-;6177:8;-1:-1:-1;;;;;6161:24:18;:12;:10;:12::i;:::-;-1:-1:-1;;;;;6161:24:18;;;6153:73;;;;-1:-1:-1;;;6153:73:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6241:27:18;;;;;;:17;:27;;;;;;;;6237:185;;;6291:24;:38;6316:12;:10;:12::i;:::-;-1:-1:-1;;;;;6291:38:18;;;;;;;;;;;;;;;;;-1:-1:-1;6291:38:18;;;:48;;;;;;;;;6284:55;;-1:-1:-1;;6284:55:18;;;6237:185;;;6407:4;6370:10;:24;6381:12;:10;:12::i;:::-;-1:-1:-1;;;;;6370:24:18;;;;;;;;;;;;;;;;;-1:-1:-1;6370:24:18;;;:34;;;;;;;;;:41;;-1:-1:-1;;6370:41:18;;;;;;;;;;6237:185;6466:12;:10;:12::i;:::-;-1:-1:-1;;;;;6437:42:18;6456:8;-1:-1:-1;;;;;6437:42:18;;;;;;;;;;;6081:405;:::o;3468:94::-;3548:7;3541:14;;;;;;;;-1:-1:-1;;3541:14:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3516:13;;3541:14;;3548:7;;3541:14;;3548:7;3541:14;;;;;;;;;;;;;;;;;;;;;;;;1081:325:1;1159:14;:12;:14::i;:::-;1151:23;;;;;;1184:44;1190:10;1202:6;1184:44;;;;;;;;;;;;;-1:-1:-1;;;1184:44:1;;;;;;;;;;;;;;;:5;:44::i;:::-;1081:325;:::o;4570:156:18:-;4665:54;4671:12;:10;:12::i;:::-;4685:9;4696:6;4704:4;4665:54;;;;;;;;;;;;4714:4;4665:5;:54::i;:::-;4570:156;;;:::o;4957:431::-;5035:4;-1:-1:-1;;;;;5059:23:18;;5051:72;;;;-1:-1:-1;;;5051:72:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5134:12;5149;:10;:12::i;:::-;5134:27;;5172:56;5190:4;5196;5202:9;5213:6;5172:56;;;;;;;;;;;;;;;;;;;;;;;;:17;:56::i;:::-;5239:44;5245:4;5251;5257:9;5268:6;5239:44;;;;;;;;;;;;;;;;;;;;;;;;:5;:44::i;:::-;5294:65;5314:4;5320;5326:9;5337:6;5294:65;;;;;;;;;;;;;;;;;;;;;;;;5353:5;5294:19;:65::i;5701:313::-;5815:4;5850:11;-1:-1:-1;;;;;5838:23:18;:8;-1:-1:-1;;;;;5838:23:18;;:120;;;-1:-1:-1;;;;;;5878:27:18;;;;;;:17;:27;;;;;;;;:79;;;;-1:-1:-1;;;;;;5910:37:18;;;;;;;:24;:37;;;;;;;;:47;;;;;;;;;;;;5909:48;5878:79;5838:169;;;-1:-1:-1;;;;;;5974:23:18;;;;;;;:10;:23;;;;;;;;:33;;;;;;;;;;;;5838:169;5831:176;5701:313;-1:-1:-1;;;5701:313:18:o;8258:143::-;-1:-1:-1;;;;;8366:19:18;;;8340:7;8366:19;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;8258:143::o;1411:124:1:-;1487:14;:12;:14::i;:::-;1479:23;;;;;;1512:16;1517:6;1512:16;;;;;;;;;;;;:4;:16::i;1983:120::-;2051:14;:12;:14::i;:::-;2043:23;;;;;;2075:7;27:10:-1;;39:1;23:18;;45:23;;-1:-1;2075:21:1;;;;;;;;-1:-1:-1;;;;;;2075:21:1;-1:-1:-1;;;;;2075:21:1;;;;;;;;;;1983:120::o;6550:396:18:-;6639:12;:10;:12::i;:::-;-1:-1:-1;;;;;6627:24:18;:8;-1:-1:-1;;;;;6627:24:18;;;6619:70;;;;-1:-1:-1;;;6619:70:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;6704:27:18;;;;;;:17;:27;;;;;;;;6700:185;;;6798:4;6747:24;:38;6772:12;:10;:12::i;:::-;-1:-1:-1;;;;;6747:38:18;;;;;;;;;;;;;;;;;-1:-1:-1;6747:38:18;;;:48;;;;;;;;;:55;;-1:-1:-1;;6747:55:18;;;;;;;;;;6700:185;;;6840:10;:24;6851:12;:10;:12::i;:::-;-1:-1:-1;;;;;6840:24:18;;;;;;;;;;;;;;;;;-1:-1:-1;6840:24:18;;;:34;;;;;;;;;6833:41;;-1:-1:-1;;6833:41:18;;;6700:185;6926:12;:10;:12::i;:::-;-1:-1:-1;;;;;6900:39:18;6916:8;-1:-1:-1;;;;;6900:39:18;;;;;;;;;;;6550:396;:::o;7740:279::-;7875:36;7889:12;:10;:12::i;:::-;7903:7;7875:13;:36::i;:::-;7867:93;;;;-1:-1:-1;;;7867:93:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7970:42;7976:7;7985:6;7993:4;7999:12;7970:5;:42::i;:::-;7740:279;;;;:::o;5518:120::-;5594:37;5600:12;:10;:12::i;:::-;5614:6;5622:4;5594:37;;;;;;;;;;;;:5;:37::i;590:104:7:-;677:10;590:104;:::o;13892:335:18:-;-1:-1:-1;;;;;13985:20:18;;13977:70;;;;-1:-1:-1;;;13977:70:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14065:21:18;;14057:69;;;;-1:-1:-1;;;14057:69:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;14137:19:18;;;;;;;:11;:19;;;;;;;;:28;;;;;;;;;;;;;:36;;;14188:32;;;;;;;;;;;;;;;;;13892:335;;;:::o;14700:484::-;14943:78;;;-1:-1:-1;;;14943:78:18;;-1:-1:-1;;;;;14943:78:18;;;;;;1700:66;14943:78;;;;;;14921:19;;1235:42;;14943:41;;:78;;;;;;;;;;;;;;;1235:42;14943:78;;;5:2:-1;;;;30:1;27;20:12;5:2;14943:78:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;14943:78:18;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;14943:78:18;;-1:-1:-1;;;;;;15035:25:18;;;15031:147;;15090:11;-1:-1:-1;;;;;15076:39:18;;15116:8;15126:4;15132:2;15136:6;15144:8;15154:12;15076:91;;;;;;;;;;;;;-1:-1:-1;;;;;15076:91:18;-1:-1:-1;;;;;15076:91:18;;;;;;-1:-1:-1;;;;;15076:91:18;-1:-1:-1;;;;;15076:91:18;;;;;;-1:-1:-1;;;;;15076:91:18;-1:-1:-1;;;;;15076:91:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;15076:91:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;15076:91:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;15076:91:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;15076:91:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;15076:91:18;;;;15031:147;14700:484;;;;;;;:::o;13227:527::-;13436:48;13457:8;13467:4;13473:2;13477:6;13436:20;:48::i;:::-;13513:70;13533:6;13513:70;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;13513:15:18;;:9;:15;;;;;;;;;;;;:70;;:19;:70;:::i;:::-;-1:-1:-1;;;;;13495:15:18;;;:9;:15;;;;;;;;;;;:88;;;;13609:13;;;;;;;:25;;13627:6;13609:25;:17;:25;:::i;:::-;13593:9;:13;13603:2;-1:-1:-1;;;;;13593:13:18;-1:-1:-1;;;;;13593:13:18;;;;;;;;;;;;:41;;;;13671:2;-1:-1:-1;;;;;13650:56:18;13665:4;-1:-1:-1;;;;;13650:56:18;13655:8;-1:-1:-1;;;;;13650:56:18;;13675:6;13683:8;13693:12;13650:56;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13650:56:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13650:56:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13650:56:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13736:2;-1:-1:-1;;;;;13721:26:18;13730:4;-1:-1:-1;;;;;13721:26:18;;13740:6;13721:26;;;;;;;;;;;;;;;;;;13227:527;;;;;;:::o;1746:187:11:-;1832:7;1867:12;1859:6;;;;1851:29;;;;-1:-1:-1;;;1851:29:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;1851:29:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;1902:5:11;;;1746:187::o;15873:688:18:-;16152:79;;;-1:-1:-1;;;16152:79:18;;-1:-1:-1;;;;;16152:79:18;;;;;;1883:66;16152:79;;;;;;16130:19;;1235:42;;16152:41;;:79;;;;;;;;;;;;;;;1235:42;16152:79;;;5:2:-1;;;;30:1;27;20:12;5:2;16152:79:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16152:79:18;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;16152:79:18;;-1:-1:-1;;;;;;16245:25:18;;;16241:314;;16303:11;-1:-1:-1;;;;;16286:44:18;;16331:8;16341:4;16347:2;16351:6;16359:8;16369:12;16286:96;;;;;;;;;;;;;-1:-1:-1;;;;;16286:96:18;-1:-1:-1;;;;;16286:96:18;;;;;;-1:-1:-1;;;;;16286:96:18;-1:-1:-1;;;;;16286:96:18;;;;;;-1:-1:-1;;;;;16286:96:18;-1:-1:-1;;;;;16286:96:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;16286:96:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;16286:96:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;16286:96:18;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;16286:96:18;;;;16241:314;;;16403:19;16399:156;;;16447:15;:2;-1:-1:-1;;;;;16447:13:18;;:15::i;:::-;16446:16;16438:106;;;;-1:-1:-1;;;16438:106:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;15873:688;;;;;;;;:::o;11536:654::-;-1:-1:-1;;;;;11762:18:18;;11754:65;;;;-1:-1:-1;;;11754:65:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;11837:16:18;;11829:61;;;;;-1:-1:-1;;;11829:61:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11901:16;11920:12;:10;:12::i;:::-;11901:31;;11943:69;11961:8;11971:4;11977:2;11981:6;11989:8;11999:12;11943:17;:69::i;:::-;12023:57;12029:8;12039:4;12045:2;12049:6;12057:8;12067:12;12023:5;:57::i;:::-;12091:92;12111:8;12121:4;12127:2;12131:6;12139:8;12149:12;12163:19;12091;:92::i;10335:725::-;-1:-1:-1;;;;;10514:21:18;;10506:66;;;;;-1:-1:-1;;;10506:66:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10583:16;10602:12;:10;:12::i;:::-;10583:31;;10625:59;10646:8;10664:1;10668:7;10677:6;10625:20;:59::i;:::-;10744:12;;:24;;10761:6;10744:24;:16;:24;:::i;:::-;10729:12;:39;-1:-1:-1;;;;;10799:18:18;;:9;:18;;;;;;;;;;;:30;;10822:6;10799:30;:22;:30;:::i;:::-;-1:-1:-1;;;;;10778:18:18;;:9;:18;;;;;;;;;;:51;;;;10840:88;;10860:8;;10788:7;10891:6;10899:8;10909:12;10923:4;10840:19;:88::i;:::-;10961:7;-1:-1:-1;;;;;10944:57:18;10951:8;-1:-1:-1;;;;;10944:57:18;;10970:6;10978:8;10988:12;10944:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;10944:57:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;10944:57:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;11016:37;;;;;;;;-1:-1:-1;;;;;11016:37:18;;;11033:1;;11016:37;;;;;;;;;10335:725;;;;;:::o;12495:726::-;-1:-1:-1;;;;;12671:18:18;;12663:65;;;;-1:-1:-1;;;12663:65:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12739:16;12758:12;:10;:12::i;:::-;12739:31;;12781:56;12802:8;12812:4;12826:1;12830:6;12781:20;:56::i;:::-;12848:73;12866:8;12876:4;12890:1;12894:6;12902:4;12908:12;12848:17;:73::i;:::-;12984:66;13004:6;12984:66;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;12984:15:18;;:9;:15;;;;;;;;;;;;:66;;:19;:66;:::i;:::-;-1:-1:-1;;;;;12966:15:18;;:9;:15;;;;;;;;;;:84;13075:12;;:24;;13092:6;13075:24;:16;:24;:::i;:::-;13060:12;:39;;;;13132:4;-1:-1:-1;;;;;13115:50:18;13122:8;-1:-1:-1;;;;;13115:50:18;;13138:6;13146:4;13152:12;13115:50;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13115:50:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;13115:50:18;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;13115:50:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13180:34;;;;;;;;13203:1;;-1:-1:-1;;;;;13180:34:18;;;;;;;;;;;;12495:726;;;;;:::o;874:176:11:-;932:7;963:5;;;986:6;;;;978:46;;;;;-1:-1:-1;;;978:46:11;;;;;;;;;;;;;;;;;;;;;;;;;;;718:610:22;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;1305:15:22;;;1278:42;1270:51;718:610;-1:-1:-1;;;;718:610:22:o;1321:134:11:-;1379:7;1405:43;1409:1;1412;1405:43;;;;;;;;;;;;;;;;;:3;:43::i",
  "source": "\npragma solidity ^0.6.0;\n\n//import \"@openzeppelin/contracts/GSN/Context.sol\";\nimport \"@openzeppelin/contracts/token/ERC777/ERC777.sol\";\n\ncontract AURToken is ERC777 {\naddress payable owner;\n//address payable planet;\n//maybe have a list of admins and a list of planets rather than just \"minters\"\naddress payable[] minters; //array of authed minters, which will be planet cotnracts\n//address[] dOperators;//dunno what would go here but not needed\n    constructor(\n        address payable planet0\n    ) public ERC777(\"Aurbit Token\", \"AUR\", new address[] (0)) {\n\tuint256 initialBalance = 1000000*10**18;\n        //do this shit with safe math or whatever\n        //if this is the officially best way to write this then i am disappointed \n        owner = msg.sender;\n        minters.push(planet0);\n        _mint(owner, initialBalance, \"\", \"\");\n\t\n    }\n//figure out user and operator data fields nad what to do with them\n//figure out how to send and receive them in the Planet contract\n//figure out how to burn them and if you need to use approve functions\n//must register send hook?\n    function mintInternal (\n        uint256 amount\n    ) public {\n        require(ismintAuthed());\n        _mint(msg.sender, amount, \"MINTEDCOINS\", \"\");\n     //gets minted to sender, depositing them in the contract where corresponding users can WD them\n     //not sure what dod do with data fields, has to do with send hook\n    }\n    function burnInternal(\n        uint256 amount\n    )public {\n        require(ismintAuthed());\n        burn(amount, \"\");\n    }\n    function ismintAuthed() public view returns (bool){\n\tbool out = false;\n        out = out || (owner==msg.sender);//owner can mint\n        for (uint i = 0;i<minters.length;i++){\n               if (out){break;}\n               out = out || (msg.sender==minters[i]);\n        }\n        return out;\n    }\n\n    //function approveInternal(address holder, address spender, uint256 value) public {\n    //    _approve(holder, spender, value);\n    //}\n    function authMinter(address payable _minter) public{\n       require(ismintAuthed());\n       minters.push(_minter);\n    }\n    function deauthMinter(address payable _minter) public{\n        for (uint i = 0;i<minters.length;i++){\n               if (minters[i]==_minter){delete minters[i];}\n           //need to figure out exactly what this does, \n          //  what i will get when i call minter[i] now? if it sets to 0 that is ok. must test\n        } \n    }\n}\n\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol",
    "exportedSymbols": {
      "AURToken": [
        364
      ]
    },
    "id": 365,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 180,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "1:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 181,
        "nodeType": "ImportDirective",
        "scope": 365,
        "sourceUnit": 5519,
        "src": "78:57:1",
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
              "id": 182,
              "name": "ERC777",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5518,
              "src": "158:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC777_$5518",
                "typeString": "contract ERC777"
              }
            },
            "id": 183,
            "nodeType": "InheritanceSpecifier",
            "src": "158:6:1"
          }
        ],
        "contractDependencies": [
          2975,
          3375,
          5518,
          5663
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 364,
        "linearizedBaseContracts": [
          364,
          5518,
          3375,
          5663,
          2975
        ],
        "name": "AURToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 185,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 364,
            "src": "167:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 184,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "167:15:1",
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
            "id": 188,
            "name": "minters",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 364,
            "src": "295:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
              "typeString": "address payable[]"
            },
            "typeName": {
              "baseType": {
                "id": 186,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "295:15:1",
                "stateMutability": "payable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                }
              },
              "id": 187,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "295:17:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_payable_$dyn_storage_ptr",
                "typeString": "address payable[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 228,
              "nodeType": "Block",
              "src": "556:289:1",
              "statements": [
                {
                  "assignments": [
                    203
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 203,
                      "name": "initialBalance",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 228,
                      "src": "559:22:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 202,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "559:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 209,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    },
                    "id": 208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "hexValue": "31303030303030",
                      "id": 204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "584:7:1",
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
                      "id": 207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "592:2:1",
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
                        "id": 206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "596:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_18_by_1",
                          "typeString": "int_const 18"
                        },
                        "value": "18"
                      },
                      "src": "592:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                      }
                    },
                    "src": "584:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "559:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 210,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 185,
                      "src": "741:5:1",
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
                        "id": 211,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "749:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "749:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "741:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 214,
                  "nodeType": "ExpressionStatement",
                  "src": "741:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 218,
                        "name": "planet0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "782:7:1",
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
                        "id": 215,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "769:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "769:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "769:21:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 220,
                  "nodeType": "ExpressionStatement",
                  "src": "769:21:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 222,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 185,
                        "src": "806:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "initialBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 203,
                        "src": "813:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "829:2:1",
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
                        "id": 225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "833:2:1",
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
                      "id": 221,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5145,
                      "src": "800:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "800:36:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 227,
                  "nodeType": "ExpressionStatement",
                  "src": "800:36:1"
                }
              ]
            },
            "documentation": null,
            "id": 229,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420546f6b656e",
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "514:14:1",
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
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "530:5:1",
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
                        "id": 198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "552:1:1",
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
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "537:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 195,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "541:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 196,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "541:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "537:17:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 200,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 192,
                  "name": "ERC777",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5518,
                  "src": "507:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC777_$5518_$",
                    "typeString": "type(contract ERC777)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "507:48:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 190,
                  "name": "planet0",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 229,
                  "src": "470:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:15:1",
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
              "src": "460:39:1"
            },
            "returnParameters": {
              "id": 201,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "556:0:1"
            },
            "scope": 364,
            "src": "449:396:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 247,
              "nodeType": "Block",
              "src": "1141:265:1",
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
                          "id": 235,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "1159:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1159:14:1",
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
                      "id": 234,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1151:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1151:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 238,
                  "nodeType": "ExpressionStatement",
                  "src": "1151:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 240,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1190:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1190:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 242,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 231,
                        "src": "1202:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d494e544544434f494e53",
                        "id": 243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1210:13:1",
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
                        "id": 244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1225:2:1",
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
                      "id": 239,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5145,
                      "src": "1184:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1184:44:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 246,
                  "nodeType": "ExpressionStatement",
                  "src": "1184:44:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "990be248",
            "id": 248,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 231,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 248,
                  "src": "1113:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 230,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1113:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1103:30:1"
            },
            "returnParameters": {
              "id": 233,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1141:0:1"
            },
            "scope": 364,
            "src": "1081:325:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 263,
              "nodeType": "Block",
              "src": "1469:66:1",
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
                          "id": 254,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "1487:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 255,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1487:14:1",
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
                      "id": 253,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1479:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1479:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 257,
                  "nodeType": "ExpressionStatement",
                  "src": "1479:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 259,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 250,
                        "src": "1517:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 260,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1525:2:1",
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
                      "id": 258,
                      "name": "burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4744,
                      "src": "1512:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,bytes memory)"
                      }
                    },
                    "id": 261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1512:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 262,
                  "nodeType": "ExpressionStatement",
                  "src": "1512:16:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "df4fbfff",
            "id": 264,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 250,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 264,
                  "src": "1442:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 249,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1442:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1432:30:1"
            },
            "returnParameters": {
              "id": 252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1469:0:1"
            },
            "scope": 364,
            "src": "1411:124:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 314,
              "nodeType": "Block",
              "src": "1590:247:1",
              "statements": [
                {
                  "assignments": [
                    270
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 270,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 314,
                      "src": "1593:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 269,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1593:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 272,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1604:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1593:16:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 273,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 270,
                      "src": "1619:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 274,
                        "name": "out",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 270,
                        "src": "1625:3:1",
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
                            "id": 278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 275,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1633:5:1",
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
                                "id": 276,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1640:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 277,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1640:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1633:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 279,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1632:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1625:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1619:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 282,
                  "nodeType": "ExpressionStatement",
                  "src": "1619:32:1"
                },
                {
                  "body": {
                    "id": 310,
                    "nodeType": "Block",
                    "src": "1714:97:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 294,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "1735:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 297,
                        "nodeType": "IfStatement",
                        "src": "1731:16:1",
                        "trueBody": {
                          "id": 296,
                          "nodeType": "Block",
                          "src": "1739:8:1",
                          "statements": [
                            {
                              "id": 295,
                              "nodeType": "Break",
                              "src": "1740:5:1"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 298,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 270,
                            "src": "1763:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 299,
                              "name": "out",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 270,
                              "src": "1769:3:1",
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
                                  "id": 305,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 300,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -15,
                                      "src": "1777:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 301,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1777:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 302,
                                      "name": "minters",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 188,
                                      "src": "1789:7:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                                        "typeString": "address payable[] storage ref"
                                      }
                                    },
                                    "id": 304,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 303,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 284,
                                      "src": "1797:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1789:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "src": "1777:22:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                }
                              ],
                              "id": 306,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "1776:24:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "1769:31:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1763:37:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 309,
                        "nodeType": "ExpressionStatement",
                        "src": "1763:37:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 287,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 284,
                      "src": "1693:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 288,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "1695:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1695:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1693:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 311,
                  "initializationExpression": {
                    "assignments": [
                      284
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 284,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 311,
                        "src": "1682:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 283,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1682:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 286,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1691:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1682:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 292,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1710:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 291,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 284,
                        "src": "1710:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 293,
                    "nodeType": "ExpressionStatement",
                    "src": "1710:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1677:134:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 312,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 270,
                    "src": "1827:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 268,
                  "id": 313,
                  "nodeType": "Return",
                  "src": "1820:10:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "6341d301",
            "id": 315,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ismintAuthed",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 265,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:2:1"
            },
            "returnParameters": {
              "id": 268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 267,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 315,
                  "src": "1585:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1585:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1584:6:1"
            },
            "scope": 364,
            "src": "1540:297:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 331,
              "nodeType": "Block",
              "src": "2034:69:1",
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
                          "id": 321,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "2051:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2051:14:1",
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
                      "id": 320,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2043:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2043:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 324,
                  "nodeType": "ExpressionStatement",
                  "src": "2043:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 328,
                        "name": "_minter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 317,
                        "src": "2088:7:1",
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
                        "id": 325,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2075:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2075:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2075:21:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 330,
                  "nodeType": "ExpressionStatement",
                  "src": "2075:21:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f6376e9d",
            "id": 332,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "authMinter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 317,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 332,
                  "src": "2003:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 316,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2003:15:1",
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
              "src": "2002:25:1"
            },
            "returnParameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2034:0:1"
            },
            "scope": 364,
            "src": "1983:120:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 362,
              "nodeType": "Block",
              "src": "2161:277:1",
              "statements": [
                {
                  "body": {
                    "id": 360,
                    "nodeType": "Block",
                    "src": "2208:223:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          "id": 352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 348,
                              "name": "minters",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 188,
                              "src": "2229:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                                "typeString": "address payable[] storage ref"
                              }
                            },
                            "id": 350,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 349,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 338,
                              "src": "2237:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2229:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 351,
                            "name": "_minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 334,
                            "src": "2241:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "2229:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 359,
                        "nodeType": "IfStatement",
                        "src": "2225:44:1",
                        "trueBody": {
                          "id": 358,
                          "nodeType": "Block",
                          "src": "2249:20:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 356,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2250:17:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 353,
                                    "name": "minters",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 188,
                                    "src": "2257:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                                      "typeString": "address payable[] storage ref"
                                    }
                                  },
                                  "id": 355,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 354,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 338,
                                    "src": "2265:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2257:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 357,
                              "nodeType": "ExpressionStatement",
                              "src": "2250:17:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 341,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 338,
                      "src": "2187:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 342,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2189:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 343,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2189:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2187:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 361,
                  "initializationExpression": {
                    "assignments": [
                      338
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 338,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 361,
                        "src": "2176:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 337,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2176:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 340,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2185:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2176:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2204:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 345,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "2204:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 347,
                    "nodeType": "ExpressionStatement",
                    "src": "2204:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2171:260:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7c90b0e2",
            "id": 363,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deauthMinter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 334,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 363,
                  "src": "2130:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2130:15:1",
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
              "src": "2129:25:1"
            },
            "returnParameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2161:0:1"
            },
            "scope": 364,
            "src": "2108:330:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 365,
        "src": "137:2303:1"
      }
    ],
    "src": "1:2441:1"
  },
  "legacyAST": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURToken.sol",
    "exportedSymbols": {
      "AURToken": [
        364
      ]
    },
    "id": 365,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 180,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "1:23:1"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "file": "@openzeppelin/contracts/token/ERC777/ERC777.sol",
        "id": 181,
        "nodeType": "ImportDirective",
        "scope": 365,
        "sourceUnit": 5519,
        "src": "78:57:1",
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
              "id": 182,
              "name": "ERC777",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5518,
              "src": "158:6:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC777_$5518",
                "typeString": "contract ERC777"
              }
            },
            "id": 183,
            "nodeType": "InheritanceSpecifier",
            "src": "158:6:1"
          }
        ],
        "contractDependencies": [
          2975,
          3375,
          5518,
          5663
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 364,
        "linearizedBaseContracts": [
          364,
          5518,
          3375,
          5663,
          2975
        ],
        "name": "AURToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 185,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 364,
            "src": "167:21:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 184,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "167:15:1",
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
            "id": 188,
            "name": "minters",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 364,
            "src": "295:25:1",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
              "typeString": "address payable[]"
            },
            "typeName": {
              "baseType": {
                "id": 186,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "295:15:1",
                "stateMutability": "payable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address_payable",
                  "typeString": "address payable"
                }
              },
              "id": 187,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "295:17:1",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_payable_$dyn_storage_ptr",
                "typeString": "address payable[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "body": {
              "id": 228,
              "nodeType": "Block",
              "src": "556:289:1",
              "statements": [
                {
                  "assignments": [
                    203
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 203,
                      "name": "initialBalance",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 228,
                      "src": "559:22:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 202,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "559:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 209,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    },
                    "id": 208,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "hexValue": "31303030303030",
                      "id": 204,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "584:7:1",
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
                      "id": 207,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "592:2:1",
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
                        "id": 206,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "596:2:1",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_18_by_1",
                          "typeString": "int_const 18"
                        },
                        "value": "18"
                      },
                      "src": "592:6:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1000000000000000000_by_1",
                        "typeString": "int_const 1000000000000000000"
                      }
                    },
                    "src": "584:14:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_rational_1000000000000000000000000_by_1",
                      "typeString": "int_const 1000000000000000000000000"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "559:39:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 213,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 210,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 185,
                      "src": "741:5:1",
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
                        "id": 211,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "749:3:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 212,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "749:10:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "741:18:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 214,
                  "nodeType": "ExpressionStatement",
                  "src": "741:18:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 218,
                        "name": "planet0",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "782:7:1",
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
                        "id": 215,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "769:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "769:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "769:21:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 220,
                  "nodeType": "ExpressionStatement",
                  "src": "769:21:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 222,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 185,
                        "src": "806:5:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 223,
                        "name": "initialBalance",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 203,
                        "src": "813:14:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 224,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "829:2:1",
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
                        "id": 225,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "833:2:1",
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
                      "id": 221,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5145,
                      "src": "800:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 226,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "800:36:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 227,
                  "nodeType": "ExpressionStatement",
                  "src": "800:36:1"
                }
              ]
            },
            "documentation": null,
            "id": 229,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420546f6b656e",
                    "id": 193,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "514:14:1",
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
                    "id": 194,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "530:5:1",
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
                        "id": 198,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "552:1:1",
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
                      "id": 197,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "537:13:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_address_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (address[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "id": 195,
                          "name": "address",
                          "nodeType": "ElementaryTypeName",
                          "src": "541:7:1",
                          "stateMutability": "nonpayable",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 196,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "541:9:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                          "typeString": "address[]"
                        }
                      }
                    },
                    "id": 199,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "537:17:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_memory",
                      "typeString": "address[] memory"
                    }
                  }
                ],
                "id": 200,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 192,
                  "name": "ERC777",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5518,
                  "src": "507:6:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC777_$5518_$",
                    "typeString": "type(contract ERC777)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "507:48:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 190,
                  "name": "planet0",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 229,
                  "src": "470:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "470:15:1",
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
              "src": "460:39:1"
            },
            "returnParameters": {
              "id": 201,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "556:0:1"
            },
            "scope": 364,
            "src": "449:396:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 247,
              "nodeType": "Block",
              "src": "1141:265:1",
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
                          "id": 235,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "1159:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 236,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1159:14:1",
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
                      "id": 234,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1151:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 237,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1151:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 238,
                  "nodeType": "ExpressionStatement",
                  "src": "1151:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 240,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1190:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 241,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1190:10:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 242,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 231,
                        "src": "1202:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "4d494e544544434f494e53",
                        "id": 243,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1210:13:1",
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
                        "id": 244,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1225:2:1",
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
                      "id": 239,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5145,
                      "src": "1184:5:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$_t_bytes_memory_ptr_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,bytes memory,bytes memory)"
                      }
                    },
                    "id": 245,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1184:44:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 246,
                  "nodeType": "ExpressionStatement",
                  "src": "1184:44:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "990be248",
            "id": 248,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 232,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 231,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 248,
                  "src": "1113:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 230,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1113:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1103:30:1"
            },
            "returnParameters": {
              "id": 233,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1141:0:1"
            },
            "scope": 364,
            "src": "1081:325:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 263,
              "nodeType": "Block",
              "src": "1469:66:1",
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
                          "id": 254,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "1487:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 255,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1487:14:1",
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
                      "id": 253,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1479:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 256,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1479:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 257,
                  "nodeType": "ExpressionStatement",
                  "src": "1479:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 259,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 250,
                        "src": "1517:6:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "",
                        "id": 260,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1525:2:1",
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
                      "id": 258,
                      "name": "burn",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4744,
                      "src": "1512:4:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_bytes_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,bytes memory)"
                      }
                    },
                    "id": 261,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1512:16:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 262,
                  "nodeType": "ExpressionStatement",
                  "src": "1512:16:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "df4fbfff",
            "id": 264,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "burnInternal",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 251,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 250,
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 264,
                  "src": "1442:14:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 249,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1442:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1432:30:1"
            },
            "returnParameters": {
              "id": 252,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1469:0:1"
            },
            "scope": 364,
            "src": "1411:124:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 314,
              "nodeType": "Block",
              "src": "1590:247:1",
              "statements": [
                {
                  "assignments": [
                    270
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 270,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 314,
                      "src": "1593:8:1",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "typeName": {
                        "id": 269,
                        "name": "bool",
                        "nodeType": "ElementaryTypeName",
                        "src": "1593:4:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 272,
                  "initialValue": {
                    "argumentTypes": null,
                    "hexValue": "66616c7365",
                    "id": 271,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "bool",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "1604:5:1",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    },
                    "value": "false"
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1593:16:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 281,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 273,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 270,
                      "src": "1619:3:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "commonType": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "id": 280,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "id": 274,
                        "name": "out",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 270,
                        "src": "1625:3:1",
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
                            "id": 278,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 275,
                              "name": "owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 185,
                              "src": "1633:5:1",
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
                                "id": 276,
                                "name": "msg",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -15,
                                "src": "1640:3:1",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_message",
                                  "typeString": "msg"
                                }
                              },
                              "id": 277,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "memberName": "sender",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1640:10:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address_payable",
                                "typeString": "address payable"
                              }
                            },
                            "src": "1633:17:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          }
                        ],
                        "id": 279,
                        "isConstant": false,
                        "isInlineArray": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "TupleExpression",
                        "src": "1632:19:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      "src": "1625:26:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "src": "1619:32:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 282,
                  "nodeType": "ExpressionStatement",
                  "src": "1619:32:1"
                },
                {
                  "body": {
                    "id": 310,
                    "nodeType": "Block",
                    "src": "1714:97:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "id": 294,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 270,
                          "src": "1735:3:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 297,
                        "nodeType": "IfStatement",
                        "src": "1731:16:1",
                        "trueBody": {
                          "id": 296,
                          "nodeType": "Block",
                          "src": "1739:8:1",
                          "statements": [
                            {
                              "id": 295,
                              "nodeType": "Break",
                              "src": "1740:5:1"
                            }
                          ]
                        }
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 308,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "id": 298,
                            "name": "out",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 270,
                            "src": "1763:3:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "commonType": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            },
                            "id": 307,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "leftExpression": {
                              "argumentTypes": null,
                              "id": 299,
                              "name": "out",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 270,
                              "src": "1769:3:1",
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
                                  "id": 305,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "leftExpression": {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 300,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -15,
                                      "src": "1777:3:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 301,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "1777:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "nodeType": "BinaryOperation",
                                  "operator": "==",
                                  "rightExpression": {
                                    "argumentTypes": null,
                                    "baseExpression": {
                                      "argumentTypes": null,
                                      "id": 302,
                                      "name": "minters",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 188,
                                      "src": "1789:7:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                                        "typeString": "address payable[] storage ref"
                                      }
                                    },
                                    "id": 304,
                                    "indexExpression": {
                                      "argumentTypes": null,
                                      "id": 303,
                                      "name": "i",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 284,
                                      "src": "1797:1:1",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "isConstant": false,
                                    "isLValue": true,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "nodeType": "IndexAccess",
                                    "src": "1789:10:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  },
                                  "src": "1777:22:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_bool",
                                    "typeString": "bool"
                                  }
                                }
                              ],
                              "id": 306,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "nodeType": "TupleExpression",
                              "src": "1776:24:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_bool",
                                "typeString": "bool"
                              }
                            },
                            "src": "1769:31:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bool",
                              "typeString": "bool"
                            }
                          },
                          "src": "1763:37:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "id": 309,
                        "nodeType": "ExpressionStatement",
                        "src": "1763:37:1"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 290,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 287,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 284,
                      "src": "1693:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 288,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "1695:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 289,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1695:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1693:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 311,
                  "initializationExpression": {
                    "assignments": [
                      284
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 284,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 311,
                        "src": "1682:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 283,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "1682:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 286,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 285,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1691:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "1682:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 292,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "1710:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 291,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 284,
                        "src": "1710:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 293,
                    "nodeType": "ExpressionStatement",
                    "src": "1710:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "1677:134:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 312,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 270,
                    "src": "1827:3:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 268,
                  "id": 313,
                  "nodeType": "Return",
                  "src": "1820:10:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "6341d301",
            "id": 315,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "ismintAuthed",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 265,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1561:2:1"
            },
            "returnParameters": {
              "id": 268,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 267,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 315,
                  "src": "1585:4:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 266,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1585:4:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1584:6:1"
            },
            "scope": 364,
            "src": "1540:297:1",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 331,
              "nodeType": "Block",
              "src": "2034:69:1",
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
                          "id": 321,
                          "name": "ismintAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 315,
                          "src": "2051:12:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 322,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2051:14:1",
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
                      "id": 320,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2043:7:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 323,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2043:23:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 324,
                  "nodeType": "ExpressionStatement",
                  "src": "2043:23:1"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 328,
                        "name": "_minter",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 317,
                        "src": "2088:7:1",
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
                        "id": 325,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2075:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 327,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2075:12:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_payable_$returns$__$",
                        "typeString": "function (address payable)"
                      }
                    },
                    "id": 329,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2075:21:1",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 330,
                  "nodeType": "ExpressionStatement",
                  "src": "2075:21:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "f6376e9d",
            "id": 332,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "authMinter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 318,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 317,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 332,
                  "src": "2003:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 316,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2003:15:1",
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
              "src": "2002:25:1"
            },
            "returnParameters": {
              "id": 319,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2034:0:1"
            },
            "scope": 364,
            "src": "1983:120:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 362,
              "nodeType": "Block",
              "src": "2161:277:1",
              "statements": [
                {
                  "body": {
                    "id": 360,
                    "nodeType": "Block",
                    "src": "2208:223:1",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          },
                          "id": 352,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 348,
                              "name": "minters",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 188,
                              "src": "2229:7:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                                "typeString": "address payable[] storage ref"
                              }
                            },
                            "id": 350,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 349,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 338,
                              "src": "2237:1:1",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "2229:10:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 351,
                            "name": "_minter",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 334,
                            "src": "2241:7:1",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          },
                          "src": "2229:19:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 359,
                        "nodeType": "IfStatement",
                        "src": "2225:44:1",
                        "trueBody": {
                          "id": 358,
                          "nodeType": "Block",
                          "src": "2249:20:1",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 356,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "UnaryOperation",
                                "operator": "delete",
                                "prefix": true,
                                "src": "2250:17:1",
                                "subExpression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 353,
                                    "name": "minters",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 188,
                                    "src": "2257:7:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                                      "typeString": "address payable[] storage ref"
                                    }
                                  },
                                  "id": 355,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 354,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 338,
                                    "src": "2265:1:1",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "2257:10:1",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address_payable",
                                    "typeString": "address payable"
                                  }
                                },
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 357,
                              "nodeType": "ExpressionStatement",
                              "src": "2250:17:1"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 344,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 341,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 338,
                      "src": "2187:1:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 342,
                        "name": "minters",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 188,
                        "src": "2189:7:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_payable_$dyn_storage",
                          "typeString": "address payable[] storage ref"
                        }
                      },
                      "id": 343,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2189:14:1",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2187:16:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 361,
                  "initializationExpression": {
                    "assignments": [
                      338
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 338,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 361,
                        "src": "2176:6:1",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 337,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "2176:4:1",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 340,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 339,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2185:1:1",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "2176:10:1"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 346,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "2204:3:1",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 345,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 338,
                        "src": "2204:1:1",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 347,
                    "nodeType": "ExpressionStatement",
                    "src": "2204:3:1"
                  },
                  "nodeType": "ForStatement",
                  "src": "2171:260:1"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7c90b0e2",
            "id": 363,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "deauthMinter",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 335,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 334,
                  "name": "_minter",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 363,
                  "src": "2130:23:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 333,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2130:15:1",
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
              "src": "2129:25:1"
            },
            "returnParameters": {
              "id": 336,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2161:0:1"
            },
            "scope": 364,
            "src": "2108:330:1",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 365,
        "src": "137:2303:1"
      }
    ],
    "src": "1:2441:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-07-29T17:13:06.471Z",
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
    "methods": {}
  }
}
    }
  