
    module.exports = {
      "network": "development",
      "address": "0x1411CB266FCEd1587b0AA29E9d5a9Ef3Db64A9C5",
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
          "name": "id",
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
        },
        {
          "internalType": "uint256",
          "name": "id",
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
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
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "getAvatars",
      "outputs": [
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "dna",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "internalType": "struct AvatarAUR.Avatar[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_govContract\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"avatars\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"createAvatarFee\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"}],\"name\":\"getAvatars\",\"outputs\":[{\"components\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"internalType\":\"struct AvatarAUR.Avatar[]\",\"name\":\"\",\"type\":\"tuple[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tid\",\"type\":\"uint256\"}],\"name\":\"getDNA\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_userDNA\",\"type\":\"uint256\"}],\"name\":\"mintAvatar\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"b\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"pos\",\"type\":\"uint8\"}],\"name\":\"pullcrumb\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newfee\",\"type\":\"uint256\"}],\"name\":\"setcreateAvatarFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":\"AvatarAUR\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":{\"keccak256\":\"0x4af35f7b46a62f9e6ce531d5214753fef9c0c90fc3b760e4eb931bb251449cbd\",\"urls\":[\"bzz-raw://046adb582e5fc24d24f7135192f295f651fdf2518f80e50b63f5eaa4ef8987db\",\"dweb:/ipfs/QmccvALxHieFtvwhXPCGZgdh8xojSwxoQ6WjNSi6pVM2Pu\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xb046d18f9d09683ca1c0ed6d80c61da8a8a7d9b30bad70a17b898538683eff74\",\"urls\":[\"bzz-raw://4728713afa6ae36cc9e92c7107c796a313add3ec20f813be2cde76c814486b2a\",\"dweb:/ipfs/QmUJBTXvYaGDF5PVnd5pUvYerc9DRXvqANDzgCzAp3FkkA\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xfa152b6e88a1dc50780e8f1580426dc23ad2e1e2c2f086a088adf206a202f453\",\"urls\":[\"bzz-raw://5127b264994adab88fae419b1c493efc5acd07134c19ee5c0397e50018291ebf\",\"dweb:/ipfs/QmWwJZVhvdmvUCdimbb6R2Jiu59zjPqm6XTMchM6LaEHAp\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1071a23188ba7f5bb16f51b0b01a67fd41fe56f862d8f83985788cf46f3b91bd\",\"urls\":[\"bzz-raw://c7082ca99b93f2e541cafaad00ed32675adf0752eab78eccabcf91dec9fd5d73\",\"dweb:/ipfs/QmdqooMmYBQVi7p6subDFM4e1944AuLjZUpHMjGtae7Lgd\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x227bafd3e165b13f5d98c42a44376e48d41f4a265db8803f2707faaeae9659aa\",\"urls\":[\"bzz-raw://c9aa7959a30871669ce46172cd117b084b607d602d9ce695ce79005582b0b69b\",\"dweb:/ipfs/QmXZUWeLXmArQinHL4RnacJLT22GvCExqREYM6pHLX7CX9\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0x3636662804cd8f474536b2875a9038a4c3fb91879f1bbff48af5c3f140fcd2f0\",\"urls\":[\"bzz-raw://9fab8521263fa581544000cb57335a3f2e6bcdfbb5579d3ceaa5acf741c67c4f\",\"dweb:/ipfs/QmZfXnMom7JSNtfyie5yGPN1SUC4SmHbz4ScVBH88URmA7\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xe7f984cedc00a138dc27f263c73c32ba9a4b2fd23b6c34ac46f46c074b943538\",\"urls\":[\"bzz-raw://0f4acda12f076fe7584921241ddbb5b460ca7cad6cb8a42252ac7f2a9f539127\",\"dweb:/ipfs/QmQmfhkEv9GrhdWe67QtXnU19AMuoEmy31QnHPkucdYLjZ\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x321ee37ef4925020aa818a03ec7fe48e057561f65ab009a84f6c20c86026ade7\",\"urls\":[\"bzz-raw://01f9d74a17a56024984251b97e428e24c9d3abffbae5bd290f0ec263c82e9694\",\"dweb:/ipfs/QmRryCuuXu2ukrDmatB8TqdEhPLiK6NBRt41RiPUaX1qKy\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x2d68b8e6425249cd05cc0a66ea50cb5b8d10cbdac59c6de834e1002232813faf\",\"urls\":[\"bzz-raw://e3ce6b6ac17c67bba01e9c8c778f82f68fd4823bd083359cdd03040b70eeeba3\",\"dweb:/ipfs/QmX4t1jWwKaAkacvmQxEG5rBtLXg3EHw6pRjKhMZR8iw3n\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x244e4b74b17716120cf28e58636f11c699b8c0c94628bd952a95cee038d7e32b\",\"urls\":[\"bzz-raw://198d566157120c526bd6b5086b32cae85a11389b8a538f533ba9f9447915da0e\",\"dweb:/ipfs/QmeE6d8KWERx7f1FVS5tMnitNJxBm2yWXRSEUBF7R6voLh\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xb2a11b236f073662f5a196995863f51c11d006bf7c3de158b316dfa1506c4b79\",\"urls\":[\"bzz-raw://8651649cf0b9efa18c3b01c030276fa320d41adbdc286833417e7f36e357b2f3\",\"dweb:/ipfs/QmafhM2Nd1aP43QVB1eRRZaqRXQKswNfQcWi8U8xjrxCfN\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x79484115dbfa737054f73e041009a02eeb434dd81be5d684bf4255ad3b5ab558\",\"urls\":[\"bzz-raw://12c119699463450c2544f5b9d8709b5e9e9164c62948a79c3ec53423a051d969\",\"dweb:/ipfs/QmPJduzSAaekq447QeFqAp3E7dc8CnNk5ajofckJ4ahA7Q\"]}},\"version\":1}",
  "bytecode": "0x6080604052662386f26fc10000600c553480156200001c57600080fd5b506040516200451d3803806200451d8339818101604052620000429190810190620004a2565b6040518060400160405280600d81526020017f41757262697420417661746172000000000000000000000000000000000000008152506040518060400160405280600481526020017f4155524100000000000000000000000000000000000000000000000000000000815250620000c66301ffc9a760e01b6200027d60201b60201c565b8160069080519060200190620000de92919062000355565b508060079080519060200190620000f792919062000355565b50620001106380ac58cd60e01b6200027d60201b60201c565b62000128635b5e139f60e01b6200027d60201b60201c565b6200014063780e9d6360e01b6200027d60201b60201c565b505080600d60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600e60405180606001604052806040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152508152602001600081526020016000815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190805190602001906200021e929190620003dc565b506020820151816001015560408201518160020155505033600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505062000591565b63ffffffff60e01b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161415620002e9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002e09062000510565b60405180910390fd5b6001600080837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200039857805160ff1916838001178555620003c9565b82800160010185558215620003c9579182015b82811115620003c8578251825591602001919060010190620003ab565b5b509050620003d8919062000463565b5090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200041f57805160ff191683800117855562000450565b8280016001018555821562000450579182015b828111156200044f57825182559160200191906001019062000432565b5b5090506200045f919062000463565b5090565b6200048891905b80821115620004845760008160009055506001016200046a565b5090565b90565b6000815190506200049c8162000577565b92915050565b600060208284031215620004b557600080fd5b6000620004c5848285016200048b565b91505092915050565b6000620004dd601c8362000532565b91507f4552433136353a20696e76616c696420696e74657266616365206964000000006000830152602082019050919050565b600060208201905081810360008301526200052b81620004ce565b9050919050565b600082825260208201905092915050565b6000620005508262000557565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620005828162000543565b81146200058e57600080fd5b50565b613f7c80620005a16000396000f3fe60806040526004361061014b5760003560e01c80636c0360eb116100b6578063a22cb4651161006f578063a22cb465146104f7578063a2ae1bc514610520578063b424388a1461055d578063b88d4fde14610588578063c87b56dd146105b1578063e985e9c5146105ee5761014b565b80636c0360eb146103bf57806370a08231146103ea57806374411eef146104275780637660271d14610450578063834d5fac1461048d57806395d89b41146104cc5761014b565b806323b872dd1161010857806323b872dd146102795780632f745c59146102a257806342842e0e146102df5780634f6ccce7146103085780635bb209a5146103455780636352211e146103825761014b565b806301ffc9a71461015057806306fdde031461018d578063081812fc146101b8578063095ea7b3146101f55780630c106beb1461021e57806318160ddd1461024e575b600080fd5b34801561015c57600080fd5b5061017760048036036101729190810190612adf565b61062b565b6040516101849190613910565b60405180910390f35b34801561019957600080fd5b506101a2610692565b6040516101af919061392b565b60405180910390f35b3480156101c457600080fd5b506101df60048036036101da9190810190612b85565b610734565b6040516101ec9190613812565b60405180910390f35b34801561020157600080fd5b5061021c60048036036102179190810190612aa3565b6107b9565b005b61023860048036036102339190810190612b31565b6108d1565b6040516102459190613bcb565b60405180910390f35b34801561025a57600080fd5b50610263610a39565b6040516102709190613bcb565b60405180910390f35b34801561028557600080fd5b506102a0600480360361029b919081019061299d565b610a4a565b005b3480156102ae57600080fd5b506102c960048036036102c49190810190612aa3565b610aaa565b6040516102d69190613bcb565b60405180910390f35b3480156102eb57600080fd5b506103066004803603610301919081019061299d565b610b05565b005b34801561031457600080fd5b5061032f600480360361032a9190810190612b85565b610b25565b60405161033c9190613bcb565b60405180910390f35b34801561035157600080fd5b5061036c60048036036103679190810190612b85565b610b48565b6040516103799190613bcb565b60405180910390f35b34801561038e57600080fd5b506103a960048036036103a49190810190612b85565b610b81565b6040516103b69190613812565b60405180910390f35b3480156103cb57600080fd5b506103d4610bb8565b6040516103e1919061392b565b60405180910390f35b3480156103f657600080fd5b50610411600480360361040c9190810190612938565b610c5a565b60405161041e9190613bcb565b60405180910390f35b34801561043357600080fd5b5061044e60048036036104499190810190612b85565b610d19565b005b34801561045c57600080fd5b5061047760048036036104729190810190612bd7565b610d7d565b6040516104849190613be6565b60405180910390f35b34801561049957600080fd5b506104b460048036036104af9190810190612b85565b610da0565b6040516104c39392919061394d565b60405180910390f35b3480156104d857600080fd5b506104e1610e6f565b6040516104ee919061392b565b60405180910390f35b34801561050357600080fd5b5061051e60048036036105199190810190612a67565b610f11565b005b34801561052c57600080fd5b5061054760048036036105429190810190612938565b611092565b60405161055491906138ee565b60405180910390f35b34801561056957600080fd5b5061057261131c565b60405161057f9190613bcb565b60405180910390f35b34801561059457600080fd5b506105af60048036036105aa91908101906129ec565b611322565b005b3480156105bd57600080fd5b506105d860048036036105d39190810190612b85565b611384565b6040516105e5919061392b565b60405180910390f35b3480156105fa57600080fd5b5061061560048036036106109190810190612961565b61150f565b6040516106229190613910565b60405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072a5780601f106106ff5761010080835404028352916020019161072a565b820191906000526020600020905b81548152906001019060200180831161070d57829003601f168201915b5050505050905090565b600061073f826115a3565b61077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077590613aeb565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107c482610b81565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c90613b6b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108546115c0565b73ffffffffffffffffffffffffffffffffffffffff16148061088357506108828161087d6115c0565b61150f565b5b6108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b990613a6b565b60405180910390fd5b6108cc83836115c8565b505050565b6000600c543414610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e906139ab565b60405180910390fd5b61091f611681565b610929600a6116ec565b6000610935600a611702565b90506109413382611710565b600061094d858561189e565b9050600e604051806060016040528087815260200183815260200184815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190805190602001906109b19291906126b7565b50602082015181600101556040820151816002015550506109f182866040516020016109dd91906137b9565b604051602081830303815290604052611989565b7ff2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b433828488604051610a269493929190613879565b60405180910390a1819250505092915050565b6000610a4560026119fd565b905090565b610a5b610a556115c0565b82611a12565b610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190613b8b565b60405180910390fd5b610aa5838383611af0565b505050565b6000610afd82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d0790919063ffffffff16565b905092915050565b610b2083838360405180602001604052806000815250611322565b505050565b600080610b3c836002611d2190919063ffffffff16565b50905080915050919050565b6000600e805490508210610b5b57600080fd5b600e8281548110610b6857fe5b9060005260206000209060030201600101549050919050565b6000610bb182604051806060016040528060298152602001613f1e602991396002611d509092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c505780601f10610c2557610100808354040283529160200191610c50565b820191906000526020600020905b815481529060010190602001808311610c3357829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc290613a8b565b60405180910390fd5b610d12600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d6f565b9050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d7357600080fd5b80600c8190555050565b60008160020260ff168260020260ff166003901b841660ff16901c905092915050565b600e8181548110610dad57fe5b9060005260206000209060030201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e595780601f10610e2e57610100808354040283529160200191610e59565b820191906000526020600020905b815481529060010190602001808311610e3c57829003601f168201915b5050505050908060010154908060020154905083565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f075780601f10610edc57610100808354040283529160200191610f07565b820191906000526020600020905b815481529060010190602001808311610eea57829003601f168201915b5050505050905090565b610f196115c0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7e90613a2b565b60405180910390fd5b8060056000610f946115c0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166110416115c0565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110869190613910565b60405180910390a35050565b606060003073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016110cf9190613812565b60206040518083038186803b1580156110e757600080fd5b505afa1580156110fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061111f9190810190612bae565b905060608160405190808252806020026020018201604052801561115d57816020015b61114a612737565b8152602001906001900390816111425790505b50905060008090505b828110156113115760003073ffffffffffffffffffffffffffffffffffffffff16632f745c5987846040518363ffffffff1660e01b81526004016111ab9291906138c5565b60206040518083038186803b1580156111c357600080fd5b505afa1580156111d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506111fb9190810190612bae565b90506040518060600160405280600e838154811061121557fe5b90600052602060002090600302016000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112ba5780601f1061128f576101008083540402835291602001916112ba565b820191906000526020600020905b81548152906001019060200180831161129d57829003601f168201915b50505050508152602001600e83815481106112d157fe5b9060005260206000209060030201600101548152602001828152508383815181106112f857fe5b6020026020010181905250508080600101915050611166565b508092505050919050565b600c5481565b61133361132d6115c0565b83611a12565b611372576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136990613b8b565b60405180910390fd5b61137e84848484611d84565b50505050565b606061138f826115a3565b6113ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c590613b4b565b60405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114775780601f1061144c57610100808354040283529160200191611477565b820191906000526020600020905b81548152906001019060200180831161145a57829003601f168201915b505050505090506000600980546001816001161561010002031660029004905014156114a6578091505061150a565b6000815111156114db576009816040516020016114c4929190613795565b60405160208183030381529060405291505061150a565b60096114e684611de0565b6040516020016114f7929190613795565b6040516020818303038152906040529150505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006115b9826002611f1090919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661163b83610b81565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156116e9573d6000803e3d6000fd5b50565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611780576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177790613acb565b60405180910390fd5b611789816115a3565b156117c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c0906139eb565b60405180910390fd5b6117d560008383611f2a565b61182681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f2f90919063ffffffff16565b5061183d81836002611f499092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080834340436040516020016118b79392919061375c565b6040516020818303038152906040528051906020012060001c9050600060ff8416905060006028600f60016118ed856000610d7d565b010260ff1684816118fa57fe5b0601905060006028600f6001611911866001610d7d565b010260ff16600886901c8161192257fe5b0601905060006028600f6001611939876002610d7d565b010260ff16601087901c8161194a57fe5b06019050600061195c88600f86611f7e565b905061196a81601085611f7e565b905061197881601184611f7e565b905080965050505050505092915050565b611992826115a3565b6119d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c890613b0b565b60405180910390fd5b806008600084815260200190815260200160002090805190602001906119f8929190612758565b505050565b6000611a0b82600001611f96565b9050919050565b6000611a1d826115a3565b611a5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a5390613a4b565b60405180910390fd5b6000611a6783610b81565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611ad657508373ffffffffffffffffffffffffffffffffffffffff16611abe84610734565b73ffffffffffffffffffffffffffffffffffffffff16145b80611ae75750611ae6818561150f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611b1082610b81565b73ffffffffffffffffffffffffffffffffffffffff1614611b66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5d90613b2b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611bd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcd90613a0b565b60405180910390fd5b611be1838383611f2a565b611bec6000826115c8565b611c3d81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611fa790919063ffffffff16565b50611c8f81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f2f90919063ffffffff16565b50611ca681836002611f499092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611d168360000183611fc1565b60001c905092915050565b600080600080611d34866000018661202e565b915091508160001c8160001c8090509350935050509250929050565b6000611d63846000018460001b846120b1565b60001c90509392505050565b6000611d7d82600001612142565b9050919050565b611d8f848484611af0565b611d9b84848484612153565b611dda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dd1906139cb565b60405180910390fd5b50505050565b60606000821415611e28576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611f0b565b600082905060005b60008214611e52578080600101915050600a8281611e4a57fe5b049150611e30565b6060816040519080825280601f01601f191660200182016040528015611e875781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611f0357600a8481611ea857fe5b0660300160f81b82828060019003935081518110611ec257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611efb57fe5b049350611e96565b819450505050505b919050565b6000611f22836000018360001b6122b7565b905092915050565b505050565b6000611f41836000018360001b6122da565b905092915050565b6000611f75846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b61234a565b90509392505050565b6000838360080261ffff1683901b0190509392505050565b600081600001805490509050919050565b6000611fb9836000018360001b612426565b905092915050565b60008183600001805490501161200c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120039061398b565b60405180910390fd5b82600001828154811061201b57fe5b9060005260206000200154905092915050565b6000808284600001805490501161207a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161207190613aab565b60405180910390fd5b600084600001848154811061208b57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612113576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210a919061392b565b60405180910390fd5b5084600001600182038154811061212657fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006121748473ffffffffffffffffffffffffffffffffffffffff1661250e565b61218157600190506122af565b606061224863150b7a0260e01b6121966115c0565b8887876040516024016121ac949392919061382d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001613eec603291398773ffffffffffffffffffffffffffffffffffffffff166125599092919063ffffffff16565b90506000818060200190516122609190810190612b08565b905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b60006122e68383612571565b61233f578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612344565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156123f15784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061241f565b8285600001600183038154811061240457fe5b90600052602060002090600202016001018190555060009150505b9392505050565b60008083600101600084815260200190815260200160002054905060008114612502576000600182039050600060018660000180549050039050600086600001828154811061247157fe5b906000526020600020015490508087600001848154811061248e57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806124c657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612508565b60009150505b92915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561255057506000801b8214155b92505050919050565b60606125688484600085612594565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606061259f8561250e565b6125de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125d590613bab565b60405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516126089190613745565b60006040518083038185875af1925050503d8060008114612645576040519150601f19603f3d011682016040523d82523d6000602084013e61264a565b606091505b5091509150811561265f5780925050506126af565b6000815111156126725780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126a6919061392b565b60405180910390fd5b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106126f857805160ff1916838001178555612726565b82800160010185558215612726579182015b8281111561272557825182559160200191906001019061270a565b5b50905061273391906127d8565b5090565b60405180606001604052806060815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061279957805160ff19168380011785556127c7565b828001600101855582156127c7579182015b828111156127c65782518255916020019190600101906127ab565b5b5090506127d491906127d8565b5090565b6127fa91905b808211156127f65760008160009055506001016127de565b5090565b90565b60008135905061280c81613e78565b92915050565b60008135905061282181613e8f565b92915050565b60008135905061283681613ea6565b92915050565b60008151905061284b81613ea6565b92915050565b600082601f83011261286257600080fd5b813561287561287082613c2e565b613c01565b9150808252602083016020830185838301111561289157600080fd5b61289c838284613e11565b50505092915050565b600082601f8301126128b657600080fd5b81356128c96128c482613c5a565b613c01565b915080825260208301602083018583830111156128e557600080fd5b6128f0838284613e11565b50505092915050565b60008135905061290881613ebd565b92915050565b60008151905061291d81613ebd565b92915050565b60008135905061293281613ed4565b92915050565b60006020828403121561294a57600080fd5b6000612958848285016127fd565b91505092915050565b6000806040838503121561297457600080fd5b6000612982858286016127fd565b9250506020612993858286016127fd565b9150509250929050565b6000806000606084860312156129b257600080fd5b60006129c0868287016127fd565b93505060206129d1868287016127fd565b92505060406129e2868287016128f9565b9150509250925092565b60008060008060808587031215612a0257600080fd5b6000612a10878288016127fd565b9450506020612a21878288016127fd565b9350506040612a32878288016128f9565b925050606085013567ffffffffffffffff811115612a4f57600080fd5b612a5b87828801612851565b91505092959194509250565b60008060408385031215612a7a57600080fd5b6000612a88858286016127fd565b9250506020612a9985828601612812565b9150509250929050565b60008060408385031215612ab657600080fd5b6000612ac4858286016127fd565b9250506020612ad5858286016128f9565b9150509250929050565b600060208284031215612af157600080fd5b6000612aff84828501612827565b91505092915050565b600060208284031215612b1a57600080fd5b6000612b288482850161283c565b91505092915050565b60008060408385031215612b4457600080fd5b600083013567ffffffffffffffff811115612b5e57600080fd5b612b6a858286016128a5565b9250506020612b7b858286016128f9565b9150509250929050565b600060208284031215612b9757600080fd5b6000612ba5848285016128f9565b91505092915050565b600060208284031215612bc057600080fd5b6000612bce8482850161290e565b91505092915050565b60008060408385031215612bea57600080fd5b6000612bf885828601612923565b9250506020612c0985828601612923565b9150509250929050565b6000612c1f83836136b1565b905092915050565b612c3081613ddb565b82525050565b612c3f81613d50565b82525050565b612c4e81613d3e565b82525050565b6000612c5f82613cab565b612c698185613ce4565b935083602082028501612c7b85613c86565b8060005b85811015612cb75784840389528151612c988582612c13565b9450612ca383613cd7565b925060208a01995050600181019050612c7f565b50829750879550505050505092915050565b612cd281613d62565b82525050565b612ce9612ce482613d6e565b613e53565b82525050565b6000612cfa82613cb6565b612d048185613cf5565b9350612d14818560208601613e20565b612d1d81613e67565b840191505092915050565b6000612d3382613cb6565b612d3d8185613d06565b9350612d4d818560208601613e20565b80840191505092915050565b6000612d6482613ccc565b612d6e8185613d22565b9350612d7e818560208601613e20565b612d8781613e67565b840191505092915050565b6000612d9d82613ccc565b612da78185613d33565b9350612db7818560208601613e20565b80840191505092915050565b6000612dce82613cc1565b612dd88185613d11565b9350612de8818560208601613e20565b612df181613e67565b840191505092915050565b6000612e0782613cc1565b612e118185613d22565b9350612e21818560208601613e20565b612e2a81613e67565b840191505092915050565b600081546001811660008114612e525760018114612e7757612ebb565b607f6002830416612e638187613d33565b955060ff1983168652808601935050612ebb565b60028204612e858187613d33565b9550612e9085613c96565b60005b82811015612eb257815481890152600182019150602081019050612e93565b82880195505050505b505092915050565b6000612ed0602283613d22565b91507f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612f36600783613d22565b91507f70617920666565000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000612f76601383613d33565b91507f222c20226465736372697074696f6e223a2022000000000000000000000000006000830152601382019050919050565b6000612fb6600d83613d33565b91507f41757262697420617661746172000000000000000000000000000000000000006000830152600d82019050919050565b6000612ff6603283613d22565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061305c601c83613d22565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b600061309c601083613d33565b91507f73616d706c6520696d61676520757269000000000000000000000000000000006000830152601082019050919050565b60006130dc602483613d22565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613142601983613d22565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b6000613182602c83613d22565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006131e8603883613d22565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b600061324e602a83613d22565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b60006132b4600283613d33565b91507f227d0000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b60006132f4602283613d22565b91507f456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061335a602083613d22565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b600061339a600d83613d33565b91507f222c2022696d616765223a2022000000000000000000000000000000000000006000830152600d82019050919050565b60006133da602c83613d22565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000613440602c83613d22565b91507f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006134a6602983613d22565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b600061350c602f83613d22565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000613572600a83613d33565b91507f7b226e616d65223a2022000000000000000000000000000000000000000000006000830152600a82019050919050565b60006135b2602183613d22565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613618603183613d22565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b600061367e601d83613d22565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b600060608301600083015184820360008601526136ce8282612dc3565b91505060208301516136e36020860182613701565b5060408301516136f66040860182613701565b508091505092915050565b61370a81613dc4565b82525050565b61371981613dc4565b82525050565b61373061372b82613dc4565b613e5d565b82525050565b61373f81613dce565b82525050565b60006137518284612d28565b915081905092915050565b60006137688286612d92565b91506137748285612cd8565b602082019150613784828461371f565b602082019150819050949350505050565b60006137a18285612e35565b91506137ad8284612d92565b91508190509392505050565b60006137c482613565565b91506137d08284612d92565b91506137db82612f69565b91506137e682612fa9565b91506137f18261338d565b91506137fc8261308f565b9150613807826132a7565b915081905092915050565b60006020820190506138276000830184612c45565b92915050565b60006080820190506138426000830187612c36565b61384f6020830186612c45565b61385c6040830185613710565b818103606083015261386e8184612cef565b905095945050505050565b600060808201905061388e6000830187612c27565b61389b6020830186613710565b6138a86040830185613710565b81810360608301526138ba8184612d59565b905095945050505050565b60006040820190506138da6000830185612c45565b6138e76020830184613710565b9392505050565b600060208201905081810360008301526139088184612c54565b905092915050565b60006020820190506139256000830184612cc9565b92915050565b600060208201905081810360008301526139458184612d59565b905092915050565b600060608201905081810360008301526139678186612dfc565b90506139766020830185613710565b6139836040830184613710565b949350505050565b600060208201905081810360008301526139a481612ec3565b9050919050565b600060208201905081810360008301526139c481612f29565b9050919050565b600060208201905081810360008301526139e481612fe9565b9050919050565b60006020820190508181036000830152613a048161304f565b9050919050565b60006020820190508181036000830152613a24816130cf565b9050919050565b60006020820190508181036000830152613a4481613135565b9050919050565b60006020820190508181036000830152613a6481613175565b9050919050565b60006020820190508181036000830152613a84816131db565b9050919050565b60006020820190508181036000830152613aa481613241565b9050919050565b60006020820190508181036000830152613ac4816132e7565b9050919050565b60006020820190508181036000830152613ae48161334d565b9050919050565b60006020820190508181036000830152613b04816133cd565b9050919050565b60006020820190508181036000830152613b2481613433565b9050919050565b60006020820190508181036000830152613b4481613499565b9050919050565b60006020820190508181036000830152613b64816134ff565b9050919050565b60006020820190508181036000830152613b84816135a5565b9050919050565b60006020820190508181036000830152613ba48161360b565b9050919050565b60006020820190508181036000830152613bc481613671565b9050919050565b6000602082019050613be06000830184613710565b92915050565b6000602082019050613bfb6000830184613736565b92915050565b6000604051905081810181811067ffffffffffffffff82111715613c2457600080fd5b8060405250919050565b600067ffffffffffffffff821115613c4557600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115613c7157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000613d4982613da4565b9050919050565b6000613d5b82613da4565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000613de682613ded565b9050919050565b6000613df882613dff565b9050919050565b6000613e0a82613da4565b9050919050565b82818337600083830152505050565b60005b83811015613e3e578082015181840152602081019050613e23565b83811115613e4d576000848401525b50505050565b6000819050919050565b6000819050919050565b6000601f19601f8301169050919050565b613e8181613d3e565b8114613e8c57600080fd5b50565b613e9881613d62565b8114613ea357600080fd5b50565b613eaf81613d78565b8114613eba57600080fd5b50565b613ec681613dc4565b8114613ed157600080fd5b50565b613edd81613dce565b8114613ee857600080fd5b5056fe4552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656ea26469706673582212208285718720a1d993e04ecba1ae28440af6bb57d9274fd08bbc316b808fabcec664736f6c63430006020033",
  "deployedBytecode": "0x60806040526004361061014b5760003560e01c80636c0360eb116100b6578063a22cb4651161006f578063a22cb465146104f7578063a2ae1bc514610520578063b424388a1461055d578063b88d4fde14610588578063c87b56dd146105b1578063e985e9c5146105ee5761014b565b80636c0360eb146103bf57806370a08231146103ea57806374411eef146104275780637660271d14610450578063834d5fac1461048d57806395d89b41146104cc5761014b565b806323b872dd1161010857806323b872dd146102795780632f745c59146102a257806342842e0e146102df5780634f6ccce7146103085780635bb209a5146103455780636352211e146103825761014b565b806301ffc9a71461015057806306fdde031461018d578063081812fc146101b8578063095ea7b3146101f55780630c106beb1461021e57806318160ddd1461024e575b600080fd5b34801561015c57600080fd5b5061017760048036036101729190810190612adf565b61062b565b6040516101849190613910565b60405180910390f35b34801561019957600080fd5b506101a2610692565b6040516101af919061392b565b60405180910390f35b3480156101c457600080fd5b506101df60048036036101da9190810190612b85565b610734565b6040516101ec9190613812565b60405180910390f35b34801561020157600080fd5b5061021c60048036036102179190810190612aa3565b6107b9565b005b61023860048036036102339190810190612b31565b6108d1565b6040516102459190613bcb565b60405180910390f35b34801561025a57600080fd5b50610263610a39565b6040516102709190613bcb565b60405180910390f35b34801561028557600080fd5b506102a0600480360361029b919081019061299d565b610a4a565b005b3480156102ae57600080fd5b506102c960048036036102c49190810190612aa3565b610aaa565b6040516102d69190613bcb565b60405180910390f35b3480156102eb57600080fd5b506103066004803603610301919081019061299d565b610b05565b005b34801561031457600080fd5b5061032f600480360361032a9190810190612b85565b610b25565b60405161033c9190613bcb565b60405180910390f35b34801561035157600080fd5b5061036c60048036036103679190810190612b85565b610b48565b6040516103799190613bcb565b60405180910390f35b34801561038e57600080fd5b506103a960048036036103a49190810190612b85565b610b81565b6040516103b69190613812565b60405180910390f35b3480156103cb57600080fd5b506103d4610bb8565b6040516103e1919061392b565b60405180910390f35b3480156103f657600080fd5b50610411600480360361040c9190810190612938565b610c5a565b60405161041e9190613bcb565b60405180910390f35b34801561043357600080fd5b5061044e60048036036104499190810190612b85565b610d19565b005b34801561045c57600080fd5b5061047760048036036104729190810190612bd7565b610d7d565b6040516104849190613be6565b60405180910390f35b34801561049957600080fd5b506104b460048036036104af9190810190612b85565b610da0565b6040516104c39392919061394d565b60405180910390f35b3480156104d857600080fd5b506104e1610e6f565b6040516104ee919061392b565b60405180910390f35b34801561050357600080fd5b5061051e60048036036105199190810190612a67565b610f11565b005b34801561052c57600080fd5b5061054760048036036105429190810190612938565b611092565b60405161055491906138ee565b60405180910390f35b34801561056957600080fd5b5061057261131c565b60405161057f9190613bcb565b60405180910390f35b34801561059457600080fd5b506105af60048036036105aa91908101906129ec565b611322565b005b3480156105bd57600080fd5b506105d860048036036105d39190810190612b85565b611384565b6040516105e5919061392b565b60405180910390f35b3480156105fa57600080fd5b5061061560048036036106109190810190612961565b61150f565b6040516106229190613910565b60405180910390f35b6000806000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff169050919050565b606060068054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561072a5780601f106106ff5761010080835404028352916020019161072a565b820191906000526020600020905b81548152906001019060200180831161070d57829003601f168201915b5050505050905090565b600061073f826115a3565b61077e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077590613aeb565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006107c482610b81565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610835576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161082c90613b6b565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166108546115c0565b73ffffffffffffffffffffffffffffffffffffffff16148061088357506108828161087d6115c0565b61150f565b5b6108c2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b990613a6b565b60405180910390fd5b6108cc83836115c8565b505050565b6000600c543414610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e906139ab565b60405180910390fd5b61091f611681565b610929600a6116ec565b6000610935600a611702565b90506109413382611710565b600061094d858561189e565b9050600e604051806060016040528087815260200183815260200184815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000190805190602001906109b19291906126b7565b50602082015181600101556040820151816002015550506109f182866040516020016109dd91906137b9565b604051602081830303815290604052611989565b7ff2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b433828488604051610a269493929190613879565b60405180910390a1819250505092915050565b6000610a4560026119fd565b905090565b610a5b610a556115c0565b82611a12565b610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190613b8b565b60405180910390fd5b610aa5838383611af0565b505050565b6000610afd82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d0790919063ffffffff16565b905092915050565b610b2083838360405180602001604052806000815250611322565b505050565b600080610b3c836002611d2190919063ffffffff16565b50905080915050919050565b6000600e805490508210610b5b57600080fd5b600e8281548110610b6857fe5b9060005260206000209060030201600101549050919050565b6000610bb182604051806060016040528060298152602001613f1e602991396002611d509092919063ffffffff16565b9050919050565b606060098054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610c505780601f10610c2557610100808354040283529160200191610c50565b820191906000526020600020905b815481529060010190602001808311610c3357829003601f168201915b5050505050905090565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ccb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc290613a8b565b60405180910390fd5b610d12600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611d6f565b9050919050565b3373ffffffffffffffffffffffffffffffffffffffff16600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610d7357600080fd5b80600c8190555050565b60008160020260ff168260020260ff166003901b841660ff16901c905092915050565b600e8181548110610dad57fe5b9060005260206000209060030201600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610e595780601f10610e2e57610100808354040283529160200191610e59565b820191906000526020600020905b815481529060010190602001808311610e3c57829003601f168201915b5050505050908060010154908060020154905083565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610f075780601f10610edc57610100808354040283529160200191610f07565b820191906000526020600020905b815481529060010190602001808311610eea57829003601f168201915b5050505050905090565b610f196115c0565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f87576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f7e90613a2b565b60405180910390fd5b8060056000610f946115c0565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff166110416115c0565b73ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516110869190613910565b60405180910390a35050565b606060003073ffffffffffffffffffffffffffffffffffffffff166370a08231846040518263ffffffff1660e01b81526004016110cf9190613812565b60206040518083038186803b1580156110e757600080fd5b505afa1580156110fb573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525061111f9190810190612bae565b905060608160405190808252806020026020018201604052801561115d57816020015b61114a612737565b8152602001906001900390816111425790505b50905060008090505b828110156113115760003073ffffffffffffffffffffffffffffffffffffffff16632f745c5987846040518363ffffffff1660e01b81526004016111ab9291906138c5565b60206040518083038186803b1580156111c357600080fd5b505afa1580156111d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052506111fb9190810190612bae565b90506040518060600160405280600e838154811061121557fe5b90600052602060002090600302016000018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156112ba5780601f1061128f576101008083540402835291602001916112ba565b820191906000526020600020905b81548152906001019060200180831161129d57829003601f168201915b50505050508152602001600e83815481106112d157fe5b9060005260206000209060030201600101548152602001828152508383815181106112f857fe5b6020026020010181905250508080600101915050611166565b508092505050919050565b600c5481565b61133361132d6115c0565b83611a12565b611372576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161136990613b8b565b60405180910390fd5b61137e84848484611d84565b50505050565b606061138f826115a3565b6113ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113c590613b4b565b60405180910390fd5b6060600860008481526020019081526020016000208054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114775780601f1061144c57610100808354040283529160200191611477565b820191906000526020600020905b81548152906001019060200180831161145a57829003601f168201915b505050505090506000600980546001816001161561010002031660029004905014156114a6578091505061150a565b6000815111156114db576009816040516020016114c4929190613795565b60405160208183030381529060405291505061150a565b60096114e684611de0565b6040516020016114f7929190613795565b6040516020818303038152906040529150505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60006115b9826002611f1090919063ffffffff16565b9050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff1661163b83610b81565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600d60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f193505050501580156116e9573d6000803e3d6000fd5b50565b6001816000016000828254019250508190555050565b600081600001549050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611780576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177790613acb565b60405180910390fd5b611789816115a3565b156117c9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117c0906139eb565b60405180910390fd5b6117d560008383611f2a565b61182681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f2f90919063ffffffff16565b5061183d81836002611f499092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a45050565b600080834340436040516020016118b79392919061375c565b6040516020818303038152906040528051906020012060001c9050600060ff8416905060006028600f60016118ed856000610d7d565b010260ff1684816118fa57fe5b0601905060006028600f6001611911866001610d7d565b010260ff16600886901c8161192257fe5b0601905060006028600f6001611939876002610d7d565b010260ff16601087901c8161194a57fe5b06019050600061195c88600f86611f7e565b905061196a81601085611f7e565b905061197881601184611f7e565b905080965050505050505092915050565b611992826115a3565b6119d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119c890613b0b565b60405180910390fd5b806008600084815260200190815260200160002090805190602001906119f8929190612758565b505050565b6000611a0b82600001611f96565b9050919050565b6000611a1d826115a3565b611a5c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611a5390613a4b565b60405180910390fd5b6000611a6783610b81565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611ad657508373ffffffffffffffffffffffffffffffffffffffff16611abe84610734565b73ffffffffffffffffffffffffffffffffffffffff16145b80611ae75750611ae6818561150f565b5b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16611b1082610b81565b73ffffffffffffffffffffffffffffffffffffffff1614611b66576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b5d90613b2b565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611bd6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611bcd90613a0b565b60405180910390fd5b611be1838383611f2a565b611bec6000826115c8565b611c3d81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611fa790919063ffffffff16565b50611c8f81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020611f2f90919063ffffffff16565b50611ca681836002611f499092919063ffffffff16565b50808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000611d168360000183611fc1565b60001c905092915050565b600080600080611d34866000018661202e565b915091508160001c8160001c8090509350935050509250929050565b6000611d63846000018460001b846120b1565b60001c90509392505050565b6000611d7d82600001612142565b9050919050565b611d8f848484611af0565b611d9b84848484612153565b611dda576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611dd1906139cb565b60405180910390fd5b50505050565b60606000821415611e28576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611f0b565b600082905060005b60008214611e52578080600101915050600a8281611e4a57fe5b049150611e30565b6060816040519080825280601f01601f191660200182016040528015611e875781602001600182028038833980820191505090505b50905060006001830390508593505b60008414611f0357600a8481611ea857fe5b0660300160f81b82828060019003935081518110611ec257fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a8481611efb57fe5b049350611e96565b819450505050505b919050565b6000611f22836000018360001b6122b7565b905092915050565b505050565b6000611f41836000018360001b6122da565b905092915050565b6000611f75846000018460001b8473ffffffffffffffffffffffffffffffffffffffff1660001b61234a565b90509392505050565b6000838360080261ffff1683901b0190509392505050565b600081600001805490509050919050565b6000611fb9836000018360001b612426565b905092915050565b60008183600001805490501161200c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120039061398b565b60405180910390fd5b82600001828154811061201b57fe5b9060005260206000200154905092915050565b6000808284600001805490501161207a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161207190613aab565b60405180910390fd5b600084600001848154811061208b57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008084600101600085815260200190815260200160002054905060008114158390612113576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161210a919061392b565b60405180910390fd5b5084600001600182038154811061212657fe5b9060005260206000209060020201600101549150509392505050565b600081600001805490509050919050565b60006121748473ffffffffffffffffffffffffffffffffffffffff1661250e565b61218157600190506122af565b606061224863150b7a0260e01b6121966115c0565b8887876040516024016121ac949392919061382d565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001613eec603291398773ffffffffffffffffffffffffffffffffffffffff166125599092919063ffffffff16565b90506000818060200190516122609190810190612b08565b905063150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614925050505b949350505050565b600080836001016000848152602001908152602001600020541415905092915050565b60006122e68383612571565b61233f578260000182908060018154018082558091505060019003906000526020600020016000909190919091505582600001805490508360010160008481526020019081526020016000208190555060019050612344565b600090505b92915050565b60008084600101600085815260200190815260200160002054905060008114156123f15784600001604051806040016040528086815260200185815250908060018154018082558091505060019003906000526020600020906002020160009091909190915060008201518160000155602082015181600101555050846000018054905085600101600086815260200190815260200160002081905550600191505061241f565b8285600001600183038154811061240457fe5b90600052602060002090600202016001018190555060009150505b9392505050565b60008083600101600084815260200190815260200160002054905060008114612502576000600182039050600060018660000180549050039050600086600001828154811061247157fe5b906000526020600020015490508087600001848154811061248e57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806124c657fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612508565b60009150505b92915050565b60008060007fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47060001b9050833f915080821415801561255057506000801b8214155b92505050919050565b60606125688484600085612594565b90509392505050565b600080836001016000848152602001908152602001600020541415905092915050565b606061259f8561250e565b6125de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125d590613bab565b60405180910390fd5b600060608673ffffffffffffffffffffffffffffffffffffffff1685876040516126089190613745565b60006040518083038185875af1925050503d8060008114612645576040519150601f19603f3d011682016040523d82523d6000602084013e61264a565b606091505b5091509150811561265f5780925050506126af565b6000815111156126725780518082602001fd5b836040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016126a6919061392b565b60405180910390fd5b949350505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106126f857805160ff1916838001178555612726565b82800160010185558215612726579182015b8281111561272557825182559160200191906001019061270a565b5b50905061273391906127d8565b5090565b60405180606001604052806060815260200160008152602001600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061279957805160ff19168380011785556127c7565b828001600101855582156127c7579182015b828111156127c65782518255916020019190600101906127ab565b5b5090506127d491906127d8565b5090565b6127fa91905b808211156127f65760008160009055506001016127de565b5090565b90565b60008135905061280c81613e78565b92915050565b60008135905061282181613e8f565b92915050565b60008135905061283681613ea6565b92915050565b60008151905061284b81613ea6565b92915050565b600082601f83011261286257600080fd5b813561287561287082613c2e565b613c01565b9150808252602083016020830185838301111561289157600080fd5b61289c838284613e11565b50505092915050565b600082601f8301126128b657600080fd5b81356128c96128c482613c5a565b613c01565b915080825260208301602083018583830111156128e557600080fd5b6128f0838284613e11565b50505092915050565b60008135905061290881613ebd565b92915050565b60008151905061291d81613ebd565b92915050565b60008135905061293281613ed4565b92915050565b60006020828403121561294a57600080fd5b6000612958848285016127fd565b91505092915050565b6000806040838503121561297457600080fd5b6000612982858286016127fd565b9250506020612993858286016127fd565b9150509250929050565b6000806000606084860312156129b257600080fd5b60006129c0868287016127fd565b93505060206129d1868287016127fd565b92505060406129e2868287016128f9565b9150509250925092565b60008060008060808587031215612a0257600080fd5b6000612a10878288016127fd565b9450506020612a21878288016127fd565b9350506040612a32878288016128f9565b925050606085013567ffffffffffffffff811115612a4f57600080fd5b612a5b87828801612851565b91505092959194509250565b60008060408385031215612a7a57600080fd5b6000612a88858286016127fd565b9250506020612a9985828601612812565b9150509250929050565b60008060408385031215612ab657600080fd5b6000612ac4858286016127fd565b9250506020612ad5858286016128f9565b9150509250929050565b600060208284031215612af157600080fd5b6000612aff84828501612827565b91505092915050565b600060208284031215612b1a57600080fd5b6000612b288482850161283c565b91505092915050565b60008060408385031215612b4457600080fd5b600083013567ffffffffffffffff811115612b5e57600080fd5b612b6a858286016128a5565b9250506020612b7b858286016128f9565b9150509250929050565b600060208284031215612b9757600080fd5b6000612ba5848285016128f9565b91505092915050565b600060208284031215612bc057600080fd5b6000612bce8482850161290e565b91505092915050565b60008060408385031215612bea57600080fd5b6000612bf885828601612923565b9250506020612c0985828601612923565b9150509250929050565b6000612c1f83836136b1565b905092915050565b612c3081613ddb565b82525050565b612c3f81613d50565b82525050565b612c4e81613d3e565b82525050565b6000612c5f82613cab565b612c698185613ce4565b935083602082028501612c7b85613c86565b8060005b85811015612cb75784840389528151612c988582612c13565b9450612ca383613cd7565b925060208a01995050600181019050612c7f565b50829750879550505050505092915050565b612cd281613d62565b82525050565b612ce9612ce482613d6e565b613e53565b82525050565b6000612cfa82613cb6565b612d048185613cf5565b9350612d14818560208601613e20565b612d1d81613e67565b840191505092915050565b6000612d3382613cb6565b612d3d8185613d06565b9350612d4d818560208601613e20565b80840191505092915050565b6000612d6482613ccc565b612d6e8185613d22565b9350612d7e818560208601613e20565b612d8781613e67565b840191505092915050565b6000612d9d82613ccc565b612da78185613d33565b9350612db7818560208601613e20565b80840191505092915050565b6000612dce82613cc1565b612dd88185613d11565b9350612de8818560208601613e20565b612df181613e67565b840191505092915050565b6000612e0782613cc1565b612e118185613d22565b9350612e21818560208601613e20565b612e2a81613e67565b840191505092915050565b600081546001811660008114612e525760018114612e7757612ebb565b607f6002830416612e638187613d33565b955060ff1983168652808601935050612ebb565b60028204612e858187613d33565b9550612e9085613c96565b60005b82811015612eb257815481890152600182019150602081019050612e93565b82880195505050505b505092915050565b6000612ed0602283613d22565b91507f456e756d657261626c655365743a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000612f36600783613d22565b91507f70617920666565000000000000000000000000000000000000000000000000006000830152602082019050919050565b6000612f76601383613d33565b91507f222c20226465736372697074696f6e223a2022000000000000000000000000006000830152601382019050919050565b6000612fb6600d83613d33565b91507f41757262697420617661746172000000000000000000000000000000000000006000830152600d82019050919050565b6000612ff6603283613d22565b91507f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008301527f63656976657220696d706c656d656e74657200000000000000000000000000006020830152604082019050919050565b600061305c601c83613d22565b91507f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006000830152602082019050919050565b600061309c601083613d33565b91507f73616d706c6520696d61676520757269000000000000000000000000000000006000830152601082019050919050565b60006130dc602483613d22565b91507f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008301527f72657373000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613142601983613d22565b91507f4552433732313a20617070726f766520746f2063616c6c6572000000000000006000830152602082019050919050565b6000613182602c83613d22565b91507f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006131e8603883613d22565b91507f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008301527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006020830152604082019050919050565b600061324e602a83613d22565b91507f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008301527f726f2061646472657373000000000000000000000000000000000000000000006020830152604082019050919050565b60006132b4600283613d33565b91507f227d0000000000000000000000000000000000000000000000000000000000006000830152600282019050919050565b60006132f4602283613d22565b91507f456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e60008301527f64730000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b600061335a602083613d22565b91507f4552433732313a206d696e7420746f20746865207a65726f20616464726573736000830152602082019050919050565b600061339a600d83613d33565b91507f222c2022696d616765223a2022000000000000000000000000000000000000006000830152600d82019050919050565b60006133da602c83613d22565b91507f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b6000613440602c83613d22565b91507f4552433732314d657461646174613a2055524920736574206f66206e6f6e657860008301527f697374656e7420746f6b656e00000000000000000000000000000000000000006020830152604082019050919050565b60006134a6602983613d22565b91507f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960008301527f73206e6f74206f776e00000000000000000000000000000000000000000000006020830152604082019050919050565b600061350c602f83613d22565b91507f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008301527f6e6578697374656e7420746f6b656e00000000000000000000000000000000006020830152604082019050919050565b6000613572600a83613d33565b91507f7b226e616d65223a2022000000000000000000000000000000000000000000006000830152600a82019050919050565b60006135b2602183613d22565b91507f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008301527f72000000000000000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000613618603183613d22565b91507f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008301527f776e6572206e6f7220617070726f7665640000000000000000000000000000006020830152604082019050919050565b600061367e601d83613d22565b91507f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006000830152602082019050919050565b600060608301600083015184820360008601526136ce8282612dc3565b91505060208301516136e36020860182613701565b5060408301516136f66040860182613701565b508091505092915050565b61370a81613dc4565b82525050565b61371981613dc4565b82525050565b61373061372b82613dc4565b613e5d565b82525050565b61373f81613dce565b82525050565b60006137518284612d28565b915081905092915050565b60006137688286612d92565b91506137748285612cd8565b602082019150613784828461371f565b602082019150819050949350505050565b60006137a18285612e35565b91506137ad8284612d92565b91508190509392505050565b60006137c482613565565b91506137d08284612d92565b91506137db82612f69565b91506137e682612fa9565b91506137f18261338d565b91506137fc8261308f565b9150613807826132a7565b915081905092915050565b60006020820190506138276000830184612c45565b92915050565b60006080820190506138426000830187612c36565b61384f6020830186612c45565b61385c6040830185613710565b818103606083015261386e8184612cef565b905095945050505050565b600060808201905061388e6000830187612c27565b61389b6020830186613710565b6138a86040830185613710565b81810360608301526138ba8184612d59565b905095945050505050565b60006040820190506138da6000830185612c45565b6138e76020830184613710565b9392505050565b600060208201905081810360008301526139088184612c54565b905092915050565b60006020820190506139256000830184612cc9565b92915050565b600060208201905081810360008301526139458184612d59565b905092915050565b600060608201905081810360008301526139678186612dfc565b90506139766020830185613710565b6139836040830184613710565b949350505050565b600060208201905081810360008301526139a481612ec3565b9050919050565b600060208201905081810360008301526139c481612f29565b9050919050565b600060208201905081810360008301526139e481612fe9565b9050919050565b60006020820190508181036000830152613a048161304f565b9050919050565b60006020820190508181036000830152613a24816130cf565b9050919050565b60006020820190508181036000830152613a4481613135565b9050919050565b60006020820190508181036000830152613a6481613175565b9050919050565b60006020820190508181036000830152613a84816131db565b9050919050565b60006020820190508181036000830152613aa481613241565b9050919050565b60006020820190508181036000830152613ac4816132e7565b9050919050565b60006020820190508181036000830152613ae48161334d565b9050919050565b60006020820190508181036000830152613b04816133cd565b9050919050565b60006020820190508181036000830152613b2481613433565b9050919050565b60006020820190508181036000830152613b4481613499565b9050919050565b60006020820190508181036000830152613b64816134ff565b9050919050565b60006020820190508181036000830152613b84816135a5565b9050919050565b60006020820190508181036000830152613ba48161360b565b9050919050565b60006020820190508181036000830152613bc481613671565b9050919050565b6000602082019050613be06000830184613710565b92915050565b6000602082019050613bfb6000830184613736565b92915050565b6000604051905081810181811067ffffffffffffffff82111715613c2457600080fd5b8060405250919050565b600067ffffffffffffffff821115613c4557600080fd5b601f19601f8301169050602081019050919050565b600067ffffffffffffffff821115613c7157600080fd5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b60008190508160005260206000209050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000613d4982613da4565b9050919050565b6000613d5b82613da4565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b6000613de682613ded565b9050919050565b6000613df882613dff565b9050919050565b6000613e0a82613da4565b9050919050565b82818337600083830152505050565b60005b83811015613e3e578082015181840152602081019050613e23565b83811115613e4d576000848401525b50505050565b6000819050919050565b6000819050919050565b6000601f19601f8301169050919050565b613e8181613d3e565b8114613e8c57600080fd5b50565b613e9881613d62565b8114613ea357600080fd5b50565b613eaf81613d78565b8114613eba57600080fd5b50565b613ec681613dc4565b8114613ed157600080fd5b50565b613edd81613dce565b8114613ee857600080fd5b5056fe4552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656ea26469706673582212208285718720a1d993e04ecba1ae28440af6bb57d9274fd08bbc316b808fabcec664736f6c63430006020033",
  "sourceMap": "171:3831:2:-:0;;;348:6;315:39;;586:272;8:9:-1;5:2;;;30:1;27;20:12;5:2;586:272:2;;;;;;;;;;;;;;;;;;;;;;;;3565:365:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:40:10;418:10;770:20;;751:18;;;:40;;:::i;:::-;3645:4:15;3637:5;:12;;;;;;;;;;;;:::i;:::-;;3669:6;3659:7;:16;;;;;;;;;;;;:::i;:::-;;3763:40;2730:10;3782:20;;3763:18;;;:40;;:::i;:::-;3813:49;3062:10;3832:29;;3813:18;;;:49;;:::i;:::-;3872:51;3435:10;3891:31;;3872:18;;;:51;;:::i;:::-;3565:365;;711:12:2::1;697:11;;:26;;;;;;;;;;;;;;;;;;733:7;746:17;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;758:1;746:17;;;;761:1;746:17;;::::0;733:31:::1;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;733:31:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;802:10;794:5;;:18;;;;;;;;;;;;;;;;;;586:272:::0;171:3831;;1482:198:10;1580:10;1565:25;;:11;:25;;;;;1557:66;;;;;;;;;;;;;;;;;;;;;;1669:4;1633:20;:33;1654:11;1633:33;;;;;;;;;;;;;;;;;;:40;;;;;;;;;;;;;;;;;;1482:198;:::o;171:3831:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:150:-1:-;;97:6;91:13;82:22;;109:41;144:5;109:41;;;76:79;;;;;162:279;;285:2;273:9;264:7;260:23;256:32;253:2;;;301:1;298;291:12;253:2;336:1;353:72;417:7;408:6;397:9;393:22;353:72;;;343:82;;315:116;247:194;;;;;449:328;;609:67;673:2;668:3;609:67;;;602:74;;709:30;705:1;700:3;696:11;689:51;768:2;763:3;759:12;752:19;;595:182;;;;785:407;;976:2;965:9;961:18;953:26;;1026:9;1020:4;1016:20;1012:1;1001:9;997:17;990:47;1051:131;1177:4;1051:131;;;1043:139;;947:245;;;;1200:163;;1315:6;1310:3;1303:19;1352:4;1347:3;1343:14;1328:29;;1296:67;;;;;1371:99;;1441:24;1459:5;1441:24;;;1430:35;;1424:46;;;;1477:121;;1550:42;1543:5;1539:54;1528:65;;1522:76;;;;1605:133;1682:32;1708:5;1682:32;;;1675:5;1672:43;1662:2;;1729:1;1726;1719:12;1662:2;1656:82;;171:3831:2;;;;;;;",
  "deployedSourceMap": "171:3831:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:140:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;948:140:10;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4486:90:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4486:90:15;;;:::i;:::-;;;;;;;;;;;;;;;;7093:209;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7093:209:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;6651:381;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6651:381:15;;;;;;;;;;;;;;;;:::i;:::-;;957:872:2;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;6161:200:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6161:200:15;;;:::i;:::-;;;;;;;;;;;;;;;;7941:300;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7941:300:15;;;;;;;;;;;;;;;;:::i;:::-;;5938:152;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5938:152:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;8307:149;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8307:149:15;;;;;;;;;;;;;;;;:::i;:::-;;6433:161;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6433:161:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;3387:223:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3387:223:2;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;4257:167:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4257:167:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;5772:87;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5772:87:15;;;:::i;:::-;;;;;;;;;;;;;;;;3989:211;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3989:211:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;1835:138:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1835:138:2;;;;;;;;;;;;;;;;:::i;:::-;;1979:234;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1979:234:2;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;483:23;;8:9:-1;5:2;;;30:1;27;20:12;5:2;483:23:2;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;4640:94:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4640:94:15;;;:::i;:::-;;;;;;;;;;;;;;;;7369:290;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7369:290:15;;;;;;;;;;;;;;;;:::i;:::-;;3616:384:2;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3616:384:2;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;315:39;;8:9:-1;5:2;;;30:1;27;20:12;5:2;315:39:2;;;:::i;:::-;;;;;;;;;;;;;;;;8522:282:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8522:282:15;;;;;;;;;;;;;;;;:::i;:::-;;4800:740;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4800:740:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;7725:154;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7725:154:15;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;948:140:10;1025:4;1048:20;:33;1069:11;1048:33;;;;;;;;;;;;;;;;;;;;;;;;;;;1041:40;;948:140;;;:::o;4486:90:15:-;4532:13;4564:5;4557:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4486:90;:::o;7093:209::-;7161:7;7188:16;7196:7;7188;:16::i;:::-;7180:73;;;;;;;;;;;;;;;;;;;;;;7271:15;:24;7287:7;7271:24;;;;;;;;;;;;;;;;;;;;;7264:31;;7093:209;;;:::o;6651:381::-;6731:13;6747:16;6755:7;6747;:16::i;:::-;6731:32;;6787:5;6781:11;;:2;:11;;;;6773:57;;;;;;;;;;;;;;;;;;;;;;6865:5;6849:21;;:12;:10;:12::i;:::-;:21;;;:62;;;;6874:37;6891:5;6898:12;:10;:12::i;:::-;6874:16;:37::i;:::-;6849:62;6841:152;;;;;;;;;;;;;;;;;;;;;;7004:21;7013:2;7017:7;7004:8;:21::i;:::-;6651:381;;;:::o;957:872:2:-;1063:7;1107:15;;1094:9;:28;1086:48;;;;;;;;;;;;;;;;;;;;;;1144:9;:7;:9::i;:::-;1193:21;:9;:19;:21::i;:::-;1224:10;1237:19;:9;:17;:19::i;:::-;1224:32;;1266:21;1272:10;1284:2;1266:5;:21::i;:::-;1297:11;1311:22;1318:4;1324:8;1311:6;:22::i;:::-;1297:36;;1343:7;1356:21;;;;;;;;1363:4;1356:21;;;;1369:3;1356:21;;;;1374:2;1356:21;;;1343:35;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1343:35:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;1388:367;1414:2;1526:4;1454:277;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;1454:277:2;;;1388:12;:367::i;:::-;1770:33;1777:10;1789:3;1794:2;1798:4;1770:33;;;;;;;;;;;;;;;;;;1820:2;1813:9;;;;957:872;;;;:::o;6161:200:15:-;6214:7;6333:21;:12;:19;:21::i;:::-;6326:28;;6161:200;:::o;7941:300::-;8100:41;8119:12;:10;:12::i;:::-;8133:7;8100:18;:41::i;:::-;8092:103;;;;;;;;;;;;;;;;;;;;;;8206:28;8216:4;8222:2;8226:7;8206:9;:28::i;:::-;7941:300;;;:::o;5938:152::-;6027:7;6053:30;6077:5;6053:13;:20;6067:5;6053:20;;;;;;;;;;;;;;;:23;;:30;;;;:::i;:::-;6046:37;;5938:152;;;;:::o;8307:149::-;8410:39;8427:4;8433:2;8437:7;8410:39;;;;;;;;;;;;:16;:39::i;:::-;8307:149;;;:::o;6433:161::-;6500:7;6520:15;6541:22;6557:5;6541:12;:15;;:22;;;;:::i;:::-;6519:44;;;6580:7;6573:14;;;6433:161;;;:::o;3387:223:2:-;3437:7;3555;:14;;;;3549:3;:20;3541:29;;;;;;3587:7;3595:3;3587:12;;;;;;;;;;;;;;;;;;:16;;;3580:23;;3387:223;;;:::o;4257:167:15:-;4321:7;4347:70;4364:7;4347:70;;;;;;;;;;;;;;;;;:12;:16;;:70;;;;;:::i;:::-;4340:77;;4257:167;;;:::o;5772:87::-;5812:13;5844:8;5837:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5772:87;:::o;3989:211::-;4053:7;4097:1;4080:19;;:5;:19;;;;4072:74;;;;;;;;;;;;;;;;;;;;;;4164:29;:13;:20;4178:5;4164:20;;;;;;;;;;;;;;;:27;:29::i;:::-;4157:36;;3989:211;;;:::o;1835:138:2:-;1920:10;1905:25;;:11;;;;;;;;;;;:25;;;1897:34;;;;;;1959:7;1941:15;:25;;;;1835:138;:::o;1979:234::-;2039:5;2201:3;2197:1;:7;2170:35;;2186:3;2182:1;:7;2176:14;;:1;:14;;2171:1;:20;2170:35;;;;2162:44;;1979:234;;;;:::o;483:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4640:94:15:-;4688:13;4720:7;4713:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:94;:::o;7369:290::-;7483:12;:10;:12::i;:::-;7471:24;;:8;:24;;;;7463:62;;;;;;;;;;;;;;;;;;;;;;7581:8;7536:18;:32;7555:12;:10;:12::i;:::-;7536:32;;;;;;;;;;;;;;;:42;7569:8;7536:42;;;;;;;;;;;;;;;;:53;;;;;;;;;;;;;;;;;;7633:8;7604:48;;7619:12;:10;:12::i;:::-;7604:48;;;7643:8;7604:48;;;;;;;;;;;;;;;7369:290;;:::o;3616:384:2:-;3673:15;3700:11;3714:4;:14;;;3729:6;3714:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3714:22:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3714:22:2;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;3714:22:2;;;;;;;;;3700:36;;3746:19;3781:3;3768:17;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;3746:39;;3800:9;3812:1;3800:13;;3795:179;3819:3;3815:1;:7;3795:179;;;3843:11;3857:4;:24;;;3882:6;3890:1;3857:35;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3857:35:2;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;3857:35:2;;;;;;;101:4:-1;97:9;90:4;84;80:15;76:31;69:5;65:43;126:6;120:4;113:20;0:138;3857:35:2;;;;;;;;;3843:49;;3915:48;;;;;;;;3922:7;3930:3;3922:12;;;;;;;;;;;;;;;;;;:17;;3915:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3941:7;3949:3;3941:12;;;;;;;;;;;;;;;;;;:16;;;3915:48;;;;3959:3;3915:48;;;3906:3;3910:1;3906:6;;;;;;;;;;;;;:57;;;;3795:179;3824:3;;;;;;;3795:179;;;;3990:3;3983:10;;;;3616:384;;;:::o;315:39::-;;;;:::o;8522:282:15:-;8653:41;8672:12;:10;:12::i;:::-;8686:7;8653:18;:41::i;:::-;8645:103;;;;;;;;;;;;;;;;;;;;;;8758:39;8772:4;8778:2;8782:7;8791:5;8758:13;:39::i;:::-;8522:282;;;;:::o;4800:740::-;4865:13;4898:16;4906:7;4898;:16::i;:::-;4890:76;;;;;;;;;;;;;;;;;;;;;;4977:23;5003:10;:19;5014:7;5003:19;;;;;;;;;;;4977:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5121:1;5101:8;5095:22;;;;;;;;;;;;;;;;:27;5091:74;;;5145:9;5138:16;;;;;5091:74;5293:1;5273:9;5267:23;:27;5263:110;;;5341:8;5351:9;5324:37;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5324:37:15;;;5310:52;;;;;5263:110;5503:8;5513:18;:7;:16;:18::i;:::-;5486:46;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5486:46:15;;;5472:61;;;4800:740;;;;:::o;7725:154::-;7814:4;7837:18;:25;7856:5;7837:25;;;;;;;;;;;;;;;:35;7863:8;7837:35;;;;;;;;;;;;;;;;;;;;;;;;;7830:42;;7725:154;;;;:::o;10237:117::-;10294:4;10317:30;10339:7;10317:12;:21;;:30;;;;:::i;:::-;10310:37;;10237:117;;;:::o;590:104:9:-;643:15;677:10;670:17;;590:104;:::o;15893:155:15:-;15985:2;15958:15;:24;15974:7;15958:24;;;;;;;;;;;;:29;;;;;;;;;;;;;;;;;;16033:7;16029:2;16002:39;;16011:16;16019:7;16011;:16::i;:::-;16002:39;;;;;;;;;;;;15893:155;;:::o;864:87:2:-;901:11;;;;;;;;;;;:20;;:43;922:21;901:43;;;;;;;;;;;;;;;;;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;901:43:2;864:87::o;1216:178:25:-;1386:1;1368:7;:14;;;:19;;;;;;;;;;;1216:178;:::o;1098:112::-;1163:7;1189;:14;;;1182:21;;1098:112;;;:::o;12070:393:15:-;12163:1;12149:16;;:2;:16;;;;12141:61;;;;;;;;;;;;;;;;;;;;;;12221:16;12229:7;12221;:16::i;:::-;12220:17;12212:58;;;;;;;;;;;;;;;;;;;;;;12281:45;12310:1;12314:2;12318:7;12281:20;:45::i;:::-;12337:30;12359:7;12337:13;:17;12351:2;12337:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;12378:29;12395:7;12404:2;12378:12;:16;;:29;;;;;:::i;:::-;;12448:7;12444:2;12423:33;;12440:1;12423:33;;;;;;;;;;;;12070:393;;:::o;2219:923:2:-;2320:7;2343:13;2424:5;2441:12;2431:23;2456:12;2407:62;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;2407:62:2;;;2380:103;;;;;;2359:134;;2343:150;;2557:10;2587:3;2576:8;:14;2557:34;;2631:13;2691:2;2684;2679:1;2658:18;2668:4;2674:1;2658:9;:18::i;:::-;:22;2657:29;2648:39;;:5;:39;;;;;;2647:46;2631:62;;2743:13;2810:2;2803;2798:1;2777:18;2787:4;2793:1;2777:9;:18::i;:::-;:22;2776:29;2760:46;;2770:1;2761:5;:10;;2760:46;;;;;;2759:53;2743:69;;2840:11;2906:2;2899;2894:1;2873:18;2883:4;2889:1;2873:9;:18::i;:::-;:22;2872:29;2855:47;;2865:2;2856:5;:11;;2855:47;;;;;;2854:54;2840:68;;2938:11;2952:28;2960:8;2970:2;2974:5;2952:7;:28::i;:::-;2938:42;;2996:23;3004:3;3009:2;3013:5;2996:7;:23::i;:::-;2990:29;;3035:21;3043:3;3048:2;3052:3;3035:7;:21::i;:::-;3029:27;;3132:3;3125:10;;;;;;;;2219:923;;;;:::o;14212:212:15:-;14311:16;14319:7;14311;:16::i;:::-;14303:73;;;;;;;;;;;;;;;;;;;;;;14408:9;14386:10;:19;14397:7;14386:19;;;;;;;;;;;:31;;;;;;;;;;;;:::i;:::-;;14212:212;;:::o;7023:121:26:-;7092:7;7118:19;7126:3;:10;;7118:7;:19::i;:::-;7111:26;;7023:121;;;:::o;10512:329:15:-;10597:4;10621:16;10629:7;10621;:16::i;:::-;10613:73;;;;;;;;;;;;;;;;;;;;;;10696:13;10712:16;10720:7;10712;:16::i;:::-;10696:32;;10757:5;10746:16;;:7;:16;;;:51;;;;10790:7;10766:31;;:20;10778:7;10766:11;:20::i;:::-;:31;;;10746:51;:87;;;;10801:32;10818:5;10825:7;10801:16;:32::i;:::-;10746:87;10738:96;;;10512:329;;;;:::o;13506:559::-;13623:4;13603:24;;:16;13611:7;13603;:16::i;:::-;:24;;;13595:78;;;;;;;;;;;;;;;;;;;;;;13705:1;13691:16;;:2;:16;;;;13683:65;;;;;;;;;;;;;;;;;;;;;;13759:39;13780:4;13786:2;13790:7;13759:20;:39::i;:::-;13860:29;13877:1;13881:7;13860:8;:29::i;:::-;13900:35;13927:7;13900:13;:19;13914:4;13900:19;;;;;;;;;;;;;;;:26;;:35;;;;:::i;:::-;;13945:30;13967:7;13945:13;:17;13959:2;13945:17;;;;;;;;;;;;;;;:21;;:30;;;;:::i;:::-;;13986:29;14003:7;14012:2;13986:12;:16;;:29;;;;;:::i;:::-;;14050:7;14046:2;14031:27;;14040:4;14031:27;;;;;;;;;;;;13506:559;;;:::o;7649:135:27:-;7720:7;7754:22;7758:3;:10;;7770:5;7754:3;:22::i;:::-;7746:31;;7739:38;;7649:135;;;;:::o;7472:224:26:-;7552:7;7561;7581:11;7594:13;7611:22;7615:3;:10;;7627:5;7611:3;:22::i;:::-;7580:53;;;;7659:3;7651:12;;7681:5;7673:14;;7643:46;;;;;;;;;7472:224;;;;;:::o;8115:202::-;8222:7;8264:44;8269:3;:10;;8289:3;8281:12;;8295;8264:4;:44::i;:::-;8256:53;;8241:69;;8115:202;;;;;:::o;7205:112:27:-;7265:7;7291:19;7299:3;:10;;7291:7;:19::i;:::-;7284:26;;7205:112;;;:::o;9665:269:15:-;9778:28;9788:4;9794:2;9798:7;9778:9;:28::i;:::-;9824:48;9847:4;9853:2;9857:7;9866:5;9824:22;:48::i;:::-;9816:111;;;;;;;;;;;;;;;;;;;;;;9665:269;;;;:::o;202:723:28:-;258:13;484:1;475:5;:10;471:51;;;501:10;;;;;;;;;;;;;;;;;;;;;471:51;531:12;546:5;531:20;;561:14;585:75;600:1;592:4;:9;585:75;;617:8;;;;;;;647:2;639:10;;;;;;;;;585:75;;;669:19;701:6;691:17;;;;;;;;;;;;;;;;;;;;;;;;;29:1:-1;21:6;17:14;116:4;104:10;96:6;87:34;147:4;139:6;135:17;125:27;;0:156;691:17:28;;;;669:39;;718:13;743:1;734:6;:10;718:26;;761:5;754:12;;776:112;791:1;783:4;:9;776:112;;849:2;842:4;:9;;;;;;837:2;:14;826:27;;808:6;815:7;;;;;;;808:15;;;;;;;;;;;:45;;;;;;;;;;;875:2;867:10;;;;;;;;;776:112;;;911:6;897:21;;;;;;202:723;;;;:::o;6791:149:26:-;6875:4;6898:35;6908:3;:10;;6928:3;6920:12;;6898:9;:35::i;:::-;6891:42;;6791:149;;;;:::o;16644:93:15:-;;;;:::o;6467:129:27:-;6534:4;6557:32;6562:3;:10;;6582:5;6574:14;;6557:4;:32::i;:::-;6550:39;;6467:129;;;;:::o;6239:174:26:-;6328:4;6351:55;6356:3;:10;;6376:3;6368:12;;6398:5;6390:14;;6382:23;;6351:4;:55::i;:::-;6344:62;;6239:174;;;;;:::o;3148:233:2:-;3260:7;3368:6;3362:1;3358;:5;3346:18;;:7;:18;;3345:29;3338:36;;3148:233;;;;;:::o;4483:108:26:-;4539:7;4565:3;:12;;:19;;;;4558:26;;4483:108;;;:::o;6764:135:27:-;6834:4;6857:35;6865:3;:10;;6885:5;6877:14;;6857:7;:35::i;:::-;6850:42;;6764:135;;;;:::o;4423:201::-;4490:7;4538:5;4517:3;:11;;:18;;;;:26;4509:73;;;;;;;;;;;;;;;;;;;;;;4599:3;:11;;4611:5;4599:18;;;;;;;;;;;;;;;;4592:25;;4423:201;;;;:::o;4934:274:26:-;5001:7;5010;5059:5;5037:3;:12;;:19;;;;:27;5029:74;;;;;;;;;;;;;;;;;;;;;;5114:22;5139:3;:12;;5152:5;5139:19;;;;;;;;;;;;;;;;;;5114:44;;5176:5;:10;;;5188:5;:12;;;5168:33;;;;;4934:274;;;;;:::o;5615:315::-;5709:7;5728:16;5747:3;:12;;:17;5760:3;5747:17;;;;;;;;;;;;5728:36;;5794:1;5782:8;:13;;5797:12;5774:36;;;;;;;;;;;;;;;;;;;;;;;;;5863:3;:12;;5887:1;5876:8;:12;5863:26;;;;;;;;;;;;;;;;;;:33;;;5856:40;;;5615:315;;;;;:::o;3984:107:27:-;4040:7;4066:3;:11;;:18;;;;4059:25;;3984:107;;;:::o;15298:589:15:-;15418:4;15443:15;:2;:13;;;:15::i;:::-;15438:58;;15481:4;15474:11;;;;15438:58;15505:23;15531:246;15583:45;;;15642:12;:10;:12::i;:::-;15668:4;15686:7;15707:5;15547:175;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15547:175:15;;;;;;;38:4:-1;29:7;25:18;67:10;61:17;96:58;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15547:175:15;15531:246;;;;;;;;;;;;;;;;;:2;:15;;;;:246;;;;;:::i;:::-;15505:272;;15787:13;15814:10;15803:32;;;;;;;;;;;;;;15787:48;;1068:10;15863:16;;15853:26;;;:6;:26;;;;15845:35;;;;15298:589;;;;;;;:::o;4270:123:26:-;4341:4;4385:1;4364:3;:12;;:17;4377:3;4364:17;;;;;;;;;;;;:22;;4357:29;;4270:123;;;;:::o;1611:404:27:-;1674:4;1695:21;1705:3;1710:5;1695:9;:21::i;:::-;1690:319;;1732:3;:11;;1749:5;1732:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1732:23:27;;;;;;;;;;;;;;;;;;;1912:3;:11;;:18;;;;1890:3;:12;;:19;1903:5;1890:19;;;;;;;;;;;:40;;;;1951:4;1944:11;;;;1690:319;1993:5;1986:12;;1611:404;;;;;:::o;1828:678:26:-;1904:4;2018:16;2037:3;:12;;:17;2050:3;2037:17;;;;;;;;;;;;2018:36;;2081:1;2069:8;:13;2065:435;;;2135:3;:12;;2153:38;;;;;;;;2170:3;2153:38;;;;2183:5;2153:38;;;2135:57;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2135:57:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2347:3;:12;;:19;;;;2327:3;:12;;:17;2340:3;2327:17;;;;;;;;;;;:39;;;;2387:4;2380:11;;;;;2065:435;2458:5;2422:3;:12;;2446:1;2435:8;:12;2422:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2484:5;2477:12;;;1828:678;;;;;;:::o;2183:1512:27:-;2249:4;2365:18;2386:3;:12;;:19;2399:5;2386:19;;;;;;;;;;;;2365:40;;2434:1;2420:10;:15;2416:1273;;2777:21;2814:1;2801:10;:14;2777:38;;2829:17;2870:1;2849:3;:11;;:18;;;;:22;2829:42;;3111:17;3131:3;:11;;3143:9;3131:22;;;;;;;;;;;;;;;;3111:42;;3274:9;3245:3;:11;;3257:13;3245:26;;;;;;;;;;;;;;;:38;;;;3391:1;3375:13;:17;3349:3;:12;;:23;3362:9;3349:23;;;;;;;;;;;:43;;;;3498:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3590:3;:12;;:19;3603:5;3590:19;;;;;;;;;;;3583:26;;;3631:4;3624:11;;;;;;;;2416:1273;3673:5;3666:12;;;2183:1512;;;;;:::o;718:610:24:-;778:4;1036:16;1062:19;1084:66;1062:88;;;;1251:7;1239:20;1227:32;;1290:11;1278:8;:23;;:42;;;;;1317:3;1305:15;;:8;:15;;1278:42;1270:51;;;;718:610;;;:::o;3770:194::-;3873:12;3904:53;3927:6;3935:4;3941:1;3944:12;3904:22;:53::i;:::-;3897:60;;3770:194;;;;;:::o;3776:127:27:-;3849:4;3895:1;3872:3;:12;;:19;3885:5;3872:19;;;;;;;;;;;;:24;;3865:31;;3776:127;;;;:::o;5117:958:24:-;5247:12;5279:18;5290:6;5279:10;:18::i;:::-;5271:60;;;;;;;;;;;;;;;;;;;;;;5402:12;5416:23;5443:6;:11;;5463:8;5474:4;5443:36;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;5401:78:24;;;;5493:7;5489:580;;;5523:10;5516:17;;;;;;5489:580;5654:1;5634:10;:17;:21;5630:429;;;5892:10;5886:17;5952:15;5939:10;5935:2;5931:19;5924:44;5841:145;6031:12;6024:20;;;;;;;;;;;;;;;;;;;;5117:958;;;;;;;:::o;171:3831:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;5:130:-1:-;;85:6;72:20;63:29;;97:33;124:5;97:33;;;57:78;;;;;142:124;;219:6;206:20;197:29;;231:30;255:5;231:30;;;191:75;;;;;273:128;;352:6;339:20;330:29;;364:32;390:5;364:32;;;324:77;;;;;408:132;;491:6;485:13;476:22;;503:32;529:5;503:32;;;470:70;;;;;548:440;;649:3;642:4;634:6;630:17;626:27;616:2;;667:1;664;657:12;616:2;704:6;691:20;726:64;741:48;782:6;741:48;;;726:64;;;717:73;;810:6;803:5;796:21;846:4;838:6;834:17;879:4;872:5;868:16;914:3;905:6;900:3;896:16;893:25;890:2;;;931:1;928;921:12;890:2;941:41;975:6;970:3;965;941:41;;;609:379;;;;;;;;997:442;;1099:3;1092:4;1084:6;1080:17;1076:27;1066:2;;1117:1;1114;1107:12;1066:2;1154:6;1141:20;1176:65;1191:49;1233:6;1191:49;;;1176:65;;;1167:74;;1261:6;1254:5;1247:21;1297:4;1289:6;1285:17;1330:4;1323:5;1319:16;1365:3;1356:6;1351:3;1347:16;1344:25;1341:2;;;1382:1;1379;1372:12;1341:2;1392:41;1426:6;1421:3;1416;1392:41;;;1059:380;;;;;;;;1447:130;;1527:6;1514:20;1505:29;;1539:33;1566:5;1539:33;;;1499:78;;;;;1584:134;;1668:6;1662:13;1653:22;;1680:33;1707:5;1680:33;;;1647:71;;;;;1725:126;;1803:6;1790:20;1781:29;;1815:31;1840:5;1815:31;;;1775:76;;;;;1858:241;;1962:2;1950:9;1941:7;1937:23;1933:32;1930:2;;;1978:1;1975;1968:12;1930:2;2013:1;2030:53;2075:7;2066:6;2055:9;2051:22;2030:53;;;2020:63;;1992:97;1924:175;;;;;2106:366;;;2227:2;2215:9;2206:7;2202:23;2198:32;2195:2;;;2243:1;2240;2233:12;2195:2;2278:1;2295:53;2340:7;2331:6;2320:9;2316:22;2295:53;;;2285:63;;2257:97;2385:2;2403:53;2448:7;2439:6;2428:9;2424:22;2403:53;;;2393:63;;2364:98;2189:283;;;;;;2479:491;;;;2617:2;2605:9;2596:7;2592:23;2588:32;2585:2;;;2633:1;2630;2623:12;2585:2;2668:1;2685:53;2730:7;2721:6;2710:9;2706:22;2685:53;;;2675:63;;2647:97;2775:2;2793:53;2838:7;2829:6;2818:9;2814:22;2793:53;;;2783:63;;2754:98;2883:2;2901:53;2946:7;2937:6;2926:9;2922:22;2901:53;;;2891:63;;2862:98;2579:391;;;;;;2977:721;;;;;3141:3;3129:9;3120:7;3116:23;3112:33;3109:2;;;3158:1;3155;3148:12;3109:2;3193:1;3210:53;3255:7;3246:6;3235:9;3231:22;3210:53;;;3200:63;;3172:97;3300:2;3318:53;3363:7;3354:6;3343:9;3339:22;3318:53;;;3308:63;;3279:98;3408:2;3426:53;3471:7;3462:6;3451:9;3447:22;3426:53;;;3416:63;;3387:98;3544:2;3533:9;3529:18;3516:32;3568:18;3560:6;3557:30;3554:2;;;3600:1;3597;3590:12;3554:2;3620:62;3674:7;3665:6;3654:9;3650:22;3620:62;;;3610:72;;3495:193;3103:595;;;;;;;;3705:360;;;3823:2;3811:9;3802:7;3798:23;3794:32;3791:2;;;3839:1;3836;3829:12;3791:2;3874:1;3891:53;3936:7;3927:6;3916:9;3912:22;3891:53;;;3881:63;;3853:97;3981:2;3999:50;4041:7;4032:6;4021:9;4017:22;3999:50;;;3989:60;;3960:95;3785:280;;;;;;4072:366;;;4193:2;4181:9;4172:7;4168:23;4164:32;4161:2;;;4209:1;4206;4199:12;4161:2;4244:1;4261:53;4306:7;4297:6;4286:9;4282:22;4261:53;;;4251:63;;4223:97;4351:2;4369:53;4414:7;4405:6;4394:9;4390:22;4369:53;;;4359:63;;4330:98;4155:283;;;;;;4445:239;;4548:2;4536:9;4527:7;4523:23;4519:32;4516:2;;;4564:1;4561;4554:12;4516:2;4599:1;4616:52;4660:7;4651:6;4640:9;4636:22;4616:52;;;4606:62;;4578:96;4510:174;;;;;4691:261;;4805:2;4793:9;4784:7;4780:23;4776:32;4773:2;;;4821:1;4818;4811:12;4773:2;4856:1;4873:63;4928:7;4919:6;4908:9;4904:22;4873:63;;;4863:73;;4835:107;4767:185;;;;;4959:472;;;5090:2;5078:9;5069:7;5065:23;5061:32;5058:2;;;5106:1;5103;5096:12;5058:2;5169:1;5158:9;5154:17;5141:31;5192:18;5184:6;5181:30;5178:2;;;5224:1;5221;5214:12;5178:2;5244:63;5299:7;5290:6;5279:9;5275:22;5244:63;;;5234:73;;5120:193;5344:2;5362:53;5407:7;5398:6;5387:9;5383:22;5362:53;;;5352:63;;5323:98;5052:379;;;;;;5438:241;;5542:2;5530:9;5521:7;5517:23;5513:32;5510:2;;;5558:1;5555;5548:12;5510:2;5593:1;5610:53;5655:7;5646:6;5635:9;5631:22;5610:53;;;5600:63;;5572:97;5504:175;;;;;5686:263;;5801:2;5789:9;5780:7;5776:23;5772:32;5769:2;;;5817:1;5814;5807:12;5769:2;5852:1;5869:64;5925:7;5916:6;5905:9;5901:22;5869:64;;;5859:74;;5831:108;5763:186;;;;;5956:358;;;6073:2;6061:9;6052:7;6048:23;6044:32;6041:2;;;6089:1;6086;6079:12;6041:2;6124:1;6141:51;6184:7;6175:6;6164:9;6160:22;6141:51;;;6131:61;;6103:95;6229:2;6247:51;6290:7;6281:6;6270:9;6266:22;6247:51;;;6237:61;;6208:96;6035:279;;;;;;6322:233;;6461:88;6545:3;6537:6;6461:88;;;6447:102;;6440:115;;;;;6563:142;6654:45;6693:5;6654:45;;;6649:3;6642:58;6636:69;;;6712:137;6811:32;6837:5;6811:32;;;6806:3;6799:45;6793:56;;;6856:113;6939:24;6957:5;6939:24;;;6934:3;6927:37;6921:48;;;7039:1000;;7222:73;7289:5;7222:73;;;7308:105;7406:6;7401:3;7308:105;;;7301:112;;7436:3;7478:4;7470:6;7466:17;7461:3;7457:27;7505:75;7574:5;7505:75;;;7600:7;7628:1;7613:387;7638:6;7635:1;7632:13;7613:387;;;7700:9;7694:4;7690:20;7685:3;7678:33;7745:6;7739:13;7767:102;7864:4;7849:13;7767:102;;;7759:110;;7886:79;7958:6;7886:79;;;7876:89;;7988:4;7983:3;7979:14;7972:21;;7670:330;7660:1;7657;7653:9;7648:14;;7613:387;;;7617:14;8013:4;8006:11;;8030:3;8023:10;;7201:838;;;;;;;;;;8047:104;8124:21;8139:5;8124:21;;;8119:3;8112:34;8106:45;;;8158:152;8259:45;8279:24;8297:5;8279:24;;;8259:45;;;8254:3;8247:58;8241:69;;;8317:343;;8427:38;8459:5;8427:38;;;8477:70;8540:6;8535:3;8477:70;;;8470:77;;8552:52;8597:6;8592:3;8585:4;8578:5;8574:16;8552:52;;;8625:29;8647:6;8625:29;;;8620:3;8616:39;8609:46;;8407:253;;;;;;8667:356;;8795:38;8827:5;8795:38;;;8845:88;8926:6;8921:3;8845:88;;;8838:95;;8938:52;8983:6;8978:3;8971:4;8964:5;8960:16;8938:52;;;9011:6;9006:3;9002:16;8995:23;;8775:248;;;;;;9030:347;;9142:39;9175:5;9142:39;;;9193:71;9257:6;9252:3;9193:71;;;9186:78;;9269:52;9314:6;9309:3;9302:4;9295:5;9291:16;9269:52;;;9342:29;9364:6;9342:29;;;9337:3;9333:39;9326:46;;9122:255;;;;;;9384:360;;9514:39;9547:5;9514:39;;;9565:89;9647:6;9642:3;9565:89;;;9558:96;;9659:52;9704:6;9699:3;9692:4;9685:5;9681:16;9659:52;;;9732:6;9727:3;9723:16;9716:23;;9494:250;;;;;;9751:319;;9849:35;9878:5;9849:35;;;9896:61;9950:6;9945:3;9896:61;;;9889:68;;9962:52;10007:6;10002:3;9995:4;9988:5;9984:16;9962:52;;;10035:29;10057:6;10035:29;;;10030:3;10026:39;10019:46;;9829:241;;;;;;10077:339;;10185:35;10214:5;10185:35;;;10232:71;10296:6;10291:3;10232:71;;;10225:78;;10308:52;10353:6;10348:3;10341:4;10334:5;10330:16;10308:52;;;10381:29;10403:6;10381:29;;;10376:3;10372:39;10365:46;;10165:251;;;;;;10448:884;;10585:5;10579:12;10619:1;10608:9;10604:17;10632:1;10627:268;;;;10906:1;10901:425;;;;10597:729;;10627:268;10705:4;10701:1;10690:9;10686:17;10682:28;10724:89;10806:6;10801:3;10724:89;;;10717:96;;10851:4;10847:9;10836;10832:25;10827:3;10820:38;10881:6;10876:3;10872:16;10865:23;;10634:261;10627:268;;10901:425;10970:1;10959:9;10955:17;10986:89;11068:6;11063:3;10986:89;;;10979:96;;11097:38;11129:5;11097:38;;;11151:1;11159:130;11173:6;11170:1;11167:13;11159:130;;;11238:7;11232:14;11228:1;11223:3;11219:11;11212:35;11279:1;11270:7;11266:15;11255:26;;11195:4;11192:1;11188:12;11183:17;;11159:130;;;11312:6;11307:3;11303:16;11296:23;;10908:418;;;10597:729;;10555:777;;;;;;11341:371;;11501:67;11565:2;11560:3;11501:67;;;11494:74;;11601:34;11597:1;11592:3;11588:11;11581:55;11670:4;11665:2;11660:3;11656:12;11649:26;11703:2;11698:3;11694:12;11687:19;;11487:225;;;;11721:306;;11881:66;11945:1;11940:3;11881:66;;;11874:73;;11980:9;11976:1;11971:3;11967:11;11960:30;12018:2;12013:3;12009:12;12002:19;;11867:160;;;;12036:400;;12214:85;12296:2;12291:3;12214:85;;;12207:92;;12332:66;12328:1;12323:3;12319:11;12312:87;12427:2;12422:3;12418:12;12411:19;;12200:236;;;;12445:349;;12623:85;12705:2;12700:3;12623:85;;;12616:92;;12741:15;12737:1;12732:3;12728:11;12721:36;12785:2;12780:3;12776:12;12769:19;;12609:185;;;;12803:387;;12963:67;13027:2;13022:3;12963:67;;;12956:74;;13063:34;13059:1;13054:3;13050:11;13043:55;13132:20;13127:2;13122:3;13118:12;13111:42;13181:2;13176:3;13172:12;13165:19;;12949:241;;;;13199:328;;13359:67;13423:2;13418:3;13359:67;;;13352:74;;13459:30;13455:1;13450:3;13446:11;13439:51;13518:2;13513:3;13509:12;13502:19;;13345:182;;;;13536:352;;13714:85;13796:2;13791:3;13714:85;;;13707:92;;13832:18;13828:1;13823:3;13819:11;13812:39;13879:2;13874:3;13870:12;13863:19;;13700:188;;;;13897:373;;14057:67;14121:2;14116:3;14057:67;;;14050:74;;14157:34;14153:1;14148:3;14144:11;14137:55;14226:6;14221:2;14216:3;14212:12;14205:28;14261:2;14256:3;14252:12;14245:19;;14043:227;;;;14279:325;;14439:67;14503:2;14498:3;14439:67;;;14432:74;;14539:27;14535:1;14530:3;14526:11;14519:48;14595:2;14590:3;14586:12;14579:19;;14425:179;;;;14613:381;;14773:67;14837:2;14832:3;14773:67;;;14766:74;;14873:34;14869:1;14864:3;14860:11;14853:55;14942:14;14937:2;14932:3;14928:12;14921:36;14985:2;14980:3;14976:12;14969:19;;14759:235;;;;15003:393;;15163:67;15227:2;15222:3;15163:67;;;15156:74;;15263:34;15259:1;15254:3;15250:11;15243:55;15332:26;15327:2;15322:3;15318:12;15311:48;15387:2;15382:3;15378:12;15371:19;;15149:247;;;;15405:379;;15565:67;15629:2;15624:3;15565:67;;;15558:74;;15665:34;15661:1;15656:3;15652:11;15645:55;15734:12;15729:2;15724:3;15720:12;15713:34;15775:2;15770:3;15766:12;15759:19;;15551:233;;;;15793:398;;15971:84;16053:1;16048:3;15971:84;;;15964:91;;16088:66;16084:1;16079:3;16075:11;16068:87;16183:1;16178:3;16174:11;16167:18;;15957:234;;;;16200:371;;16360:67;16424:2;16419:3;16360:67;;;16353:74;;16460:34;16456:1;16451:3;16447:11;16440:55;16529:4;16524:2;16519:3;16515:12;16508:26;16562:2;16557:3;16553:12;16546:19;;16346:225;;;;16580:332;;16740:67;16804:2;16799:3;16740:67;;;16733:74;;16840:34;16836:1;16831:3;16827:11;16820:55;16903:2;16898:3;16894:12;16887:19;;16726:186;;;;16921:400;;17099:85;17181:2;17176:3;17099:85;;;17092:92;;17217:66;17213:1;17208:3;17204:11;17197:87;17312:2;17307:3;17303:12;17296:19;;17085:236;;;;17330:381;;17490:67;17554:2;17549:3;17490:67;;;17483:74;;17590:34;17586:1;17581:3;17577:11;17570:55;17659:14;17654:2;17649:3;17645:12;17638:36;17702:2;17697:3;17693:12;17686:19;;17476:235;;;;17720:381;;17880:67;17944:2;17939:3;17880:67;;;17873:74;;17980:34;17976:1;17971:3;17967:11;17960:55;18049:14;18044:2;18039:3;18035:12;18028:36;18092:2;18087:3;18083:12;18076:19;;17866:235;;;;18110:378;;18270:67;18334:2;18329:3;18270:67;;;18263:74;;18370:34;18366:1;18361:3;18357:11;18350:55;18439:11;18434:2;18429:3;18425:12;18418:33;18479:2;18474:3;18470:12;18463:19;;18256:232;;;;18497:384;;18657:67;18721:2;18716:3;18657:67;;;18650:74;;18757:34;18753:1;18748:3;18744:11;18737:55;18826:17;18821:2;18816:3;18812:12;18805:39;18872:2;18867:3;18863:12;18856:19;;18643:238;;;;18890:400;;19068:85;19150:2;19145:3;19068:85;;;19061:92;;19186:66;19182:1;19177:3;19173:11;19166:87;19281:2;19276:3;19272:12;19265:19;;19054:236;;;;19299:370;;19459:67;19523:2;19518:3;19459:67;;;19452:74;;19559:34;19555:1;19550:3;19546:11;19539:55;19628:3;19623:2;19618:3;19614:12;19607:25;19660:2;19655:3;19651:12;19644:19;;19445:224;;;;19678:386;;19838:67;19902:2;19897:3;19838:67;;;19831:74;;19938:34;19934:1;19929:3;19925:11;19918:55;20007:19;20002:2;19997:3;19993:12;19986:41;20055:2;20050:3;20046:12;20039:19;;19824:240;;;;20073:329;;20233:67;20297:2;20292:3;20233:67;;;20226:74;;20333:31;20329:1;20324:3;20320:11;20313:52;20393:2;20388:3;20384:12;20377:19;;20219:183;;;;20467:700;;20600:4;20595:3;20591:14;20683:4;20676:5;20672:16;20666:23;20735:3;20729:4;20725:14;20718:4;20713:3;20709:14;20702:38;20755:69;20819:4;20805:12;20755:69;;;20747:77;;20620:216;20908:4;20901:5;20897:16;20891:23;20920:63;20977:4;20972:3;20968:14;20954:12;20920:63;;;20846:143;21060:4;21053:5;21049:16;21043:23;21072:63;21129:4;21124:3;21120:14;21106:12;21072:63;;;20999:142;21158:4;21151:11;;20573:594;;;;;;21174:103;21247:24;21265:5;21247:24;;;21242:3;21235:37;21229:48;;;21284:113;21367:24;21385:5;21367:24;;;21362:3;21355:37;21349:48;;;21404:152;21505:45;21525:24;21543:5;21525:24;;;21505:45;;;21500:3;21493:58;21487:69;;;21563:107;21642:22;21658:5;21642:22;;;21637:3;21630:35;21624:46;;;21677:262;;21821:93;21910:3;21901:6;21821:93;;;21814:100;;21931:3;21924:10;;21802:137;;;;;21946:544;;22148:95;22239:3;22230:6;22148:95;;;22141:102;;22254:75;22325:3;22316:6;22254:75;;;22351:2;22346:3;22342:12;22335:19;;22365:75;22436:3;22427:6;22365:75;;;22462:2;22457:3;22453:12;22446:19;;22482:3;22475:10;;22129:361;;;;;;;22497:421;;22688:92;22776:3;22767:6;22688:92;;;22681:99;;22798:95;22889:3;22880:6;22798:95;;;22791:102;;22910:3;22903:10;;22669:249;;;;;;22925:1868;;23677:148;23821:3;23677:148;;;23670:155;;23843:95;23934:3;23925:6;23843:95;;;23836:102;;23956:148;24100:3;23956:148;;;23949:155;;24122:148;24266:3;24122:148;;;24115:155;;24288:148;24432:3;24288:148;;;24281:155;;24454:148;24598:3;24454:148;;;24447:155;;24620:148;24764:3;24620:148;;;24613:155;;24785:3;24778:10;;23658:1135;;;;;24800:213;;24918:2;24907:9;24903:18;24895:26;;24932:71;25000:1;24989:9;24985:17;24976:6;24932:71;;;24889:124;;;;;25020:663;;25256:3;25245:9;25241:19;25233:27;;25271:87;25355:1;25344:9;25340:17;25331:6;25271:87;;;25369:72;25437:2;25426:9;25422:18;25413:6;25369:72;;;25452;25520:2;25509:9;25505:18;25496:6;25452:72;;;25572:9;25566:4;25562:20;25557:2;25546:9;25542:18;25535:48;25597:76;25668:4;25659:6;25597:76;;;25589:84;;25227:456;;;;;;;;25690:651;;25920:3;25909:9;25905:19;25897:27;;25935:79;26011:1;26000:9;25996:17;25987:6;25935:79;;;26025:72;26093:2;26082:9;26078:18;26069:6;26025:72;;;26108;26176:2;26165:9;26161:18;26152:6;26108:72;;;26228:9;26222:4;26218:20;26213:2;26202:9;26198:18;26191:48;26253:78;26326:4;26317:6;26253:78;;;26245:86;;25891:450;;;;;;;;26348:324;;26494:2;26483:9;26479:18;26471:26;;26508:71;26576:1;26565:9;26561:17;26552:6;26508:71;;;26590:72;26658:2;26647:9;26643:18;26634:6;26590:72;;;26465:207;;;;;;26679:437;;26885:2;26874:9;26870:18;26862:26;;26935:9;26929:4;26925:20;26921:1;26910:9;26906:17;26899:47;26960:146;27101:4;27092:6;26960:146;;;26952:154;;26856:260;;;;;27123:201;;27235:2;27224:9;27220:18;27212:26;;27249:65;27311:1;27300:9;27296:17;27287:6;27249:65;;;27206:118;;;;;27331:301;;27469:2;27458:9;27454:18;27446:26;;27519:9;27513:4;27509:20;27505:1;27494:9;27490:17;27483:47;27544:78;27617:4;27608:6;27544:78;;;27536:86;;27440:192;;;;;27639:515;;27829:2;27818:9;27814:18;27806:26;;27879:9;27873:4;27869:20;27865:1;27854:9;27850:17;27843:47;27904:74;27973:4;27964:6;27904:74;;;27896:82;;27989:72;28057:2;28046:9;28042:18;28033:6;27989:72;;;28072;28140:2;28129:9;28125:18;28116:6;28072:72;;;27800:354;;;;;;;28161:407;;28352:2;28341:9;28337:18;28329:26;;28402:9;28396:4;28392:20;28388:1;28377:9;28373:17;28366:47;28427:131;28553:4;28427:131;;;28419:139;;28323:245;;;;28575:407;;28766:2;28755:9;28751:18;28743:26;;28816:9;28810:4;28806:20;28802:1;28791:9;28787:17;28780:47;28841:131;28967:4;28841:131;;;28833:139;;28737:245;;;;28989:407;;29180:2;29169:9;29165:18;29157:26;;29230:9;29224:4;29220:20;29216:1;29205:9;29201:17;29194:47;29255:131;29381:4;29255:131;;;29247:139;;29151:245;;;;29403:407;;29594:2;29583:9;29579:18;29571:26;;29644:9;29638:4;29634:20;29630:1;29619:9;29615:17;29608:47;29669:131;29795:4;29669:131;;;29661:139;;29565:245;;;;29817:407;;30008:2;29997:9;29993:18;29985:26;;30058:9;30052:4;30048:20;30044:1;30033:9;30029:17;30022:47;30083:131;30209:4;30083:131;;;30075:139;;29979:245;;;;30231:407;;30422:2;30411:9;30407:18;30399:26;;30472:9;30466:4;30462:20;30458:1;30447:9;30443:17;30436:47;30497:131;30623:4;30497:131;;;30489:139;;30393:245;;;;30645:407;;30836:2;30825:9;30821:18;30813:26;;30886:9;30880:4;30876:20;30872:1;30861:9;30857:17;30850:47;30911:131;31037:4;30911:131;;;30903:139;;30807:245;;;;31059:407;;31250:2;31239:9;31235:18;31227:26;;31300:9;31294:4;31290:20;31286:1;31275:9;31271:17;31264:47;31325:131;31451:4;31325:131;;;31317:139;;31221:245;;;;31473:407;;31664:2;31653:9;31649:18;31641:26;;31714:9;31708:4;31704:20;31700:1;31689:9;31685:17;31678:47;31739:131;31865:4;31739:131;;;31731:139;;31635:245;;;;31887:407;;32078:2;32067:9;32063:18;32055:26;;32128:9;32122:4;32118:20;32114:1;32103:9;32099:17;32092:47;32153:131;32279:4;32153:131;;;32145:139;;32049:245;;;;32301:407;;32492:2;32481:9;32477:18;32469:26;;32542:9;32536:4;32532:20;32528:1;32517:9;32513:17;32506:47;32567:131;32693:4;32567:131;;;32559:139;;32463:245;;;;32715:407;;32906:2;32895:9;32891:18;32883:26;;32956:9;32950:4;32946:20;32942:1;32931:9;32927:17;32920:47;32981:131;33107:4;32981:131;;;32973:139;;32877:245;;;;33129:407;;33320:2;33309:9;33305:18;33297:26;;33370:9;33364:4;33360:20;33356:1;33345:9;33341:17;33334:47;33395:131;33521:4;33395:131;;;33387:139;;33291:245;;;;33543:407;;33734:2;33723:9;33719:18;33711:26;;33784:9;33778:4;33774:20;33770:1;33759:9;33755:17;33748:47;33809:131;33935:4;33809:131;;;33801:139;;33705:245;;;;33957:407;;34148:2;34137:9;34133:18;34125:26;;34198:9;34192:4;34188:20;34184:1;34173:9;34169:17;34162:47;34223:131;34349:4;34223:131;;;34215:139;;34119:245;;;;34371:407;;34562:2;34551:9;34547:18;34539:26;;34612:9;34606:4;34602:20;34598:1;34587:9;34583:17;34576:47;34637:131;34763:4;34637:131;;;34629:139;;34533:245;;;;34785:407;;34976:2;34965:9;34961:18;34953:26;;35026:9;35020:4;35016:20;35012:1;35001:9;34997:17;34990:47;35051:131;35177:4;35051:131;;;35043:139;;34947:245;;;;35199:407;;35390:2;35379:9;35375:18;35367:26;;35440:9;35434:4;35430:20;35426:1;35415:9;35411:17;35404:47;35465:131;35591:4;35465:131;;;35457:139;;35361:245;;;;35613:213;;35731:2;35720:9;35716:18;35708:26;;35745:71;35813:1;35802:9;35798:17;35789:6;35745:71;;;35702:124;;;;;35833:205;;35947:2;35936:9;35932:18;35924:26;;35961:67;36025:1;36014:9;36010:17;36001:6;35961:67;;;35918:120;;;;;36045:256;;36107:2;36101:9;36091:19;;36145:4;36137:6;36133:17;36244:6;36232:10;36229:22;36208:18;36196:10;36193:34;36190:62;36187:2;;;36265:1;36262;36255:12;36187:2;36285:10;36281:2;36274:22;36085:216;;;;;36308:321;;36451:18;36443:6;36440:30;36437:2;;;36483:1;36480;36473:12;36437:2;36550:4;36546:9;36539:4;36531:6;36527:17;36523:33;36515:41;;36614:4;36608;36604:15;36596:23;;36374:255;;;;36636:322;;36780:18;36772:6;36769:30;36766:2;;;36812:1;36809;36802:12;36766:2;36879:4;36875:9;36868:4;36860:6;36856:17;36852:33;36844:41;;36943:4;36937;36933:15;36925:23;;36703:255;;;;36965:170;;37070:3;37062:11;;37108:4;37103:3;37099:14;37091:22;;37056:79;;;;37142:158;;37210:3;37202:11;;37247:3;37244:1;37237:14;37279:4;37276:1;37266:18;37258:26;;37196:104;;;;37307:156;;37435:5;37429:12;37419:22;;37400:63;;;;37470:121;;37563:5;37557:12;37547:22;;37528:63;;;;37598:118;;37688:5;37682:12;37672:22;;37653:63;;;;37723:122;;37817:5;37811:12;37801:22;;37782:63;;;;37852:127;;37969:4;37964:3;37960:14;37952:22;;37946:33;;;;37987:197;;38136:6;38131:3;38124:19;38173:4;38168:3;38164:14;38149:29;;38117:67;;;;;38193:162;;38307:6;38302:3;38295:19;38344:4;38339:3;38335:14;38320:29;;38288:67;;;;;38364:144;;38499:3;38484:18;;38477:31;;;;;38517:153;;38622:6;38617:3;38610:19;38659:4;38654:3;38650:14;38635:29;;38603:67;;;;;38679:163;;38794:6;38789:3;38782:19;38831:4;38826:3;38822:14;38807:29;;38775:67;;;;;38851:145;;38987:3;38972:18;;38965:31;;;;;39004:91;;39066:24;39084:5;39066:24;;;39055:35;;39049:46;;;;39102:99;;39172:24;39190:5;39172:24;;;39161:35;;39155:46;;;;39208:85;;39281:5;39274:13;39267:21;39256:32;;39250:43;;;;39300:72;;39362:5;39351:16;;39345:27;;;;39379:144;;39451:66;39444:5;39440:78;39429:89;;39423:100;;;;39530:121;;39603:42;39596:5;39592:54;39581:65;;39575:76;;;;39658:72;;39720:5;39709:16;;39703:27;;;;39737:81;;39808:4;39801:5;39797:16;39786:27;;39780:38;;;;39825:129;;39912:37;39943:5;39912:37;;;39899:50;;39893:61;;;;39961:121;;40040:37;40071:5;40040:37;;;40027:50;;40021:61;;;;40089:108;;40168:24;40186:5;40168:24;;;40155:37;;40149:48;;;;40205:145;40286:6;40281:3;40276;40263:30;40342:1;40333:6;40328:3;40324:16;40317:27;40256:94;;;;40359:268;40424:1;40431:101;40445:6;40442:1;40439:13;40431:101;;;40521:1;40516:3;40512:11;40506:18;40502:1;40497:3;40493:11;40486:39;40467:2;40464:1;40460:10;40455:15;;40431:101;;;40547:6;40544:1;40541:13;40538:2;;;40612:1;40603:6;40598:3;40594:16;40587:27;40538:2;40408:219;;;;;40635:74;;40699:5;40688:16;;40682:27;;;;40716:74;;40780:5;40769:16;;40763:27;;;;40797:97;;40885:2;40881:7;40876:2;40869:5;40865:14;40861:28;40851:38;;40845:49;;;;40902:117;40971:24;40989:5;40971:24;;;40964:5;40961:35;40951:2;;41010:1;41007;41000:12;40951:2;40945:74;;41026:111;41092:21;41107:5;41092:21;;;41085:5;41082:32;41072:2;;41128:1;41125;41118:12;41072:2;41066:71;;41144:115;41212:23;41229:5;41212:23;;;41205:5;41202:34;41192:2;;41250:1;41247;41240:12;41192:2;41186:73;;41266:117;41335:24;41353:5;41335:24;;;41328:5;41325:35;41315:2;;41374:1;41371;41364:12;41315:2;41309:74;;41390:113;41457:22;41473:5;41457:22;;;41450:5;41447:33;41437:2;;41494:1;41491;41484:12;41437:2;41431:72;",
  "source": "pragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\npragma experimental ABIEncoderV2;\n\ncontract AvatarAUR is ERC721 {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n\n    address payable owner;\n    uint256 public createAvatarFee = 10**16;\n    address payable govContract;\n\n    struct Avatar {\n        string name;\n        uint256 dna;\n        uint256 id;\n    }\n\n    Avatar[] public avatars;\n\n    event Minted(address sender, uint256 dna, uint256 id, string name);\n\n    constructor(address payable _govContract)\n        public\n        ERC721(\"Aurbit Avatar\", \"AURA\")\n    {\n        govContract = _govContract;\n        avatars.push(Avatar(\"0\", 0, 0)); //push empty filler\n        owner = msg.sender; //set owner addres as sender on deploy\n    }\n\n    function forward() private {\n        govContract.transfer(address(this).balance);\n    }\n\n    function mintAvatar(string memory name, uint256 _userDNA)\n        public\n        payable\n        returns (uint256)\n    {\n        require(msg.value == createAvatarFee, \"pay fee\");\n        forward(); // forwards the fee to AURGov\n        _tokenIds.increment();\n        uint256 id = _tokenIds.current();\n        _mint(msg.sender, id);\n        uint256 dna = _mkDNA(name, _userDNA);\n        avatars.push(Avatar(name, dna, id));\n        _setTokenURI(\n            id,\n            string(\n                abi.encodePacked(\n                    '{\"name\": \"',\n                    name,\n                    '\", \"description\": \"',\n                    \"Aurbit avatar\",\n                    '\", \"image\": \"',\n                    \"sample image uri\",\n                    '\"}'\n                )\n            )\n        );\n        emit Minted(msg.sender, dna, id, name);\n        return id;\n    }\n\n    function setcreateAvatarFee(uint256 _newfee) public {\n        require(govContract == msg.sender);\n        createAvatarFee = _newfee;\n    }\n\n    function pullcrumb(uint8 b, uint8 pos) public pure returns (uint8) {\n        //pulls bits in 2 bit pairs i call crumbs\n        //8 bits a byte 4 bits a niddle 2 bits a crumb.\n        return ((b & (3 << (2 * pos))) >> (2 * pos));\n    }\n\n    function _mkDNA(string memory _name, uint256 _userDNA)\n        private\n        view\n        returns (uint256)\n    {\n        uint256 prand = uint256(\n            keccak256(\n                abi.encodePacked(_name, blockhash(block.number), block.number)\n            )\n        );\n        //uint prand = uint(blockhash(block.number));\n        uint8 race = uint8(_userDNA & 255); //pulls first byte, the race\n\n        uint256 intel = (prand % ((pullcrumb(race, 0) + 1) * 15)) + 40; //first 2 bits littleendian gives intel\n        uint256 vital = ((prand >> 8) % ((pullcrumb(race, 1) + 1) * 15)) + 40; //second is vital\n        uint256 str = ((prand >> 16) % ((pullcrumb(race, 2) + 1) * 15)) + 40; //third is strength\n        uint256 out = setbyte(_userDNA, 15, intel);\n        out = setbyte(out, 16, vital);\n        out = setbyte(out, 17, str); //this is the first of the batch when returned as array...\n        return out;\n    }\n\n    function setbyte(\n        uint256 _indat,\n        uint16 k,\n        uint256 _setdat\n    ) private pure returns (uint256) {\n        //set kth byte from the right in _indat to _setdat\n        return (_setdat << (8 * k)) + _indat;\n    }\n\n    function getDNA(uint256 tid) public view returns (uint256) {\n        //gets DNA from token ID. not sure the exact proper error handling for this.\n        require(tid < avatars.length);\n        return avatars[tid].dna;\n    }\n\n    function getAvatars(address _owner) public view returns (Avatar[] memory) {\n        uint256 bal = this.balanceOf(_owner);\n        Avatar[] memory out = new Avatar[](bal);\n        for (uint256 i = 0; i < bal; i++) {\n            uint256 aid = this.tokenOfOwnerByIndex(_owner, i);\n            out[i] = Avatar(avatars[aid].name, avatars[aid].dna, aid);\n        }\n        return out;\n    }\n}\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
    "exportedSymbols": {
      "AvatarAUR": [
        1094
      ]
    },
    "id": 1095,
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
        "scope": 1095,
        "sourceUnit": 4756,
        "src": "25:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 658,
        "nodeType": "ImportDirective",
        "scope": 1095,
        "sourceUnit": 6425,
        "src": "83:52:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 659,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "136:33:2"
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 660,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4755,
              "src": "193:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4755",
                "typeString": "contract ERC721"
              }
            },
            "id": 661,
            "nodeType": "InheritanceSpecifier",
            "src": "193:6:2"
          }
        ],
        "contractDependencies": [
          3454,
          3507,
          3517,
          4755,
          4858,
          4885,
          4908
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1094,
        "linearizedBaseContracts": [
          1094,
          4755,
          4885,
          4908,
          4858,
          3507,
          3517,
          3454
        ],
        "name": "AvatarAUR",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 664,
            "libraryName": {
              "contractScope": null,
              "id": 662,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6424,
              "src": "212:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$6424",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "206:36:2",
            "typeName": {
              "contractScope": null,
              "id": 663,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6384,
              "src": "225:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6384_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 666,
            "name": "_tokenIds",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "247:34:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$6384_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 665,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6384,
              "src": "247:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6384_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 668,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "288:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 667,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "288:15:2",
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
            "id": 673,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "315:39:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 669,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "315:7:2",
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
              "id": 672,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 670,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "348:2:2",
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
                "id": 671,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "352:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "348:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 675,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "360:27:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 674,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "360:15:2",
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
            "id": 682,
            "members": [
              {
                "constant": false,
                "id": 677,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 682,
                "src": "418:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 676,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "418:6:2",
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
                "id": 679,
                "name": "dna",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 682,
                "src": "439:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 678,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "439:7:2",
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
                "id": 681,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 682,
                "src": "460:10:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 680,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "460:7:2",
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
            "scope": 1094,
            "src": "394:83:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "834d5fac",
            "id": 685,
            "name": "avatars",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "483:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
              "typeString": "struct AvatarAUR.Avatar[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 683,
                "name": "Avatar",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 682,
                "src": "483:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 684,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "483:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                "typeString": "struct AvatarAUR.Avatar[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 695,
            "name": "Minted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 687,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "526:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:2",
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
                  "id": 689,
                  "indexed": false,
                  "name": "dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "542:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "542:7:2",
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
                  "id": 691,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "555:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "555:7:2",
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
                  "id": 693,
                  "indexed": false,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "567:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:54:2"
            },
            "src": "513:67:2"
          },
          {
            "body": {
              "id": 723,
              "nodeType": "Block",
              "src": "687:171:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 706,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 704,
                      "name": "govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 675,
                      "src": "697:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 705,
                      "name": "_govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 697,
                      "src": "711:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "697:26:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 707,
                  "nodeType": "ExpressionStatement",
                  "src": "697:26:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 712,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "753:3:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                              "typeString": "literal_string \"0\""
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 713,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "758:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 714,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "761:1:2",
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
                              "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                              "typeString": "literal_string \"0\""
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 711,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 682,
                          "src": "746:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$682_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "746:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 708,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "733:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 710,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "733:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$682_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "733:31:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 717,
                  "nodeType": "ExpressionStatement",
                  "src": "733:31:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 718,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 668,
                      "src": "794:5:2",
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
                        "id": 719,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "802:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 720,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "802:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "794:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 722,
                  "nodeType": "ExpressionStatement",
                  "src": "794:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 724,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420417661746172",
                    "id": 700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "658:15:2",
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
                    "id": 701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "675:6:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36c1b71af36fe05a429ec53ba7890fb4e69582f66364001b69d077cce5b9161c",
                      "typeString": "literal_string \"AURA\""
                    },
                    "value": "AURA"
                  }
                ],
                "id": 702,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 699,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4755,
                  "src": "651:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4755_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "651:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 697,
                  "name": "_govContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 724,
                  "src": "598:28:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:15:2",
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
              "src": "597:30:2"
            },
            "returnParameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "687:0:2"
            },
            "scope": 1094,
            "src": "586:272:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 737,
              "nodeType": "Block",
              "src": "891:60:2",
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
                              "id": 732,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "930:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                                "typeString": "contract AvatarAUR"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                                "typeString": "contract AvatarAUR"
                              }
                            ],
                            "id": 731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "922:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 730,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "922:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "922:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 734,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "922:21:2",
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
                        "id": 727,
                        "name": "govContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 675,
                        "src": "901:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 729,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "901:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "901:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 736,
                  "nodeType": "ExpressionStatement",
                  "src": "901:43:2"
                }
              ]
            },
            "documentation": null,
            "id": 738,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 725,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "880:2:2"
            },
            "returnParameters": {
              "id": 726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "891:0:2"
            },
            "scope": 1094,
            "src": "864:87:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 819,
              "nodeType": "Block",
              "src": "1076:753:2",
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
                        "id": 751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 748,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1094:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 749,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1094:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 750,
                          "name": "createAvatarFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 673,
                          "src": "1107:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1094:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70617920666565",
                        "id": 752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1124:9:2",
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
                      "id": 747,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1086:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1086:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 754,
                  "nodeType": "ExpressionStatement",
                  "src": "1086:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 755,
                      "name": "forward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 738,
                      "src": "1144:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
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
                    "src": "1144:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 757,
                  "nodeType": "ExpressionStatement",
                  "src": "1144:9:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 758,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 666,
                        "src": "1193:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6384_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 760,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6407,
                      "src": "1193:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$6384_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$6384_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1193:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 762,
                  "nodeType": "ExpressionStatement",
                  "src": "1193:21:2"
                },
                {
                  "assignments": [
                    764
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 764,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 819,
                      "src": "1224:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 763,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1224:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 768,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 765,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 666,
                        "src": "1237:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6384_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 766,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6395,
                      "src": "1237:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$6384_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$6384_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 767,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1237:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1224:32:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 770,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1272:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1272:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 772,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 764,
                        "src": "1284:2:2",
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
                      "id": 769,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4497,
                      "src": "1266:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1266:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 774,
                  "nodeType": "ExpressionStatement",
                  "src": "1266:21:2"
                },
                {
                  "assignments": [
                    776
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 776,
                      "name": "dna",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 819,
                      "src": "1297:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 775,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1297:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 781,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 778,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 740,
                        "src": "1318:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 779,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 742,
                        "src": "1324:8:2",
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
                      "id": 777,
                      "name": "_mkDNA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 987,
                      "src": "1311:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) view returns (uint256)"
                      }
                    },
                    "id": 780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1311:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1297:36:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 786,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "1363:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 787,
                            "name": "dna",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 776,
                            "src": "1369:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 788,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 764,
                            "src": "1374:2:2",
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
                          "id": 785,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 682,
                          "src": "1356:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$682_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1356:21:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 782,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "1343:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 784,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1343:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$682_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1343:35:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 791,
                  "nodeType": "ExpressionStatement",
                  "src": "1343:35:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 793,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 764,
                        "src": "1414:2:2",
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
                                "id": 798,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1492:12:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                "value": "{\"name\": \""
                              },
                              {
                                "argumentTypes": null,
                                "id": 799,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 740,
                                "src": "1526:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c20226465736372697074696f6e223a2022",
                                "id": 800,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1552:21:2",
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
                                "id": 801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1595:15:2",
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
                                "id": 802,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1632:15:2",
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
                                "id": 803,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1669:18:2",
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
                                "id": 804,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1709:4:2",
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
                                "id": 796,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "1454:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1454:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 805,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1454:277:2",
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
                          "id": 795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1430:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 794,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1430:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1430:315:2",
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
                      "id": 792,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4655,
                      "src": "1388:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1388:367:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 808,
                  "nodeType": "ExpressionStatement",
                  "src": "1388:367:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 810,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1777:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 811,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1777:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 812,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 776,
                        "src": "1789:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 813,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 764,
                        "src": "1794:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 814,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 740,
                        "src": "1798:4:2",
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
                      "id": 809,
                      "name": "Minted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 695,
                      "src": "1770:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,uint256,string memory)"
                      }
                    },
                    "id": 815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1770:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 816,
                  "nodeType": "EmitStatement",
                  "src": "1765:38:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 817,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 764,
                    "src": "1820:2:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 746,
                  "id": 818,
                  "nodeType": "Return",
                  "src": "1813:9:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0c106beb",
            "id": 820,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 740,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 820,
                  "src": "977:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "977:6:2",
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
                  "id": 742,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 820,
                  "src": "997:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "997:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "976:38:2"
            },
            "returnParameters": {
              "id": 746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 745,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 820,
                  "src": "1063:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:9:2"
            },
            "scope": 1094,
            "src": "957:872:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 836,
              "nodeType": "Block",
              "src": "1887:86:2",
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
                        "id": 829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 826,
                          "name": "govContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 675,
                          "src": "1905:11:2",
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
                            "id": 827,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1920:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1920:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1905:25:2",
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
                      "id": 825,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1897:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1897:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 831,
                  "nodeType": "ExpressionStatement",
                  "src": "1897:34:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 832,
                      "name": "createAvatarFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 673,
                      "src": "1941:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 833,
                      "name": "_newfee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 822,
                      "src": "1959:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1941:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 835,
                  "nodeType": "ExpressionStatement",
                  "src": "1941:25:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74411eef",
            "id": 837,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setcreateAvatarFee",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 822,
                  "name": "_newfee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 837,
                  "src": "1863:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1863:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1862:17:2"
            },
            "returnParameters": {
              "id": 824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1887:0:2"
            },
            "scope": 1094,
            "src": "1835:138:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 863,
              "nodeType": "Block",
              "src": "2046:167:2",
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
                        "id": 860,
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
                              "id": 854,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 846,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 839,
                                "src": "2171:1:2",
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
                                    "id": 852,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "33",
                                      "id": 847,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2176:1:2",
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
                                          "id": 850,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 848,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2182:1:2",
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
                                            "id": 849,
                                            "name": "pos",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 841,
                                            "src": "2186:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          "src": "2182:7:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                          }
                                        }
                                      ],
                                      "id": 851,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "2181:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "2176:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  }
                                ],
                                "id": 853,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2175:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2171:20:2",
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
                          "src": "2170:22:2",
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
                              "id": 858,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 856,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2197:1:2",
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
                                "id": 857,
                                "name": "pos",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 841,
                                "src": "2201:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2197:7:2",
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
                          "src": "2196:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2170:35:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "id": 861,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2169:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 845,
                  "id": 862,
                  "nodeType": "Return",
                  "src": "2162:44:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7660271d",
            "id": 864,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullcrumb",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 839,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 864,
                  "src": "1998:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 838,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1998:5:2",
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
                  "id": 841,
                  "name": "pos",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 864,
                  "src": "2007:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 840,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2007:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1997:20:2"
            },
            "returnParameters": {
              "id": 845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 844,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 864,
                  "src": "2039:5:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 843,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2039:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2038:7:2"
            },
            "scope": 1094,
            "src": "1979:234:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 986,
              "nodeType": "Block",
              "src": "2333:809:2",
              "statements": [
                {
                  "assignments": [
                    874
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 874,
                      "name": "prand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2343:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 873,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2343:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 890,
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
                                "id": 880,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 866,
                                "src": "2424:5:2",
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
                                      "id": 882,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -4,
                                      "src": "2441:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 883,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2441:12:2",
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
                                  "id": 881,
                                  "name": "blockhash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -5,
                                  "src": "2431:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 884,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2431:23:2",
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
                                  "id": 885,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -4,
                                  "src": "2456:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 886,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "number",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2456:12:2",
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
                                "id": 878,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2407:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 879,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2407:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 887,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2407:62:2",
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
                          "id": 877,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "2380:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
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
                        "src": "2380:103:2",
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
                      "id": 876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2359:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 875,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2359:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2359:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2343:150:2"
                },
                {
                  "assignments": [
                    892
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 892,
                      "name": "race",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2557:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 891,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2557:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 899,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 897,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 895,
                          "name": "_userDNA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "2576:8:2",
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
                          "id": 896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2587:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "2576:14:2",
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
                      "id": 894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2570:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 893,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2570:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2570:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2557:34:2"
                },
                {
                  "assignments": [
                    901
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 901,
                      "name": "intel",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2631:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 900,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2631:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 917,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 916,
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
                          "id": 913,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 902,
                            "name": "prand",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 874,
                            "src": "2648:5:2",
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
                                "id": 911,
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
                                      "id": 908,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 904,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 892,
                                            "src": "2668:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 905,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2674:1:2",
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
                                          "id": 903,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 864,
                                          "src": "2658:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 906,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2658:18:2",
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
                                        "id": 907,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2679:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "2658:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 909,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "2657:24:2",
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
                                  "id": 910,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2684:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "2657:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 912,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2656:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2648:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 914,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2647:41:2",
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
                      "id": 915,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2691:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "2647:46:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2631:62:2"
                },
                {
                  "assignments": [
                    919
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 919,
                      "name": "vital",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2743:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 918,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2743:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 938,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 937,
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
                          "id": 934,
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
                                "id": 922,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 920,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 874,
                                  "src": "2761:5:2",
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
                                  "id": 921,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2770:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "2761:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 923,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2760:12:2",
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
                                "id": 932,
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
                                      "id": 929,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 925,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 892,
                                            "src": "2787:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "31",
                                            "id": 926,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2793:1:2",
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
                                          "id": 924,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 864,
                                          "src": "2777:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 927,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2777:18:2",
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
                                        "id": 928,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2798:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "2777:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 930,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "2776:24:2",
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
                                  "id": 931,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2803:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "2776:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 933,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2775:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2760:46:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 935,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2759:48:2",
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
                      "id": 936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2810:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "2759:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2743:69:2"
                },
                {
                  "assignments": [
                    940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 940,
                      "name": "str",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2840:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 939,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2840:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 959,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 958,
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
                          "id": 955,
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
                                "id": 943,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 941,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 874,
                                  "src": "2856:5:2",
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
                                  "id": 942,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2865:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "2856:11:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 944,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2855:13:2",
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
                                "id": 953,
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
                                      "id": 950,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 946,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 892,
                                            "src": "2883:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 947,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2889:1:2",
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
                                          "id": 945,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 864,
                                          "src": "2873:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 948,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2873:18:2",
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
                                        "id": 949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2894:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "2873:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 951,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "2872:24:2",
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
                                  "id": 952,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2899:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "2872:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 954,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2871:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2855:47:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 956,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2854:49:2",
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
                      "id": 957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2906:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "2854:54:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2840:68:2"
                },
                {
                  "assignments": [
                    961
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 961,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2938:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 960,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2938:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 967,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 963,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 868,
                        "src": "2960:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3135",
                        "id": 964,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2970:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      {
                        "argumentTypes": null,
                        "id": 965,
                        "name": "intel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 901,
                        "src": "2974:5:2",
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
                      "id": 962,
                      "name": "setbyte",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1009,
                      "src": "2952:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2952:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2938:42:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 968,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 961,
                      "src": "2990:3:2",
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
                          "id": 970,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 961,
                          "src": "3004:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3136",
                          "id": 971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3009:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        {
                          "argumentTypes": null,
                          "id": 972,
                          "name": "vital",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "3013:5:2",
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
                        "id": 969,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1009,
                        "src": "2996:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2996:23:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2990:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 975,
                  "nodeType": "ExpressionStatement",
                  "src": "2990:29:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 976,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 961,
                      "src": "3029:3:2",
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
                          "id": 978,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 961,
                          "src": "3043:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3137",
                          "id": 979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3048:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          "value": "17"
                        },
                        {
                          "argumentTypes": null,
                          "id": 980,
                          "name": "str",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 940,
                          "src": "3052:3:2",
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
                        "id": 977,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1009,
                        "src": "3035:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 981,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3035:21:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3029:27:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 983,
                  "nodeType": "ExpressionStatement",
                  "src": "3029:27:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 984,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 961,
                    "src": "3132:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 872,
                  "id": 985,
                  "nodeType": "Return",
                  "src": "3125:10:2"
                }
              ]
            },
            "documentation": null,
            "id": 987,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mkDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 866,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 987,
                  "src": "2235:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 865,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:6:2",
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
                  "id": 868,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 987,
                  "src": "2256:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2256:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2234:39:2"
            },
            "returnParameters": {
              "id": 872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 871,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 987,
                  "src": "2320:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2320:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2319:9:2"
            },
            "scope": 1094,
            "src": "2219:923:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1008,
              "nodeType": "Block",
              "src": "3269:112:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1006,
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
                          "id": 1003,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 998,
                            "name": "_setdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 993,
                            "src": "3346:7:2",
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
                                "id": 1001,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 999,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3358:1:2",
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
                                  "id": 1000,
                                  "name": "k",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 991,
                                  "src": "3362:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "3358:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              }
                            ],
                            "id": 1002,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3357:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3346:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1004,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3345:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1005,
                      "name": "_indat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 989,
                      "src": "3368:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3345:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 997,
                  "id": 1007,
                  "nodeType": "Return",
                  "src": "3338:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 1009,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setbyte",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 989,
                  "name": "_indat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3174:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 988,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3174:7:2",
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
                  "id": 991,
                  "name": "k",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3198:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 990,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3198:6:2",
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
                  "id": 993,
                  "name": "_setdat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3216:15:2",
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
                    "src": "3216:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3164:73:2"
            },
            "returnParameters": {
              "id": 997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 996,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3260:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3260:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3259:9:2"
            },
            "scope": 1094,
            "src": "3148:233:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1028,
              "nodeType": "Block",
              "src": "3446:164:2",
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
                        "id": 1020,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1017,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1011,
                          "src": "3549:3:2",
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
                            "id": 1018,
                            "name": "avatars",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 685,
                            "src": "3555:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                              "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                            }
                          },
                          "id": 1019,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3555:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3549:20:2",
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
                      "id": 1016,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3541:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3541:29:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1022,
                  "nodeType": "ExpressionStatement",
                  "src": "3541:29:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1023,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "3587:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 1025,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1024,
                        "name": "tid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1011,
                        "src": "3595:3:2",
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
                      "src": "3587:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$682_storage",
                        "typeString": "struct AvatarAUR.Avatar storage ref"
                      }
                    },
                    "id": 1026,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dna",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 679,
                    "src": "3587:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1015,
                  "id": 1027,
                  "nodeType": "Return",
                  "src": "3580:23:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5bb209a5",
            "id": 1029,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1011,
                  "name": "tid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1029,
                  "src": "3403:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1010,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3403:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3402:13:2"
            },
            "returnParameters": {
              "id": 1015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1014,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1029,
                  "src": "3437:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3437:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3436:9:2"
            },
            "scope": 1094,
            "src": "3387:223:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1092,
              "nodeType": "Block",
              "src": "3690:310:2",
              "statements": [
                {
                  "assignments": [
                    1038
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1038,
                      "name": "bal",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1092,
                      "src": "3700:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1037,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3700:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1043,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1041,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1031,
                        "src": "3729:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1039,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -28,
                        "src": "3714:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                          "typeString": "contract AvatarAUR"
                        }
                      },
                      "id": 1040,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3983,
                      "src": "3714:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 1042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3714:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3700:36:2"
                },
                {
                  "assignments": [
                    1047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1047,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1092,
                      "src": "3746:19:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                        "typeString": "struct AvatarAUR.Avatar[]"
                      },
                      "typeName": {
                        "baseType": {
                          "contractScope": null,
                          "id": 1045,
                          "name": "Avatar",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 682,
                          "src": "3746:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                            "typeString": "struct AvatarAUR.Avatar"
                          }
                        },
                        "id": 1046,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3746:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                          "typeString": "struct AvatarAUR.Avatar[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1053,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1051,
                        "name": "bal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1038,
                        "src": "3781:3:2",
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
                      "id": 1050,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3768:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (struct AvatarAUR.Avatar memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "contractScope": null,
                          "id": 1048,
                          "name": "Avatar",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 682,
                          "src": "3772:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                            "typeString": "struct AvatarAUR.Avatar"
                          }
                        },
                        "id": 1049,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3772:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                          "typeString": "struct AvatarAUR.Avatar[]"
                        }
                      }
                    },
                    "id": 1052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3768:17:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory",
                      "typeString": "struct AvatarAUR.Avatar memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3746:39:2"
                },
                {
                  "body": {
                    "id": 1088,
                    "nodeType": "Block",
                    "src": "3829:145:2",
                    "statements": [
                      {
                        "assignments": [
                          1065
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1065,
                            "name": "aid",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 1088,
                            "src": "3843:11:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 1064,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3843:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 1071,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1068,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1031,
                              "src": "3882:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1069,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1055,
                              "src": "3890:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1066,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "3857:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                                "typeString": "contract AvatarAUR"
                              }
                            },
                            "id": 1067,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenOfOwnerByIndex",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4104,
                            "src": "3857:24:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 1070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3857:35:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3843:49:2"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1086,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1072,
                              "name": "out",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1047,
                              "src": "3906:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                                "typeString": "struct AvatarAUR.Avatar memory[] memory"
                              }
                            },
                            "id": 1074,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1073,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1055,
                              "src": "3910:1:2",
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
                            "src": "3906:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Avatar_$682_memory",
                              "typeString": "struct AvatarAUR.Avatar memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 1076,
                                    "name": "avatars",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 685,
                                    "src": "3922:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                                      "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                                    }
                                  },
                                  "id": 1078,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 1077,
                                    "name": "aid",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1065,
                                    "src": "3930:3:2",
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
                                  "src": "3922:12:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Avatar_$682_storage",
                                    "typeString": "struct AvatarAUR.Avatar storage ref"
                                  }
                                },
                                "id": 1079,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "name",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 677,
                                "src": "3922:17:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 1080,
                                    "name": "avatars",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 685,
                                    "src": "3941:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                                      "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                                    }
                                  },
                                  "id": 1082,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 1081,
                                    "name": "aid",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1065,
                                    "src": "3949:3:2",
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
                                  "src": "3941:12:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Avatar_$682_storage",
                                    "typeString": "struct AvatarAUR.Avatar storage ref"
                                  }
                                },
                                "id": 1083,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "dna",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 679,
                                "src": "3941:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1084,
                                "name": "aid",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1065,
                                "src": "3959:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
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
                              "id": 1075,
                              "name": "Avatar",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 682,
                              "src": "3915:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_Avatar_$682_storage_ptr_$",
                                "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                              }
                            },
                            "id": 1085,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3915:48:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Avatar_$682_memory",
                              "typeString": "struct AvatarAUR.Avatar memory"
                            }
                          },
                          "src": "3906:57:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Avatar_$682_memory",
                            "typeString": "struct AvatarAUR.Avatar memory"
                          }
                        },
                        "id": 1087,
                        "nodeType": "ExpressionStatement",
                        "src": "3906:57:2"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1058,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1055,
                      "src": "3815:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1059,
                      "name": "bal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1038,
                      "src": "3819:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3815:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1089,
                  "initializationExpression": {
                    "assignments": [
                      1055
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1055,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1089,
                        "src": "3800:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1054,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3800:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 1057,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 1056,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3812:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3800:13:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3824:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 1061,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "3824:1:2",
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
                    "id": 1063,
                    "nodeType": "ExpressionStatement",
                    "src": "3824:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "3795:179:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1090,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1047,
                    "src": "3990:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                      "typeString": "struct AvatarAUR.Avatar memory[] memory"
                    }
                  },
                  "functionReturnParameters": 1036,
                  "id": 1091,
                  "nodeType": "Return",
                  "src": "3983:10:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "a2ae1bc5",
            "id": 1093,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAvatars",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1031,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1093,
                  "src": "3636:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1030,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3636:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3635:16:2"
            },
            "returnParameters": {
              "id": 1036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1035,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1093,
                  "src": "3673:15:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                    "typeString": "struct AvatarAUR.Avatar[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 1033,
                      "name": "Avatar",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 682,
                      "src": "3673:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                        "typeString": "struct AvatarAUR.Avatar"
                      }
                    },
                    "id": 1034,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3673:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                      "typeString": "struct AvatarAUR.Avatar[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3672:17:2"
            },
            "scope": 1094,
            "src": "3616:384:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1095,
        "src": "171:3831:2"
      }
    ],
    "src": "0:4003:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
    "exportedSymbols": {
      "AvatarAUR": [
        1094
      ]
    },
    "id": 1095,
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
        "scope": 1095,
        "sourceUnit": 4756,
        "src": "25:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 658,
        "nodeType": "ImportDirective",
        "scope": 1095,
        "sourceUnit": 6425,
        "src": "83:52:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "id": 659,
        "literals": [
          "experimental",
          "ABIEncoderV2"
        ],
        "nodeType": "PragmaDirective",
        "src": "136:33:2"
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 660,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4755,
              "src": "193:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4755",
                "typeString": "contract ERC721"
              }
            },
            "id": 661,
            "nodeType": "InheritanceSpecifier",
            "src": "193:6:2"
          }
        ],
        "contractDependencies": [
          3454,
          3507,
          3517,
          4755,
          4858,
          4885,
          4908
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 1094,
        "linearizedBaseContracts": [
          1094,
          4755,
          4885,
          4908,
          4858,
          3507,
          3517,
          3454
        ],
        "name": "AvatarAUR",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 664,
            "libraryName": {
              "contractScope": null,
              "id": 662,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6424,
              "src": "212:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$6424",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "206:36:2",
            "typeName": {
              "contractScope": null,
              "id": 663,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6384,
              "src": "225:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6384_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 666,
            "name": "_tokenIds",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "247:34:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$6384_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 665,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6384,
              "src": "247:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6384_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 668,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "288:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 667,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "288:15:2",
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
            "id": 673,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "315:39:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 669,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "315:7:2",
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
              "id": 672,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 670,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "348:2:2",
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
                "id": 671,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "352:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "348:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 675,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "360:27:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 674,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "360:15:2",
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
            "id": 682,
            "members": [
              {
                "constant": false,
                "id": 677,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 682,
                "src": "418:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 676,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "418:6:2",
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
                "id": 679,
                "name": "dna",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 682,
                "src": "439:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 678,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "439:7:2",
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
                "id": 681,
                "name": "id",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 682,
                "src": "460:10:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 680,
                  "name": "uint256",
                  "nodeType": "ElementaryTypeName",
                  "src": "460:7:2",
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
            "scope": 1094,
            "src": "394:83:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "834d5fac",
            "id": 685,
            "name": "avatars",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1094,
            "src": "483:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
              "typeString": "struct AvatarAUR.Avatar[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 683,
                "name": "Avatar",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 682,
                "src": "483:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 684,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "483:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                "typeString": "struct AvatarAUR.Avatar[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 695,
            "name": "Minted",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 687,
                  "indexed": false,
                  "name": "sender",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "526:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 686,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "526:7:2",
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
                  "id": 689,
                  "indexed": false,
                  "name": "dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "542:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 688,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "542:7:2",
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
                  "id": 691,
                  "indexed": false,
                  "name": "id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "555:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 690,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "555:7:2",
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
                  "id": 693,
                  "indexed": false,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 695,
                  "src": "567:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 692,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "567:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "525:54:2"
            },
            "src": "513:67:2"
          },
          {
            "body": {
              "id": 723,
              "nodeType": "Block",
              "src": "687:171:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 706,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 704,
                      "name": "govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 675,
                      "src": "697:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 705,
                      "name": "_govContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 697,
                      "src": "711:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "697:26:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 707,
                  "nodeType": "ExpressionStatement",
                  "src": "697:26:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 712,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "string",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "753:3:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                              "typeString": "literal_string \"0\""
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 713,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "758:1:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0"
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 714,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "761:1:2",
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
                              "typeIdentifier": "t_stringliteral_044852b2a670ade5407e78fb2863c51de9fcb96542a07186fe3aeda6bb8a116d",
                              "typeString": "literal_string \"0\""
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 711,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 682,
                          "src": "746:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$682_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 715,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "746:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 708,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "733:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 710,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "733:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$682_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 716,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "733:31:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 717,
                  "nodeType": "ExpressionStatement",
                  "src": "733:31:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 721,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 718,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 668,
                      "src": "794:5:2",
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
                        "id": 719,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "802:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 720,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "802:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "794:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 722,
                  "nodeType": "ExpressionStatement",
                  "src": "794:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 724,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420417661746172",
                    "id": 700,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "658:15:2",
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
                    "id": 701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "675:6:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36c1b71af36fe05a429ec53ba7890fb4e69582f66364001b69d077cce5b9161c",
                      "typeString": "literal_string \"AURA\""
                    },
                    "value": "AURA"
                  }
                ],
                "id": 702,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 699,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4755,
                  "src": "651:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4755_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "651:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 698,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 697,
                  "name": "_govContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 724,
                  "src": "598:28:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "598:15:2",
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
              "src": "597:30:2"
            },
            "returnParameters": {
              "id": 703,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "687:0:2"
            },
            "scope": 1094,
            "src": "586:272:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 737,
              "nodeType": "Block",
              "src": "891:60:2",
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
                              "id": 732,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "930:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                                "typeString": "contract AvatarAUR"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                                "typeString": "contract AvatarAUR"
                              }
                            ],
                            "id": 731,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "922:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 730,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "922:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 733,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "922:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 734,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "922:21:2",
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
                        "id": 727,
                        "name": "govContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 675,
                        "src": "901:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 729,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "901:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 735,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "901:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 736,
                  "nodeType": "ExpressionStatement",
                  "src": "901:43:2"
                }
              ]
            },
            "documentation": null,
            "id": 738,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 725,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "880:2:2"
            },
            "returnParameters": {
              "id": 726,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "891:0:2"
            },
            "scope": 1094,
            "src": "864:87:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 819,
              "nodeType": "Block",
              "src": "1076:753:2",
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
                        "id": 751,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 748,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1094:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 749,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1094:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 750,
                          "name": "createAvatarFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 673,
                          "src": "1107:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1094:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70617920666565",
                        "id": 752,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1124:9:2",
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
                      "id": 747,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1086:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1086:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 754,
                  "nodeType": "ExpressionStatement",
                  "src": "1086:48:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 755,
                      "name": "forward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 738,
                      "src": "1144:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
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
                    "src": "1144:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 757,
                  "nodeType": "ExpressionStatement",
                  "src": "1144:9:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 758,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 666,
                        "src": "1193:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6384_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 760,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6407,
                      "src": "1193:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$6384_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$6384_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 761,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1193:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 762,
                  "nodeType": "ExpressionStatement",
                  "src": "1193:21:2"
                },
                {
                  "assignments": [
                    764
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 764,
                      "name": "id",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 819,
                      "src": "1224:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 763,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1224:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 768,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 765,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 666,
                        "src": "1237:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6384_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 766,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 6395,
                      "src": "1237:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$6384_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$6384_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 767,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1237:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1224:32:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 770,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1272:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 771,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1272:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 772,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 764,
                        "src": "1284:2:2",
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
                      "id": 769,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4497,
                      "src": "1266:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 773,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1266:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 774,
                  "nodeType": "ExpressionStatement",
                  "src": "1266:21:2"
                },
                {
                  "assignments": [
                    776
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 776,
                      "name": "dna",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 819,
                      "src": "1297:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 775,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "1297:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 781,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 778,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 740,
                        "src": "1318:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 779,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 742,
                        "src": "1324:8:2",
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
                      "id": 777,
                      "name": "_mkDNA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 987,
                      "src": "1311:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) view returns (uint256)"
                      }
                    },
                    "id": 780,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1311:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1297:36:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 786,
                            "name": "name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 740,
                            "src": "1363:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 787,
                            "name": "dna",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 776,
                            "src": "1369:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 788,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 764,
                            "src": "1374:2:2",
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
                          "id": 785,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 682,
                          "src": "1356:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$682_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 789,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1356:21:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$682_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 782,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "1343:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 784,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1343:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$682_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 790,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1343:35:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 791,
                  "nodeType": "ExpressionStatement",
                  "src": "1343:35:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 793,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 764,
                        "src": "1414:2:2",
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
                                "id": 798,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1492:12:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                "value": "{\"name\": \""
                              },
                              {
                                "argumentTypes": null,
                                "id": 799,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 740,
                                "src": "1526:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c20226465736372697074696f6e223a2022",
                                "id": 800,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1552:21:2",
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
                                "id": 801,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1595:15:2",
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
                                "id": 802,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1632:15:2",
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
                                "id": 803,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1669:18:2",
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
                                "id": 804,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1709:4:2",
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
                                "id": 796,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "1454:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 797,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1454:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 805,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1454:277:2",
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
                          "id": 795,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1430:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 794,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1430:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 806,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1430:315:2",
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
                      "id": 792,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4655,
                      "src": "1388:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 807,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1388:367:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 808,
                  "nodeType": "ExpressionStatement",
                  "src": "1388:367:2"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 810,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1777:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 811,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1777:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 812,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 776,
                        "src": "1789:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 813,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 764,
                        "src": "1794:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 814,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 740,
                        "src": "1798:4:2",
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
                      "id": 809,
                      "name": "Minted",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 695,
                      "src": "1770:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (address,uint256,uint256,string memory)"
                      }
                    },
                    "id": 815,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1770:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 816,
                  "nodeType": "EmitStatement",
                  "src": "1765:38:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 817,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 764,
                    "src": "1820:2:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 746,
                  "id": 818,
                  "nodeType": "Return",
                  "src": "1813:9:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0c106beb",
            "id": 820,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 743,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 740,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 820,
                  "src": "977:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 739,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "977:6:2",
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
                  "id": 742,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 820,
                  "src": "997:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 741,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "997:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "976:38:2"
            },
            "returnParameters": {
              "id": 746,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 745,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 820,
                  "src": "1063:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 744,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1063:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1062:9:2"
            },
            "scope": 1094,
            "src": "957:872:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 836,
              "nodeType": "Block",
              "src": "1887:86:2",
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
                        "id": 829,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 826,
                          "name": "govContract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 675,
                          "src": "1905:11:2",
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
                            "id": 827,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1920:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 828,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1920:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1905:25:2",
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
                      "id": 825,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1897:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 830,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1897:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 831,
                  "nodeType": "ExpressionStatement",
                  "src": "1897:34:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 834,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 832,
                      "name": "createAvatarFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 673,
                      "src": "1941:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 833,
                      "name": "_newfee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 822,
                      "src": "1959:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1941:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 835,
                  "nodeType": "ExpressionStatement",
                  "src": "1941:25:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74411eef",
            "id": 837,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setcreateAvatarFee",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 823,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 822,
                  "name": "_newfee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 837,
                  "src": "1863:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 821,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1863:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1862:17:2"
            },
            "returnParameters": {
              "id": 824,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1887:0:2"
            },
            "scope": 1094,
            "src": "1835:138:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 863,
              "nodeType": "Block",
              "src": "2046:167:2",
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
                        "id": 860,
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
                              "id": 854,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 846,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 839,
                                "src": "2171:1:2",
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
                                    "id": 852,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "33",
                                      "id": 847,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "2176:1:2",
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
                                          "id": 850,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "leftExpression": {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 848,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2182:1:2",
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
                                            "id": 849,
                                            "name": "pos",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 841,
                                            "src": "2186:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          "src": "2182:7:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_uint8",
                                            "typeString": "uint8"
                                          }
                                        }
                                      ],
                                      "id": 851,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "nodeType": "TupleExpression",
                                      "src": "2181:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "2176:14:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  }
                                ],
                                "id": 853,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "2175:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2171:20:2",
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
                          "src": "2170:22:2",
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
                              "id": 858,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "hexValue": "32",
                                "id": 856,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "2197:1:2",
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
                                "id": 857,
                                "name": "pos",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 841,
                                "src": "2201:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2197:7:2",
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
                          "src": "2196:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2170:35:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "id": 861,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "2169:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 845,
                  "id": 862,
                  "nodeType": "Return",
                  "src": "2162:44:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7660271d",
            "id": 864,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullcrumb",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 842,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 839,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 864,
                  "src": "1998:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 838,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1998:5:2",
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
                  "id": 841,
                  "name": "pos",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 864,
                  "src": "2007:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 840,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2007:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1997:20:2"
            },
            "returnParameters": {
              "id": 845,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 844,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 864,
                  "src": "2039:5:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 843,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "2039:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2038:7:2"
            },
            "scope": 1094,
            "src": "1979:234:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 986,
              "nodeType": "Block",
              "src": "2333:809:2",
              "statements": [
                {
                  "assignments": [
                    874
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 874,
                      "name": "prand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2343:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 873,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2343:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 890,
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
                                "id": 880,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 866,
                                "src": "2424:5:2",
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
                                      "id": 882,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -4,
                                      "src": "2441:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 883,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2441:12:2",
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
                                  "id": 881,
                                  "name": "blockhash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -5,
                                  "src": "2431:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 884,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2431:23:2",
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
                                  "id": 885,
                                  "name": "block",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -4,
                                  "src": "2456:5:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_magic_block",
                                    "typeString": "block"
                                  }
                                },
                                "id": 886,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "number",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": null,
                                "src": "2456:12:2",
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
                                "id": 878,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2407:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 879,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2407:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 887,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2407:62:2",
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
                          "id": 877,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "2380:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
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
                        "src": "2380:103:2",
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
                      "id": 876,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2359:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 875,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2359:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 889,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2359:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2343:150:2"
                },
                {
                  "assignments": [
                    892
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 892,
                      "name": "race",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2557:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 891,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2557:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 899,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 897,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 895,
                          "name": "_userDNA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 868,
                          "src": "2576:8:2",
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
                          "id": 896,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2587:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "2576:14:2",
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
                      "id": 894,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2570:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 893,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2570:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 898,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2570:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2557:34:2"
                },
                {
                  "assignments": [
                    901
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 901,
                      "name": "intel",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2631:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 900,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2631:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 917,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 916,
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
                          "id": 913,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 902,
                            "name": "prand",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 874,
                            "src": "2648:5:2",
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
                                "id": 911,
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
                                      "id": 908,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 904,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 892,
                                            "src": "2668:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "30",
                                            "id": 905,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2674:1:2",
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
                                          "id": 903,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 864,
                                          "src": "2658:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 906,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2658:18:2",
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
                                        "id": 907,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2679:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "2658:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 909,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "2657:24:2",
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
                                  "id": 910,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2684:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "2657:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 912,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2656:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2648:39:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 914,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2647:41:2",
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
                      "id": 915,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2691:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "2647:46:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2631:62:2"
                },
                {
                  "assignments": [
                    919
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 919,
                      "name": "vital",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2743:13:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 918,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2743:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 938,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 937,
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
                          "id": 934,
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
                                "id": 922,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 920,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 874,
                                  "src": "2761:5:2",
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
                                  "id": 921,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2770:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "2761:10:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 923,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2760:12:2",
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
                                "id": 932,
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
                                      "id": 929,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 925,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 892,
                                            "src": "2787:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "31",
                                            "id": 926,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2793:1:2",
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
                                          "id": 924,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 864,
                                          "src": "2777:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 927,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2777:18:2",
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
                                        "id": 928,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2798:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "2777:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 930,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "2776:24:2",
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
                                  "id": 931,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2803:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "2776:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 933,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2775:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2760:46:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 935,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2759:48:2",
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
                      "id": 936,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2810:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "2759:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2743:69:2"
                },
                {
                  "assignments": [
                    940
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 940,
                      "name": "str",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2840:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 939,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2840:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 959,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 958,
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
                          "id": 955,
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
                                "id": 943,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 941,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 874,
                                  "src": "2856:5:2",
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
                                  "id": 942,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2865:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "2856:11:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 944,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2855:13:2",
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
                                "id": 953,
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
                                      "id": 950,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "arguments": [
                                          {
                                            "argumentTypes": null,
                                            "id": 946,
                                            "name": "race",
                                            "nodeType": "Identifier",
                                            "overloadedDeclarations": [],
                                            "referencedDeclaration": 892,
                                            "src": "2883:4:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          {
                                            "argumentTypes": null,
                                            "hexValue": "32",
                                            "id": 947,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": true,
                                            "kind": "number",
                                            "lValueRequested": false,
                                            "nodeType": "Literal",
                                            "src": "2889:1:2",
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
                                          "id": 945,
                                          "name": "pullcrumb",
                                          "nodeType": "Identifier",
                                          "overloadedDeclarations": [],
                                          "referencedDeclaration": 864,
                                          "src": "2873:9:2",
                                          "typeDescriptions": {
                                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                                          }
                                        },
                                        "id": 948,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": false,
                                        "kind": "functionCall",
                                        "lValueRequested": false,
                                        "names": [],
                                        "nodeType": "FunctionCall",
                                        "src": "2873:18:2",
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
                                        "id": 949,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "2894:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "2873:22:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    }
                                  ],
                                  "id": 951,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "TupleExpression",
                                  "src": "2872:24:2",
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
                                  "id": 952,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2899:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "2872:29:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              }
                            ],
                            "id": 954,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2871:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "2855:47:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 956,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2854:49:2",
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
                      "id": 957,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2906:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "2854:54:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2840:68:2"
                },
                {
                  "assignments": [
                    961
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 961,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 986,
                      "src": "2938:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 960,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2938:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 967,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 963,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 868,
                        "src": "2960:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3135",
                        "id": 964,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2970:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      {
                        "argumentTypes": null,
                        "id": 965,
                        "name": "intel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 901,
                        "src": "2974:5:2",
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
                      "id": 962,
                      "name": "setbyte",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1009,
                      "src": "2952:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 966,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2952:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2938:42:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 974,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 968,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 961,
                      "src": "2990:3:2",
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
                          "id": 970,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 961,
                          "src": "3004:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3136",
                          "id": 971,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3009:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        {
                          "argumentTypes": null,
                          "id": 972,
                          "name": "vital",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 919,
                          "src": "3013:5:2",
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
                        "id": 969,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1009,
                        "src": "2996:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 973,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2996:23:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2990:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 975,
                  "nodeType": "ExpressionStatement",
                  "src": "2990:29:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 982,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 976,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 961,
                      "src": "3029:3:2",
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
                          "id": 978,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 961,
                          "src": "3043:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3137",
                          "id": 979,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "3048:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          "value": "17"
                        },
                        {
                          "argumentTypes": null,
                          "id": 980,
                          "name": "str",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 940,
                          "src": "3052:3:2",
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
                        "id": 977,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1009,
                        "src": "3035:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 981,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "3035:21:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3029:27:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 983,
                  "nodeType": "ExpressionStatement",
                  "src": "3029:27:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 984,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 961,
                    "src": "3132:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 872,
                  "id": 985,
                  "nodeType": "Return",
                  "src": "3125:10:2"
                }
              ]
            },
            "documentation": null,
            "id": 987,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mkDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 869,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 866,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 987,
                  "src": "2235:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 865,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2235:6:2",
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
                  "id": 868,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 987,
                  "src": "2256:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 867,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2256:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2234:39:2"
            },
            "returnParameters": {
              "id": 872,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 871,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 987,
                  "src": "2320:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 870,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2320:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2319:9:2"
            },
            "scope": 1094,
            "src": "2219:923:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1008,
              "nodeType": "Block",
              "src": "3269:112:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1006,
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
                          "id": 1003,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 998,
                            "name": "_setdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 993,
                            "src": "3346:7:2",
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
                                "id": 1001,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 999,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "3358:1:2",
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
                                  "id": 1000,
                                  "name": "k",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 991,
                                  "src": "3362:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "3358:5:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              }
                            ],
                            "id": 1002,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "3357:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3346:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 1004,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "3345:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1005,
                      "name": "_indat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 989,
                      "src": "3368:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3345:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 997,
                  "id": 1007,
                  "nodeType": "Return",
                  "src": "3338:36:2"
                }
              ]
            },
            "documentation": null,
            "id": 1009,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setbyte",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 994,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 989,
                  "name": "_indat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3174:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 988,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3174:7:2",
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
                  "id": 991,
                  "name": "k",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3198:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 990,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "3198:6:2",
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
                  "id": 993,
                  "name": "_setdat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3216:15:2",
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
                    "src": "3216:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3164:73:2"
            },
            "returnParameters": {
              "id": 997,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 996,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1009,
                  "src": "3260:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 995,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3260:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3259:9:2"
            },
            "scope": 1094,
            "src": "3148:233:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1028,
              "nodeType": "Block",
              "src": "3446:164:2",
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
                        "id": 1020,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 1017,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1011,
                          "src": "3549:3:2",
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
                            "id": 1018,
                            "name": "avatars",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 685,
                            "src": "3555:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                              "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                            }
                          },
                          "id": 1019,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3555:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3549:20:2",
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
                      "id": 1016,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3541:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 1021,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3541:29:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1022,
                  "nodeType": "ExpressionStatement",
                  "src": "3541:29:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 1023,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 685,
                        "src": "3587:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 1025,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 1024,
                        "name": "tid",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1011,
                        "src": "3595:3:2",
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
                      "src": "3587:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$682_storage",
                        "typeString": "struct AvatarAUR.Avatar storage ref"
                      }
                    },
                    "id": 1026,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dna",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 679,
                    "src": "3587:16:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1015,
                  "id": 1027,
                  "nodeType": "Return",
                  "src": "3580:23:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5bb209a5",
            "id": 1029,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1012,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1011,
                  "name": "tid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1029,
                  "src": "3403:11:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1010,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3403:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3402:13:2"
            },
            "returnParameters": {
              "id": 1015,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1014,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1029,
                  "src": "3437:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 1013,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "3437:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3436:9:2"
            },
            "scope": 1094,
            "src": "3387:223:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1092,
              "nodeType": "Block",
              "src": "3690:310:2",
              "statements": [
                {
                  "assignments": [
                    1038
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1038,
                      "name": "bal",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1092,
                      "src": "3700:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 1037,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "3700:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1043,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1041,
                        "name": "_owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1031,
                        "src": "3729:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 1039,
                        "name": "this",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -28,
                        "src": "3714:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                          "typeString": "contract AvatarAUR"
                        }
                      },
                      "id": 1040,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "balanceOf",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3983,
                      "src": "3714:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_external_view$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) view external returns (uint256)"
                      }
                    },
                    "id": 1042,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3714:22:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3700:36:2"
                },
                {
                  "assignments": [
                    1047
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 1047,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 1092,
                      "src": "3746:19:2",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                        "typeString": "struct AvatarAUR.Avatar[]"
                      },
                      "typeName": {
                        "baseType": {
                          "contractScope": null,
                          "id": 1045,
                          "name": "Avatar",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 682,
                          "src": "3746:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                            "typeString": "struct AvatarAUR.Avatar"
                          }
                        },
                        "id": 1046,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3746:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                          "typeString": "struct AvatarAUR.Avatar[]"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 1053,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 1051,
                        "name": "bal",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1038,
                        "src": "3781:3:2",
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
                      "id": 1050,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "NewExpression",
                      "src": "3768:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_objectcreation_pure$_t_uint256_$returns$_t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_$",
                        "typeString": "function (uint256) pure returns (struct AvatarAUR.Avatar memory[] memory)"
                      },
                      "typeName": {
                        "baseType": {
                          "contractScope": null,
                          "id": 1048,
                          "name": "Avatar",
                          "nodeType": "UserDefinedTypeName",
                          "referencedDeclaration": 682,
                          "src": "3772:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                            "typeString": "struct AvatarAUR.Avatar"
                          }
                        },
                        "id": 1049,
                        "length": null,
                        "nodeType": "ArrayTypeName",
                        "src": "3772:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                          "typeString": "struct AvatarAUR.Avatar[]"
                        }
                      }
                    },
                    "id": 1052,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3768:17:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory",
                      "typeString": "struct AvatarAUR.Avatar memory[] memory"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3746:39:2"
                },
                {
                  "body": {
                    "id": 1088,
                    "nodeType": "Block",
                    "src": "3829:145:2",
                    "statements": [
                      {
                        "assignments": [
                          1065
                        ],
                        "declarations": [
                          {
                            "constant": false,
                            "id": 1065,
                            "name": "aid",
                            "nodeType": "VariableDeclaration",
                            "overrides": null,
                            "scope": 1088,
                            "src": "3843:11:2",
                            "stateVariable": false,
                            "storageLocation": "default",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            },
                            "typeName": {
                              "id": 1064,
                              "name": "uint256",
                              "nodeType": "ElementaryTypeName",
                              "src": "3843:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "value": null,
                            "visibility": "internal"
                          }
                        ],
                        "id": 1071,
                        "initialValue": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "id": 1068,
                              "name": "_owner",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1031,
                              "src": "3882:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              }
                            },
                            {
                              "argumentTypes": null,
                              "id": 1069,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1055,
                              "src": "3890:1:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_address",
                                "typeString": "address"
                              },
                              {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            ],
                            "expression": {
                              "argumentTypes": null,
                              "id": 1066,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "3857:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$1094",
                                "typeString": "contract AvatarAUR"
                              }
                            },
                            "id": 1067,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "memberName": "tokenOfOwnerByIndex",
                            "nodeType": "MemberAccess",
                            "referencedDeclaration": 4104,
                            "src": "3857:24:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_external_view$_t_address_$_t_uint256_$returns$_t_uint256_$",
                              "typeString": "function (address,uint256) view external returns (uint256)"
                            }
                          },
                          "id": 1070,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "3857:35:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "VariableDeclarationStatement",
                        "src": "3843:49:2"
                      },
                      {
                        "expression": {
                          "argumentTypes": null,
                          "id": 1086,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftHandSide": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 1072,
                              "name": "out",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1047,
                              "src": "3906:3:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                                "typeString": "struct AvatarAUR.Avatar memory[] memory"
                              }
                            },
                            "id": 1074,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 1073,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1055,
                              "src": "3910:1:2",
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
                            "src": "3906:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Avatar_$682_memory",
                              "typeString": "struct AvatarAUR.Avatar memory"
                            }
                          },
                          "nodeType": "Assignment",
                          "operator": "=",
                          "rightHandSide": {
                            "argumentTypes": null,
                            "arguments": [
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 1076,
                                    "name": "avatars",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 685,
                                    "src": "3922:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                                      "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                                    }
                                  },
                                  "id": 1078,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 1077,
                                    "name": "aid",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1065,
                                    "src": "3930:3:2",
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
                                  "src": "3922:12:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Avatar_$682_storage",
                                    "typeString": "struct AvatarAUR.Avatar storage ref"
                                  }
                                },
                                "id": 1079,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "name",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 677,
                                "src": "3922:17:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "expression": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 1080,
                                    "name": "avatars",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 685,
                                    "src": "3941:7:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage",
                                      "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                                    }
                                  },
                                  "id": 1082,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 1081,
                                    "name": "aid",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 1065,
                                    "src": "3949:3:2",
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
                                  "src": "3941:12:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Avatar_$682_storage",
                                    "typeString": "struct AvatarAUR.Avatar storage ref"
                                  }
                                },
                                "id": 1083,
                                "isConstant": false,
                                "isLValue": true,
                                "isPure": false,
                                "lValueRequested": false,
                                "memberName": "dna",
                                "nodeType": "MemberAccess",
                                "referencedDeclaration": 679,
                                "src": "3941:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "id": 1084,
                                "name": "aid",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 1065,
                                "src": "3959:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "expression": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_string_storage",
                                  "typeString": "string storage ref"
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
                              "id": 1075,
                              "name": "Avatar",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 682,
                              "src": "3915:6:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_type$_t_struct$_Avatar_$682_storage_ptr_$",
                                "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                              }
                            },
                            "id": 1085,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "structConstructorCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "3915:48:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_Avatar_$682_memory",
                              "typeString": "struct AvatarAUR.Avatar memory"
                            }
                          },
                          "src": "3906:57:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_Avatar_$682_memory",
                            "typeString": "struct AvatarAUR.Avatar memory"
                          }
                        },
                        "id": 1087,
                        "nodeType": "ExpressionStatement",
                        "src": "3906:57:2"
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 1060,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 1058,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1055,
                      "src": "3815:1:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 1059,
                      "name": "bal",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1038,
                      "src": "3819:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3815:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 1089,
                  "initializationExpression": {
                    "assignments": [
                      1055
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 1055,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "overrides": null,
                        "scope": 1089,
                        "src": "3800:9:2",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 1054,
                          "name": "uint256",
                          "nodeType": "ElementaryTypeName",
                          "src": "3800:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 1057,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 1056,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3812:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3800:13:2"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 1062,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3824:3:2",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 1061,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 1055,
                        "src": "3824:1:2",
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
                    "id": 1063,
                    "nodeType": "ExpressionStatement",
                    "src": "3824:3:2"
                  },
                  "nodeType": "ForStatement",
                  "src": "3795:179:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 1090,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 1047,
                    "src": "3990:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                      "typeString": "struct AvatarAUR.Avatar memory[] memory"
                    }
                  },
                  "functionReturnParameters": 1036,
                  "id": 1091,
                  "nodeType": "Return",
                  "src": "3983:10:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "a2ae1bc5",
            "id": 1093,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getAvatars",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 1032,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1031,
                  "name": "_owner",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1093,
                  "src": "3636:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 1030,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3636:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3635:16:2"
            },
            "returnParameters": {
              "id": 1036,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 1035,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 1093,
                  "src": "3673:15:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_struct$_Avatar_$682_memory_$dyn_memory_ptr",
                    "typeString": "struct AvatarAUR.Avatar[]"
                  },
                  "typeName": {
                    "baseType": {
                      "contractScope": null,
                      "id": 1033,
                      "name": "Avatar",
                      "nodeType": "UserDefinedTypeName",
                      "referencedDeclaration": 682,
                      "src": "3673:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$682_storage_ptr",
                        "typeString": "struct AvatarAUR.Avatar"
                      }
                    },
                    "id": 1034,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "3673:8:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_struct$_Avatar_$682_storage_$dyn_storage_ptr",
                      "typeString": "struct AvatarAUR.Avatar[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3672:17:2"
            },
            "scope": 1094,
            "src": "3616:384:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1095,
        "src": "171:3831:2"
      }
    ],
    "src": "0:4003:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-08-17T17:08:14.366Z",
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
    "methods": {}
  }
}
    }
  