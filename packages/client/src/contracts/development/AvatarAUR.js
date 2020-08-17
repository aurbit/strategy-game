
    module.exports = {
      "network": "development",
      "address": "0x8f0483125FCb9aaAEFA9209D8E9d7b9C8B9Fb90F",
      "artifact": {
  "contractName": "AvatarAUR",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_govContract",
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
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newFee",
          "type": "uint256"
        }
      ],
      "name": "FeeUpdated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dna",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "avatarId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
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
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "TokenIDtoAvID",
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
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "avatars",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "dna",
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
          "name": "owner",
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
      "inputs": [],
      "name": "baseURI",
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
      "name": "createAvatarFee",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
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
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
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
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenByIndex",
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
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
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
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
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_userDNA",
          "type": "uint256"
        }
      ],
      "name": "mintAvatar",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_newfee",
          "type": "uint256"
        }
      ],
      "name": "setcreateAvatarFee",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint8",
          "name": "b",
          "type": "uint8"
        },
        {
          "internalType": "uint8",
          "name": "pos",
          "type": "uint8"
        }
      ],
      "name": "pullcrumb",
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
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_indat",
          "type": "uint256"
        },
        {
          "internalType": "uint16",
          "name": "k",
          "type": "uint16"
        },
        {
          "internalType": "uint256",
          "name": "_setdat",
          "type": "uint256"
        }
      ],
      "name": "setbyte",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "pure",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tid",
          "type": "uint256"
        }
      ],
      "name": "getDNA",
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_govContract\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newFee\",\"type\":\"uint256\"}],\"name\":\"FeeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"avatarId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"TokenIDtoAvID\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"avatars\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"createAvatarFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tid\",\"type\":\"uint256\"}],\"name\":\"getDNA\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_userDNA\",\"type\":\"uint256\"}],\"name\":\"mintAvatar\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"b\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"pos\",\"type\":\"uint8\"}],\"name\":\"pullcrumb\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_indat\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"k\",\"type\":\"uint16\"},{\"internalType\":\"uint256\",\"name\":\"_setdat\",\"type\":\"uint256\"}],\"name\":\"setbyte\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newfee\",\"type\":\"uint256\"}],\"name\":\"setcreateAvatarFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{},\"notice\":\"Author: Chris Markov 2020 Project Aurbit The Avatar Contract for the Aurbit Strategy Game. Symbol: AURA https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md\"}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":\"AvatarAUR\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":{\"keccak256\":\"0x3862afa7985355ad2ebb7e71f7589d4a0b645319417f134ec56ffecb4b027855\",\"urls\":[\"bzz-raw://f4e685aa98cde559de984b5c4bb9aa2b62d41c0dafbab847dff64a798c0fdf03\",\"dweb:/ipfs/QmaMrnPgcFYmZH1xspQedeL8o25vU9m5ihmVjaqCqDaNeu\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xb046d18f9d09683ca1c0ed6d80c61da8a8a7d9b30bad70a17b898538683eff74\",\"urls\":[\"bzz-raw://4728713afa6ae36cc9e92c7107c796a313add3ec20f813be2cde76c814486b2a\",\"dweb:/ipfs/QmUJBTXvYaGDF5PVnd5pUvYerc9DRXvqANDzgCzAp3FkkA\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xfa152b6e88a1dc50780e8f1580426dc23ad2e1e2c2f086a088adf206a202f453\",\"urls\":[\"bzz-raw://5127b264994adab88fae419b1c493efc5acd07134c19ee5c0397e50018291ebf\",\"dweb:/ipfs/QmWwJZVhvdmvUCdimbb6R2Jiu59zjPqm6XTMchM6LaEHAp\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1071a23188ba7f5bb16f51b0b01a67fd41fe56f862d8f83985788cf46f3b91bd\",\"urls\":[\"bzz-raw://c7082ca99b93f2e541cafaad00ed32675adf0752eab78eccabcf91dec9fd5d73\",\"dweb:/ipfs/QmdqooMmYBQVi7p6subDFM4e1944AuLjZUpHMjGtae7Lgd\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x227bafd3e165b13f5d98c42a44376e48d41f4a265db8803f2707faaeae9659aa\",\"urls\":[\"bzz-raw://c9aa7959a30871669ce46172cd117b084b607d602d9ce695ce79005582b0b69b\",\"dweb:/ipfs/QmXZUWeLXmArQinHL4RnacJLT22GvCExqREYM6pHLX7CX9\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0x3636662804cd8f474536b2875a9038a4c3fb91879f1bbff48af5c3f140fcd2f0\",\"urls\":[\"bzz-raw://9fab8521263fa581544000cb57335a3f2e6bcdfbb5579d3ceaa5acf741c67c4f\",\"dweb:/ipfs/QmZfXnMom7JSNtfyie5yGPN1SUC4SmHbz4ScVBH88URmA7\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xe7f984cedc00a138dc27f263c73c32ba9a4b2fd23b6c34ac46f46c074b943538\",\"urls\":[\"bzz-raw://0f4acda12f076fe7584921241ddbb5b460ca7cad6cb8a42252ac7f2a9f539127\",\"dweb:/ipfs/QmQmfhkEv9GrhdWe67QtXnU19AMuoEmy31QnHPkucdYLjZ\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x321ee37ef4925020aa818a03ec7fe48e057561f65ab009a84f6c20c86026ade7\",\"urls\":[\"bzz-raw://01f9d74a17a56024984251b97e428e24c9d3abffbae5bd290f0ec263c82e9694\",\"dweb:/ipfs/QmRryCuuXu2ukrDmatB8TqdEhPLiK6NBRt41RiPUaX1qKy\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x2d68b8e6425249cd05cc0a66ea50cb5b8d10cbdac59c6de834e1002232813faf\",\"urls\":[\"bzz-raw://e3ce6b6ac17c67bba01e9c8c778f82f68fd4823bd083359cdd03040b70eeeba3\",\"dweb:/ipfs/QmX4t1jWwKaAkacvmQxEG5rBtLXg3EHw6pRjKhMZR8iw3n\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x244e4b74b17716120cf28e58636f11c699b8c0c94628bd952a95cee038d7e32b\",\"urls\":[\"bzz-raw://198d566157120c526bd6b5086b32cae85a11389b8a538f533ba9f9447915da0e\",\"dweb:/ipfs/QmeE6d8KWERx7f1FVS5tMnitNJxBm2yWXRSEUBF7R6voLh\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xb2a11b236f073662f5a196995863f51c11d006bf7c3de158b316dfa1506c4b79\",\"urls\":[\"bzz-raw://8651649cf0b9efa18c3b01c030276fa320d41adbdc286833417e7f36e357b2f3\",\"dweb:/ipfs/QmafhM2Nd1aP43QVB1eRRZaqRXQKswNfQcWi8U8xjrxCfN\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x79484115dbfa737054f73e041009a02eeb434dd81be5d684bf4255ad3b5ab558\",\"urls\":[\"bzz-raw://12c119699463450c2544f5b9d8709b5e9e9164c62948a79c3ec53423a051d969\",\"dweb:/ipfs/QmPJduzSAaekq447QeFqAp3E7dc8CnNk5ajofckJ4ahA7Q\"]}},\"version\":1}",
  "bytecode": "0x6080604052662386f26fc10000600c553480156200001c57600080fd5b5060405162003ac738038062003ac7833981810160405260208110156200004257600080fd5b81019080805190602001909291905050506040518060400160405280600d81526020017f41757262697420417661746172000000000000000000000000000000000000008152506040518060400160405280600481526020017f4155524100000000000000000000000000000000000000000000000000000000815250620000d76301ffc9a760e01b620001dc60201b60201c565b8160069080519060200190620000ef929190620002e5565b50806007908051906020019062000108929190620002e5565b50620001216380ac58cd60e01b620001dc60201b60201c565b62000139635b5e139f60e01b620001dc60201b60201c565b6200015163780e9d6360e01b620001dc60201b60201c565b505080600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000394565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916141562000279576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433136353a20696e76616c696420696e746572666163652069640000000081525060200191505060405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200032857805160ff191683800117855562000359565b8280016001018555821562000359579182015b82811115620003585782518255916020019190600101906200033b565b5b5090506200036891906200036c565b5090565b6200039191905b808211156200038d57600081600090555060010162000373565b5090565b90565b61372380620003a46000396000f3fe6080604052600436106101665760003560e01c80636c0360eb116100d157806395d89b411161008a578063b424388a11610064578063b424388a14610ab8578063b88d4fde14610ae3578063c87b56dd14610bf5578063e985e9c514610ca957610166565b806395d89b4114610964578063a22cb465146109f4578063b3b0705b14610a5157610166565b80636c0360eb146106c557806370a082311461075557806374411eef146107ba5780637660271d146107f55780638177b6761461085a578063834d5fac146108a957610166565b806323b872dd1161012357806323b872dd146104475780632f745c59146104c257806342842e0e146105315780634f6ccce7146105ac5780635bb209a5146105fb5780636352211e1461064a57610166565b806301ffc9a71461016b57806306fdde03146101dd578063081812fc1461026d578063095ea7b3146102e85780630c106beb1461034357806318160ddd1461041c575b600080fd5b34801561017757600080fd5b506101c36004803603602081101561018e57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d32565b604051808215151515815260200191505060405180910390f35b3480156101e957600080fd5b506101f2610d99565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610232578082015181840152602081019050610217565b50505050905090810190601f16801561025f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027957600080fd5b506102a66004803603602081101561029057600080fd5b8101908080359060200190929190505050610e3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f457600080fd5b506103416004803603604081101561030b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ed6565b005b6104066004803603604081101561035957600080fd5b810190808035906020019064010000000081111561037657600080fd5b82018360208201111561038857600080fd5b803590602001918460018302840111640100000000831117156103aa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061101a565b6040518082815260200191505060405180910390f35b34801561042857600080fd5b50610431611236565b6040518082815260200191505060405180910390f35b34801561045357600080fd5b506104c06004803603606081101561046a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611247565b005b3480156104ce57600080fd5b5061051b600480360360408110156104e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112bd565b6040518082815260200191505060405180910390f35b34801561053d57600080fd5b506105aa6004803603606081101561055457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611318565b005b3480156105b857600080fd5b506105e5600480360360208110156105cf57600080fd5b8101908080359060200190929190505050611338565b6040518082815260200191505060405180910390f35b34801561060757600080fd5b506106346004803603602081101561061e57600080fd5b810190808035906020019092919050505061135b565b6040518082815260200191505060405180910390f35b34801561065657600080fd5b506106836004803603602081101561066d57600080fd5b81019080803590602001909291905050506113a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106d157600080fd5b506106da6113df565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561071a5780820151818401526020810190506106ff565b50505050905090810190601f1680156107475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561076157600080fd5b506107a46004803603602081101561077857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611481565b6040518082815260200191505060405180910390f35b3480156107c657600080fd5b506107f3600480360360208110156107dd57600080fd5b8101908080359060200190929190505050611556565b005b34801561080157600080fd5b5061083e6004803603604081101561081857600080fd5b81019080803560ff169060200190929190803560ff1690602001909291905050506115f1565b604051808260ff1660ff16815260200191505060405180910390f35b34801561086657600080fd5b506108936004803603602081101561087d57600080fd5b8101908080359060200190929190505050611614565b6040518082815260200191505060405180910390f35b3480156108b557600080fd5b506108e2600480360360208110156108cc57600080fd5b810190808035906020019092919050505061162c565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561092857808201518184015260208101905061090d565b50505050905090810190601f1680156109555780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561097057600080fd5b506109796116f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109b957808201518184015260208101905061099e565b50505050905090810190601f1680156109e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a0057600080fd5b50610a4f60048036036040811015610a1757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611797565b005b348015610a5d57600080fd5b50610aa260048036036060811015610a7457600080fd5b8101908080359060200190929190803561ffff1690602001909291908035906020019092919050505061194f565b6040518082815260200191505060405180910390f35b348015610ac457600080fd5b50610acd611967565b6040518082815260200191505060405180910390f35b348015610aef57600080fd5b50610bf360048036036080811015610b0657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610b6d57600080fd5b820183602082011115610b7f57600080fd5b80359060200191846001830284011164010000000083111715610ba157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061196d565b005b348015610c0157600080fd5b50610c2e60048036036020811015610c1857600080fd5b81019080803590602001909291905050506119e5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c6e578082015181840152602081019050610c53565b50505050905090810190601f168015610c9b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610cb557600080fd5b50610d1860048036036040811015610ccc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cce565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e315780601f10610e0657610100808354040283529160200191610e31565b820191906000526020600020905b815481529060010190602001808311610e1457829003601f168201915b5050505050905090565b6000610e4682611d62565b610e9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806135ec602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610ee1826113a8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f68576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061369c6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610f87611d7f565b73ffffffffffffffffffffffffffffffffffffffff161480610fb65750610fb581610fb0611d7f565b611cce565b5b61100b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061353f6038913960400191505060405180910390fd5b6110158383611d87565b505050565b6000600c543414611093576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f706179206665650000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b61109b611e40565b6110a5600a611eab565b60006110b1600a611ec1565b90506110bd3382611ecf565b6110c88482856120c3565b61122c818560405160200180807f7b226e616d65223a202200000000000000000000000000000000000000000000815250600a0182805190602001908083835b6020831061112b5780518252602082019150602081019050602083039250611108565b6001836020036101000a038019825116818451168082178552505050505050905001807f222c20226465736372697074696f6e223a202200000000000000000000000000815250601301807f4175726269742061766174617200000000000000000000000000000000000000815250600d01807f222c2022696d616765223a202200000000000000000000000000000000000000815250600d01807f73616d706c6520696d6167652075726900000000000000000000000000000000815250601001807f227d0000000000000000000000000000000000000000000000000000000000008152506002019150506040516020818303038152906040526121de565b8091505092915050565b60006112426002612268565b905090565b611258611252611d7f565b8261227d565b6112ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806136bd6031913960400191505060405180910390fd5b6112b8838383612371565b505050565b600061131082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206125b490919063ffffffff16565b905092915050565b6113338383836040518060200160405280600081525061196d565b505050565b60008061134f8360026125ce90919063ffffffff16565b50905080915050919050565b6000600e8054905082111561136f57600080fd5b600e600f6000848152602001908152602001600020548154811061138f57fe5b9060005260206000209060020201600101549050919050565b60006113d8826040518060600160405280602981526020016135a16029913960026125fd9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114775780601f1061144c57610100808354040283529160200191611477565b820191906000526020600020905b81548152906001019060200180831161145a57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611508576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613577602a913960400191505060405180910390fd5b61154f600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061261c565b9050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146115b057600080fd5b80600c819055507f8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c76816040518082815260200191505060405180910390a150565b60008160020260ff168260020260ff166003901b841660ff16901c905092915050565b600f6020528060005260406000206000915090505481565b600e818154811061163957fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b5050505050908060010154905082565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561178d5780601f106117625761010080835404028352916020019161178d565b820191906000526020600020905b81548152906001019060200180831161177057829003601f168201915b5050505050905090565b61179f611d7f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611840576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061184d611d7f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166118fa611d7f565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000838360080261ffff1683901b0190509392505050565b600c5481565b61197e611978611d7f565b8361227d565b6119d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806136bd6031913960400191505060405180910390fd5b6119df84848484612631565b50505050565b60606119f082611d62565b611a45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061366d602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aee5780601f10611ac357610100808354040283529160200191611aee565b820191906000526020600020905b815481529060010190602001808311611ad157829003601f168201915b50505050509050600060098054600181600116156101000203166002900490501415611b1d5780915050611cc9565b600081511115611bf6576009816040516020018083805460018160011615610100020316600290048015611b885780601f10611b66576101008083540402835291820191611b88565b820191906000526020600020905b815481529060010190602001808311611b74575b505082805190602001908083835b60208310611bb95780518252602082019150602081019050602083039250611b96565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050611cc9565b6009611c01846126a3565b6040516020018083805460018160011615610100020316600290048015611c5f5780601f10611c3d576101008083540402835291820191611c5f565b820191906000526020600020905b815481529060010190602001808311611c4b575b505082805190602001908083835b60208310611c905780518252602082019150602081019050602083039250611c6d565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611d788260026127d390919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611dfa836113a8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015611ea8573d6000803e3d6000fd5b50565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611f72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611f7b81611d62565b15611fee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611ffa600083836127ed565b61204b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206127f290919063ffffffff16565b506120628183600261280c9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006120cf8483612841565b905060006120dd8583612983565b905080600f6000868152602001908152602001600020819055507ff2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b433838388604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561219a57808201518184015260208101905061217f565b50505050905090810190601f1680156121c75780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15050505050565b6121e782611d62565b61223c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613618602c913960400191505060405180910390fd5b80600860008481526020019081526020016000209080519060200190612263929190613375565b505050565b6000612276826000016129ff565b9050919050565b600061228882611d62565b6122dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613513602c913960400191505060405180910390fd5b60006122e8836113a8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061235757508373ffffffffffffffffffffffffffffffffffffffff1661233f84610e3b565b73ffffffffffffffffffffffffffffffffffffffff16145b8061236857506123678185611cce565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16612391826113a8565b73ffffffffffffffffffffffffffffffffffffffff16146123fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806136446029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612483576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806134ef6024913960400191505060405180910390fd5b61248e8383836127ed565b612499600082611d87565b6124ea81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612a1090919063ffffffff16565b5061253c81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206127f290919063ffffffff16565b506125538183600261280c9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006125c38360000183612a2a565b60001c905092915050565b6000806000806125e18660000186612aad565b915091508160001c8160001c8090509350935050509250929050565b6000612610846000018460001b84612b46565b60001c90509392505050565b600061262a82600001612c3c565b9050919050565b61263c848484612371565b61264884848484612c4d565b61269d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806134bd6032913960400191505060405180910390fd5b50505050565b606060008214156126eb576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506127ce565b600082905060005b60008214612715578080600101915050600a828161270d57fe5b0491506126f3565b6060816040519080825280601f01601f19166020018201604052801561274a5781602001600182028038833980820191505090505b50905060006001830390508593505b600084146127c657600a848161276b57fe5b0660300160f81b8282806001900393508151811061278557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816127be57fe5b049350612759565b819450505050505b919050565b60006127e5836000018360001b612e92565b905092915050565b505050565b6000612804836000018360001b612eb5565b905092915050565b6000612838846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612f25565b90509392505050565b600080834340436040516020018084805190602001908083835b6020831061287e578051825260208201915060208101905060208303925061285b565b6001836020036101000a03801982511681845116808217855250505050505090500183815260200182815260200193505050506040516020818303038152906040528051906020012060001c9050600060ff8416905060006028600f60016128e78560006115f1565b010260ff1684816128f457fe5b0601905060006028600f600161290b8660016115f1565b010260ff16600886901c8161291c57fe5b0601905060006028600f60016129338760026115f1565b010260ff16601087901c8161294457fe5b06019050600061295688600f8661194f565b90506129648160108561194f565b90506129728160118461194f565b905080965050505050505092915050565b6000600e604051806040016040528085815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906129e19291906133f5565b506020820151816001015550506001600e8054905003905092915050565b600081600001805490509050919050565b6000612a22836000018360001b613001565b905092915050565b600081836000018054905011612a8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061349b6022913960400191505060405180910390fd5b826000018281548110612a9a57fe5b9060005260206000200154905092915050565b60008082846000018054905011612b0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806135ca6022913960400191505060405180910390fd5b6000846000018481548110612b2057fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612c0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612bd2578082015181840152602081019050612bb7565b50505050905090810190601f168015612bff5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110612c2057fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b6000612c6e8473ffffffffffffffffffffffffffffffffffffffff166130e9565b612c7b5760019050612e8a565b6060612e1163150b7a0260e01b612c90611d7f565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612d40578082015181840152602081019050612d25565b50505050905090810190601f168015612d6d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016134bd603291398773ffffffffffffffffffffffffffffffffffffffff166131349092919063ffffffff16565b90506000818060200190516020811015612e2a57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000612ec1838361314c565b612f1a578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612f1f565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612fcc57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612ffa565b82856000016001830381548110612fdf57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020549050600081146130dd576000600182039050600060018660000180549050039050600086600001828154811061304c57fe5b906000526020600020015490508087600001848154811061306957fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806130a157fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506130e3565b60009150505b92915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561312b57506000801b8214155b92505050919050565b6060613143848460008561316f565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606061317a856130e9565b6131ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061323c5780518252602082019150602081019050602083039250613219565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461329e576040519150601f19603f3d011682016040523d82523d6000602084013e6132a3565b606091505b509150915081156132b857809250505061336d565b6000815111156132cb5780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613332578082015181840152602081019050613317565b50505050905090810190601f16801561335f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106133b657805160ff19168380011785556133e4565b828001600101855582156133e4579182015b828111156133e35782518255916020019190600101906133c8565b5b5090506133f19190613475565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061343657805160ff1916838001178555613464565b82800160010185558215613464579182015b82811115613463578251825591602001919060010190613448565b5b5090506134719190613475565b5090565b61349791905b8082111561349357600081600090555060010161347b565b5090565b9056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220aa668d79e6e0b7cbdf47c7b28181835ede8d40fa523db9b9c72a1b1ca29e29cb64736f6c63430006020033",
  "deployedBytecode": "0x6080604052600436106101665760003560e01c80636c0360eb116100d157806395d89b411161008a578063b424388a11610064578063b424388a14610ab8578063b88d4fde14610ae3578063c87b56dd14610bf5578063e985e9c514610ca957610166565b806395d89b4114610964578063a22cb465146109f4578063b3b0705b14610a5157610166565b80636c0360eb146106c557806370a082311461075557806374411eef146107ba5780637660271d146107f55780638177b6761461085a578063834d5fac146108a957610166565b806323b872dd1161012357806323b872dd146104475780632f745c59146104c257806342842e0e146105315780634f6ccce7146105ac5780635bb209a5146105fb5780636352211e1461064a57610166565b806301ffc9a71461016b57806306fdde03146101dd578063081812fc1461026d578063095ea7b3146102e85780630c106beb1461034357806318160ddd1461041c575b600080fd5b34801561017757600080fd5b506101c36004803603602081101561018e57600080fd5b8101908080357bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19169060200190929190505050610d32565b604051808215151515815260200191505060405180910390f35b3480156101e957600080fd5b506101f2610d99565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610232578082015181840152602081019050610217565b50505050905090810190601f16801561025f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561027957600080fd5b506102a66004803603602081101561029057600080fd5b8101908080359060200190929190505050610e3b565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156102f457600080fd5b506103416004803603604081101561030b57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ed6565b005b6104066004803603604081101561035957600080fd5b810190808035906020019064010000000081111561037657600080fd5b82018360208201111561038857600080fd5b803590602001918460018302840111640100000000831117156103aa57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192908035906020019092919050505061101a565b6040518082815260200191505060405180910390f35b34801561042857600080fd5b50610431611236565b6040518082815260200191505060405180910390f35b34801561045357600080fd5b506104c06004803603606081101561046a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611247565b005b3480156104ce57600080fd5b5061051b600480360360408110156104e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506112bd565b6040518082815260200191505060405180910390f35b34801561053d57600080fd5b506105aa6004803603606081101561055457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611318565b005b3480156105b857600080fd5b506105e5600480360360208110156105cf57600080fd5b8101908080359060200190929190505050611338565b6040518082815260200191505060405180910390f35b34801561060757600080fd5b506106346004803603602081101561061e57600080fd5b810190808035906020019092919050505061135b565b6040518082815260200191505060405180910390f35b34801561065657600080fd5b506106836004803603602081101561066d57600080fd5b81019080803590602001909291905050506113a8565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3480156106d157600080fd5b506106da6113df565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561071a5780820151818401526020810190506106ff565b50505050905090810190601f1680156107475780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561076157600080fd5b506107a46004803603602081101561077857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611481565b6040518082815260200191505060405180910390f35b3480156107c657600080fd5b506107f3600480360360208110156107dd57600080fd5b8101908080359060200190929190505050611556565b005b34801561080157600080fd5b5061083e6004803603604081101561081857600080fd5b81019080803560ff169060200190929190803560ff1690602001909291905050506115f1565b604051808260ff1660ff16815260200191505060405180910390f35b34801561086657600080fd5b506108936004803603602081101561087d57600080fd5b8101908080359060200190929190505050611614565b6040518082815260200191505060405180910390f35b3480156108b557600080fd5b506108e2600480360360208110156108cc57600080fd5b810190808035906020019092919050505061162c565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b8381101561092857808201518184015260208101905061090d565b50505050905090810190601f1680156109555780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561097057600080fd5b506109796116f5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156109b957808201518184015260208101905061099e565b50505050905090810190601f1680156109e65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610a0057600080fd5b50610a4f60048036036040811015610a1757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803515159060200190929190505050611797565b005b348015610a5d57600080fd5b50610aa260048036036060811015610a7457600080fd5b8101908080359060200190929190803561ffff1690602001909291908035906020019092919050505061194f565b6040518082815260200191505060405180910390f35b348015610ac457600080fd5b50610acd611967565b6040518082815260200191505060405180910390f35b348015610aef57600080fd5b50610bf360048036036080811015610b0657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190640100000000811115610b6d57600080fd5b820183602082011115610b7f57600080fd5b80359060200191846001830284011164010000000083111715610ba157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f82011690508083019250505050505050919291929050505061196d565b005b348015610c0157600080fd5b50610c2e60048036036020811015610c1857600080fd5b81019080803590602001909291905050506119e5565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610c6e578082015181840152602081019050610c53565b50505050905090810190601f168015610c9b5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b348015610cb557600080fd5b50610d1860048036036040811015610ccc57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611cce565b604051808215151515815260200191505060405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e315780601f10610e0657610100808354040283529160200191610e31565b820191906000526020600020905b815481529060010190602001808311610e1457829003601f168201915b5050505050905090565b6000610e4682611d62565b610e9b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c8152602001806135ec602c913960400191505060405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6000610ee1826113a8565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610f68576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602181526020018061369c6021913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610f87611d7f565b73ffffffffffffffffffffffffffffffffffffffff161480610fb65750610fb581610fb0611d7f565b611cce565b5b61100b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603881526020018061353f6038913960400191505060405180910390fd5b6110158383611d87565b505050565b6000600c543414611093576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f706179206665650000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b61109b611e40565b6110a5600a611eab565b60006110b1600a611ec1565b90506110bd3382611ecf565b6110c88482856120c3565b61122c818560405160200180807f7b226e616d65223a202200000000000000000000000000000000000000000000815250600a0182805190602001908083835b6020831061112b5780518252602082019150602081019050602083039250611108565b6001836020036101000a038019825116818451168082178552505050505050905001807f222c20226465736372697074696f6e223a202200000000000000000000000000815250601301807f4175726269742061766174617200000000000000000000000000000000000000815250600d01807f222c2022696d616765223a202200000000000000000000000000000000000000815250600d01807f73616d706c6520696d6167652075726900000000000000000000000000000000815250601001807f227d0000000000000000000000000000000000000000000000000000000000008152506002019150506040516020818303038152906040526121de565b8091505092915050565b60006112426002612268565b905090565b611258611252611d7f565b8261227d565b6112ad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806136bd6031913960400191505060405180910390fd5b6112b8838383612371565b505050565b600061131082600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206125b490919063ffffffff16565b905092915050565b6113338383836040518060200160405280600081525061196d565b505050565b60008061134f8360026125ce90919063ffffffff16565b50905080915050919050565b6000600e8054905082111561136f57600080fd5b600e600f6000848152602001908152602001600020548154811061138f57fe5b9060005260206000209060020201600101549050919050565b60006113d8826040518060600160405280602981526020016135a16029913960026125fd9092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114775780601f1061144c57610100808354040283529160200191611477565b820191906000526020600020905b81548152906001019060200180831161145a57829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611508576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a815260200180613577602a913960400191505060405180910390fd5b61154f600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061261c565b9050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16146115b057600080fd5b80600c819055507f8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c76816040518082815260200191505060405180910390a150565b60008160020260ff168260020260ff166003901b841660ff16901c905092915050565b600f6020528060005260406000206000915090505481565b600e818154811061163957fe5b9060005260206000209060020201600091509050806000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156116e55780601f106116ba576101008083540402835291602001916116e5565b820191906000526020600020905b8154815290600101906020018083116116c857829003601f168201915b5050505050908060010154905082565b606060078054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561178d5780601f106117625761010080835404028352916020019161178d565b820191906000526020600020905b81548152906001019060200180831161177057829003601f168201915b5050505050905090565b61179f611d7f565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611840576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f4552433732313a20617070726f766520746f2063616c6c65720000000000000081525060200191505060405180910390fd5b806005600061184d611d7f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166118fa611d7f565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051808215151515815260200191505060405180910390a35050565b6000838360080261ffff1683901b0190509392505050565b600c5481565b61197e611978611d7f565b8361227d565b6119d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001806136bd6031913960400191505060405180910390fd5b6119df84848484612631565b50505050565b60606119f082611d62565b611a45576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f81526020018061366d602f913960400191505060405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611aee5780601f10611ac357610100808354040283529160200191611aee565b820191906000526020600020905b815481529060010190602001808311611ad157829003601f168201915b50505050509050600060098054600181600116156101000203166002900490501415611b1d5780915050611cc9565b600081511115611bf6576009816040516020018083805460018160011615610100020316600290048015611b885780601f10611b66576101008083540402835291820191611b88565b820191906000526020600020905b815481529060010190602001808311611b74575b505082805190602001908083835b60208310611bb95780518252602082019150602081019050602083039250611b96565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050611cc9565b6009611c01846126a3565b6040516020018083805460018160011615610100020316600290048015611c5f5780601f10611c3d576101008083540402835291820191611c5f565b820191906000526020600020905b815481529060010190602001808311611c4b575b505082805190602001908083835b60208310611c905780518252602082019150602081019050602083039250611c6d565b6001836020036101000a038019825116818451168082178552505050505050905001925050506040516020818303038152906040529150505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000611d788260026127d390919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16611dfa836113a8565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015611ea8573d6000803e3d6000fd5b50565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611f72576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4552433732313a206d696e7420746f20746865207a65726f206164647265737381525060200191505060405180910390fd5b611f7b81611d62565b15611fee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000081525060200191505060405180910390fd5b611ffa600083836127ed565b61204b81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206127f290919063ffffffff16565b506120628183600261280c9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b60006120cf8483612841565b905060006120dd8583612983565b905080600f6000868152602001908152602001600020819055507ff2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b433838388604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b8381101561219a57808201518184015260208101905061217f565b50505050905090810190601f1680156121c75780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15050505050565b6121e782611d62565b61223c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613618602c913960400191505060405180910390fd5b80600860008481526020019081526020016000209080519060200190612263929190613375565b505050565b6000612276826000016129ff565b9050919050565b600061228882611d62565b6122dd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180613513602c913960400191505060405180910390fd5b60006122e8836113a8565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061235757508373ffffffffffffffffffffffffffffffffffffffff1661233f84610e3b565b73ffffffffffffffffffffffffffffffffffffffff16145b8061236857506123678185611cce565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16612391826113a8565b73ffffffffffffffffffffffffffffffffffffffff16146123fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806136446029913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415612483576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806134ef6024913960400191505060405180910390fd5b61248e8383836127ed565b612499600082611d87565b6124ea81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612a1090919063ffffffff16565b5061253c81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206127f290919063ffffffff16565b506125538183600261280c9092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b60006125c38360000183612a2a565b60001c905092915050565b6000806000806125e18660000186612aad565b915091508160001c8160001c8090509350935050509250929050565b6000612610846000018460001b84612b46565b60001c90509392505050565b600061262a82600001612c3c565b9050919050565b61263c848484612371565b61264884848484612c4d565b61269d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260328152602001806134bd6032913960400191505060405180910390fd5b50505050565b606060008214156126eb576040518060400160405280600181526020017f300000000000000000000000000000000000000000000000000000000000000081525090506127ce565b600082905060005b60008214612715578080600101915050600a828161270d57fe5b0491506126f3565b6060816040519080825280601f01601f19166020018201604052801561274a5781602001600182028038833980820191505090505b50905060006001830390508593505b600084146127c657600a848161276b57fe5b0660300160f81b8282806001900393508151811061278557fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84816127be57fe5b049350612759565b819450505050505b919050565b60006127e5836000018360001b612e92565b905092915050565b505050565b6000612804836000018360001b612eb5565b905092915050565b6000612838846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b612f25565b90509392505050565b600080834340436040516020018084805190602001908083835b6020831061287e578051825260208201915060208101905060208303925061285b565b6001836020036101000a03801982511681845116808217855250505050505090500183815260200182815260200193505050506040516020818303038152906040528051906020012060001c9050600060ff8416905060006028600f60016128e78560006115f1565b010260ff1684816128f457fe5b0601905060006028600f600161290b8660016115f1565b010260ff16600886901c8161291c57fe5b0601905060006028600f60016129338760026115f1565b010260ff16601087901c8161294457fe5b06019050600061295688600f8661194f565b90506129648160108561194f565b90506129728160118461194f565b905080965050505050505092915050565b6000600e604051806040016040528085815260200184815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000190805190602001906129e19291906133f5565b506020820151816001015550506001600e8054905003905092915050565b600081600001805490509050919050565b6000612a22836000018360001b613001565b905092915050565b600081836000018054905011612a8b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061349b6022913960400191505060405180910390fd5b826000018281548110612a9a57fe5b9060005260206000200154905092915050565b60008082846000018054905011612b0f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806135ca6022913960400191505060405180910390fd5b6000846000018481548110612b2057fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612c0d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015612bd2578082015181840152602081019050612bb7565b50505050905090810190601f168015612bff5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110612c2057fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b6000612c6e8473ffffffffffffffffffffffffffffffffffffffff166130e9565b612c7b5760019050612e8a565b6060612e1163150b7a0260e01b612c90611d7f565b888787604051602401808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015612d40578082015181840152602081019050612d25565b50505050905090810190601f168015612d6d5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016134bd603291398773ffffffffffffffffffffffffffffffffffffffff166131349092919063ffffffff16565b90506000818060200190516020811015612e2a57600080fd5b8101908080519060200190929190505050905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b6000612ec1838361314c565b612f1a578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612f1f565b600090505b92915050565b6000808460010160008581526020019081526020016000205490506000811415612fcc57846000016040518060400160405280868152602001858152509080600181540180825580915050600190039060005260206000209060020201600090919091909150600082015181600001556020820151816001015550508460000180549050856001016000868152602001908152602001600020819055506001915050612ffa565b82856000016001830381548110612fdf57fe5b90600052602060002090600202016001018190555060009150505b9392505050565b600080836001016000848152602001908152602001600020549050600081146130dd576000600182039050600060018660000180549050039050600086600001828154811061304c57fe5b906000526020600020015490508087600001848154811061306957fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806130a157fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506130e3565b60009150505b92915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561312b57506000801b8214155b92505050919050565b6060613143848460008561316f565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606061317a856130e9565b6131ec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000081525060200191505060405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040518082805190602001908083835b6020831061323c5780518252602082019150602081019050602083039250613219565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461329e576040519150601f19603f3d011682016040523d82523d6000602084013e6132a3565b606091505b509150915081156132b857809250505061336d565b6000815111156132cb5780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015613332578082015181840152602081019050613317565b50505050905090810190601f16801561335f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106133b657805160ff19168380011785556133e4565b828001600101855582156133e4579182015b828111156133e35782518255916020019190600101906133c8565b5b5090506133f19190613475565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061343657805160ff1916838001178555613464565b82800160010185558215613464579182015b82811115613463578251825591602001919060010190613448565b5b5090506134719190613475565b5090565b61349791905b8082111561349357600081600090555060010161347b565b5090565b9056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220aa668d79e6e0b7cbdf47c7b28181835ede8d40fa523db9b9c72a1b1ca29e29cb64736f6c63430006020033",
  "sourceMap": "341:4349:2:-:0;;;517:6;484:39;;892:211;8:9:-1;5:2;;;30:1;27;20:12;5:2;892:211:2;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;892:211:2;;;;;;;;;;;;;;;;3565:365:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:40:10;418:10;770:20;;751:18;;;:40;;:::i;:::-;3645:4:15;3637:5;:12;;;;;;;;;;;;:::i;:::-;;3669:6;3659:7;:16;;;;;;;;;;;;:::i;:::-;;3763:40;2730:10;3782:20;;3763:18;;;:40;;:::i;:::-;3813:49;3062:10;3832:29;;3813:18;;;:49;;:::i;:::-;3872:51;3435:10;3891:31;;3872:18;;;:51;;:::i;:::-;3565:365;;1017:12:2::1;1003:11;;:26;;;;;;;;;;;;;;;;;;1047:10;1039:5;;:18;;;;;;;;;;;;;;;;;;892:211:::0;341:4349;;1482:198:10;1580:10;1565:25;;:11;:25;;;;;1557:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1669:4;1633:20;:33;1654:11;1633:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1482:198;:::o;341:4349:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "341:4349:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:140:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;948:140:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;948:140:10;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4486:90:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4486:90:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4486:90:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7093:209;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7093:209:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7093:209:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;6651:381;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6651:381:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6651:381:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1202:971:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1202:971:2;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;1202:971:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1202:971:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1202:971:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;1202:971:2;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6161:200:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6161:200:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;7941:300;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7941:300:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7941:300:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5938:152;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5938:152:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5938:152:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8307:149;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8307:149:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;8307:149:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;6433:161;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6433:161:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6433:161:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4449:239:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4449:239:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4449:239:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4257:167:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4257:167:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4257:167:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5772:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5772:87:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5772:87:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3989:211;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3989:211:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3989:211:15;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2179:172:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2179:172:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2179:172:2;;;;;;;;;;;;;;;;;:::i;:::-;;2600:234;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2600:234:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2600:234:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;720:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;720:48:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;720:48:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;691:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;691:23:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;691:23:2;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;691:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:94:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4640:94:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4640:94:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7369:290;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7369:290:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7369:290:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3791:232:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3791:232:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3791:232:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;484:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;484:39:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;8522:282:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8522:282:15;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;8522:282:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;8;5:28;2:2;;;46:1;43;36:12;2:2;8522:282:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8522:282:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8522:282:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;93:3;85:6;81:16;74:27;137:4;133:9;126:4;121:3;117:14;113:30;106:37;;169:3;161:6;157:16;147:26;;8522:282:15;;;;;;;;;;;;;;;:::i;:::-;;4800:740;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4800:740:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4800:740:15;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4800:740:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7725:154;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7725:154:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;7725:154:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;948:140:10;1025:4;1048:20;:33;1069:11;1048:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1041:40;;948:140;;;:::o;4486:90:15:-;4532:13;4564:5;4557:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4486:90;:::o;7093:209::-;7161:7;7188:16;7196:7;7188;:16::i;:::-;7180:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7271:15;:24;7287:7;7271:24;;;;;;;;;;;;;;;;;;;;;7264:31;;7093:209;;;:::o;6651:381::-;6731:13;6747:16;6755:7;6747;:16::i;:::-;6731:32;;6787:5;6781:11;;:2;:11;;;;6773:57;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6865:5;6849:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;6874:37;6891:5;6898:12;:10;:12::i;:::-;6874:16;:37::i;:::-;6849:62;6841:152;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7004:21;7013:2;7017:7;7004:8;:21::i;:::-;6651:381;;;:::o;1202:971:2:-;1308:7;1352:15;;1339:9;:28;1331:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1389:9;:7;:9::i;:::-;1461:21;:9;:19;:21::i;:::-;1492:17;1512:19;:9;:17;:19::i;:::-;1492:39;;1541:28;1547:10;1559:9;1541:5;:28::i;:::-;1600:39;1613:4;1619:9;1630:8;1600:12;:39::i;:::-;1649:374;1675:9;1794:4;1722:277;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1722:277:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1722:277:2;;;1649:12;:374::i;:::-;2157:9;2150:16;;;1202:971;;;;:::o;6161:200:15:-;6214:7;6333:21;:12;:19;:21::i;:::-;6326:28;;6161:200;:::o;7941:300::-;8100:41;8119:12;:10;:12::i;:::-;8133:7;8100:18;:41::i;:::-;8092:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8206:28;8216:4;8222:2;8226:7;8206:9;:28::i;:::-;7941:300;;;:::o;5938:152::-;6027:7;6053:30;6077:5;6053:13;:20;6067:5;6053:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6046:37;;5938:152;;;;:::o;8307:149::-;8410:39;8427:4;8433:2;8437:7;8410:39;;;;;;;;;;;;:16;:39::i;:::-;8307:149;;;:::o;6433:161::-;6500:7;6520:15;6541:22;6557:5;6541:12;:15;;:22;;;;:::i;:::-;6519:44;;;6580:7;6573:14;;;6433:161;;;:::o;4449:239:2:-;4499:7;4618;:14;;;;4611:3;:21;;4603:30;;;;;;4650:7;4658:13;:18;4672:3;4658:18;;;;;;;;;;;;4650:27;;;;;;;;;;;;;;;;;;:31;;;4643:38;;4449:239;;;:::o;4257:167:15:-;4321:7;4347:70;4364:7;4347:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4340:77;;4257:167;;;:::o;5772:87::-;5812:13;5844:8;5837:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5772:87;:::o;3989:211::-;4053:7;4097:1;4080:19;;:5;:19;;;;4072:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4164:29;:13;:20;4178:5;4164:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4157:36;;3989:211;;;:::o;2179:172:2:-;2264:10;2249:25;;:11;;;;;;;;;;;:25;;;2241:34;;;;;;2303:7;2285:15;:25;;;;2325:19;2336:7;2325:19;;;;;;;;;;;;;;;;;;2179:172;:::o;2600:234::-;2660:5;2822:3;2818:1;:7;2791:35;;2807:3;2803:1;:7;2797:14;;:1;:14;;2792:1;:20;2791:35;;;;2783:44;;2600:234;;;;:::o;720:48::-;;;;;;;;;;;;;;;;;:::o;691:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4640:94:15:-;4688:13;4720:7;4713:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:94;:::o;7369:290::-;7483:12;:10;:12::i;:::-;7471:24;;:8;:24;;;;7463:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7581:8;7536:18;:32;7555:12;:10;:12::i;:::-;7536:32;;;;;;;;;;;;;;;:42;7569:8;7536:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7633:8;7604:48;;7619:12;:10;:12::i;:::-;7604:48;;;7643:8;7604:48;;;;;;;;;;;;;;;;;;;;;;7369:290;;:::o;3791:232:2:-;3902:7;4010:6;4004:1;4000;:5;3988:18;;:7;:18;;3987:29;3980:36;;3791:232;;;;;:::o;484:39::-;;;;:::o;8522:282:15:-;8653:41;8672:12;:10;:12::i;:::-;8686:7;8653:18;:41::i;:::-;8645:103;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8758:39;8772:4;8778:2;8782:7;8791:5;8758:13;:39::i;:::-;8522:282;;;;:::o;4800:740::-;4865:13;4898:16;4906:7;4898;:16::i;:::-;4890:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4977:23;5003:10;:19;5014:7;5003:19;;;;;;;;;;;4977:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5121:1;5101:8;5095:22;;;;;;;;;;;;;;;;:27;5091:74;;;5145:9;5138:16;;;;;5091:74;5293:1;5273:9;5267:23;:27;5263:110;;;5341:8;5351:9;5324:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5324:37:15;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5324:37:15;;;5310:52;;;;;5263:110;5503:8;5513:18;:7;:16;:18::i;:::-;5486:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5486:46:15;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5486:46:15;;;5472:61;;;4800:740;;;;:::o;7725:154::-;7814:4;7837:18;:25;7856:5;7837:25;;;;;;;;;;;;;;;:35;7863:8;7837:35;;;;;;;;;;;;;;;;;;;;;;;;;7830:42;;7725:154;;;;:::o;10237:117::-;10294:4;10317:30;10339:7;10317:12;:21;;:30;;;;:::i;:::-;10310:37;;10237:117;;;:::o;590:104:9:-;643:15;677:10;670:17;;590:104;:::o;15893:155:15:-;15985:2;15958:15;:24;15974:7;15958:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16033:7;16029:2;16002:39;;16011:16;16019:7;16011;:16::i;:::-;16002:39;;;;;;;;;;;;15893:155;;:::o;1109:87:2:-;1146:11;;;;;;;;;;;:20;;:43;1167:21;1146:43;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1146:43:2;1109:87::o;1216:178:25:-;1386:1;1368:7;:14;;;:19;;;;;;;;;;;1216:178;:::o;1098:112::-;1163:7;1189;:14;;;1182:21;;1098:112;;;:::o;12070:393:15:-;12163:1;12149:16;;:2;:16;;;;12141:61;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12221:16;12229:7;12221;:16::i;:::-;12220:17;12212:58;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12281:45;12310:1;12314:2;12318:7;12281:20;:45::i;:::-;12337:30;12359:7;12337:13;:17;12351:2;12337:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12378:29;12395:7;12404:2;12378:12;:16;;:29;;;;;:::i;:::-;;12448:7;12444:2;12423:33;;12440:1;12423:33;;;;;;;;;;;;12070:393;;:::o;4029:414:2:-;4151:11;4165:23;4172:5;4179:8;4165:6;:23::i;:::-;4151:37;;4198:11;4212:23;4224:5;4231:3;4212:11;:23::i;:::-;4198:37;;4266:3;4245:13;:18;4259:3;4245:18;;;;;;;;;;;:24;;;;4401:35;4408:10;4420:3;4425;4430:5;4401:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4401:35:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4029:414;;;;;:::o;14212:212:15:-;14311:16;14319:7;14311;:16::i;:::-;14303:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14408:9;14386:10;:19;14397:7;14386:19;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;14212:212;;:::o;7023:121:26:-;7092:7;7118:19;7126:3;:10;;7118:7;:19::i;:::-;7111:26;;7023:121;;;:::o;10512:329:15:-;10597:4;10621:16;10629:7;10621;:16::i;:::-;10613:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10696:13;10712:16;10720:7;10712;:16::i;:::-;10696:32;;10757:5;10746:16;;:7;:16;;;:51;;;;10790:7;10766:31;;:20;10778:7;10766:11;:20::i;:::-;:31;;;10746:51;:87;;;;10801:32;10818:5;10825:7;10801:16;:32::i;:::-;10746:87;10738:96;;;10512:329;;;;:::o;13506:559::-;13623:4;13603:24;;:16;13611:7;13603;:16::i;:::-;:24;;;13595:78;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13705:1;13691:16;;:2;:16;;;;13683:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13759:39;13780:4;13786:2;13790:7;13759:20;:39::i;:::-;13860:29;13877:1;13881:7;13860:8;:29::i;:::-;13900:35;13927:7;13900:13;:19;13914:4;13900:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;13945:30;13967:7;13945:13;:17;13959:2;13945:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;13986:29;14003:7;14012:2;13986:12;:16;;:29;;;;;:::i;:::-;;14050:7;14046:2;14031:27;;14040:4;14031:27;;;;;;;;;;;;13506:559;;;:::o;7649:135:27:-;7720:7;7754:22;7758:3;:10;;7770:5;7754:3;:22::i;:::-;7746:31;;7739:38;;7649:135;;;;:::o;7472:224:26:-;7552:7;7561;7581:11;7594:13;7611:22;7615:3;:10;;7627:5;7611:3;:22::i;:::-;7580:53;;;;7659:3;7651:12;;7681:5;7673:14;;7643:46;;;;;;;;;7472:224;;;;;:::o;8115:202::-;8222:7;8264:44;8269:3;:10;;8289:3;8281:12;;8295;8264:4;:44::i;:::-;8256:53;;8241:69;;8115:202;;;;;:::o;7205:112:27:-;7265:7;7291:19;7299:3;:10;;7291:7;:19::i;:::-;7284:26;;7205:112;;;:::o;9665:269:15:-;9778:28;9788:4;9794:2;9798:7;9778:9;:28::i;:::-;9824:48;9847:4;9853:2;9857:7;9866:5;9824:22;:48::i;:::-;9816:111;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9665:269;;;;:::o;202:723:28:-;258:13;484:1;475:5;:10;471:51;;;501:10;;;;;;;;;;;;;;;;;;;;;471:51;531:12;546:5;531:20;;561:14;585:75;600:1;592:4;:9;585:75;;617:8;;;;;;;647:2;639:10;;;;;;;;;585:75;;;669:19;701:6;691:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;691:17:28;;;;669:39;;718:13;743:1;734:6;:10;718:26;;761:5;754:12;;776:112;791:1;783:4;:9;776:112;;849:2;842:4;:9;;;;;;837:2;:14;826:27;;808:6;815:7;;;;;;;808:15;;;;;;;;;;;:45;;;;;;;;;;;875:2;867:10;;;;;;;;;776:112;;;911:6;897:21;;;;;;202:723;;;;:::o;6791:149:26:-;6875:4;6898:35;6908:3;:10;;6928:3;6920:12;;6898:9;:35::i;:::-;6891:42;;6791:149;;;;:::o;16644:93:15:-;;;;:::o;6467:129:27:-;6534:4;6557:32;6562:3;:10;;6582:5;6574:14;;6557:4;:32::i;:::-;6550:39;;6467:129;;;;:::o;6239:174:26:-;6328:4;6351:55;6356:3;:10;;6376:3;6368:12;;6398:5;6390:14;;6382:23;;6351:4;:55::i;:::-;6344:62;;6239:174;;;;;:::o;2840:945:2:-;2941:7;2964:13;3045:5;3062:12;3052:23;3077:12;3028:62;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;3028:62:2;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;3028:62:2;;;3001:103;;;;;;2980:134;;2964:150;;3178:10;3208:3;3197:8;:14;3178:34;;3252:13;3312:2;3305;3300:1;3279:18;3289:4;3295:1;3279:9;:18::i;:::-;:22;3278:29;3269:39;;:5;:39;;;;;;3268:46;3252:62;;3364:13;3431:2;3424;3419:1;3398:18;3408:4;3414:1;3398:9;:18::i;:::-;:22;3397:29;3381:46;;3391:1;3382:5;:10;;3381:46;;;;;;3380:53;3364:69;;3461:16;3544:2;3525;3520:1;3499:18;3509:4;3515:1;3499:9;:18::i;:::-;:22;3498:29;3481:47;;3491:2;3482:5;:11;;3481:47;;;;;;3480:66;3461:85;;3576:11;3590:28;3598:8;3608:2;3612:5;3590:7;:28::i;:::-;3576:42;;3634:23;3642:3;3647:2;3651:5;3634:7;:23::i;:::-;3628:29;;3673:26;3681:3;3686:2;3690:8;3673:7;:26::i;:::-;3667:32;;3775:3;3768:10;;;;;;;;2840:945;;;;:::o;2357:237::-;2446:7;2519;2532:19;;;;;;;;2539:5;2532:19;;;;2546:4;2532:19;;;2519:33;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2519:33:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;2586:1;2569:7;:14;;;;:18;2562:25;;2357:237;;;;:::o;4483:108:26:-;4539:7;4565:3;:12;;:19;;;;4558:26;;4483:108;;;:::o;6764:135:27:-;6834:4;6857:35;6865:3;:10;;6885:5;6877:14;;6857:7;:35::i;:::-;6850:42;;6764:135;;;;:::o;4423:201::-;4490:7;4538:5;4517:3;:11;;:18;;;;:26;4509:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4599:3;:11;;4611:5;4599:18;;;;;;;;;;;;;;;;4592:25;;4423:201;;;;:::o;4934:274:26:-;5001:7;5010;5059:5;5037:3;:12;;:19;;;;:27;5029:74;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5114:22;5139:3;:12;;5152:5;5139:19;;;;;;;;;;;;;;;;;;5114:44;;5176:5;:10;;;5188:5;:12;;;5168:33;;;;;4934:274;;;;;:::o;5615:315::-;5709:7;5728:16;5747:3;:12;;:17;5760:3;5747:17;;;;;;;;;;;;5728:36;;5794:1;5782:8;:13;;5797:12;5774:36;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5774:36:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5863:3;:12;;5887:1;5876:8;:12;5863:26;;;;;;;;;;;;;;;;;;:33;;;5856:40;;;5615:315;;;;;:::o;3984:107:27:-;4040:7;4066:3;:11;;:18;;;;4059:25;;3984:107;;;:::o;15298:589:15:-;15418:4;15443:15;:2;:13;;;:15::i;:::-;15438:58;;15481:4;15474:11;;;;15438:58;15505:23;15531:246;15583:45;;;15642:12;:10;:12::i;:::-;15668:4;15686:7;15707:5;15547:175;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;15547:175:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15547:175:15;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15547:175:15;15531:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15505:272;;15787:13;15814:10;15803:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;15803:32:15;;;;;;;;;;;;;;;;15787:48;;1068:10;15863:16;;15853:26;;;:6;:26;;;;15845:35;;;;15298:589;;;;;;;:::o;4270:123:26:-;4341:4;4385:1;4364:3;:12;;:17;4377:3;4364:17;;;;;;;;;;;;:22;;4357:29;;4270:123;;;;:::o;1611:404:27:-;1674:4;1695:21;1705:3;1710:5;1695:9;:21::i;:::-;1690:319;;1732:3;:11;;1749:5;1732:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1732:23:27;;;;;;;;;;;;;;;;;;;1912:3;:11;;:18;;;;1890:3;:12;;:19;1903:5;1890:19;;;;;;;;;;;:40;;;;1951:4;1944:11;;;;1690:319;1993:5;1986:12;;1611:404;;;;;:::o;1828:678:26:-;1904:4;2018:16;2037:3;:12;;:17;2050:3;2037:17;;;;;;;;;;;;2018:36;;2081:1;2069:8;:13;2065:435;;;2135:3;:12;;2153:38;;;;;;;;2170:3;2153:38;;;;2183:5;2153:38;;;2135:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2135:57:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2347:3;:12;;:19;;;;2327:3;:12;;:17;2340:3;2327:17;;;;;;;;;;;:39;;;;2387:4;2380:11;;;;;2065:435;2458:5;2422:3;:12;;2446:1;2435:8;:12;2422:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2484:5;2477:12;;;1828:678;;;;;;:::o;2183:1512:27:-;2249:4;2365:18;2386:3;:12;;:19;2399:5;2386:19;;;;;;;;;;;;2365:40;;2434:1;2420:10;:15;2416:1273;;2777:21;2814:1;2801:10;:14;2777:38;;2829:17;2870:1;2849:3;:11;;:18;;;;:22;2829:42;;3111:17;3131:3;:11;;3143:9;3131:22;;;;;;;;;;;;;;;;3111:42;;3274:9;3245:3;:11;;3257:13;3245:26;;;;;;;;;;;;;;;:38;;;;3391:1;3375:13;:17;3349:3;:12;;:23;3362:9;3349:23;;;;;;;;;;;:43;;;;3498:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3590:3;:12;;:19;3603:5;3590:19;;;;;;;;;;;3583:26;;;3631:4;3624:11;;;;;;;;2416:1273;3673:5;3666:12;;;2183:1512;;;;;:::o;718:610:24:-;778:4;1036:16;1062:19;1084:66;1062:88;;;;1251:7;1239:20;1227:32;;1290:11;1278:8;:23;;:42;;;;;1317:3;1305:15;;:8;:15;;1278:42;1270:51;;;;718:610;;;:::o;3770:194::-;3873:12;3904:53;3927:6;3935:4;3941:1;3944:12;3904:22;:53::i;:::-;3897:60;;3770:194;;;;;:::o;3776:127:27:-;3849:4;3895:1;3872:3;:12;;:19;3885:5;3872:19;;;;;;;;;;;;:24;;3865:31;;3776:127;;;;:::o;5117:958:24:-;5247:12;5279:18;5290:6;5279:10;:18::i;:::-;5271:60;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5402:12;5416:23;5443:6;:11;;5463:8;5474:4;5443:36;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;182:3;176:10;171:3;164:23;98:2;93:3;89:12;82:19;;123:2;118:3;114:12;107:19;;148:2;143:3;139:12;132:19;;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5443:36:24;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;5401:78:24;;;;5493:7;5489:580;;;5523:10;5516:17;;;;;;5489:580;5654:1;5634:10;:17;:21;5630:429;;;5892:10;5886:17;5952:15;5939:10;5935:2;5931:19;5924:44;5841:145;6031:12;6024:20;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;6024:20:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5117:958;;;;;;;:::o;341:4349:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\n\n/**\n    Author: Chris Markov 2020\n    Project Aurbit\n\n    The Avatar Contract for the Aurbit Strategy Game.\n\n    Symbol: AURA\n\n    https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md\n\n */\ncontract AvatarAUR is ERC721 {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n    address payable owner;\n    uint256 public createAvatarFee = 10**16;\n    //uint dnasize = 16;\n    //uint dnamod = 10 ** dnasize;\n    address payable govContract;\n    struct Avatar {\n        string name;\n        uint256 dna;\n    }\n\n    Avatar[] public avatars;\n    mapping(uint256 => uint256) public TokenIDtoAvID;\n\n    event Minted(address sender, uint256 dna, uint256 avatarId, string name);\n    event FeeUpdated(uint256 newFee);\n\n    constructor(address payable _govContract)\n        public\n        ERC721(\"Aurbit Avatar\", \"AURA\")\n    {\n        govContract = _govContract;\n        owner = msg.sender; //set owner addres as sender on deploy\n    }\n\n    function forward() private {\n        govContract.transfer(address(this).balance);\n    }\n\n    function mintAvatar(string memory name, uint256 _userDNA)\n        public\n        payable\n        returns (uint256)\n    {\n        require(msg.value == createAvatarFee, \"pay fee\");\n        forward(); //enforce fee of 0.01 and forward to owner. bad way?\n        _tokenIds.increment();\n        uint256 newItemId = _tokenIds.current();\n        _mint(msg.sender, newItemId);\n        //uint dna =\n        _birthAvatar(name, newItemId, _userDNA);\n        _setTokenURI(\n            newItemId,\n            string(\n                abi.encodePacked(\n                    '{\"name\": \"',\n                    name,\n                    '\", \"description\": \"',\n                    \"Aurbit avatar\",\n                    '\", \"image\": \"',\n                    \"sample image uri\",\n                    '\"}'\n                )\n            )\n        );\n        //sample description and sample image uri should be replaced with variables, didnt bother declaring them yet\n        return newItemId;\n    }\n\n    function setcreateAvatarFee(uint256 _newfee) public {\n        require(govContract == msg.sender);\n        createAvatarFee = _newfee;\n        emit FeeUpdated(_newfee);\n    }\n\n    function storeAvatar(string memory _name, uint256 _dna)\n        private\n        returns (uint256)\n    {\n        //store in array of avatars, return index\n        avatars.push(Avatar(_name, _dna));\n        return avatars.length - 1;\n    }\n\n    function pullcrumb(uint8 b, uint8 pos) public pure returns (uint8) {\n        //pulls bits in 2 bit pairs i call crumbs\n        //8 bits a byte 4 bits a niddle 2 bits a crumb.\n        return ((b & (3 << (2 * pos))) >> (2 * pos));\n    }\n\n    function _mkDNA(string memory _name, uint256 _userDNA)\n        private\n        view\n        returns (uint256)\n    {\n        uint256 prand = uint256(\n            keccak256(\n                abi.encodePacked(_name, blockhash(block.number), block.number)\n            )\n        );\n        //uint prand = uint(blockhash(block.number));\n        uint8 race = uint8(_userDNA & 255); //pulls first byte, the race\n\n        uint256 intel = (prand % ((pullcrumb(race, 0) + 1) * 15)) + 40; //first 2 bits littleendian gives intel\n        uint256 vital = ((prand >> 8) % ((pullcrumb(race, 1) + 1) * 15)) + 40; //second is vital\n        uint256 strength = ((prand >> 16) % ((pullcrumb(race, 2) + 1) * 15)) +\n            40; //third is strength\n        uint256 out = setbyte(_userDNA, 15, intel);\n        out = setbyte(out, 16, vital);\n        out = setbyte(out, 17, strength); //this is the first of the batch when returned as array...\n        return out;\n    }\n\n    function setbyte(\n        uint256 _indat,\n        uint16 k,\n        uint256 _setdat\n    ) public pure returns (uint256) {\n        //set kth byte from the right in _indat to _setdat\n        return (_setdat << (8 * k)) + _indat;\n    }\n\n    function _birthAvatar(\n        string memory _name,\n        uint256 _id,\n        uint256 _userDNA\n    ) private {\n        uint256 dna = _mkDNA(_name, _userDNA);\n        uint256 aid = storeAvatar(_name, dna);\n        TokenIDtoAvID[_id] = aid;\n        //return dna; could return DNA to put in description, but parsing numbers to string is a little dumb i think\n        emit Minted(msg.sender, dna, aid, _name);\n    }\n\n    function getDNA(uint256 tid) public view returns (uint256) {\n        //gets DNA from token ID. not sure the exact proper error handling for this.\n        require(tid <= avatars.length);\n        return avatars[TokenIDtoAvID[tid]].dna;\n    }\n}\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
    "exportedSymbols": {
      "AvatarAUR": [
        1074
      ]
    },
    "id": 1075,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 656,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 657,
        "nodeType": "ImportDirective",
        "scope": 1075,
        "sourceUnit": 4736,
        "src": "25:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 658,
        "nodeType": "ImportDirective",
        "scope": 1075,
        "sourceUnit": 6405,
        "src": "83:52:2",
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
              "id": 659,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4735,
              "src": "363:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4735",
                "typeString": "contract ERC721"
              }
            },
            "id": 660,
            "nodeType": "InheritanceSpecifier",
            "src": "363:6:2"
          }
        ],
        "contractDependencies": [
          3434,
          3487,
          3497,
          4735,
          4838,
          4865,
          4888
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit\nThe Avatar Contract for the Aurbit Strategy Game.\nSymbol: AURA\nhttps://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md",
        "fullyImplemented": true,
        "id": 1074,
        "linearizedBaseContracts": [
          1074,
          4735,
          4865,
          4888,
          4838,
          3487,
          3497,
          3434
        ],
        "name": "AvatarAUR",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 663,
            "libraryName": {
              "contractScope": null,
              "id": 661,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6404,
              "src": "382:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$6404",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "376:36:2",
            "typeName": {
              "contractScope": null,
              "id": 662,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6364,
              "src": "395:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6364_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 665,
            "name": "_tokenIds",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "417:34:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$6364_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 664,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6364,
              "src": "417:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6364_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 667,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "457:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 666,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "457:15:2",
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
            "functionSelector": "b424388a",
            "id": 672,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "484:39:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 668,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "484:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              },
              "id": 671,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 669,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "517:2:2",
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
                "hexValue": "3136",
                "id": 670,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "521:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "517:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 674,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "589:27:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 673,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "589:15:2",
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
            "canonicalName": "AvatarAUR.Avatar",
            "id": 679,
            "members": [
              {
                "constant": false,
                "id": 676,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 679,
                "src": "646:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 675,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "646:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 678,
                "name": "dna",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 679,
                "src": "667:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 677,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "667:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Avatar",
            "nodeType": "StructDefinition",
            "scope": 1074,
            "src": "622:63:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "834d5fac",
            "id": 682,
            "name": "avatars",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "691:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
              "typeString": "struct AvatarAUR.Avatar[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 680,
                "name": "Avatar",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 679,
                "src": "691:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$679_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 681,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "691:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage_ptr",
                "typeString": "struct AvatarAUR.Avatar[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8177b676",
            "id": 686,
            "name": "TokenIDtoAvID",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "720:48:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 685,
              "keyType": {
                "id": 683,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "728:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "720:27:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 684,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "739:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 696,
            "name": "Minted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 688,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "788:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 687,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "788:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 690,
                  "indexed": false,
                  "name": "dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "804:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 689,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 692,
                  "indexed": false,
                  "name": "avatarId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "817:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 694,
                  "indexed": false,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "835:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 693,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "835:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "787:60:2"
            },
            "src": "775:73:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 700,
            "name": "FeeUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "indexed": false,
                  "name": "newFee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 700,
                  "src": "870:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "869:16:2"
            },
            "src": "853:33:2"
          },
          {
            "body": {
              "id": 718,
              "nodeType": "Block",
              "src": "993:110:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 709,
                      "name": "govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 674,
                      "src": "1003:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 710,
                      "name": "_govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 702,
                      "src": "1017:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1003:26:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 712,
                  "nodeType": "ExpressionStatement",
                  "src": "1003:26:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 667,
                      "src": "1039:5:2",
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
                        "id": 714,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1047:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1047:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1039:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 717,
                  "nodeType": "ExpressionStatement",
                  "src": "1039:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 719,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420417661746172",
                    "id": 705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "964:15:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_62d2154e551817e831a312c47609cf3b5c058675989a00b1e85598715ccaef76",
                      "typeString": "literal_string \"Aurbit Avatar\""
                    },
                    "value": "Aurbit Avatar"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "41555241",
                    "id": 706,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "981:6:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36c1b71af36fe05a429ec53ba7890fb4e69582f66364001b69d077cce5b9161c",
                      "typeString": "literal_string \"AURA\""
                    },
                    "value": "AURA"
                  }
                ],
                "id": 707,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 704,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4735,
                  "src": "957:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4735_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "957:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 702,
                  "name": "_govContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 719,
                  "src": "904:28:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:15:2",
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
              "src": "903:30:2"
            },
            "returnParameters": {
              "id": 708,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "993:0:2"
            },
            "scope": 1074,
            "src": "892:211:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 732,
              "nodeType": "Block",
              "src": "1136:60:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 727,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "1175:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1074",
                                "typeString": "contract AvatarAUR"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1074",
                                "typeString": "contract AvatarAUR"
                              }
                            ],
                            "id": 726,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1167:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 725,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1167:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1167:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 729,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1167:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 722,
                        "name": "govContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 674,
                        "src": "1146:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1146:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 730,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1146:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 731,
                  "nodeType": "ExpressionStatement",
                  "src": "1146:43:2"
                }
              ]
            },
            "documentation": null,
            "id": 733,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1125:2:2"
            },
            "returnParameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1136:0:2"
            },
            "scope": 1074,
            "src": "1109:87:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 795,
              "nodeType": "Block",
              "src": "1321:852:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 743,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1339:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1339:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 745,
                          "name": "createAvatarFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 672,
                          "src": "1352:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1339:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70617920666565",
                        "id": 747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1369:9:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_046db66822a9ca1f94ede1ceb6b4926e3cee46531f271f8616fbd2c189e86ce0",
                          "typeString": "literal_string \"pay fee\""
                        },
                        "value": "pay fee"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_046db66822a9ca1f94ede1ceb6b4926e3cee46531f271f8616fbd2c189e86ce0",
                          "typeString": "literal_string \"pay fee\""
                        }
                      ],
                      "id": 742,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1331:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1331:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "1331:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 750,
                      "name": "forward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 733,
                      "src": "1389:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1389:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 752,
                  "nodeType": "ExpressionStatement",
                  "src": "1389:9:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 753,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 665,
                        "src": "1461:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6364_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 755,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6387,
                      "src": "1461:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$6364_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$6364_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1461:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 757,
                  "nodeType": "ExpressionStatement",
                  "src": "1461:21:2"
                },
                {
                  "assignments": [
                    759
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 759,
                      "name": "newItemId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 795,
                      "src": "1492:17:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 758,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1492:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 763,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 760,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 665,
                        "src": "1512:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6364_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 761,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6375,
                      "src": "1512:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$6364_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$6364_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1512:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1492:39:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 765,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1547:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 766,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1547:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 767,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 759,
                        "src": "1559:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
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
                        }
                      ],
                      "id": 764,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4477,
                      "src": "1541:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1541:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 769,
                  "nodeType": "ExpressionStatement",
                  "src": "1541:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 771,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 735,
                        "src": "1613:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 772,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 759,
                        "src": "1619:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 773,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 737,
                        "src": "1630:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 770,
                      "name": "_birthAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1051,
                      "src": "1600:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256,uint256)"
                      }
                    },
                    "id": 774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1600:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 775,
                  "nodeType": "ExpressionStatement",
                  "src": "1600:39:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 777,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 759,
                        "src": "1675:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "7b226e616d65223a2022",
                                "id": 782,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1760:12:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                "value": "{\"name\": \""
                              },
                              {
                                "argumentTypes": null,
                                "id": 783,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 735,
                                "src": "1794:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c20226465736372697074696f6e223a2022",
                                "id": 784,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1820:21:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_15581e6d213db261f08a7321c9994dc20595359d1b11f34d43869e8f39d563bd",
                                  "typeString": "literal_string \"\", \"description\": \"\""
                                },
                                "value": "\", \"description\": \""
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "41757262697420617661746172",
                                "id": 785,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1863:15:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_1c80836ad6fcb9fffe11eb03442ab4b1bac30c790729d63279fb00117e18ecf2",
                                  "typeString": "literal_string \"Aurbit avatar\""
                                },
                                "value": "Aurbit avatar"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c2022696d616765223a2022",
                                "id": 786,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1900:15:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_8d0de490dde571af103e878aa265925a94dd83b4f74e62b617db5ad43a4f76af",
                                  "typeString": "literal_string \"\", \"image\": \"\""
                                },
                                "value": "\", \"image\": \""
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "73616d706c6520696d61676520757269",
                                "id": 787,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1937:18:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_3d9776dda7deafb1cb7d6a185bd49aeb83e74085a9b5b584805ccdd8c24ef159",
                                  "typeString": "literal_string \"sample image uri\""
                                },
                                "value": "sample image uri"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "227d",
                                "id": 788,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1977:4:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_835b459273672627bbafc3a2eded65187a632f4128bdc79e126c7ef579a27475",
                                  "typeString": "literal_string \"\"}\""
                                },
                                "value": "\"}"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_15581e6d213db261f08a7321c9994dc20595359d1b11f34d43869e8f39d563bd",
                                  "typeString": "literal_string \"\", \"description\": \"\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_1c80836ad6fcb9fffe11eb03442ab4b1bac30c790729d63279fb00117e18ecf2",
                                  "typeString": "literal_string \"Aurbit avatar\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_8d0de490dde571af103e878aa265925a94dd83b4f74e62b617db5ad43a4f76af",
                                  "typeString": "literal_string \"\", \"image\": \"\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_3d9776dda7deafb1cb7d6a185bd49aeb83e74085a9b5b584805ccdd8c24ef159",
                                  "typeString": "literal_string \"sample image uri\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_835b459273672627bbafc3a2eded65187a632f4128bdc79e126c7ef579a27475",
                                  "typeString": "literal_string \"\"}\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 780,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "1722:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 781,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1722:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 789,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1722:277:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1698:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 778,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1698:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 790,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1698:315:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 776,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4635,
                      "src": "1649:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1649:374:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 792,
                  "nodeType": "ExpressionStatement",
                  "src": "1649:374:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 793,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 759,
                    "src": "2157:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 741,
                  "id": 794,
                  "nodeType": "Return",
                  "src": "2150:16:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0c106beb",
            "id": 796,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 735,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 796,
                  "src": "1222:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 734,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 737,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 796,
                  "src": "1242:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1242:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1221:38:2"
            },
            "returnParameters": {
              "id": 741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 796,
                  "src": "1308:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1307:9:2"
            },
            "scope": 1074,
            "src": "1202:971:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 816,
              "nodeType": "Block",
              "src": "2231:120:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 805,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 802,
                          "name": "govContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 674,
                          "src": "2249:11:2",
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
                            "id": 803,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2264:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 804,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2264:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2249:25:2",
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
                      "id": 801,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2241:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2241:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 807,
                  "nodeType": "ExpressionStatement",
                  "src": "2241:34:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 808,
                      "name": "createAvatarFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 672,
                      "src": "2285:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 809,
                      "name": "_newfee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 798,
                      "src": "2303:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2285:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 811,
                  "nodeType": "ExpressionStatement",
                  "src": "2285:25:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 813,
                        "name": "_newfee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 798,
                        "src": "2336:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 812,
                      "name": "FeeUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 700,
                      "src": "2325:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2325:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 815,
                  "nodeType": "EmitStatement",
                  "src": "2320:24:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74411eef",
            "id": 817,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setcreateAvatarFee",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 798,
                  "name": "_newfee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 817,
                  "src": "2207:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 797,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2207:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2206:17:2"
            },
            "returnParameters": {
              "id": 800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2231:0:2"
            },
            "scope": 1074,
            "src": "2179:172:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 840,
              "nodeType": "Block",
              "src": "2459:135:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 830,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 819,
                            "src": "2539:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 831,
                            "name": "_dna",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 821,
                            "src": "2546:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 829,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 679,
                          "src": "2532:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$679_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2532:19:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$679_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$679_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 826,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "2519:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2519:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$679_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2519:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 834,
                  "nodeType": "ExpressionStatement",
                  "src": "2519:33:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 835,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "2569:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2569:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 837,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2586:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2569:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 825,
                  "id": 839,
                  "nodeType": "Return",
                  "src": "2562:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 841,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "storeAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 819,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 841,
                  "src": "2378:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 818,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2378:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 821,
                  "name": "_dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 841,
                  "src": "2399:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2399:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2377:35:2"
            },
            "returnParameters": {
              "id": 825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 824,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 841,
                  "src": "2446:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2446:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2445:9:2"
            },
            "scope": 1074,
            "src": "2357:237:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 867,
              "nodeType": "Block",
              "src": "2667:167:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 864,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              "id": 858,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 850,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 843,
                                "src": "2792:1:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    },
                                    "id": 856,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "33",
                                      "id": 851,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2797:1:2",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_3_by_1",
                                        "typeString": "int_const 3"
                                      },
                                      "value": "3"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "components": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                          },
                                          "id": 854,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 852,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2803:1:2",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            },
                                            "value": "2"
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 853,
                                            "name": "pos",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 845,
                                            "src": "2807:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          "src": "2803:7:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                          }
                                        }
                                      ],
                                      "id": 855,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "2802:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "2797:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  }
                                ],
                                "id": 857,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2796:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2792:20:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 859,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2791:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              "id": 862,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 860,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2818:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 861,
                                "name": "pos",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 845,
                                "src": "2822:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2818:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 863,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2817:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2791:35:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "id": 865,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2790:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 849,
                  "id": 866,
                  "nodeType": "Return",
                  "src": "2783:44:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7660271d",
            "id": 868,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullcrumb",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 843,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 868,
                  "src": "2619:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 842,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2619:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 845,
                  "name": "pos",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 868,
                  "src": "2628:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 844,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2628:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2618:20:2"
            },
            "returnParameters": {
              "id": 849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 848,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 868,
                  "src": "2660:5:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 847,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2659:7:2"
            },
            "scope": 1074,
            "src": "2600:234:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 990,
              "nodeType": "Block",
              "src": "2954:831:2",
              "statements": [
                {
                  "assignments": [
                    878
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 878,
                      "name": "prand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "2964:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 877,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2964:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 894,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 884,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 870,
                                "src": "3045:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 886,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -4,
                                      "src": "3062:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 887,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3062:12:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 885,
                                  "name": "blockhash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -5,
                                  "src": "3052:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 888,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3052:23:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 889,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -4,
                                  "src": "3077:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 890,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "number",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3077:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 882,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3028:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 883,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3028:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 891,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3028:62:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 881,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3001:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 892,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3001:103:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2980:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 879,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2980:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2980:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2964:150:2"
                },
                {
                  "assignments": [
                    896
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 896,
                      "name": "race",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3178:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 895,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "3178:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 903,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 899,
                          "name": "_userDNA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 872,
                          "src": "3197:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "323535",
                          "id": 900,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3208:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "3197:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3191:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 897,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "3191:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3191:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3178:34:2"
                },
                {
                  "assignments": [
                    905
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 905,
                      "name": "intel",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3252:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 904,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3252:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 921,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 906,
                            "name": "prand",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 878,
                            "src": "3269:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "id": 915,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 912,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 908,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 896,
                                            "src": "3289:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 909,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3295:1:2",
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
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            },
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "id": 907,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 868,
                                          "src": "3279:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 910,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3279:18:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "31",
                                        "id": 911,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3300:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3279:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 913,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3278:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3135",
                                  "id": 914,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3305:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3278:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 916,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3277:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3269:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 918,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3268:41:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3430",
                      "id": 919,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3312:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3268:46:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3252:62:2"
                },
                {
                  "assignments": [
                    923
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 923,
                      "name": "vital",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3364:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 922,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3364:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 942,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 938,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 926,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 924,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 878,
                                  "src": "3382:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 925,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3391:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "3382:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 927,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3381:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "id": 936,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 933,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 929,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 896,
                                            "src": "3408:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "31",
                                            "id": 930,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3414:1:2",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            },
                                            {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            }
                                          ],
                                          "id": 928,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 868,
                                          "src": "3398:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 931,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3398:18:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "31",
                                        "id": 932,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3419:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3398:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 934,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3397:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3135",
                                  "id": 935,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3424:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3397:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 937,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3396:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3381:46:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 939,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3380:48:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3430",
                      "id": 940,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3431:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3380:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3364:69:2"
                },
                {
                  "assignments": [
                    944
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 944,
                      "name": "strength",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3461:16:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 943,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3461:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 963,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 947,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 945,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 878,
                                  "src": "3482:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3136",
                                  "id": 946,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3491:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "3482:11:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 948,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3481:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "id": 957,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 954,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 950,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 896,
                                            "src": "3509:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 951,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3515:1:2",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            },
                                            "value": "2"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            },
                                            {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            }
                                          ],
                                          "id": 949,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 868,
                                          "src": "3499:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 952,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3499:18:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "31",
                                        "id": 953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3520:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3499:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 955,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3498:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3135",
                                  "id": 956,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3525:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3498:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 958,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3497:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3481:47:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 960,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3480:49:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3430",
                      "id": 961,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3544:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3480:66:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3461:85:2"
                },
                {
                  "assignments": [
                    965
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 965,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3576:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 964,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3576:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 971,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 967,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 872,
                        "src": "3598:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3135",
                        "id": 968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3608:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      {
                        "argumentTypes": null,
                        "id": 969,
                        "name": "intel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 905,
                        "src": "3612:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 966,
                      "name": "setbyte",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1013,
                      "src": "3590:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3590:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3576:42:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 972,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 965,
                      "src": "3628:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 974,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 965,
                          "src": "3642:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3136",
                          "id": 975,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3647:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        {
                          "argumentTypes": null,
                          "id": 976,
                          "name": "vital",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 923,
                          "src": "3651:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 973,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1013,
                        "src": "3634:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 977,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3634:23:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3628:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 979,
                  "nodeType": "ExpressionStatement",
                  "src": "3628:29:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 986,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 980,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 965,
                      "src": "3667:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 982,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 965,
                          "src": "3681:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3137",
                          "id": 983,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3686:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          "value": "17"
                        },
                        {
                          "argumentTypes": null,
                          "id": 984,
                          "name": "strength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 944,
                          "src": "3690:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 981,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1013,
                        "src": "3673:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 985,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3673:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3667:32:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 987,
                  "nodeType": "ExpressionStatement",
                  "src": "3667:32:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 988,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 965,
                    "src": "3775:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 876,
                  "id": 989,
                  "nodeType": "Return",
                  "src": "3768:10:2"
                }
              ]
            },
            "documentation": null,
            "id": 991,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mkDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 870,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 991,
                  "src": "2856:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 869,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2856:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 872,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 991,
                  "src": "2877:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2877:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2855:39:2"
            },
            "returnParameters": {
              "id": 876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 875,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 991,
                  "src": "2941:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2941:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2940:9:2"
            },
            "scope": 1074,
            "src": "2840:945:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1012,
              "nodeType": "Block",
              "src": "3911:112:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1007,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1002,
                            "name": "_setdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 997,
                            "src": "3988:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                },
                                "id": 1005,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 1003,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4000:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 1004,
                                  "name": "k",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 995,
                                  "src": "4004:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "4000:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              }
                            ],
                            "id": 1006,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3999:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3988:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1008,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3987:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1009,
                      "name": "_indat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 993,
                      "src": "4010:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3987:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1001,
                  "id": 1011,
                  "nodeType": "Return",
                  "src": "3980:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b3b0705b",
            "id": 1013,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setbyte",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 998,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 993,
                  "name": "_indat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3817:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 992,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3817:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 995,
                  "name": "k",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3841:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 994,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3841:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 997,
                  "name": "_setdat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3859:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 996,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3859:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3807:73:2"
            },
            "returnParameters": {
              "id": 1001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1000,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3902:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 999,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3902:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3901:9:2"
            },
            "scope": 1074,
            "src": "3791:232:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1050,
              "nodeType": "Block",
              "src": "4141:302:2",
              "statements": [
                {
                  "assignments": [
                    1023
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1023,
                      "name": "dna",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1050,
                      "src": "4151:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1022,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4151:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1028,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1025,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1015,
                        "src": "4172:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1026,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1019,
                        "src": "4179:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1024,
                      "name": "_mkDNA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 991,
                      "src": "4165:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) view returns (uint256)"
                      }
                    },
                    "id": 1027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4165:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4151:37:2"
                },
                {
                  "assignments": [
                    1030
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1030,
                      "name": "aid",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1050,
                      "src": "4198:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1029,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4198:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1035,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1032,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1015,
                        "src": "4224:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1033,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1023,
                        "src": "4231:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1031,
                      "name": "storeAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 841,
                      "src": "4212:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) returns (uint256)"
                      }
                    },
                    "id": 1034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4212:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4198:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1036,
                        "name": "TokenIDtoAvID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 686,
                        "src": "4245:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 1038,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1037,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1017,
                        "src": "4259:3:2",
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
                      "src": "4245:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1039,
                      "name": "aid",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1030,
                      "src": "4266:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4245:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1041,
                  "nodeType": "ExpressionStatement",
                  "src": "4245:24:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1043,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4408:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4408:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1045,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1023,
                        "src": "4420:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1046,
                        "name": "aid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1030,
                        "src": "4425:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1047,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1015,
                        "src": "4430:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1042,
                      "name": "Minted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 696,
                      "src": "4401:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,uint256,string memory)"
                      }
                    },
                    "id": 1048,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4401:35:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1049,
                  "nodeType": "EmitStatement",
                  "src": "4396:40:2"
                }
              ]
            },
            "documentation": null,
            "id": 1051,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_birthAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1015,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1051,
                  "src": "4060:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1014,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4060:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1017,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1051,
                  "src": "4089:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1016,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4089:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1019,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1051,
                  "src": "4110:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4110:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4050:82:2"
            },
            "returnParameters": {
              "id": 1021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4141:0:2"
            },
            "scope": 1074,
            "src": "4029:414:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1072,
              "nodeType": "Block",
              "src": "4508:180:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1062,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1059,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1053,
                          "src": "4611:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1060,
                            "name": "avatars",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 682,
                            "src": "4618:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                              "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                            }
                          },
                          "id": 1061,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4618:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4611:21:2",
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
                      "id": 1058,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4603:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4603:30:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1064,
                  "nodeType": "ExpressionStatement",
                  "src": "4603:30:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1065,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "4650:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 1069,
                      "indexExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1066,
                          "name": "TokenIDtoAvID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 686,
                          "src": "4658:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 1068,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1067,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1053,
                          "src": "4672:3:2",
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
                        "src": "4658:18:2",
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
                      "src": "4650:27:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$679_storage",
                        "typeString": "struct AvatarAUR.Avatar storage ref"
                      }
                    },
                    "id": 1070,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dna",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 678,
                    "src": "4650:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1057,
                  "id": 1071,
                  "nodeType": "Return",
                  "src": "4643:38:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5bb209a5",
            "id": 1073,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1053,
                  "name": "tid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1073,
                  "src": "4465:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4465:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4464:13:2"
            },
            "returnParameters": {
              "id": 1057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1056,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1073,
                  "src": "4499:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1055,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4499:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4498:9:2"
            },
            "scope": 1074,
            "src": "4449:239:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1075,
        "src": "341:4349:2"
      }
    ],
    "src": "0:4691:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
    "exportedSymbols": {
      "AvatarAUR": [
        1074
      ]
    },
    "id": 1075,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 656,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".2"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:23:2"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "file": "@openzeppelin/contracts/token/ERC721/ERC721.sol",
        "id": 657,
        "nodeType": "ImportDirective",
        "scope": 1075,
        "sourceUnit": 4736,
        "src": "25:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 658,
        "nodeType": "ImportDirective",
        "scope": 1075,
        "sourceUnit": 6405,
        "src": "83:52:2",
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
              "id": 659,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4735,
              "src": "363:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4735",
                "typeString": "contract ERC721"
              }
            },
            "id": 660,
            "nodeType": "InheritanceSpecifier",
            "src": "363:6:2"
          }
        ],
        "contractDependencies": [
          3434,
          3487,
          3497,
          4735,
          4838,
          4865,
          4888
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit\nThe Avatar Contract for the Aurbit Strategy Game.\nSymbol: AURA\nhttps://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md",
        "fullyImplemented": true,
        "id": 1074,
        "linearizedBaseContracts": [
          1074,
          4735,
          4865,
          4888,
          4838,
          3487,
          3497,
          3434
        ],
        "name": "AvatarAUR",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 663,
            "libraryName": {
              "contractScope": null,
              "id": 661,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6404,
              "src": "382:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$6404",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "376:36:2",
            "typeName": {
              "contractScope": null,
              "id": 662,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6364,
              "src": "395:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6364_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 665,
            "name": "_tokenIds",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "417:34:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$6364_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 664,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6364,
              "src": "417:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6364_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 667,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "457:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 666,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "457:15:2",
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
            "functionSelector": "b424388a",
            "id": 672,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "484:39:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 668,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "484:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "argumentTypes": null,
              "commonType": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              },
              "id": 671,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 669,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "517:2:2",
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
                "hexValue": "3136",
                "id": 670,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "521:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "517:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 674,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "589:27:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 673,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "589:15:2",
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
            "canonicalName": "AvatarAUR.Avatar",
            "id": 679,
            "members": [
              {
                "constant": false,
                "id": 676,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 679,
                "src": "646:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 675,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "646:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "value": null,
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 678,
                "name": "dna",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 679,
                "src": "667:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 677,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "667:7:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "value": null,
                "visibility": "internal"
              }
            ],
            "name": "Avatar",
            "nodeType": "StructDefinition",
            "scope": 1074,
            "src": "622:63:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "834d5fac",
            "id": 682,
            "name": "avatars",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "691:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
              "typeString": "struct AvatarAUR.Avatar[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 680,
                "name": "Avatar",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 679,
                "src": "691:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$679_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 681,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "691:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage_ptr",
                "typeString": "struct AvatarAUR.Avatar[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8177b676",
            "id": 686,
            "name": "TokenIDtoAvID",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "720:48:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 685,
              "keyType": {
                "id": 683,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "728:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "720:27:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 684,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "739:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 696,
            "name": "Minted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 695,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 688,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "788:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 687,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "788:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 690,
                  "indexed": false,
                  "name": "dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "804:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 689,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "804:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 692,
                  "indexed": false,
                  "name": "avatarId",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "817:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 691,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "817:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 694,
                  "indexed": false,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 696,
                  "src": "835:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 693,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "835:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "787:60:2"
            },
            "src": "775:73:2"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 700,
            "name": "FeeUpdated",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 699,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 698,
                  "indexed": false,
                  "name": "newFee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 700,
                  "src": "870:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 697,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "870:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "869:16:2"
            },
            "src": "853:33:2"
          },
          {
            "body": {
              "id": 718,
              "nodeType": "Block",
              "src": "993:110:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 711,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 709,
                      "name": "govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 674,
                      "src": "1003:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 710,
                      "name": "_govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 702,
                      "src": "1017:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1003:26:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 712,
                  "nodeType": "ExpressionStatement",
                  "src": "1003:26:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 667,
                      "src": "1039:5:2",
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
                        "id": 714,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1047:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 715,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1047:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1039:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 717,
                  "nodeType": "ExpressionStatement",
                  "src": "1039:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 719,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420417661746172",
                    "id": 705,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "964:15:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_62d2154e551817e831a312c47609cf3b5c058675989a00b1e85598715ccaef76",
                      "typeString": "literal_string \"Aurbit Avatar\""
                    },
                    "value": "Aurbit Avatar"
                  },
                  {
                    "argumentTypes": null,
                    "hexValue": "41555241",
                    "id": 706,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "981:6:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36c1b71af36fe05a429ec53ba7890fb4e69582f66364001b69d077cce5b9161c",
                      "typeString": "literal_string \"AURA\""
                    },
                    "value": "AURA"
                  }
                ],
                "id": 707,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 704,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4735,
                  "src": "957:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4735_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "957:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 702,
                  "name": "_govContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 719,
                  "src": "904:28:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 701,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "904:15:2",
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
              "src": "903:30:2"
            },
            "returnParameters": {
              "id": 708,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "993:0:2"
            },
            "scope": 1074,
            "src": "892:211:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 732,
              "nodeType": "Block",
              "src": "1136:60:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 727,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "1175:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1074",
                                "typeString": "contract AvatarAUR"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1074",
                                "typeString": "contract AvatarAUR"
                              }
                            ],
                            "id": 726,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1167:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 725,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1167:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 728,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1167:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 729,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1167:21:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 722,
                        "name": "govContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 674,
                        "src": "1146:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 724,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1146:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 730,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1146:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 731,
                  "nodeType": "ExpressionStatement",
                  "src": "1146:43:2"
                }
              ]
            },
            "documentation": null,
            "id": 733,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1125:2:2"
            },
            "returnParameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1136:0:2"
            },
            "scope": 1074,
            "src": "1109:87:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 795,
              "nodeType": "Block",
              "src": "1321:852:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 743,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1339:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 744,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1339:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 745,
                          "name": "createAvatarFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 672,
                          "src": "1352:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1339:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70617920666565",
                        "id": 747,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1369:9:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_046db66822a9ca1f94ede1ceb6b4926e3cee46531f271f8616fbd2c189e86ce0",
                          "typeString": "literal_string \"pay fee\""
                        },
                        "value": "pay fee"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_046db66822a9ca1f94ede1ceb6b4926e3cee46531f271f8616fbd2c189e86ce0",
                          "typeString": "literal_string \"pay fee\""
                        }
                      ],
                      "id": 742,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1331:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1331:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "1331:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 750,
                      "name": "forward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 733,
                      "src": "1389:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 751,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1389:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 752,
                  "nodeType": "ExpressionStatement",
                  "src": "1389:9:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 753,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 665,
                        "src": "1461:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6364_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 755,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6387,
                      "src": "1461:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$6364_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$6364_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 756,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1461:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 757,
                  "nodeType": "ExpressionStatement",
                  "src": "1461:21:2"
                },
                {
                  "assignments": [
                    759
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 759,
                      "name": "newItemId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 795,
                      "src": "1492:17:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 758,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1492:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 763,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 760,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 665,
                        "src": "1512:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6364_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 761,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6375,
                      "src": "1512:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$6364_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$6364_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 762,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1512:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1492:39:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 765,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1547:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 766,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1547:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 767,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 759,
                        "src": "1559:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
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
                        }
                      ],
                      "id": 764,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4477,
                      "src": "1541:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 768,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1541:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 769,
                  "nodeType": "ExpressionStatement",
                  "src": "1541:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 771,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 735,
                        "src": "1613:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 772,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 759,
                        "src": "1619:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 773,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 737,
                        "src": "1630:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 770,
                      "name": "_birthAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1051,
                      "src": "1600:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256,uint256)"
                      }
                    },
                    "id": 774,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1600:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 775,
                  "nodeType": "ExpressionStatement",
                  "src": "1600:39:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 777,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 759,
                        "src": "1675:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "hexValue": "7b226e616d65223a2022",
                                "id": 782,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1760:12:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                "value": "{\"name\": \""
                              },
                              {
                                "argumentTypes": null,
                                "id": 783,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 735,
                                "src": "1794:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c20226465736372697074696f6e223a2022",
                                "id": 784,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1820:21:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_15581e6d213db261f08a7321c9994dc20595359d1b11f34d43869e8f39d563bd",
                                  "typeString": "literal_string \"\", \"description\": \"\""
                                },
                                "value": "\", \"description\": \""
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "41757262697420617661746172",
                                "id": 785,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1863:15:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_1c80836ad6fcb9fffe11eb03442ab4b1bac30c790729d63279fb00117e18ecf2",
                                  "typeString": "literal_string \"Aurbit avatar\""
                                },
                                "value": "Aurbit avatar"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c2022696d616765223a2022",
                                "id": 786,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1900:15:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_8d0de490dde571af103e878aa265925a94dd83b4f74e62b617db5ad43a4f76af",
                                  "typeString": "literal_string \"\", \"image\": \"\""
                                },
                                "value": "\", \"image\": \""
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "73616d706c6520696d61676520757269",
                                "id": 787,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1937:18:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_3d9776dda7deafb1cb7d6a185bd49aeb83e74085a9b5b584805ccdd8c24ef159",
                                  "typeString": "literal_string \"sample image uri\""
                                },
                                "value": "sample image uri"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "227d",
                                "id": 788,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1977:4:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_835b459273672627bbafc3a2eded65187a632f4128bdc79e126c7ef579a27475",
                                  "typeString": "literal_string \"\"}\""
                                },
                                "value": "\"}"
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_15581e6d213db261f08a7321c9994dc20595359d1b11f34d43869e8f39d563bd",
                                  "typeString": "literal_string \"\", \"description\": \"\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_1c80836ad6fcb9fffe11eb03442ab4b1bac30c790729d63279fb00117e18ecf2",
                                  "typeString": "literal_string \"Aurbit avatar\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_8d0de490dde571af103e878aa265925a94dd83b4f74e62b617db5ad43a4f76af",
                                  "typeString": "literal_string \"\", \"image\": \"\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_3d9776dda7deafb1cb7d6a185bd49aeb83e74085a9b5b584805ccdd8c24ef159",
                                  "typeString": "literal_string \"sample image uri\""
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_835b459273672627bbafc3a2eded65187a632f4128bdc79e126c7ef579a27475",
                                  "typeString": "literal_string \"\"}\""
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 780,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "1722:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 781,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1722:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 789,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1722:277:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 779,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1698:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 778,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1698:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 790,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1698:315:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 776,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4635,
                      "src": "1649:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 791,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1649:374:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 792,
                  "nodeType": "ExpressionStatement",
                  "src": "1649:374:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 793,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 759,
                    "src": "2157:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 741,
                  "id": 794,
                  "nodeType": "Return",
                  "src": "2150:16:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0c106beb",
            "id": 796,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 738,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 735,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 796,
                  "src": "1222:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 734,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1222:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 737,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 796,
                  "src": "1242:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 736,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1242:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1221:38:2"
            },
            "returnParameters": {
              "id": 741,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 740,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 796,
                  "src": "1308:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1308:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1307:9:2"
            },
            "scope": 1074,
            "src": "1202:971:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 816,
              "nodeType": "Block",
              "src": "2231:120:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        "id": 805,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 802,
                          "name": "govContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 674,
                          "src": "2249:11:2",
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
                            "id": 803,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "2264:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 804,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "2264:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2249:25:2",
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
                      "id": 801,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2241:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 806,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2241:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 807,
                  "nodeType": "ExpressionStatement",
                  "src": "2241:34:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 810,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 808,
                      "name": "createAvatarFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 672,
                      "src": "2285:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 809,
                      "name": "_newfee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 798,
                      "src": "2303:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2285:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 811,
                  "nodeType": "ExpressionStatement",
                  "src": "2285:25:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 813,
                        "name": "_newfee",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 798,
                        "src": "2336:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 812,
                      "name": "FeeUpdated",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 700,
                      "src": "2325:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 814,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2325:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 815,
                  "nodeType": "EmitStatement",
                  "src": "2320:24:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74411eef",
            "id": 817,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setcreateAvatarFee",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 798,
                  "name": "_newfee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 817,
                  "src": "2207:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 797,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2207:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2206:17:2"
            },
            "returnParameters": {
              "id": 800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2231:0:2"
            },
            "scope": 1074,
            "src": "2179:172:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 840,
              "nodeType": "Block",
              "src": "2459:135:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 830,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 819,
                            "src": "2539:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 831,
                            "name": "_dna",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 821,
                            "src": "2546:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            },
                            {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          ],
                          "id": 829,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 679,
                          "src": "2532:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$679_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2532:19:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$679_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$679_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 826,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "2519:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 828,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2519:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$679_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2519:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 834,
                  "nodeType": "ExpressionStatement",
                  "src": "2519:33:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 838,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 835,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "2569:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 836,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2569:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "-",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 837,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2586:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2569:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 825,
                  "id": 839,
                  "nodeType": "Return",
                  "src": "2562:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 841,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "storeAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 822,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 819,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 841,
                  "src": "2378:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 818,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2378:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 821,
                  "name": "_dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 841,
                  "src": "2399:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 820,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2399:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2377:35:2"
            },
            "returnParameters": {
              "id": 825,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 824,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 841,
                  "src": "2446:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 823,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2446:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2445:9:2"
            },
            "scope": 1074,
            "src": "2357:237:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 867,
              "nodeType": "Block",
              "src": "2667:167:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "components": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        },
                        "id": 864,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              "id": 858,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 850,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 843,
                                "src": "2792:1:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "&",
                              "rightExpression": {
                                "argumentTypes": null,
                                "components": [
                                  {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    },
                                    "id": 856,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "33",
                                      "id": 851,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2797:1:2",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_3_by_1",
                                        "typeString": "int_const 3"
                                      },
                                      "value": "3"
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "<<",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "components": [
                                        {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                          },
                                          "id": 854,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 852,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2803:1:2",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            },
                                            "value": "2"
                                          },
                                          "nodeType": "BinaryOperation",
                                          "operator": "*",
                                          "rightExpression": {
                                            "argumentTypes": null,
                                            "id": 853,
                                            "name": "pos",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 845,
                                            "src": "2807:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          "src": "2803:7:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                          }
                                        }
                                      ],
                                      "id": 855,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "2802:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "2797:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  }
                                ],
                                "id": 857,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2796:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2792:20:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 859,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2791:22:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "argumentTypes": null,
                          "components": [
                            {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              },
                              "id": 862,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 860,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2818:1:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_rational_2_by_1",
                                  "typeString": "int_const 2"
                                },
                                "value": "2"
                              },
                              "nodeType": "BinaryOperation",
                              "operator": "*",
                              "rightExpression": {
                                "argumentTypes": null,
                                "id": 861,
                                "name": "pos",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 845,
                                "src": "2822:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2818:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 863,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "2817:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2791:35:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "id": 865,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2790:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 849,
                  "id": 866,
                  "nodeType": "Return",
                  "src": "2783:44:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7660271d",
            "id": 868,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullcrumb",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 846,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 843,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 868,
                  "src": "2619:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 842,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2619:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 845,
                  "name": "pos",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 868,
                  "src": "2628:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 844,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2628:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2618:20:2"
            },
            "returnParameters": {
              "id": 849,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 848,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 868,
                  "src": "2660:5:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 847,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2660:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2659:7:2"
            },
            "scope": 1074,
            "src": "2600:234:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 990,
              "nodeType": "Block",
              "src": "2954:831:2",
              "statements": [
                {
                  "assignments": [
                    878
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 878,
                      "name": "prand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "2964:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 877,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2964:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 894,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "id": 884,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 870,
                                "src": "3045:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 886,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -4,
                                      "src": "3062:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 887,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "3062:12:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "id": 885,
                                  "name": "blockhash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -5,
                                  "src": "3052:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 888,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "3052:23:2",
                                "tryCall": false,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "id": 889,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -4,
                                  "src": "3077:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 890,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "number",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "3077:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 882,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "3028:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 883,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "3028:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 891,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3028:62:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes_memory_ptr",
                              "typeString": "bytes memory"
                            }
                          ],
                          "id": 881,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "3001:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 892,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "3001:103:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      ],
                      "id": 880,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2980:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 879,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2980:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 893,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2980:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2964:150:2"
                },
                {
                  "assignments": [
                    896
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 896,
                      "name": "race",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3178:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 895,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "3178:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 903,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 901,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 899,
                          "name": "_userDNA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 872,
                          "src": "3197:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "&",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "323535",
                          "id": 900,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3208:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "3197:14:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 898,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "3191:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 897,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "3191:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 902,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3191:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3178:34:2"
                },
                {
                  "assignments": [
                    905
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 905,
                      "name": "intel",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3252:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 904,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3252:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 921,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 920,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 917,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 906,
                            "name": "prand",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 878,
                            "src": "3269:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "id": 915,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 912,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 908,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 896,
                                            "src": "3289:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 909,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3295:1:2",
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
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            },
                                            {
                                              "typeIdentifier": "t_rational_0_by_1",
                                              "typeString": "int_const 0"
                                            }
                                          ],
                                          "id": 907,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 868,
                                          "src": "3279:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 910,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3279:18:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "31",
                                        "id": 911,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3300:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3279:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 913,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3278:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3135",
                                  "id": 914,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3305:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3278:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 916,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3277:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3269:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 918,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3268:41:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3430",
                      "id": 919,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3312:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3268:46:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3252:62:2"
                },
                {
                  "assignments": [
                    923
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 923,
                      "name": "vital",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3364:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 922,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3364:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 942,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 941,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 938,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 926,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 924,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 878,
                                  "src": "3382:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 925,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3391:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "3382:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 927,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3381:12:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "id": 936,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 933,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 929,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 896,
                                            "src": "3408:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "31",
                                            "id": 930,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3414:1:2",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            },
                                            "value": "1"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            },
                                            {
                                              "typeIdentifier": "t_rational_1_by_1",
                                              "typeString": "int_const 1"
                                            }
                                          ],
                                          "id": 928,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 868,
                                          "src": "3398:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 931,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3398:18:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "31",
                                        "id": 932,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3419:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3398:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 934,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3397:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3135",
                                  "id": 935,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3424:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3397:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 937,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3396:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3381:46:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 939,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3380:48:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3430",
                      "id": 940,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3431:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3380:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3364:69:2"
                },
                {
                  "assignments": [
                    944
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 944,
                      "name": "strength",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3461:16:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 943,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3461:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 963,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 962,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 959,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                "id": 947,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 945,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 878,
                                  "src": "3482:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": ">>",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3136",
                                  "id": 946,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3491:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "3482:11:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 948,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3481:13:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                },
                                "id": 957,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "components": [
                                    {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 954,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 950,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 896,
                                            "src": "3509:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 951,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "3515:1:2",
                                            "subdenomination": null,
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            },
                                            "value": "2"
                                          }
                                        ],
                                        "expression": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            },
                                            {
                                              "typeIdentifier": "t_rational_2_by_1",
                                              "typeString": "int_const 2"
                                            }
                                          ],
                                          "id": 949,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 868,
                                          "src": "3499:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 952,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "3499:18:2",
                                        "tryCall": false,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "nodeType": "BinaryOperation",
                                      "operator": "+",
                                      "rightExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "31",
                                        "id": 953,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "3520:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3499:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 955,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "3498:24:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint8",
                                    "typeString": "uint8"
                                  }
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "3135",
                                  "id": 956,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3525:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3498:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 958,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3497:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3481:47:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 960,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3480:49:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "hexValue": "3430",
                      "id": 961,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3544:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3480:66:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3461:85:2"
                },
                {
                  "assignments": [
                    965
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 965,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 990,
                      "src": "3576:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 964,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3576:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 971,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 967,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 872,
                        "src": "3598:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3135",
                        "id": 968,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "3608:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      {
                        "argumentTypes": null,
                        "id": 969,
                        "name": "intel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 905,
                        "src": "3612:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 966,
                      "name": "setbyte",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1013,
                      "src": "3590:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 970,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3590:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3576:42:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 978,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 972,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 965,
                      "src": "3628:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 974,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 965,
                          "src": "3642:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3136",
                          "id": 975,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3647:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        {
                          "argumentTypes": null,
                          "id": 976,
                          "name": "vital",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 923,
                          "src": "3651:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 973,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1013,
                        "src": "3634:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 977,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3634:23:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3628:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 979,
                  "nodeType": "ExpressionStatement",
                  "src": "3628:29:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 986,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 980,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 965,
                      "src": "3667:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 982,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 965,
                          "src": "3681:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3137",
                          "id": 983,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3686:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          "value": "17"
                        },
                        {
                          "argumentTypes": null,
                          "id": 984,
                          "name": "strength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 944,
                          "src": "3690:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        ],
                        "id": 981,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1013,
                        "src": "3673:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 985,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3673:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3667:32:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 987,
                  "nodeType": "ExpressionStatement",
                  "src": "3667:32:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 988,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 965,
                    "src": "3775:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 876,
                  "id": 989,
                  "nodeType": "Return",
                  "src": "3768:10:2"
                }
              ]
            },
            "documentation": null,
            "id": 991,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mkDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 873,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 870,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 991,
                  "src": "2856:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 869,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2856:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 872,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 991,
                  "src": "2877:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 871,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2877:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2855:39:2"
            },
            "returnParameters": {
              "id": 876,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 875,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 991,
                  "src": "2941:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 874,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2941:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2940:9:2"
            },
            "scope": 1074,
            "src": "2840:945:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1012,
              "nodeType": "Block",
              "src": "3911:112:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1010,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "components": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 1007,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 1002,
                            "name": "_setdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 997,
                            "src": "3988:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "<<",
                          "rightExpression": {
                            "argumentTypes": null,
                            "components": [
                              {
                                "argumentTypes": null,
                                "commonType": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                },
                                "id": 1005,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 1003,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4000:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "nodeType": "BinaryOperation",
                                "operator": "*",
                                "rightExpression": {
                                  "argumentTypes": null,
                                  "id": 1004,
                                  "name": "k",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 995,
                                  "src": "4004:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "4000:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              }
                            ],
                            "id": 1006,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3999:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3988:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1008,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3987:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1009,
                      "name": "_indat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 993,
                      "src": "4010:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3987:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1001,
                  "id": 1011,
                  "nodeType": "Return",
                  "src": "3980:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b3b0705b",
            "id": 1013,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setbyte",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 998,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 993,
                  "name": "_indat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3817:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 992,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3817:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 995,
                  "name": "k",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3841:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 994,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3841:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint16",
                      "typeString": "uint16"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 997,
                  "name": "_setdat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3859:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 996,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3859:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3807:73:2"
            },
            "returnParameters": {
              "id": 1001,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1000,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1013,
                  "src": "3902:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 999,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3902:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3901:9:2"
            },
            "scope": 1074,
            "src": "3791:232:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1050,
              "nodeType": "Block",
              "src": "4141:302:2",
              "statements": [
                {
                  "assignments": [
                    1023
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1023,
                      "name": "dna",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1050,
                      "src": "4151:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1022,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4151:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1028,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1025,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1015,
                        "src": "4172:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1026,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1019,
                        "src": "4179:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1024,
                      "name": "_mkDNA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 991,
                      "src": "4165:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) view returns (uint256)"
                      }
                    },
                    "id": 1027,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4165:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4151:37:2"
                },
                {
                  "assignments": [
                    1030
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1030,
                      "name": "aid",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1050,
                      "src": "4198:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1029,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "4198:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1035,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1032,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1015,
                        "src": "4224:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1033,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1023,
                        "src": "4231:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 1031,
                      "name": "storeAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 841,
                      "src": "4212:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) returns (uint256)"
                      }
                    },
                    "id": 1034,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4212:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4198:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1040,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1036,
                        "name": "TokenIDtoAvID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 686,
                        "src": "4245:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 1038,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1037,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1017,
                        "src": "4259:3:2",
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
                      "src": "4245:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 1039,
                      "name": "aid",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1030,
                      "src": "4266:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4245:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1041,
                  "nodeType": "ExpressionStatement",
                  "src": "4245:24:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 1043,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "4408:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 1044,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "4408:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1045,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1023,
                        "src": "4420:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1046,
                        "name": "aid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1030,
                        "src": "4425:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 1047,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1015,
                        "src": "4430:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
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
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 1042,
                      "name": "Minted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 696,
                      "src": "4401:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,uint256,string memory)"
                      }
                    },
                    "id": 1048,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4401:35:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1049,
                  "nodeType": "EmitStatement",
                  "src": "4396:40:2"
                }
              ]
            },
            "documentation": null,
            "id": 1051,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_birthAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1020,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1015,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1051,
                  "src": "4060:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 1014,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "4060:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1017,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1051,
                  "src": "4089:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1016,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4089:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 1019,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1051,
                  "src": "4110:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1018,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4110:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4050:82:2"
            },
            "returnParameters": {
              "id": 1021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4141:0:2"
            },
            "scope": 1074,
            "src": "4029:414:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1072,
              "nodeType": "Block",
              "src": "4508:180:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 1062,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1059,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1053,
                          "src": "4611:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 1060,
                            "name": "avatars",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 682,
                            "src": "4618:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                              "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                            }
                          },
                          "id": 1061,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4618:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4611:21:2",
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
                      "id": 1058,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "4603:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1063,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4603:30:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1064,
                  "nodeType": "ExpressionStatement",
                  "src": "4603:30:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1065,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 682,
                        "src": "4650:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$679_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 1069,
                      "indexExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 1066,
                          "name": "TokenIDtoAvID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 686,
                          "src": "4658:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 1068,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 1067,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1053,
                          "src": "4672:3:2",
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
                        "src": "4658:18:2",
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
                      "src": "4650:27:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$679_storage",
                        "typeString": "struct AvatarAUR.Avatar storage ref"
                      }
                    },
                    "id": 1070,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dna",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 678,
                    "src": "4650:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1057,
                  "id": 1071,
                  "nodeType": "Return",
                  "src": "4643:38:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5bb209a5",
            "id": 1073,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1054,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1053,
                  "name": "tid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1073,
                  "src": "4465:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1052,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4465:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4464:13:2"
            },
            "returnParameters": {
              "id": 1057,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1056,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1073,
                  "src": "4499:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1055,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4499:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4498:9:2"
            },
            "scope": 1074,
            "src": "4449:239:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1075,
        "src": "341:4349:2"
      }
    ],
    "src": "0:4691:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {
    "1597574288293": {
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
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c76": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newFee",
              "type": "uint256"
            }
          ],
          "name": "FeeUpdated",
          "type": "event"
        },
        "0xf2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "dna",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "avatarId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "Minted",
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
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8f0483125FCb9aaAEFA9209D8E9d7b9C8B9Fb90F",
      "transactionHash": "0xb55faf5216d861888275854b74ed087f3f30a13f9056f46d20d93dd215f98bca"
    },
    "1597574949801": {
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
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        "0x17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31": {
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
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        "0x8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c76": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "newFee",
              "type": "uint256"
            }
          ],
          "name": "FeeUpdated",
          "type": "event"
        },
        "0xf2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b4": {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "dna",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "avatarId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "name",
              "type": "string"
            }
          ],
          "name": "Minted",
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
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        }
      },
      "links": {},
      "address": "0x8f0483125FCb9aaAEFA9209D8E9d7b9C8B9Fb90F",
      "transactionHash": "0xd454b99b25a62c651c6f222fc0f6b75d480884ad0e08f69f3fca2e087097e9b1"
    }
  },
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-08-16T10:50:17.429Z",
  "networkType": "ethereum",
  "devdoc": {
    "methods": {
      "approve(address,uint256)": {
        "details": "See {IERC721-approve}."
      },
      "balanceOf(address)": {
        "details": "See {IERC721-balanceOf}."
      },
      "baseURI()": {
        "details": "Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID."
      },
      "getApproved(uint256)": {
        "details": "See {IERC721-getApproved}."
      },
      "isApprovedForAll(address,address)": {
        "details": "See {IERC721-isApprovedForAll}."
      },
      "name()": {
        "details": "See {IERC721Metadata-name}."
      },
      "ownerOf(uint256)": {
        "details": "See {IERC721-ownerOf}."
      },
      "safeTransferFrom(address,address,uint256)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "safeTransferFrom(address,address,uint256,bytes)": {
        "details": "See {IERC721-safeTransferFrom}."
      },
      "setApprovalForAll(address,bool)": {
        "details": "See {IERC721-setApprovalForAll}."
      },
      "supportsInterface(bytes4)": {
        "details": "See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas."
      },
      "symbol()": {
        "details": "See {IERC721Metadata-symbol}."
      },
      "tokenByIndex(uint256)": {
        "details": "See {IERC721Enumerable-tokenByIndex}."
      },
      "tokenOfOwnerByIndex(address,uint256)": {
        "details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
      },
      "tokenURI(uint256)": {
        "details": "See {IERC721Metadata-tokenURI}."
      },
      "totalSupply()": {
        "details": "See {IERC721Enumerable-totalSupply}."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC721-transferFrom}."
      }
    }
  },
  "userdoc": {
    "methods": {},
    "notice": "Author: Chris Markov 2020 Project Aurbit The Avatar Contract for the Aurbit Strategy Game. Symbol: AURA https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md"
  }
}
    }
  