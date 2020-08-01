
    module.exports = {
      "network": "development",
      "address": "0x794C5Ae5950969aEa2cd7fD7208E4ce877ddBde9",
      "artifact": {
  "contractName": "AvatarAUR",
  "abi": [
    {
      "inputs": [],
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
      "type": "function"
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
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"TokenIDtoAvID\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"avatars\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tid\",\"type\":\"uint256\"}],\"name\":\"getDNA\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_userDNA\",\"type\":\"uint256\"}],\"name\":\"mintAvatar\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"b\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"pos\",\"type\":\"uint8\"}],\"name\":\"pullcrumb\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_indat\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"k\",\"type\":\"uint16\"},{\"internalType\":\"uint256\",\"name\":\"_setdat\",\"type\":\"uint256\"}],\"name\":\"setbyte\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newfee\",\"type\":\"uint256\"}],\"name\":\"setcreateAvatarFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":\"AvatarAUR\"},\"evmVersion\":\"constantinople\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":{\"keccak256\":\"0xed98212b7ee593e2ff7368dc048c7e8754fcfae53c6984fa91e54e04434eea1c\",\"urls\":[\"bzz-raw://03cd6e0a6452d9d5e82b3eb7400b065b557e8d42f24c1b687d5f52b7a8c7d2fa\",\"dweb:/ipfs/QmbDc5YMTGrTLy1nx5VU5yRu9gmQyxyDYCWknrTDeUVRKT\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xb046d18f9d09683ca1c0ed6d80c61da8a8a7d9b30bad70a17b898538683eff74\",\"urls\":[\"bzz-raw://4728713afa6ae36cc9e92c7107c796a313add3ec20f813be2cde76c814486b2a\",\"dweb:/ipfs/QmUJBTXvYaGDF5PVnd5pUvYerc9DRXvqANDzgCzAp3FkkA\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xfa152b6e88a1dc50780e8f1580426dc23ad2e1e2c2f086a088adf206a202f453\",\"urls\":[\"bzz-raw://5127b264994adab88fae419b1c493efc5acd07134c19ee5c0397e50018291ebf\",\"dweb:/ipfs/QmWwJZVhvdmvUCdimbb6R2Jiu59zjPqm6XTMchM6LaEHAp\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1071a23188ba7f5bb16f51b0b01a67fd41fe56f862d8f83985788cf46f3b91bd\",\"urls\":[\"bzz-raw://c7082ca99b93f2e541cafaad00ed32675adf0752eab78eccabcf91dec9fd5d73\",\"dweb:/ipfs/QmdqooMmYBQVi7p6subDFM4e1944AuLjZUpHMjGtae7Lgd\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x227bafd3e165b13f5d98c42a44376e48d41f4a265db8803f2707faaeae9659aa\",\"urls\":[\"bzz-raw://c9aa7959a30871669ce46172cd117b084b607d602d9ce695ce79005582b0b69b\",\"dweb:/ipfs/QmXZUWeLXmArQinHL4RnacJLT22GvCExqREYM6pHLX7CX9\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0x3636662804cd8f474536b2875a9038a4c3fb91879f1bbff48af5c3f140fcd2f0\",\"urls\":[\"bzz-raw://9fab8521263fa581544000cb57335a3f2e6bcdfbb5579d3ceaa5acf741c67c4f\",\"dweb:/ipfs/QmZfXnMom7JSNtfyie5yGPN1SUC4SmHbz4ScVBH88URmA7\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xe7f984cedc00a138dc27f263c73c32ba9a4b2fd23b6c34ac46f46c074b943538\",\"urls\":[\"bzz-raw://0f4acda12f076fe7584921241ddbb5b460ca7cad6cb8a42252ac7f2a9f539127\",\"dweb:/ipfs/QmQmfhkEv9GrhdWe67QtXnU19AMuoEmy31QnHPkucdYLjZ\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x321ee37ef4925020aa818a03ec7fe48e057561f65ab009a84f6c20c86026ade7\",\"urls\":[\"bzz-raw://01f9d74a17a56024984251b97e428e24c9d3abffbae5bd290f0ec263c82e9694\",\"dweb:/ipfs/QmRryCuuXu2ukrDmatB8TqdEhPLiK6NBRt41RiPUaX1qKy\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x2d68b8e6425249cd05cc0a66ea50cb5b8d10cbdac59c6de834e1002232813faf\",\"urls\":[\"bzz-raw://e3ce6b6ac17c67bba01e9c8c778f82f68fd4823bd083359cdd03040b70eeeba3\",\"dweb:/ipfs/QmX4t1jWwKaAkacvmQxEG5rBtLXg3EHw6pRjKhMZR8iw3n\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x244e4b74b17716120cf28e58636f11c699b8c0c94628bd952a95cee038d7e32b\",\"urls\":[\"bzz-raw://198d566157120c526bd6b5086b32cae85a11389b8a538f533ba9f9447915da0e\",\"dweb:/ipfs/QmeE6d8KWERx7f1FVS5tMnitNJxBm2yWXRSEUBF7R6voLh\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xb2a11b236f073662f5a196995863f51c11d006bf7c3de158b316dfa1506c4b79\",\"urls\":[\"bzz-raw://8651649cf0b9efa18c3b01c030276fa320d41adbdc286833417e7f36e357b2f3\",\"dweb:/ipfs/QmafhM2Nd1aP43QVB1eRRZaqRXQKswNfQcWi8U8xjrxCfN\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x79484115dbfa737054f73e041009a02eeb434dd81be5d684bf4255ad3b5ab558\",\"urls\":[\"bzz-raw://12c119699463450c2544f5b9d8709b5e9e9164c62948a79c3ec53423a051d969\",\"dweb:/ipfs/QmPJduzSAaekq447QeFqAp3E7dc8CnNk5ajofckJ4ahA7Q\"]}},\"version\":1}",
  "bytecode": "0x6080604052662386f26fc10000600c553480156200001c57600080fd5b50604080518082018252600d81527f41757262697420417661746172000000000000000000000000000000000000006020808301919091528251808401909352600483527f41555241000000000000000000000000000000000000000000000000000000009083015290620000ba7f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b036200019c16565b8151620000cf9060069060208501906200026b565b508051620000e59060079060208401906200026b565b506200011a7f80ac58cd000000000000000000000000000000000000000000000000000000006001600160e01b036200019c16565b6200014e7f5b5e139f000000000000000000000000000000000000000000000000000000006001600160e01b036200019c16565b620001827f780e9d63000000000000000000000000000000000000000000000000000000006001600160e01b036200019c16565b5050600b80546001600160a01b0319163317905562000310565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200022e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ae57805160ff1916838001178555620002de565b82800160010185558215620002de579182015b82811115620002de578251825591602001919060010190620002c1565b50620002ec929150620002f0565b5090565b6200030d91905b80821115620002ec5760008155600101620002f7565b90565b61248b80620003206000396000f3fe60806040526004361061014b5760003560e01c80636c0360eb116100b657806395d89b411161006f57806395d89b411461063f578063a22cb46514610654578063b3b0705b1461068f578063b88d4fde146106c9578063c87b56dd1461079c578063e985e9c5146107c65761014b565b80636c0360eb146104af57806370a08231146104c457806374411eef146104f75780637660271d146105215780638177b6761461056c578063834d5fac146105965761014b565b806323b872dd1161010857806323b872dd146103725780632f745c59146103b557806342842e0e146103ee5780634f6ccce7146104315780635bb209a51461045b5780636352211e146104855761014b565b806301ffc9a71461015057806306fdde0314610198578063081812fc14610222578063095ea7b3146102685780630c106beb146102a357806318160ddd1461035d575b600080fd5b34801561015c57600080fd5b506101846004803603602081101561017357600080fd5b50356001600160e01b031916610801565b604080519115158252519081900360200190f35b3480156101a457600080fd5b506101ad610824565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e75781810151838201526020016101cf565b50505050905090810190601f1680156102145780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022e57600080fd5b5061024c6004803603602081101561024557600080fd5b50356108bb565b604080516001600160a01b039092168252519081900360200190f35b34801561027457600080fd5b506102a16004803603604081101561028b57600080fd5b506001600160a01b03813516906020013561091d565b005b61034b600480360360408110156102b957600080fd5b8101906020810181356401000000008111156102d457600080fd5b8201836020820111156102e657600080fd5b8035906020019184600183028401116401000000008311171561030857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506109f8915050565b60408051918252519081900360200190f35b34801561036957600080fd5b5061034b610b75565b34801561037e57600080fd5b506102a16004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610b86565b3480156103c157600080fd5b5061034b600480360360408110156103d857600080fd5b506001600160a01b038135169060200135610bdd565b3480156103fa57600080fd5b506102a16004803603606081101561041157600080fd5b506001600160a01b03813581169160208101359091169060400135610c05565b34801561043d57600080fd5b5061034b6004803603602081101561045457600080fd5b5035610c20565b34801561046757600080fd5b5061034b6004803603602081101561047e57600080fd5b5035610c3c565b34801561049157600080fd5b5061024c600480360360208110156104a857600080fd5b5035610c85565b3480156104bb57600080fd5b506101ad610cb3565b3480156104d057600080fd5b5061034b600480360360208110156104e757600080fd5b50356001600160a01b0316610d14565b34801561050357600080fd5b506102a16004803603602081101561051a57600080fd5b5035610d7c565b34801561052d57600080fd5b506105566004803603604081101561054457600080fd5b5060ff81358116916020013516610d98565b6040805160ff9092168252519081900360200190f35b34801561057857600080fd5b5061034b6004803603602081101561058f57600080fd5b5035610db0565b3480156105a257600080fd5b506105c0600480360360208110156105b957600080fd5b5035610dc2565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156106035781810151838201526020016105eb565b50505050905090810190601f1680156106305780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561064b57600080fd5b506101ad610e75565b34801561066057600080fd5b506102a16004803603604081101561067757600080fd5b506001600160a01b0381351690602001351515610ed6565b34801561069b57600080fd5b5061034b600480360360608110156106b257600080fd5b5080359061ffff6020820135169060400135610fdb565b3480156106d557600080fd5b506102a1600480360360808110156106ec57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561072757600080fd5b82018360208201111561073957600080fd5b8035906020019184600183028401116401000000008311171561075b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ff0945050505050565b3480156107a857600080fd5b506101ad600480360360208110156107bf57600080fd5b503561104e565b3480156107d257600080fd5b50610184600480360360408110156107e957600080fd5b506001600160a01b03813581169160200135166112f5565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b820191906000526020600020905b81548152906001019060200180831161089357829003601f168201915b505050505090505b90565b60006108c682611323565b6109015760405162461bcd60e51b815260040180806020018281038252602c815260200180612354602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061092882610c85565b9050806001600160a01b0316836001600160a01b0316141561097b5760405162461bcd60e51b81526004018080602001828103825260218152602001806124046021913960400191505060405180910390fd5b806001600160a01b031661098d611336565b6001600160a01b031614806109ae57506109ae816109a9611336565b6112f5565b6109e95760405162461bcd60e51b81526004018080602001828103825260388152602001806122a76038913960400191505060405180910390fd5b6109f3838361133a565b505050565b6000600c543414610a3f576040805162461bcd60e51b815260206004820152600c60248201526b0e0c2f240605c606240cae8d60a31b604482015290519081900360640190fd5b610a476113a8565b610a51600a6113e5565b6000610a5d600a6113ee565b9050610a6933826113f2565b610a7484828561152c565b610b6c81856040516020018080693d913730b6b2911d101160b11b815250600a0182805190602001908083835b60208310610ac05780518252601f199092019160209182019101610aa1565b5181516020939093036101000a600019018019909116921691909117905272111610113232b9b1b934b83a34b7b7111d101160691b9201918252507139b0b6b83632903232b9b1b934b83a34b7b760711b60138201526c1116101134b6b0b3b2911d101160991b60258201526f73616d706c6520696d6167652075726960801b603282015261227d60f01b604282015260408051808303602401815260449092019052915061155f9050565b90505b92915050565b6000610b8160026115c2565b905090565b610b97610b91611336565b826115cd565b610bd25760405162461bcd60e51b81526004018080602001828103825260318152602001806124256031913960400191505060405180910390fd5b6109f3838383611671565b6001600160a01b0382166000908152600160205260408120610b6c908363ffffffff6117cf16565b6109f383838360405180602001604052806000815250610ff0565b600080610c3460028463ffffffff6117db16565b509392505050565b600d54600090821115610c4e57600080fd5b6000828152600e6020526040902054600d80549091908110610c6c57fe5b9060005260206000209060020201600101549050919050565b6000610b6f82604051806060016040528060298152602001612309602991396002919063ffffffff6117f716565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b60006001600160a01b038216610d5b5760405162461bcd60e51b815260040180806020018281038252602a8152602001806122df602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600160205260409020610b6f906115c2565b600b546001600160a01b03163314610d9357600080fd5b600c55565b600360ff60028302811691821b841616901c92915050565b600e6020526000908152604090205481565b600d8181548110610dcf57fe5b60009182526020918290206002918202018054604080516001831615610100026000190190921693909304601f810185900485028201850190935282815290935091839190830182828015610e655780601f10610e3a57610100808354040283529160200191610e65565b820191906000526020600020905b815481529060010190602001808311610e4857829003601f168201915b5050505050908060010154905082565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b610ede611336565b6001600160a01b0316826001600160a01b03161415610f44576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610f51611336565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610f95611336565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b61ffff600883021681901b83015b9392505050565b611001610ffb611336565b836115cd565b61103c5760405162461bcd60e51b81526004018080602001828103825260318152602001806124256031913960400191505060405180910390fd5b61104884848484611804565b50505050565b606061105982611323565b6110945760405162461bcd60e51b815260040180806020018281038252602f8152602001806123d5602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156111295780601f106110fe57610100808354040283529160200191611129565b820191906000526020600020905b81548152906001019060200180831161110c57829003601f168201915b50506009549394505050506002600019610100600184161502019091160461115257905061081f565b8051156112235760098160405160200180838054600181600116156101000203166002900480156111ba5780601f106111985761010080835404028352918201916111ba565b820191906000526020600020905b8154815290600101906020018083116111a6575b5050825160208401908083835b602083106111e65780518252601f1990920191602091820191016111c7565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061081f565b600961122e84611856565b604051602001808380546001816001161561010002031660029004801561128c5780601f1061126a57610100808354040283529182019161128c565b820191906000526020600020905b815481529060010190602001808311611278575b5050825160208401908083835b602083106112b85780518252601f199092019160209182019101611299565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610b6f60028363ffffffff61191a16565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061136f82610c85565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600b546040516001600160a01b0390911690303180156108fc02916000818181858888f193505050501580156113e2573d6000803e3d6000fd5b50565b80546001019055565b5490565b6001600160a01b03821661144d576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61145681611323565b156114a8576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6114b4600083836109f3565b6001600160a01b03821660009081526001602052604090206114dc908263ffffffff61192616565b506114ef6002828463ffffffff61193216565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006115388483611948565b905060006115468583611a4a565b6000948552600e60205260409094209390935550505050565b61156882611323565b6115a35760405162461bcd60e51b815260040180806020018281038252602c815260200180612380602c913960400191505060405180910390fd5b600082815260086020908152604090912082516109f39284019061216a565b6000610b6f826113ee565b60006115d882611323565b6116135760405162461bcd60e51b815260040180806020018281038252602c81526020018061227b602c913960400191505060405180910390fd5b600061161e83610c85565b9050806001600160a01b0316846001600160a01b031614806116595750836001600160a01b031661164e846108bb565b6001600160a01b0316145b80611669575061166981856112f5565b949350505050565b826001600160a01b031661168482610c85565b6001600160a01b0316146116c95760405162461bcd60e51b81526004018080602001828103825260298152602001806123ac6029913960400191505060405180910390fd5b6001600160a01b03821661170e5760405162461bcd60e51b81526004018080602001828103825260248152602001806122576024913960400191505060405180910390fd5b6117198383836109f3565b61172460008261133a565b6001600160a01b038316600090815260016020526040902061174c908263ffffffff611ac616565b506001600160a01b0382166000908152600160205260409020611775908263ffffffff61192616565b506117886002828463ffffffff61193216565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610b6c8383611ad2565b60008080806117ea8686611b36565b9097909650945050505050565b6000611669848484611bb1565b61180f848484611671565b61181b84848484611c7b565b6110485760405162461bcd60e51b81526004018080602001828103825260328152602001806122256032913960400191505060405180910390fd5b60608161187b57506040805180820190915260018152600360fc1b602082015261081f565b8160005b811561189357600101600a8204915061187f565b6060816040519080825280601f01601f1916602001820160405280156118c0576020820181803883390190505b50859350905060001982015b831561191157600a840660300160f81b828280600190039350815181106118ef57fe5b60200101906001600160f81b031916908160001a905350600a840493506118cc565b50949350505050565b6000610b6c8383611dfb565b6000610b6c8383611e13565b600061166984846001600160a01b038516611e5d565b6000808343406040516020018083805190602001908083835b602083106119805780518252601f199092019160209182019101611961565b51815160209384036101000a6000190180199092169116179052920193845250604080518085038152938201905282519201919091209250505060ff831660006119ca8282610d98565b600a02603c840601905060006119e1836001610d98565b600a02603c600886901c0601905060006119fc846002610d98565b600a02603c601087901c060190506000611a1b88600f8660ff16610fdb565b9050611a2c8160108560ff16610fdb565b9050611a3d8160118460ff16610fdb565b9998505050505050505050565b604080518082019091528281526020808201839052600d805460018101825560009182528351805192949360029092027fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb50192611aaa928492019061216a565b506020919091015160019091015550600d546000190192915050565b6000610b6c8383611ef4565b81546000908210611b145760405162461bcd60e51b81526004018080602001828103825260228152602001806122036022913960400191505060405180910390fd5b826000018281548110611b2357fe5b9060005260206000200154905092915050565b815460009081908310611b7a5760405162461bcd60e51b81526004018080602001828103825260228152602001806123326022913960400191505060405180910390fd5b6000846000018481548110611b8b57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611c4c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c11578181015183820152602001611bf9565b50505050905090810190601f168015611c3e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611c5f57fe5b9060005260206000209060020201600101549150509392505050565b6000611c8f846001600160a01b0316611fba565b611c9b57506001611669565b6060611dc1630a85bd0160e11b611cb0611336565b88878760405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d29578181015183820152602001611d11565b50505050905090810190601f168015611d565780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001612225603291396001600160a01b038816919063ffffffff611ff316565b90506000818060200190516020811015611dda57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6000611e1f8383611dfb565b611e5557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610b6f565b506000610b6f565b600082815260018401602052604081205480611ec2575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610fe9565b82856000016001830381548110611ed557fe5b9060005260206000209060020201600101819055506000915050610fe9565b60008181526001830160205260408120548015611fb05783546000198083019190810190600090879083908110611f2757fe5b9060005260206000200154905080876000018481548110611f4457fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611f7457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610b6f565b6000915050610b6f565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611669575050151592915050565b60606116698484600085606061200885611fba565b612059576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106120985780518252601f199092019160209182019101612079565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146120fa576040519150601f19603f3d011682016040523d82523d6000602084013e6120ff565b606091505b509150915081156121135791506116699050565b8051156121235780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611c11578181015183820152602001611bf9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121ab57805160ff19168380011785556121d8565b828001600101855582156121d8579182015b828111156121d85782518255916020019190600101906121bd565b506121e49291506121e8565b5090565b6108b891905b808211156121e457600081556001016121ee56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212203478d4fc0be2764f494e6499c8f0f5d82c93994e20fcaadf3e99c2cb4602ef7464736f6c63430006020033",
  "deployedBytecode": "0x60806040526004361061014b5760003560e01c80636c0360eb116100b657806395d89b411161006f57806395d89b411461063f578063a22cb46514610654578063b3b0705b1461068f578063b88d4fde146106c9578063c87b56dd1461079c578063e985e9c5146107c65761014b565b80636c0360eb146104af57806370a08231146104c457806374411eef146104f75780637660271d146105215780638177b6761461056c578063834d5fac146105965761014b565b806323b872dd1161010857806323b872dd146103725780632f745c59146103b557806342842e0e146103ee5780634f6ccce7146104315780635bb209a51461045b5780636352211e146104855761014b565b806301ffc9a71461015057806306fdde0314610198578063081812fc14610222578063095ea7b3146102685780630c106beb146102a357806318160ddd1461035d575b600080fd5b34801561015c57600080fd5b506101846004803603602081101561017357600080fd5b50356001600160e01b031916610801565b604080519115158252519081900360200190f35b3480156101a457600080fd5b506101ad610824565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e75781810151838201526020016101cf565b50505050905090810190601f1680156102145780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022e57600080fd5b5061024c6004803603602081101561024557600080fd5b50356108bb565b604080516001600160a01b039092168252519081900360200190f35b34801561027457600080fd5b506102a16004803603604081101561028b57600080fd5b506001600160a01b03813516906020013561091d565b005b61034b600480360360408110156102b957600080fd5b8101906020810181356401000000008111156102d457600080fd5b8201836020820111156102e657600080fd5b8035906020019184600183028401116401000000008311171561030857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506109f8915050565b60408051918252519081900360200190f35b34801561036957600080fd5b5061034b610b75565b34801561037e57600080fd5b506102a16004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610b86565b3480156103c157600080fd5b5061034b600480360360408110156103d857600080fd5b506001600160a01b038135169060200135610bdd565b3480156103fa57600080fd5b506102a16004803603606081101561041157600080fd5b506001600160a01b03813581169160208101359091169060400135610c05565b34801561043d57600080fd5b5061034b6004803603602081101561045457600080fd5b5035610c20565b34801561046757600080fd5b5061034b6004803603602081101561047e57600080fd5b5035610c3c565b34801561049157600080fd5b5061024c600480360360208110156104a857600080fd5b5035610c85565b3480156104bb57600080fd5b506101ad610cb3565b3480156104d057600080fd5b5061034b600480360360208110156104e757600080fd5b50356001600160a01b0316610d14565b34801561050357600080fd5b506102a16004803603602081101561051a57600080fd5b5035610d7c565b34801561052d57600080fd5b506105566004803603604081101561054457600080fd5b5060ff81358116916020013516610d98565b6040805160ff9092168252519081900360200190f35b34801561057857600080fd5b5061034b6004803603602081101561058f57600080fd5b5035610db0565b3480156105a257600080fd5b506105c0600480360360208110156105b957600080fd5b5035610dc2565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156106035781810151838201526020016105eb565b50505050905090810190601f1680156106305780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561064b57600080fd5b506101ad610e75565b34801561066057600080fd5b506102a16004803603604081101561067757600080fd5b506001600160a01b0381351690602001351515610ed6565b34801561069b57600080fd5b5061034b600480360360608110156106b257600080fd5b5080359061ffff6020820135169060400135610fdb565b3480156106d557600080fd5b506102a1600480360360808110156106ec57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561072757600080fd5b82018360208201111561073957600080fd5b8035906020019184600183028401116401000000008311171561075b57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610ff0945050505050565b3480156107a857600080fd5b506101ad600480360360208110156107bf57600080fd5b503561104e565b3480156107d257600080fd5b50610184600480360360408110156107e957600080fd5b506001600160a01b03813581169160200135166112f5565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b820191906000526020600020905b81548152906001019060200180831161089357829003601f168201915b505050505090505b90565b60006108c682611323565b6109015760405162461bcd60e51b815260040180806020018281038252602c815260200180612354602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061092882610c85565b9050806001600160a01b0316836001600160a01b0316141561097b5760405162461bcd60e51b81526004018080602001828103825260218152602001806124046021913960400191505060405180910390fd5b806001600160a01b031661098d611336565b6001600160a01b031614806109ae57506109ae816109a9611336565b6112f5565b6109e95760405162461bcd60e51b81526004018080602001828103825260388152602001806122a76038913960400191505060405180910390fd5b6109f3838361133a565b505050565b6000600c543414610a3f576040805162461bcd60e51b815260206004820152600c60248201526b0e0c2f240605c606240cae8d60a31b604482015290519081900360640190fd5b610a476113a8565b610a51600a6113e5565b6000610a5d600a6113ee565b9050610a6933826113f2565b610a7484828561152c565b610b6c81856040516020018080693d913730b6b2911d101160b11b815250600a0182805190602001908083835b60208310610ac05780518252601f199092019160209182019101610aa1565b5181516020939093036101000a600019018019909116921691909117905272111610113232b9b1b934b83a34b7b7111d101160691b9201918252507139b0b6b83632903232b9b1b934b83a34b7b760711b60138201526c1116101134b6b0b3b2911d101160991b60258201526f73616d706c6520696d6167652075726960801b603282015261227d60f01b604282015260408051808303602401815260449092019052915061155f9050565b90505b92915050565b6000610b8160026115c2565b905090565b610b97610b91611336565b826115cd565b610bd25760405162461bcd60e51b81526004018080602001828103825260318152602001806124256031913960400191505060405180910390fd5b6109f3838383611671565b6001600160a01b0382166000908152600160205260408120610b6c908363ffffffff6117cf16565b6109f383838360405180602001604052806000815250610ff0565b600080610c3460028463ffffffff6117db16565b509392505050565b600d54600090821115610c4e57600080fd5b6000828152600e6020526040902054600d80549091908110610c6c57fe5b9060005260206000209060020201600101549050919050565b6000610b6f82604051806060016040528060298152602001612309602991396002919063ffffffff6117f716565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b60006001600160a01b038216610d5b5760405162461bcd60e51b815260040180806020018281038252602a8152602001806122df602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600160205260409020610b6f906115c2565b600b546001600160a01b03163314610d9357600080fd5b600c55565b600360ff60028302811691821b841616901c92915050565b600e6020526000908152604090205481565b600d8181548110610dcf57fe5b60009182526020918290206002918202018054604080516001831615610100026000190190921693909304601f810185900485028201850190935282815290935091839190830182828015610e655780601f10610e3a57610100808354040283529160200191610e65565b820191906000526020600020905b815481529060010190602001808311610e4857829003601f168201915b5050505050908060010154905082565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b610ede611336565b6001600160a01b0316826001600160a01b03161415610f44576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610f51611336565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610f95611336565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b61ffff600883021681901b83015b9392505050565b611001610ffb611336565b836115cd565b61103c5760405162461bcd60e51b81526004018080602001828103825260318152602001806124256031913960400191505060405180910390fd5b61104884848484611804565b50505050565b606061105982611323565b6110945760405162461bcd60e51b815260040180806020018281038252602f8152602001806123d5602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156111295780601f106110fe57610100808354040283529160200191611129565b820191906000526020600020905b81548152906001019060200180831161110c57829003601f168201915b50506009549394505050506002600019610100600184161502019091160461115257905061081f565b8051156112235760098160405160200180838054600181600116156101000203166002900480156111ba5780601f106111985761010080835404028352918201916111ba565b820191906000526020600020905b8154815290600101906020018083116111a6575b5050825160208401908083835b602083106111e65780518252601f1990920191602091820191016111c7565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061081f565b600961122e84611856565b604051602001808380546001816001161561010002031660029004801561128c5780601f1061126a57610100808354040283529182019161128c565b820191906000526020600020905b815481529060010190602001808311611278575b5050825160208401908083835b602083106112b85780518252601f199092019160209182019101611299565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610b6f60028363ffffffff61191a16565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061136f82610c85565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600b546040516001600160a01b0390911690303180156108fc02916000818181858888f193505050501580156113e2573d6000803e3d6000fd5b50565b80546001019055565b5490565b6001600160a01b03821661144d576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61145681611323565b156114a8576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6114b4600083836109f3565b6001600160a01b03821660009081526001602052604090206114dc908263ffffffff61192616565b506114ef6002828463ffffffff61193216565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006115388483611948565b905060006115468583611a4a565b6000948552600e60205260409094209390935550505050565b61156882611323565b6115a35760405162461bcd60e51b815260040180806020018281038252602c815260200180612380602c913960400191505060405180910390fd5b600082815260086020908152604090912082516109f39284019061216a565b6000610b6f826113ee565b60006115d882611323565b6116135760405162461bcd60e51b815260040180806020018281038252602c81526020018061227b602c913960400191505060405180910390fd5b600061161e83610c85565b9050806001600160a01b0316846001600160a01b031614806116595750836001600160a01b031661164e846108bb565b6001600160a01b0316145b80611669575061166981856112f5565b949350505050565b826001600160a01b031661168482610c85565b6001600160a01b0316146116c95760405162461bcd60e51b81526004018080602001828103825260298152602001806123ac6029913960400191505060405180910390fd5b6001600160a01b03821661170e5760405162461bcd60e51b81526004018080602001828103825260248152602001806122576024913960400191505060405180910390fd5b6117198383836109f3565b61172460008261133a565b6001600160a01b038316600090815260016020526040902061174c908263ffffffff611ac616565b506001600160a01b0382166000908152600160205260409020611775908263ffffffff61192616565b506117886002828463ffffffff61193216565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610b6c8383611ad2565b60008080806117ea8686611b36565b9097909650945050505050565b6000611669848484611bb1565b61180f848484611671565b61181b84848484611c7b565b6110485760405162461bcd60e51b81526004018080602001828103825260328152602001806122256032913960400191505060405180910390fd5b60608161187b57506040805180820190915260018152600360fc1b602082015261081f565b8160005b811561189357600101600a8204915061187f565b6060816040519080825280601f01601f1916602001820160405280156118c0576020820181803883390190505b50859350905060001982015b831561191157600a840660300160f81b828280600190039350815181106118ef57fe5b60200101906001600160f81b031916908160001a905350600a840493506118cc565b50949350505050565b6000610b6c8383611dfb565b6000610b6c8383611e13565b600061166984846001600160a01b038516611e5d565b6000808343406040516020018083805190602001908083835b602083106119805780518252601f199092019160209182019101611961565b51815160209384036101000a6000190180199092169116179052920193845250604080518085038152938201905282519201919091209250505060ff831660006119ca8282610d98565b600a02603c840601905060006119e1836001610d98565b600a02603c600886901c0601905060006119fc846002610d98565b600a02603c601087901c060190506000611a1b88600f8660ff16610fdb565b9050611a2c8160108560ff16610fdb565b9050611a3d8160118460ff16610fdb565b9998505050505050505050565b604080518082019091528281526020808201839052600d805460018101825560009182528351805192949360029092027fd7b6990105719101dabeb77144f2a3385c8033acd3af97e9423a695e81ad1eb50192611aaa928492019061216a565b506020919091015160019091015550600d546000190192915050565b6000610b6c8383611ef4565b81546000908210611b145760405162461bcd60e51b81526004018080602001828103825260228152602001806122036022913960400191505060405180910390fd5b826000018281548110611b2357fe5b9060005260206000200154905092915050565b815460009081908310611b7a5760405162461bcd60e51b81526004018080602001828103825260228152602001806123326022913960400191505060405180910390fd5b6000846000018481548110611b8b57fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611c4c5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c11578181015183820152602001611bf9565b50505050905090810190601f168015611c3e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611c5f57fe5b9060005260206000209060020201600101549150509392505050565b6000611c8f846001600160a01b0316611fba565b611c9b57506001611669565b6060611dc1630a85bd0160e11b611cb0611336565b88878760405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611d29578181015183820152602001611d11565b50505050905090810190601f168015611d565780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001612225603291396001600160a01b038816919063ffffffff611ff316565b90506000818060200190516020811015611dda57600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6000611e1f8383611dfb565b611e5557508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610b6f565b506000610b6f565b600082815260018401602052604081205480611ec2575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610fe9565b82856000016001830381548110611ed557fe5b9060005260206000209060020201600101819055506000915050610fe9565b60008181526001830160205260408120548015611fb05783546000198083019190810190600090879083908110611f2757fe5b9060005260206000200154905080876000018481548110611f4457fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611f7457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610b6f565b6000915050610b6f565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470818114801590611669575050151592915050565b60606116698484600085606061200885611fba565b612059576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106120985780518252601f199092019160209182019101612079565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146120fa576040519150601f19603f3d011682016040523d82523d6000602084013e6120ff565b606091505b509150915081156121135791506116699050565b8051156121235780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611c11578181015183820152602001611bf9565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106121ab57805160ff19168380011785556121d8565b828001600101855582156121d8579182015b828111156121d85782518255916020019190600101906121bd565b506121e49291506121e8565b5090565b6108b891905b808211156121e457600081556001016121ee56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a26469706673582212203478d4fc0be2764f494e6499c8f0f5d82c93994e20fcaadf3e99c2cb4602ef7464736f6c63430006020033",
  "sourceMap": "137:3342:2:-:0;;;303:6;280:29;;527:123;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;3565:365:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;751:40:8;770:20;-1:-1:-1;;;;;751:18:8;:40;:::i;:::-;3637:12:13;;;;:5;;:12;;;;;:::i;:::-;-1:-1:-1;3659:16:13;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;3763:40:13;3782:20;-1:-1:-1;;;;;3763:18:13;:40;:::i;:::-;3813:49;3832:29;-1:-1:-1;;;;;3813:18:13;:49;:::i;:::-;3872:51;3891:31;-1:-1:-1;;;;;3872:18:13;:51;:::i;:::-;-1:-1:-1;;586:5:2::1;:18:::0;;-1:-1:-1;;;;;;586:18:2::1;594:10;586:18;::::0;;137:3342;;1482:198:8;1565:25;;;;;;1557:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1633:33;;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1633:40:8;1669:4;1633:40;;;1482:198::o;137:3342:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;137:3342:2;;;-1:-1:-1;137:3342:2;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "137:3342:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:140:8;;8:9:-1;5:2;;;30:1;27;20:12;5:2;948:140:8;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;948:140:8;-1:-1:-1;;;;;;948:140:8;;:::i;:::-;;;;;;;;;;;;;;;;;;4486:90:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4486:90:13;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;4486:90:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7093:209;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7093:209:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;7093:209:13;;:::i;:::-;;;;-1:-1:-1;;;;;7093:209:13;;;;;;;;;;;;;;6651:381;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6651:381:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;6651:381:13;;;;;;;;:::i;:::-;;734:689:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;734:689:2;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;734:689:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;734:689:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;734:689:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;734:689:2;;-1:-1:-1;;734:689:2;;;-1:-1:-1;734:689:2;;-1:-1:-1;;734:689:2:i;:::-;;;;;;;;;;;;;;;;6161:200:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6161:200:13;;;:::i;7941:300::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7941:300:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;7941:300:13;;;;;;;;;;;;;;;;;:::i;5938:152::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5938:152:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;5938:152:13;;;;;;;;:::i;8307:149::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8307:149:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;8307:149:13;;;;;;;;;;;;;;;;;:::i;6433:161::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6433:161:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6433:161:13;;:::i;3265:210:2:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3265:210:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3265:210:2;;:::i;4257:167:13:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4257:167:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4257:167:13;;:::i;5772:87::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5772:87:13;;;:::i;3989:211::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3989:211:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3989:211:13;-1:-1:-1;;;;;3989:211:13;;:::i;1431:128:2:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1431:128:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1431:128:2;;:::i;1780:227::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1780:227:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1780:227:2;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;475:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;475:43:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;475:43:2;;:::i;446:23::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;446:23:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;446:23:2;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;446:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:94:13;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4640:94:13;;;:::i;7369:290::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7369:290:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;7369:290:13;;;;;;;;;;:::i;2738:193:2:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2738:193:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2738:193:2;;;;;;;;;;;;;;:::i;8522:282:13:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8522:282:13;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;8522:282:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;8522:282:13;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8522:282:13;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8522:282:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;8522:282:13;;-1:-1:-1;8522:282:13;;-1:-1:-1;;;;;8522:282:13:i;4800:740::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4800:740:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4800:740:13;;:::i;7725:154::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7725:154:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;7725:154:13;;;;;;;;;;:::i;948:140:8:-;-1:-1:-1;;;;;;1048:33:8;;1025:4;1048:33;;;;;;;;;;;;;948:140;;;;:::o;4486:90:13:-;4564:5;4557:12;;;;;;;;-1:-1:-1;;4557:12:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4532:13;;4557:12;;4564:5;;4557:12;;4564:5;4557:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4486:90;;:::o;7093:209::-;7161:7;7188:16;7196:7;7188;:16::i;:::-;7180:73;;;;-1:-1:-1;;;7180:73:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7271:24:13;;;;:15;:24;;;;;;-1:-1:-1;;;;;7271:24:13;;7093:209::o;6651:381::-;6731:13;6747:16;6755:7;6747;:16::i;:::-;6731:32;;6787:5;-1:-1:-1;;;;;6781:11:13;:2;-1:-1:-1;;;;;6781:11:13;;;6773:57;;;;-1:-1:-1;;;6773:57:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6865:5;-1:-1:-1;;;;;6849:21:13;:12;:10;:12::i;:::-;-1:-1:-1;;;;;6849:21:13;;:62;;;;6874:37;6891:5;6898:12;:10;:12::i;:::-;6874:16;:37::i;:::-;6841:152;;;;-1:-1:-1;;;6841:152:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7004:21;7013:2;7017:7;7004:8;:21::i;:::-;6651:381;;;:::o;734:689:2:-;815:7;848:15;;835:9;:28;827:52;;;;;-1:-1:-1;;;827:52:2;;;;;;;;;;;;-1:-1:-1;;;827:52:2;;;;;;;;;;;;;;;881:9;:7;:9::i;:::-;952:21;:9;:19;:21::i;:::-;983:17;1003:19;:9;:17;:19::i;:::-;983:39;;1032:28;1038:10;1050:9;1032:5;:28::i;:::-;1078:38;1091:4;1096:9;1107:8;1078:12;:38::i;:::-;1126:154;1139:9;1188:4;1157:121;;;;;;-1:-1:-1;;;1157:121:2;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;;;;365:33;;-1:-1;;;1157:121:2;;;;;-1:-1:-1;;;;1157:121:2;;;;-1:-1:-1;;;1157:121:2;;;;-1:-1:-1;;;1157:121:2;;;;-1:-1:-1;;;1157:121:2;;;;;;;26:21:-1;;;22:32;;6:49;;1157:121:2;;;;;;;-1:-1:-1;1126:12:2;;-1:-1:-1;1126:154:2:i;:::-;1407:9;-1:-1:-1;734:689:2;;;;;:::o;6161:200:13:-;6214:7;6333:21;:12;:19;:21::i;:::-;6326:28;;6161:200;:::o;7941:300::-;8100:41;8119:12;:10;:12::i;:::-;8133:7;8100:18;:41::i;:::-;8092:103;;;;-1:-1:-1;;;8092:103:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8206:28;8216:4;8222:2;8226:7;8206:9;:28::i;5938:152::-;-1:-1:-1;;;;;6053:20:13;;6027:7;6053:20;;;:13;:20;;;;;:30;;6077:5;6053:30;:23;:30;:::i;8307:149::-;8410:39;8427:4;8433:2;8437:7;8410:39;;;;;;;;;;;;:16;:39::i;6433:161::-;6500:7;;6541:22;:12;6557:5;6541:22;:15;:22;:::i;:::-;-1:-1:-1;6519:44:13;6433:161;-1:-1:-1;;;6433:161:13:o;3265:210:2:-;3413:7;:14;3312:4;;3406:21;;;3398:30;;;;;;3446:18;;;;:13;:18;;;;;;3438:7;:27;;:7;;3446:18;3438:27;;;;;;;;;;;;;;;;:31;;;3431:38;;3265:210;;;:::o;4257:167:13:-;4321:7;4347:70;4364:7;4347:70;;;;;;;;;;;;;;;;;:12;;:70;;:16;:70;:::i;5772:87::-;5844:8;5837:15;;;;;;;;-1:-1:-1;;5837:15:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5812:13;;5837:15;;5844:8;;5837:15;;5844:8;5837:15;;;;;;;;;;;;;;;;;;;;;;;;3989:211;4053:7;-1:-1:-1;;;;;4080:19:13;;4072:74;;;;-1:-1:-1;;;4072:74:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4164:20:13;;;;;;:13;:20;;;;;:29;;:27;:29::i;1431:128:2:-;1498:5;;-1:-1:-1;;;;;1498:5:2;1505:10;1498:17;1490:26;;;;;;1527:15;:25;1431:128::o;1780:227::-;1978:1;1972:27;1994:1;:5;;1972:27;;1978:10;;;1973:16;;1972:27;;;1780:227;;;;:::o;475:43::-;;;;;;;;;;;;;:::o;446:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;446:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;446:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4640:94:13:-;4720:7;4713:14;;;;;;;;-1:-1:-1;;4713:14:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4688:13;;4713:14;;4720:7;;4713:14;;4720:7;4713:14;;;;;;;;;;;;;;;;;;;;;;;;7369:290;7483:12;:10;:12::i;:::-;-1:-1:-1;;;;;7471:24:13;:8;-1:-1:-1;;;;;7471:24:13;;;7463:62;;;;;-1:-1:-1;;;7463:62:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;7581:8;7536:18;:32;7555:12;:10;:12::i;:::-;-1:-1:-1;;;;;7536:32:13;;;;;;;;;;;;;;;;;-1:-1:-1;7536:32:13;;;:42;;;;;;;;;;;;:53;;-1:-1:-1;;7536:53:13;;;;;;;;;;;7619:12;:10;:12::i;:::-;7604:48;;;;;;;;;;-1:-1:-1;;;;;7604:48:13;;;;;;;;;;;;;;7369:290;;:::o;2738:193:2:-;2902:14;2912:1;:3;;2902:14;;;;2901:23;;2738:193;;;;;;:::o;8522:282:13:-;8653:41;8672:12;:10;:12::i;:::-;8686:7;8653:18;:41::i;:::-;8645:103;;;;-1:-1:-1;;;8645:103:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8758:39;8772:4;8778:2;8782:7;8791:5;8758:13;:39::i;:::-;8522:282;;;;:::o;4800:740::-;4865:13;4898:16;4906:7;4898;:16::i;:::-;4890:76;;;;-1:-1:-1;;;4890:76:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5003:19;;;;:10;:19;;;;;;;;;4977:45;;;;;;-1:-1:-1;;4977:45:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:23;;:45;;;5003:19;4977:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5101:8:13;5095:22;4977:45;;-1:-1:-1;;;;5095:22:13;-1:-1:-1;;5095:22:13;;;;;;;;;;;5091:74;;5145:9;-1:-1:-1;5138:16:13;;5091:74;5267:23;;:27;5263:110;;5341:8;5351:9;5324:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5324:37:13;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5324:37:13;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5324:37:13;;;5310:52;;;;;5263:110;5503:8;5513:18;:7;:16;:18::i;:::-;5486:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5486:46:13;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5486:46:13;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5486:46:13;;;5472:61;;;4800:740;;;:::o;7725:154::-;-1:-1:-1;;;;;7837:25:13;;;7814:4;7837:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;7725:154::o;10237:117::-;10294:4;10317:30;:12;10339:7;10317:30;:21;:30;:::i;590:104:7:-;677:10;590:104;:::o;15893:155:13:-;15958:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;15958:29:13;-1:-1:-1;;;;;15958:29:13;;;;;;;;:24;;16011:16;15958:24;16011:7;:16::i;:::-;-1:-1:-1;;;;;16002:39:13;;;;;;;;;;;15893:155;;:::o;655:73:2:-;684:5;;:37;;-1:-1:-1;;;;;684:5:2;;;;707:4;699:21;684:37;;;;;:5;:37;:5;:37;699:21;684:5;:37;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;684:37:2;655:73::o;1216:178:23:-;1368:19;;1386:1;1368:19;;;1216:178::o;1098:112::-;1189:14;;1098:112::o;12070:393:13:-;-1:-1:-1;;;;;12149:16:13;;12141:61;;;;;-1:-1:-1;;;12141:61:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12221:16;12229:7;12221;:16::i;:::-;12220:17;12212:58;;;;;-1:-1:-1;;;12212:58:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;12281:45;12310:1;12314:2;12318:7;12281:20;:45::i;:::-;-1:-1:-1;;;;;12337:17:13;;;;;;:13;:17;;;;;:30;;12359:7;12337:30;:21;:30;:::i;:::-;-1:-1:-1;12378:29:13;:12;12395:7;12404:2;12378:29;:16;:29;:::i;:::-;-1:-1:-1;12423:33:13;;12448:7;;-1:-1:-1;;;;;12423:33:13;;;12440:1;;12423:33;;12440:1;;12423:33;12070:393;;:::o;2936:325:2:-;3025:8;3036:23;3043:5;3050:8;3036:6;:23::i;:::-;3025:34;;3069:8;3080:23;3092:5;3099:3;3080:11;:23::i;:::-;3113:18;;;;:13;:18;;;;;;:24;;;;-1:-1:-1;;;;2936:325:2:o;14212:212:13:-;14311:16;14319:7;14311;:16::i;:::-;14303:73;;;;-1:-1:-1;;;14303:73:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14386:19;;;;:10;:19;;;;;;;;:31;;;;;;;;:::i;7023:121:24:-;7092:7;7118:19;7126:3;7118:7;:19::i;10512:329:13:-;10597:4;10621:16;10629:7;10621;:16::i;:::-;10613:73;;;;-1:-1:-1;;;10613:73:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10696:13;10712:16;10720:7;10712;:16::i;:::-;10696:32;;10757:5;-1:-1:-1;;;;;10746:16:13;:7;-1:-1:-1;;;;;10746:16:13;;:51;;;;10790:7;-1:-1:-1;;;;;10766:31:13;:20;10778:7;10766:11;:20::i;:::-;-1:-1:-1;;;;;10766:31:13;;10746:51;:87;;;;10801:32;10818:5;10825:7;10801:16;:32::i;:::-;10738:96;10512:329;-1:-1:-1;;;;10512:329:13:o;13506:559::-;13623:4;-1:-1:-1;;;;;13603:24:13;:16;13611:7;13603;:16::i;:::-;-1:-1:-1;;;;;13603:24:13;;13595:78;;;;-1:-1:-1;;;13595:78:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;13691:16:13;;13683:65;;;;-1:-1:-1;;;13683:65:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13759:39;13780:4;13786:2;13790:7;13759:20;:39::i;:::-;13860:29;13877:1;13881:7;13860:8;:29::i;:::-;-1:-1:-1;;;;;13900:19:13;;;;;;:13;:19;;;;;:35;;13927:7;13900:35;:26;:35;:::i;:::-;-1:-1:-1;;;;;;13945:17:13;;;;;;:13;:17;;;;;:30;;13967:7;13945:30;:21;:30;:::i;:::-;-1:-1:-1;13986:29:13;:12;14003:7;14012:2;13986:29;:16;:29;:::i;:::-;;14050:7;14046:2;-1:-1:-1;;;;;14031:27:13;14040:4;-1:-1:-1;;;;;14031:27:13;;;;;;;;;;;13506:559;;;:::o;7649:135:25:-;7720:7;7754:22;7758:3;7770:5;7754:3;:22::i;7472:224:24:-;7552:7;;;;7611:22;7615:3;7627:5;7611:3;:22::i;:::-;7580:53;;;;-1:-1:-1;7472:224:24;-1:-1:-1;;;;;7472:224:24:o;8115:202::-;8222:7;8264:44;8269:3;8289;8295:12;8264:4;:44::i;9665:269:13:-;9778:28;9788:4;9794:2;9798:7;9778:9;:28::i;:::-;9824:48;9847:4;9853:2;9857:7;9866:5;9824:22;:48::i;:::-;9816:111;;;;-1:-1:-1;;;9816:111:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;202:723:26;258:13;475:10;471:51;;-1:-1:-1;501:10:26;;;;;;;;;;;;-1:-1:-1;;;501:10:26;;;;;;471:51;546:5;531:12;585:75;592:9;;585:75;;617:8;;647:2;639:10;;;;585:75;;;669:19;701:6;691:17;;;;;;;;;;;;;;;;;;;;;;;;;21:6:-1;;104:10;691:17:26;87:34:-1;135:17;;-1:-1;691:17:26;-1:-1:-1;761:5:26;;-1:-1:-1;669:39:26;-1:-1:-1;;;734:10:26;;776:112;783:9;;776:112;;849:2;842:4;:9;837:2;:14;826:27;;808:6;815:7;;;;;;;808:15;;;;;;;;;;;:45;-1:-1:-1;;;;;808:45:26;;;;;;;;-1:-1:-1;875:2:26;867:10;;;;776:112;;;-1:-1:-1;911:6:26;202:723;-1:-1:-1;;;;202:723:26:o;6791:149:24:-;6875:4;6898:35;6908:3;6928;6898:9;:35::i;6467:129:25:-;6534:4;6557:32;6562:3;6582:5;6557:4;:32::i;6239:174:24:-;6328:4;6351:55;6356:3;6376;-1:-1:-1;;;;;6390:14:24;;6351:4;:55::i;2013:720:2:-;2089:4;2105:10;2150:5;2166:12;2156:23;2133:47;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;2133:47:2;;;;;-1:-1:-1;2133:47:2;;;26:21:-1;;;6:49;;2133:47:2;;;;;2123:58;;;;;;;;;-1:-1:-1;;;2220:3:2;2211:12;;-1:-1:-1;2294:17:2;2211:12;-1:-1:-1;2294:9:2;:17::i;:::-;2312:2;2294:20;2288:2;2282:5;:8;2276:38;2262:52;;2363:11;2400:17;2410:4;2415:1;2400:9;:17::i;:::-;2418:2;2400:20;2394:2;2391:1;2384:8;;;2383:13;2377:43;2363:57;;2447:14;2488:17;2498:4;2503:1;2488:9;:17::i;:::-;2506:2;2488:20;2482:2;2478;2471:9;;;2470:14;2464:44;2447:61;;2538:8;2549:27;2557:8;2567:2;2570:5;2549:27;;:7;:27::i;:::-;2538:38;;2585:22;2593:3;2598:2;2601:5;2585:22;;:7;:22::i;:::-;2579:28;;2623:25;2631:3;2636:2;2639:8;2623:25;;:7;:25::i;:::-;2617:31;2013:720;-1:-1:-1;;;;;;;;;2013:720:2:o;1565:210::-;1713:19;;;;;;;;;;;;;;;;;;;1700:7;27:10:-1;;39:1;23:18;;45:23;;1635:4:2;1700:33;;;;;;;1635:4;;1713:19;1700:33;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;1700:33:2;;;;;;;;;;;-1:-1:-1;1750:7:2;:14;-1:-1:-1;;1750:18:2;1565:210;;;;:::o;6764:135:25:-;6834:4;6857:35;6865:3;6885:5;6857:7;:35::i;4423:201::-;4517:18;;4490:7;;4517:26;-1:-1:-1;4509:73:25;;;;-1:-1:-1;;;4509:73:25;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4599:3;:11;;4611:5;4599:18;;;;;;;;;;;;;;;;4592:25;;4423:201;;;;:::o;4934:274:24:-;5037:19;;5001:7;;;;5037:27;-1:-1:-1;5029:74:24;;;;-1:-1:-1;;;5029:74:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5114:22;5139:3;:12;;5152:5;5139:19;;;;;;;;;;;;;;;;;;5114:44;;5176:5;:10;;;5188:5;:12;;;5168:33;;;;;4934:274;;;;;:::o;5615:315::-;5709:7;5747:17;;;:12;;;:17;;;;;;5797:12;5782:13;5774:36;;;;-1:-1:-1;;;5774:36:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5774:36:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5863:3;:12;;5887:1;5876:8;:12;5863:26;;;;;;;;;;;;;;;;;;:33;;;5856:40;;;5615:315;;;;;:::o;15298:589:13:-;15418:4;15443:15;:2;-1:-1:-1;;;;;15443:13:13;;:15::i;:::-;15438:58;;-1:-1:-1;15481:4:13;15474:11;;15438:58;15505:23;15531:246;-1:-1:-1;;;15642:12:13;:10;:12::i;:::-;15668:4;15686:7;15707:5;15547:175;;;;;;-1:-1:-1;;;;;15547:175:13;-1:-1:-1;;;;;15547:175:13;;;;;;-1:-1:-1;;;;;15547:175:13;-1:-1:-1;;;;;15547:175:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;15547:175:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15547:175:13;;;;-1:-1:-1;;;;;15547:175:13;;38:4:-1;29:7;25:18;67:10;61:17;-1:-1;;;;;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15547:175:13;15531:246;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;15531:15:13;;;:246;;:15;:246;:::i;:::-;15505:272;;15787:13;15814:10;15803:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;15803:32:13;-1:-1:-1;;;;;;15853:26:13;-1:-1:-1;;;15853:26:13;;-1:-1:-1;;;15298:589:13;;;;;;:::o;4270:123:24:-;4341:4;4364:17;;;:12;;;;;:17;;;;;;:22;;;4270:123::o;1611:404:25:-;1674:4;1695:21;1705:3;1710:5;1695:9;:21::i;:::-;1690:319;;-1:-1:-1;27:10;;39:1;23:18;;;45:23;;1732:11:25;:23;;;;;;;;;;;;;1912:18;;1890:19;;;:12;;;:19;;;;;;:40;;;;1944:11;;1690:319;-1:-1:-1;1993:5:25;1986:12;;1828:678:24;1904:4;2037:17;;;:12;;;:17;;;;;;2069:13;2065:435;;-1:-1:-1;;2153:38:24;;;;;;;;;;;;;;;;;;27:10:-1;;39:1;23:18;;;45:23;;2135:12:24;:57;;;;;;;;;;;;;;;;;;;;;;;;2347:19;;2327:17;;;:12;;;:17;;;;;;;:39;2380:11;;2065:435;2458:5;2422:3;:12;;2446:1;2435:8;:12;2422:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2484:5;2477:12;;;;;2183:1512:25;2249:4;2386:19;;;:12;;;:19;;;;;;2420:15;;2416:1273;;2849:18;;-1:-1:-1;;2801:14:25;;;;2849:22;;;;2777:21;;2849:3;;:22;;3131;;;;;;;;;;;;;;3111:42;;3274:9;3245:3;:11;;3257:13;3245:26;;;;;;;;;;;;;;;;;;;:38;;;;3349:23;;;3391:1;3349:12;;;:23;;;;;;3375:17;;;3349:43;;3498:17;;3349:3;;3498:17;;;;;;;;;;;;;;;;;;;;;;3590:3;:12;;:19;3603:5;3590:19;;;;;;;;;;;3583:26;;;3631:4;3624:11;;;;;;;;2416:1273;3673:5;3666:12;;;;;718:610:22;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;;1305:15:22;;;1270:51;-1:-1:-1;;718:610:22:o;3770:194::-;3873:12;3904:53;3927:6;3935:4;3941:1;3944:12;5247;5279:18;5290:6;5279:10;:18::i;:::-;5271:60;;;;;-1:-1:-1;;;5271:60:22;;;;;;;;;;;;;;;;;;;;;;;;;;;;5402:12;5416:23;5443:6;-1:-1:-1;;;;;5443:11:22;5463:8;5474:4;5443:36;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5443:36:22;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;5401:78:22;;;;5493:7;5489:580;;;5523:10;-1:-1:-1;5516:17:22;;-1:-1:-1;5516:17:22;5489:580;5634:17;;:21;5630:429;;5892:10;5886:17;5952:15;5939:10;5935:2;5931:19;5924:44;5841:145;6024:20;;-1:-1:-1;;;6024:20:22;;;;;;;;;;;;;;;;;6031:12;;6024:20;;;;;;;;;;;;;;;27:10:-1;;8:100;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;137:3342:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;137:3342:2;;;-1:-1:-1;137:3342:2;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\n\ncontract AvatarAUR is ERC721 {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n    address payable owner;\n    uint createAvatarFee = 10**16;\n    //uint dnasize = 16;\n    //uint dnamod = 10 ** dnasize;\n    \n    struct Avatar {\n        string name;\n        uint dna;\n    }\n\n    Avatar[] public avatars;\n    mapping (uint => uint) public TokenIDtoAvID;\n\n\n\n    constructor() ERC721(\"Aurbit Avatar\", \"AURA\") public {\n    owner = msg.sender; //set owner addres as sender on deploy\n    }\n    function forward() private{\n\towner.transfer(address(this).balance);\n    }\n\n    function mintAvatar(string memory name,uint256 _userDNA) payable public returns (uint256) {\n\trequire(msg.value == createAvatarFee,\"pay 0.01 eth\"); forward();//enforce fee of 0.01 and forward to owner. bad way?\n        _tokenIds.increment();\n        uint256 newItemId = _tokenIds.current();\n        _mint(msg.sender, newItemId);\n\t//uint dna = \n\t_birthAvatar(name,newItemId, _userDNA);\n        _setTokenURI(newItemId, string(abi.encodePacked('{\"name\": \"', name, '\", \"description\": \"','sample description','\", \"image\": \"','sample image uri' ,'\"}')));\n\t//sample description and sample image uri should be replaced with variables, didnt bother declaring them yet\n        return newItemId;\n    }\n  \n    function setcreateAvatarFee(uint _newfee) public{\n         require(owner==msg.sender);\n         createAvatarFee = _newfee;\n    }\n\n    function storeAvatar(string memory _name, uint _dna) private returns (uint){\n        //store in array of avatars, return index\n        avatars.push(Avatar(_name, _dna));\n        return avatars.length - 1;\n    }\n    function pullcrumb(uint8 b, uint8 pos) public pure returns (uint8) {\n        //pulls bits in 2 bit pairs i call crumbs\n        //8 bits a byte 4 bits a niddle 2 bits a crumb. \n        return ((b & (3 << 2*pos)) >> 2*pos);\n    } \n    function _mkDNA(string memory _name,uint256 _userDNA) private view returns (uint) {\n        uint prand = uint(keccak256(abi.encodePacked(_name,blockhash(block.number))));\n        uint8 race = uint8(_userDNA&255);//pulls first byte, the race\n        uint8 intel = uint8(prand%60) + pullcrumb(race,0)*10;//first 2 bits littleendian gives intel\n        uint8 vital = uint8((prand>>8)%60) + pullcrumb(race,1)*10;//second is vital\n        uint8 strength = uint8((prand>>16)%60) + pullcrumb(race,2)*10; //third is strength\n        uint out = setbyte(_userDNA ,15,intel);\n\tout = setbyte(out ,16,vital);\n        out = setbyte(out ,17,strength);//this is the first of the batch when returned as array...\n        return out;\n    }\n    function setbyte(uint256 _indat,uint16 k,uint256 _setdat) public pure returns (uint256){\n        //set kth byte from the right in _indat to _setdat\n        return (_setdat<<(8*k))+_indat;\n    }\n    function _birthAvatar(string memory _name, uint _id, uint256 _userDNA ) private{\n        uint dna = _mkDNA(_name, _userDNA);\n        uint aid = storeAvatar(_name, dna);\n        TokenIDtoAvID[_id] = aid;\n        //return dna; could return DNA to put in description, but parsing numbers to string is a little dumb i think\n    }\n   function getDNA(uint tid) public view returns (uint){\n\t//gets DNA from token ID. not sure the exact proper error handling for this.\n\trequire(tid <= avatars.length);\n\treturn avatars[TokenIDtoAvID[tid]].dna;\n   }\n\n\n}\n\n\n\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
    "exportedSymbols": {
      "AvatarAUR": [
        740
      ]
    },
    "id": 741,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 366,
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
        "id": 367,
        "nodeType": "ImportDirective",
        "scope": 741,
        "sourceUnit": 4277,
        "src": "25:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 368,
        "nodeType": "ImportDirective",
        "scope": 741,
        "sourceUnit": 5946,
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
              "id": 369,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4276,
              "src": "159:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4276",
                "typeString": "contract ERC721"
              }
            },
            "id": 370,
            "nodeType": "InheritanceSpecifier",
            "src": "159:6:2"
          }
        ],
        "contractDependencies": [
          2975,
          3028,
          3038,
          4276,
          4379,
          4406,
          4429
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 740,
        "linearizedBaseContracts": [
          740,
          4276,
          4406,
          4429,
          4379,
          3028,
          3038,
          2975
        ],
        "name": "AvatarAUR",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 373,
            "libraryName": {
              "contractScope": null,
              "id": 371,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5945,
              "src": "178:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$5945",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "172:36:2",
            "typeName": {
              "contractScope": null,
              "id": 372,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5905,
              "src": "191:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$5905_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 375,
            "name": "_tokenIds",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "213:34:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$5905_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 374,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5905,
              "src": "213:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$5905_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 377,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "253:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 376,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "253:15:2",
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
            "id": 382,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "280:29:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 378,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "280:4:2",
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
              "id": 381,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 379,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "303:2:2",
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
                "id": 380,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "307:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "303:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "AvatarAUR.Avatar",
            "id": 387,
            "members": [
              {
                "constant": false,
                "id": 384,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 387,
                "src": "404:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 383,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:6:2",
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
                "id": 386,
                "name": "dna",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 387,
                "src": "425:8:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 385,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "425:4:2",
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
            "scope": 740,
            "src": "380:60:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "834d5fac",
            "id": 390,
            "name": "avatars",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "446:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
              "typeString": "struct AvatarAUR.Avatar[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 388,
                "name": "Avatar",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 387,
                "src": "446:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$387_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 389,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "446:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage_ptr",
                "typeString": "struct AvatarAUR.Avatar[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8177b676",
            "id": 394,
            "name": "TokenIDtoAvID",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "475:43:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 393,
              "keyType": {
                "id": 391,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "484:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "475:22:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 392,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "492:4:2",
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
            "body": {
              "id": 406,
              "nodeType": "Block",
              "src": "580:70:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 401,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 377,
                      "src": "586:5:2",
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
                        "id": 402,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "594:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "594:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "586:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 405,
                  "nodeType": "ExpressionStatement",
                  "src": "586:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 407,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420417661746172",
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "548:15:2",
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
                    "id": 398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "565:6:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36c1b71af36fe05a429ec53ba7890fb4e69582f66364001b69d077cce5b9161c",
                      "typeString": "literal_string \"AURA\""
                    },
                    "value": "AURA"
                  }
                ],
                "id": 399,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 396,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4276,
                  "src": "541:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4276_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "541:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 395,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:2:2"
            },
            "returnParameters": {
              "id": 400,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "580:0:2"
            },
            "scope": 740,
            "src": "527:123:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 420,
              "nodeType": "Block",
              "src": "681:47:2",
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
                              "id": 415,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "707:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$740",
                                "typeString": "contract AvatarAUR"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AvatarAUR_$740",
                                "typeString": "contract AvatarAUR"
                              }
                            ],
                            "id": 414,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "699:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 413,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "699:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 416,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "699:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "699:21:2",
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
                        "id": 410,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 377,
                        "src": "684:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "684:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "684:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 419,
                  "nodeType": "ExpressionStatement",
                  "src": "684:37:2"
                }
              ]
            },
            "documentation": null,
            "id": 421,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "671:2:2"
            },
            "returnParameters": {
              "id": 409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "681:0:2"
            },
            "scope": 740,
            "src": "655:73:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 483,
              "nodeType": "Block",
              "src": "824:599:2",
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
                        "id": 434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "835:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "835:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 433,
                          "name": "createAvatarFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 382,
                          "src": "848:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "835:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70617920302e303120657468",
                        "id": 435,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "864:14:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a94fa20d95ee3fdab3157347f3e48e0f65ac9a773b96e6a07e0cf24eede7aa41",
                          "typeString": "literal_string \"pay 0.01 eth\""
                        },
                        "value": "pay 0.01 eth"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a94fa20d95ee3fdab3157347f3e48e0f65ac9a773b96e6a07e0cf24eede7aa41",
                          "typeString": "literal_string \"pay 0.01 eth\""
                        }
                      ],
                      "id": 430,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "827:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "827:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 437,
                  "nodeType": "ExpressionStatement",
                  "src": "827:52:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 438,
                      "name": "forward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 421,
                      "src": "881:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "881:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 440,
                  "nodeType": "ExpressionStatement",
                  "src": "881:9:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 375,
                        "src": "952:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$5905_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 443,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5928,
                      "src": "952:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$5905_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$5905_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 444,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 445,
                  "nodeType": "ExpressionStatement",
                  "src": "952:21:2"
                },
                {
                  "assignments": [
                    447
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 447,
                      "name": "newItemId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 483,
                      "src": "983:17:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 446,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "983:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 451,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 448,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 375,
                        "src": "1003:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$5905_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 449,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5916,
                      "src": "1003:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$5905_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$5905_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1003:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "983:39:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 453,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1038:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1038:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 455,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "1050:9:2",
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
                      "id": 452,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4018,
                      "src": "1032:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1032:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 457,
                  "nodeType": "ExpressionStatement",
                  "src": "1032:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 459,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 423,
                        "src": "1091:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 460,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "1096:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 425,
                        "src": "1107:8:2",
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
                      "id": 458,
                      "name": "_birthAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 717,
                      "src": "1078:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256,uint256)"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:38:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:38:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 465,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "1139:9:2",
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
                                "id": 470,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1174:12:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                "value": "{\"name\": \""
                              },
                              {
                                "argumentTypes": null,
                                "id": 471,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 423,
                                "src": "1188:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c20226465736372697074696f6e223a2022",
                                "id": 472,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1194:21:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_15581e6d213db261f08a7321c9994dc20595359d1b11f34d43869e8f39d563bd",
                                  "typeString": "literal_string \"\", \"description\": \"\""
                                },
                                "value": "\", \"description\": \""
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "73616d706c65206465736372697074696f6e",
                                "id": 473,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1216:20:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_582e21917e29d3888cb7bc9fa66980a5ae400fce5ca73404831b8b5dd9d6469d",
                                  "typeString": "literal_string \"sample description\""
                                },
                                "value": "sample description"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c2022696d616765223a2022",
                                "id": 474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1237:15:2",
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
                                "id": 475,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1253:18:2",
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
                                "id": 476,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1273:4:2",
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
                                  "typeIdentifier": "t_stringliteral_582e21917e29d3888cb7bc9fa66980a5ae400fce5ca73404831b8b5dd9d6469d",
                                  "typeString": "literal_string \"sample description\""
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
                                "id": 468,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "1157:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 469,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1157:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1157:121:2",
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
                          "id": 467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1150:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 466,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1150:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 478,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1150:129:2",
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
                      "id": 464,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4176,
                      "src": "1126:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1126:154:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "1126:154:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 481,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 447,
                    "src": "1407:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 429,
                  "id": 482,
                  "nodeType": "Return",
                  "src": "1400:16:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0c106beb",
            "id": 484,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 423,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 484,
                  "src": "754:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 422,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "754:6:2",
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
                  "id": 425,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 484,
                  "src": "773:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 424,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "773:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "753:37:2"
            },
            "returnParameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 484,
                  "src": "815:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "814:9:2"
            },
            "scope": 740,
            "src": "734:689:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 500,
              "nodeType": "Block",
              "src": "1479:80:2",
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
                        "id": 493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 490,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "1498:5:2",
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
                            "id": 491,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1505:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1505:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1498:17:2",
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
                      "id": 489,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1490:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1490:26:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 495,
                  "nodeType": "ExpressionStatement",
                  "src": "1490:26:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 496,
                      "name": "createAvatarFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 382,
                      "src": "1527:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 497,
                      "name": "_newfee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 486,
                      "src": "1545:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1527:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 499,
                  "nodeType": "ExpressionStatement",
                  "src": "1527:25:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74411eef",
            "id": 501,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setcreateAvatarFee",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 486,
                  "name": "_newfee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 501,
                  "src": "1459:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 485,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1459:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1458:14:2"
            },
            "returnParameters": {
              "id": 488,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1479:0:2"
            },
            "scope": 740,
            "src": "1431:128:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 524,
              "nodeType": "Block",
              "src": "1640:135:2",
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
                            "id": 514,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 503,
                            "src": "1720:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 515,
                            "name": "_dna",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 505,
                            "src": "1727:4:2",
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
                          "id": 513,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 387,
                          "src": "1713:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$387_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1713:19:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$387_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$387_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 510,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "1700:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1700:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$387_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1700:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 518,
                  "nodeType": "ExpressionStatement",
                  "src": "1700:33:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 519,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "1750:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1750:14:2",
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
                      "id": 521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1767:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1750:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 509,
                  "id": 523,
                  "nodeType": "Return",
                  "src": "1743:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 525,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "storeAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 503,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 525,
                  "src": "1586:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 502,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:6:2",
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
                  "id": 505,
                  "name": "_dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 525,
                  "src": "1607:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 504,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1607:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:32:2"
            },
            "returnParameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 508,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 525,
                  "src": "1635:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 507,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1635:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1634:6:2"
            },
            "scope": 740,
            "src": "1565:210:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 549,
              "nodeType": "Block",
              "src": "1847:160:2",
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
                        "id": 546,
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
                              "id": 541,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 534,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 527,
                                "src": "1973:1:2",
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
                                    "id": 539,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "33",
                                      "id": 535,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1978:1:2",
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
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 538,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "32",
                                        "id": 536,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1983:1:2",
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
                                        "id": 537,
                                        "name": "pos",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 529,
                                        "src": "1985:3:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "src": "1983:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "1978:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  }
                                ],
                                "id": 540,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1977:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "1973:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 542,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1972:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          "id": 545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 543,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1994:1:2",
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
                            "id": 544,
                            "name": "pos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 529,
                            "src": "1996:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1994:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "1972:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "id": 547,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1971:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 533,
                  "id": 548,
                  "nodeType": "Return",
                  "src": "1964:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7660271d",
            "id": 550,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullcrumb",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 527,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 550,
                  "src": "1799:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 526,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1799:5:2",
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
                  "id": 529,
                  "name": "pos",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 550,
                  "src": "1808:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 528,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1808:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1798:20:2"
            },
            "returnParameters": {
              "id": 533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 532,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 550,
                  "src": "1840:5:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 531,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1840:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1839:7:2"
            },
            "scope": 740,
            "src": "1780:227:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 664,
              "nodeType": "Block",
              "src": "2095:638:2",
              "statements": [
                {
                  "assignments": [
                    560
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 560,
                      "name": "prand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2105:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 559,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2105:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 574,
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
                                "id": 566,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 552,
                                "src": "2150:5:2",
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
                                      "id": 568,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -4,
                                      "src": "2166:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 569,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2166:12:2",
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
                                  "id": 567,
                                  "name": "blockhash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -5,
                                  "src": "2156:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 570,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2156:23:2",
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
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 564,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2133:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 565,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2133:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 571,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2133:47:2",
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
                          "id": 563,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "2123:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2123:58:2",
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
                      "id": 562,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2118:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 561,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2118:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2118:64:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2105:77:2"
                },
                {
                  "assignments": [
                    576
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 576,
                      "name": "race",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2192:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 575,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2192:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 583,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 579,
                          "name": "_userDNA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 554,
                          "src": "2211:8:2",
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
                          "id": 580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2220:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "2211:12:2",
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
                      "id": 578,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2205:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 577,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2205:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2205:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2192:32:2"
                },
                {
                  "assignments": [
                    585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 585,
                      "name": "intel",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2262:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 584,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2262:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 599,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 588,
                            "name": "prand",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 560,
                            "src": "2282:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 589,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2288:2:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "2282:8:2",
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
                        "id": 587,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2276:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": {
                          "id": 586,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2276:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2276:15:2",
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
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 597,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 593,
                            "name": "race",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 576,
                            "src": "2304:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 594,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2309:1:2",
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
                          "id": 592,
                          "name": "pullcrumb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "2294:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                          }
                        },
                        "id": 595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2294:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2312:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "2294:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2276:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2262:52:2"
                },
                {
                  "assignments": [
                    601
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 601,
                      "name": "vital",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2363:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 600,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2363:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 618,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 609,
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
                                "id": 606,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 604,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 560,
                                  "src": "2384:5:2",
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
                                  "id": 605,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2391:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "2384:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 607,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2383:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 608,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2394:2:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "2383:13:2",
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
                        "id": 603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2377:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": {
                          "id": 602,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2377:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 610,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2377:20:2",
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
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 612,
                            "name": "race",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 576,
                            "src": "2410:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 613,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2415:1:2",
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
                          "id": 611,
                          "name": "pullcrumb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "2400:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                          }
                        },
                        "id": 614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2400:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2418:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "2400:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2377:43:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2363:57:2"
                },
                {
                  "assignments": [
                    620
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 620,
                      "name": "strength",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2447:14:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 619,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2447:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 637,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 628,
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
                                "id": 625,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 623,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 560,
                                  "src": "2471:5:2",
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
                                  "id": 624,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2478:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "2471:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 626,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2470:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 627,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2482:2:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "2470:14:2",
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
                        "id": 622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2464:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": {
                          "id": 621,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2464:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2464:21:2",
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
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 635,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 631,
                            "name": "race",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 576,
                            "src": "2498:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 632,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2503:1:2",
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
                          "id": 630,
                          "name": "pullcrumb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "2488:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                          }
                        },
                        "id": 633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2488:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 634,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2506:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "2488:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2464:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2447:61:2"
                },
                {
                  "assignments": [
                    639
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 639,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2538:8:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 638,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2538:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 645,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 641,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "2557:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3135",
                        "id": 642,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2567:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      {
                        "argumentTypes": null,
                        "id": 643,
                        "name": "intel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 585,
                        "src": "2570:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 640,
                      "name": "setbyte",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 687,
                      "src": "2549:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2549:27:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2538:38:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 646,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 639,
                      "src": "2579:3:2",
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
                          "id": 648,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 639,
                          "src": "2593:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3136",
                          "id": 649,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2598:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        {
                          "argumentTypes": null,
                          "id": 650,
                          "name": "vital",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 601,
                          "src": "2601:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
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
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        ],
                        "id": 647,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 687,
                        "src": "2585:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2585:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2579:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 653,
                  "nodeType": "ExpressionStatement",
                  "src": "2579:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 654,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 639,
                      "src": "2617:3:2",
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
                          "id": 656,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 639,
                          "src": "2631:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3137",
                          "id": 657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2636:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          "value": "17"
                        },
                        {
                          "argumentTypes": null,
                          "id": 658,
                          "name": "strength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "2639:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
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
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        ],
                        "id": 655,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 687,
                        "src": "2623:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 659,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2623:25:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2617:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 661,
                  "nodeType": "ExpressionStatement",
                  "src": "2617:31:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 662,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 639,
                    "src": "2723:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 558,
                  "id": 663,
                  "nodeType": "Return",
                  "src": "2716:10:2"
                }
              ]
            },
            "documentation": null,
            "id": 665,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mkDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 552,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "2029:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 551,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2029:6:2",
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
                  "id": 554,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "2049:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2049:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2028:38:2"
            },
            "returnParameters": {
              "id": 558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 557,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "2089:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 556,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2089:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2088:6:2"
            },
            "scope": 740,
            "src": "2013:720:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 686,
              "nodeType": "Block",
              "src": "2825:106:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 684,
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
                          "id": 681,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 676,
                            "name": "_setdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 671,
                            "src": "2902:7:2",
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
                                "id": 679,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 677,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2912:1:2",
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
                                  "id": 678,
                                  "name": "k",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 669,
                                  "src": "2914:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "2912:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              }
                            ],
                            "id": 680,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2911:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "2902:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 682,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2901:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 683,
                      "name": "_indat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 667,
                      "src": "2918:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2901:23:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 675,
                  "id": 685,
                  "nodeType": "Return",
                  "src": "2894:30:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b3b0705b",
            "id": 687,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setbyte",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 667,
                  "name": "_indat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2755:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 666,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2755:7:2",
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
                  "id": 669,
                  "name": "k",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2770:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 668,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "2770:6:2",
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
                  "id": 671,
                  "name": "_setdat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2779:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2779:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2754:41:2"
            },
            "returnParameters": {
              "id": 675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 674,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2817:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2817:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2816:9:2"
            },
            "scope": 740,
            "src": "2738:193:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "3015:246:2",
              "statements": [
                {
                  "assignments": [
                    697
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 697,
                      "name": "dna",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 716,
                      "src": "3025:8:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 696,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3025:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 702,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 699,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 689,
                        "src": "3043:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 700,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 693,
                        "src": "3050:8:2",
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
                      "id": 698,
                      "name": "_mkDNA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 665,
                      "src": "3036:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) view returns (uint256)"
                      }
                    },
                    "id": 701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3036:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3025:34:2"
                },
                {
                  "assignments": [
                    704
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 704,
                      "name": "aid",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 716,
                      "src": "3069:8:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 703,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3069:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 709,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 706,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 689,
                        "src": "3092:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 707,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 697,
                        "src": "3099:3:2",
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
                      "id": 705,
                      "name": "storeAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 525,
                      "src": "3080:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) returns (uint256)"
                      }
                    },
                    "id": 708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3080:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3069:34:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "TokenIDtoAvID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 394,
                        "src": "3113:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 712,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 711,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 691,
                        "src": "3127:3:2",
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
                      "src": "3113:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "aid",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 704,
                      "src": "3134:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3113:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 715,
                  "nodeType": "ExpressionStatement",
                  "src": "3113:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 717,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_birthAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 689,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "2958:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 688,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2958:6:2",
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
                  "id": 691,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "2979:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 690,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:2",
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
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "2989:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2989:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2957:50:2"
            },
            "returnParameters": {
              "id": 695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3015:0:2"
            },
            "scope": 740,
            "src": "2936:325:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 738,
              "nodeType": "Block",
              "src": "3317:158:2",
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
                        "id": 728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 725,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 719,
                          "src": "3406:3:2",
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
                            "id": 726,
                            "name": "avatars",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 390,
                            "src": "3413:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                              "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                            }
                          },
                          "id": 727,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3413:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3406:21:2",
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
                      "id": 724,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3398:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3398:30:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 730,
                  "nodeType": "ExpressionStatement",
                  "src": "3398:30:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 731,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "3438:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 735,
                      "indexExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 732,
                          "name": "TokenIDtoAvID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 394,
                          "src": "3446:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 734,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 733,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 719,
                          "src": "3460:3:2",
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
                        "src": "3446:18:2",
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
                      "src": "3438:27:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$387_storage",
                        "typeString": "struct AvatarAUR.Avatar storage ref"
                      }
                    },
                    "id": 736,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dna",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 386,
                    "src": "3438:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 723,
                  "id": 737,
                  "nodeType": "Return",
                  "src": "3431:38:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5bb209a5",
            "id": 739,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 719,
                  "name": "tid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 739,
                  "src": "3281:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 718,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3280:10:2"
            },
            "returnParameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 739,
                  "src": "3312:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3312:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3311:6:2"
            },
            "scope": 740,
            "src": "3265:210:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 741,
        "src": "137:3342:2"
      }
    ],
    "src": "0:3483:2"
  },
  "legacyAST": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol",
    "exportedSymbols": {
      "AvatarAUR": [
        740
      ]
    },
    "id": 741,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 366,
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
        "id": 367,
        "nodeType": "ImportDirective",
        "scope": 741,
        "sourceUnit": 4277,
        "src": "25:57:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Counters.sol",
        "file": "@openzeppelin/contracts/utils/Counters.sol",
        "id": 368,
        "nodeType": "ImportDirective",
        "scope": 741,
        "sourceUnit": 5946,
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
              "id": 369,
              "name": "ERC721",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 4276,
              "src": "159:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4276",
                "typeString": "contract ERC721"
              }
            },
            "id": 370,
            "nodeType": "InheritanceSpecifier",
            "src": "159:6:2"
          }
        ],
        "contractDependencies": [
          2975,
          3028,
          3038,
          4276,
          4379,
          4406,
          4429
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 740,
        "linearizedBaseContracts": [
          740,
          4276,
          4406,
          4429,
          4379,
          3028,
          3038,
          2975
        ],
        "name": "AvatarAUR",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "id": 373,
            "libraryName": {
              "contractScope": null,
              "id": 371,
              "name": "Counters",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5945,
              "src": "178:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$5945",
                "typeString": "library Counters"
              }
            },
            "nodeType": "UsingForDirective",
            "src": "172:36:2",
            "typeName": {
              "contractScope": null,
              "id": 372,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5905,
              "src": "191:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$5905_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            }
          },
          {
            "constant": false,
            "id": 375,
            "name": "_tokenIds",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "213:34:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_struct$_Counter_$5905_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 374,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 5905,
              "src": "213:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$5905_storage_ptr",
                "typeString": "struct Counters.Counter"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "constant": false,
            "id": 377,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "253:21:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 376,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "253:15:2",
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
            "id": 382,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "280:29:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 378,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "280:4:2",
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
              "id": 381,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "lValueRequested": false,
              "leftExpression": {
                "argumentTypes": null,
                "hexValue": "3130",
                "id": 379,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "303:2:2",
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
                "id": 380,
                "isConstant": false,
                "isLValue": false,
                "isPure": true,
                "kind": "number",
                "lValueRequested": false,
                "nodeType": "Literal",
                "src": "307:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "303:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "canonicalName": "AvatarAUR.Avatar",
            "id": 387,
            "members": [
              {
                "constant": false,
                "id": 384,
                "name": "name",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 387,
                "src": "404:11:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 383,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "404:6:2",
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
                "id": 386,
                "name": "dna",
                "nodeType": "VariableDeclaration",
                "overrides": null,
                "scope": 387,
                "src": "425:8:2",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 385,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "425:4:2",
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
            "scope": 740,
            "src": "380:60:2",
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "834d5fac",
            "id": 390,
            "name": "avatars",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "446:23:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
              "typeString": "struct AvatarAUR.Avatar[]"
            },
            "typeName": {
              "baseType": {
                "contractScope": null,
                "id": 388,
                "name": "Avatar",
                "nodeType": "UserDefinedTypeName",
                "referencedDeclaration": 387,
                "src": "446:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$387_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 389,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "446:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage_ptr",
                "typeString": "struct AvatarAUR.Avatar[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "functionSelector": "8177b676",
            "id": 394,
            "name": "TokenIDtoAvID",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 740,
            "src": "475:43:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
              "typeString": "mapping(uint256 => uint256)"
            },
            "typeName": {
              "id": 393,
              "keyType": {
                "id": 391,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "484:4:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "475:22:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 392,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "492:4:2",
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
            "body": {
              "id": 406,
              "nodeType": "Block",
              "src": "580:70:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 404,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 401,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 377,
                      "src": "586:5:2",
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
                        "id": 402,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "594:3:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 403,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "594:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "586:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 405,
                  "nodeType": "ExpressionStatement",
                  "src": "586:18:2"
                }
              ]
            },
            "documentation": null,
            "id": 407,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "hexValue": "41757262697420417661746172",
                    "id": 397,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "548:15:2",
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
                    "id": 398,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "kind": "string",
                    "lValueRequested": false,
                    "nodeType": "Literal",
                    "src": "565:6:2",
                    "subdenomination": null,
                    "typeDescriptions": {
                      "typeIdentifier": "t_stringliteral_36c1b71af36fe05a429ec53ba7890fb4e69582f66364001b69d077cce5b9161c",
                      "typeString": "literal_string \"AURA\""
                    },
                    "value": "AURA"
                  }
                ],
                "id": 399,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 396,
                  "name": "ERC721",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 4276,
                  "src": "541:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4276_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "541:31:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 395,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "538:2:2"
            },
            "returnParameters": {
              "id": 400,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "580:0:2"
            },
            "scope": 740,
            "src": "527:123:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 420,
              "nodeType": "Block",
              "src": "681:47:2",
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
                              "id": 415,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "707:4:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AvatarAUR_$740",
                                "typeString": "contract AvatarAUR"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AvatarAUR_$740",
                                "typeString": "contract AvatarAUR"
                              }
                            ],
                            "id": 414,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "699:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 413,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "699:7:2",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 416,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "699:13:2",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 417,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "699:21:2",
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
                        "id": 410,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 377,
                        "src": "684:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 412,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "684:14:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 418,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "684:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 419,
                  "nodeType": "ExpressionStatement",
                  "src": "684:37:2"
                }
              ]
            },
            "documentation": null,
            "id": 421,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "forward",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 408,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "671:2:2"
            },
            "returnParameters": {
              "id": 409,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "681:0:2"
            },
            "scope": 740,
            "src": "655:73:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 483,
              "nodeType": "Block",
              "src": "824:599:2",
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
                        "id": 434,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 431,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "835:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 432,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "value",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "835:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 433,
                          "name": "createAvatarFee",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 382,
                          "src": "848:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "835:28:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "70617920302e303120657468",
                        "id": 435,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "864:14:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_a94fa20d95ee3fdab3157347f3e48e0f65ac9a773b96e6a07e0cf24eede7aa41",
                          "typeString": "literal_string \"pay 0.01 eth\""
                        },
                        "value": "pay 0.01 eth"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_a94fa20d95ee3fdab3157347f3e48e0f65ac9a773b96e6a07e0cf24eede7aa41",
                          "typeString": "literal_string \"pay 0.01 eth\""
                        }
                      ],
                      "id": 430,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "827:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 436,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "827:52:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 437,
                  "nodeType": "ExpressionStatement",
                  "src": "827:52:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 438,
                      "name": "forward",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 421,
                      "src": "881:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 439,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "881:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 440,
                  "nodeType": "ExpressionStatement",
                  "src": "881:9:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 441,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 375,
                        "src": "952:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$5905_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 443,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "increment",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5928,
                      "src": "952:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$5905_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$5905_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer)"
                      }
                    },
                    "id": 444,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "952:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 445,
                  "nodeType": "ExpressionStatement",
                  "src": "952:21:2"
                },
                {
                  "assignments": [
                    447
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 447,
                      "name": "newItemId",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 483,
                      "src": "983:17:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 446,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "983:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 451,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "expression": {
                        "argumentTypes": null,
                        "id": 448,
                        "name": "_tokenIds",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 375,
                        "src": "1003:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$5905_storage",
                          "typeString": "struct Counters.Counter storage ref"
                        }
                      },
                      "id": 449,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "current",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 5916,
                      "src": "1003:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$5905_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$5905_storage_ptr_$",
                        "typeString": "function (struct Counters.Counter storage pointer) view returns (uint256)"
                      }
                    },
                    "id": 450,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1003:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "983:39:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 453,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "1038:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 454,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "1038:10:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 455,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "1050:9:2",
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
                      "id": 452,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4018,
                      "src": "1032:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 456,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1032:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 457,
                  "nodeType": "ExpressionStatement",
                  "src": "1032:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 459,
                        "name": "name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 423,
                        "src": "1091:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 460,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "1096:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 461,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 425,
                        "src": "1107:8:2",
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
                      "id": 458,
                      "name": "_birthAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 717,
                      "src": "1078:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_uint256_$returns$__$",
                        "typeString": "function (string memory,uint256,uint256)"
                      }
                    },
                    "id": 462,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1078:38:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 463,
                  "nodeType": "ExpressionStatement",
                  "src": "1078:38:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 465,
                        "name": "newItemId",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 447,
                        "src": "1139:9:2",
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
                                "id": 470,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1174:12:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_a773e20fe2bdb77cb0a7501a4c05f8a017bb76d7a29840c69b1dbdd75ee042cc",
                                  "typeString": "literal_string \"{\"name\": \"\""
                                },
                                "value": "{\"name\": \""
                              },
                              {
                                "argumentTypes": null,
                                "id": 471,
                                "name": "name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 423,
                                "src": "1188:4:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c20226465736372697074696f6e223a2022",
                                "id": 472,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1194:21:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_15581e6d213db261f08a7321c9994dc20595359d1b11f34d43869e8f39d563bd",
                                  "typeString": "literal_string \"\", \"description\": \"\""
                                },
                                "value": "\", \"description\": \""
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "73616d706c65206465736372697074696f6e",
                                "id": 473,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1216:20:2",
                                "subdenomination": null,
                                "typeDescriptions": {
                                  "typeIdentifier": "t_stringliteral_582e21917e29d3888cb7bc9fa66980a5ae400fce5ca73404831b8b5dd9d6469d",
                                  "typeString": "literal_string \"sample description\""
                                },
                                "value": "sample description"
                              },
                              {
                                "argumentTypes": null,
                                "hexValue": "222c2022696d616765223a2022",
                                "id": 474,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1237:15:2",
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
                                "id": 475,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1253:18:2",
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
                                "id": 476,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "string",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "1273:4:2",
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
                                  "typeIdentifier": "t_stringliteral_582e21917e29d3888cb7bc9fa66980a5ae400fce5ca73404831b8b5dd9d6469d",
                                  "typeString": "literal_string \"sample description\""
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
                                "id": 468,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "1157:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 469,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "1157:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 477,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1157:121:2",
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
                          "id": 467,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "1150:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 466,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1150:6:2",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 478,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1150:129:2",
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
                      "id": 464,
                      "name": "_setTokenURI",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 4176,
                      "src": "1126:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory)"
                      }
                    },
                    "id": 479,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1126:154:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 480,
                  "nodeType": "ExpressionStatement",
                  "src": "1126:154:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 481,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 447,
                    "src": "1407:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 429,
                  "id": 482,
                  "nodeType": "Return",
                  "src": "1400:16:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "0c106beb",
            "id": 484,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mintAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 426,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 423,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 484,
                  "src": "754:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 422,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "754:6:2",
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
                  "id": 425,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 484,
                  "src": "773:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 424,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "773:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "753:37:2"
            },
            "returnParameters": {
              "id": 429,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 428,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 484,
                  "src": "815:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 427,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "814:9:2"
            },
            "scope": 740,
            "src": "734:689:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 500,
              "nodeType": "Block",
              "src": "1479:80:2",
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
                        "id": 493,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 490,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 377,
                          "src": "1498:5:2",
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
                            "id": 491,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": -15,
                            "src": "1505:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 492,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1505:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "1498:17:2",
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
                      "id": 489,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1490:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 494,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1490:26:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 495,
                  "nodeType": "ExpressionStatement",
                  "src": "1490:26:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 498,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 496,
                      "name": "createAvatarFee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 382,
                      "src": "1527:15:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 497,
                      "name": "_newfee",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 486,
                      "src": "1545:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1527:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 499,
                  "nodeType": "ExpressionStatement",
                  "src": "1527:25:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "74411eef",
            "id": 501,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setcreateAvatarFee",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 487,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 486,
                  "name": "_newfee",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 501,
                  "src": "1459:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 485,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1459:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1458:14:2"
            },
            "returnParameters": {
              "id": 488,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1479:0:2"
            },
            "scope": 740,
            "src": "1431:128:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 524,
              "nodeType": "Block",
              "src": "1640:135:2",
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
                            "id": 514,
                            "name": "_name",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 503,
                            "src": "1720:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_string_memory_ptr",
                              "typeString": "string memory"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "id": 515,
                            "name": "_dna",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 505,
                            "src": "1727:4:2",
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
                          "id": 513,
                          "name": "Avatar",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 387,
                          "src": "1713:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_struct$_Avatar_$387_storage_ptr_$",
                            "typeString": "type(struct AvatarAUR.Avatar storage pointer)"
                          }
                        },
                        "id": 516,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "structConstructorCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1713:19:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Avatar_$387_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_struct$_Avatar_$387_memory",
                          "typeString": "struct AvatarAUR.Avatar memory"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 510,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "1700:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 512,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1700:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_struct$_Avatar_$387_storage_$returns$__$",
                        "typeString": "function (struct AvatarAUR.Avatar storage ref)"
                      }
                    },
                    "id": 517,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1700:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 518,
                  "nodeType": "ExpressionStatement",
                  "src": "1700:33:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 522,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 519,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "1750:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 520,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1750:14:2",
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
                      "id": 521,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1767:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "1750:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 509,
                  "id": 523,
                  "nodeType": "Return",
                  "src": "1743:25:2"
                }
              ]
            },
            "documentation": null,
            "id": 525,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "storeAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 506,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 503,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 525,
                  "src": "1586:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 502,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1586:6:2",
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
                  "id": 505,
                  "name": "_dna",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 525,
                  "src": "1607:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 504,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1607:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1585:32:2"
            },
            "returnParameters": {
              "id": 509,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 508,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 525,
                  "src": "1635:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 507,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1635:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1634:6:2"
            },
            "scope": 740,
            "src": "1565:210:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 549,
              "nodeType": "Block",
              "src": "1847:160:2",
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
                        "id": 546,
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
                              "id": 541,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "leftExpression": {
                                "argumentTypes": null,
                                "id": 534,
                                "name": "b",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 527,
                                "src": "1973:1:2",
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
                                    "id": 539,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "33",
                                      "id": 535,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "1978:1:2",
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
                                      "commonType": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      },
                                      "id": 538,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "leftExpression": {
                                        "argumentTypes": null,
                                        "hexValue": "32",
                                        "id": 536,
                                        "isConstant": false,
                                        "isLValue": false,
                                        "isPure": true,
                                        "kind": "number",
                                        "lValueRequested": false,
                                        "nodeType": "Literal",
                                        "src": "1983:1:2",
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
                                        "id": 537,
                                        "name": "pos",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 529,
                                        "src": "1985:3:2",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_uint8",
                                          "typeString": "uint8"
                                        }
                                      },
                                      "src": "1983:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "1978:10:2",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint8",
                                      "typeString": "uint8"
                                    }
                                  }
                                ],
                                "id": 540,
                                "isConstant": false,
                                "isInlineArray": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "nodeType": "TupleExpression",
                                "src": "1977:12:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "1973:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint8",
                                "typeString": "uint8"
                              }
                            }
                          ],
                          "id": 542,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "TupleExpression",
                          "src": "1972:18:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": ">>",
                        "rightExpression": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          },
                          "id": 545,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 543,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1994:1:2",
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
                            "id": 544,
                            "name": "pos",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 529,
                            "src": "1996:3:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "1994:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "1972:27:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      }
                    ],
                    "id": 547,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "1971:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 533,
                  "id": 548,
                  "nodeType": "Return",
                  "src": "1964:36:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "7660271d",
            "id": 550,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pullcrumb",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 530,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 527,
                  "name": "b",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 550,
                  "src": "1799:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 526,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1799:5:2",
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
                  "id": 529,
                  "name": "pos",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 550,
                  "src": "1808:9:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 528,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1808:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1798:20:2"
            },
            "returnParameters": {
              "id": 533,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 532,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 550,
                  "src": "1840:5:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 531,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "1840:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1839:7:2"
            },
            "scope": 740,
            "src": "1780:227:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 664,
              "nodeType": "Block",
              "src": "2095:638:2",
              "statements": [
                {
                  "assignments": [
                    560
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 560,
                      "name": "prand",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2105:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 559,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2105:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 574,
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
                                "id": 566,
                                "name": "_name",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": 552,
                                "src": "2150:5:2",
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
                                      "id": 568,
                                      "name": "block",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": -4,
                                      "src": "2166:5:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_block",
                                        "typeString": "block"
                                      }
                                    },
                                    "id": 569,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "number",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "2166:12:2",
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
                                  "id": 567,
                                  "name": "blockhash",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": -5,
                                  "src": "2156:9:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_blockhash_view$_t_uint256_$returns$_t_bytes32_$",
                                    "typeString": "function (uint256) view returns (bytes32)"
                                  }
                                },
                                "id": 570,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "2156:23:2",
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
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                },
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "expression": {
                                "argumentTypes": null,
                                "id": 564,
                                "name": "abi",
                                "nodeType": "Identifier",
                                "overloadedDeclarations": [],
                                "referencedDeclaration": -1,
                                "src": "2133:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_magic_abi",
                                  "typeString": "abi"
                                }
                              },
                              "id": 565,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "memberName": "encodePacked",
                              "nodeType": "MemberAccess",
                              "referencedDeclaration": null,
                              "src": "2133:16:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                                "typeString": "function () pure returns (bytes memory)"
                              }
                            },
                            "id": 571,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2133:47:2",
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
                          "id": 563,
                          "name": "keccak256",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -8,
                          "src": "2123:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                            "typeString": "function (bytes memory) pure returns (bytes32)"
                          }
                        },
                        "id": 572,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2123:58:2",
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
                      "id": 562,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2118:4:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 561,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2118:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 573,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2118:64:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2105:77:2"
                },
                {
                  "assignments": [
                    576
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 576,
                      "name": "race",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2192:10:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 575,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2192:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 583,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 581,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 579,
                          "name": "_userDNA",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 554,
                          "src": "2211:8:2",
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
                          "id": 580,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2220:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "2211:12:2",
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
                      "id": 578,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "nodeType": "ElementaryTypeNameExpression",
                      "src": "2205:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 577,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2205:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": null,
                          "typeString": null
                        }
                      }
                    },
                    "id": 582,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "typeConversion",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2205:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2192:32:2"
                },
                {
                  "assignments": [
                    585
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 585,
                      "name": "intel",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2262:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 584,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2262:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 599,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 598,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 590,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 588,
                            "name": "prand",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 560,
                            "src": "2282:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 589,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2288:2:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "2282:8:2",
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
                        "id": 587,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2276:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": {
                          "id": 586,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2276:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 591,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2276:15:2",
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
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 597,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 593,
                            "name": "race",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 576,
                            "src": "2304:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "30",
                            "id": 594,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2309:1:2",
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
                          "id": 592,
                          "name": "pullcrumb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "2294:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                          }
                        },
                        "id": 595,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2294:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 596,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2312:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "2294:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2276:38:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2262:52:2"
                },
                {
                  "assignments": [
                    601
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 601,
                      "name": "vital",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2363:11:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 600,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2363:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 618,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 617,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 609,
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
                                "id": 606,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 604,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 560,
                                  "src": "2384:5:2",
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
                                  "id": 605,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2391:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "2384:8:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 607,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2383:10:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 608,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2394:2:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "2383:13:2",
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
                        "id": 603,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2377:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": {
                          "id": 602,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2377:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 610,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2377:20:2",
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
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 616,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 612,
                            "name": "race",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 576,
                            "src": "2410:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "31",
                            "id": 613,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2415:1:2",
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
                          "id": 611,
                          "name": "pullcrumb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "2400:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                          }
                        },
                        "id": 614,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2400:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 615,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2418:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "2400:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2377:43:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2363:57:2"
                },
                {
                  "assignments": [
                    620
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 620,
                      "name": "strength",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2447:14:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "typeName": {
                        "id": 619,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "2447:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 637,
                  "initialValue": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    },
                    "id": 636,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 628,
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
                                "id": 625,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "id": 623,
                                  "name": "prand",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 560,
                                  "src": "2471:5:2",
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
                                  "id": 624,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2478:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "2471:9:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              }
                            ],
                            "id": 626,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2470:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "%",
                          "rightExpression": {
                            "argumentTypes": null,
                            "hexValue": "3630",
                            "id": 627,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2482:2:2",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_60_by_1",
                              "typeString": "int_const 60"
                            },
                            "value": "60"
                          },
                          "src": "2470:14:2",
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
                        "id": 622,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "2464:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_uint8_$",
                          "typeString": "type(uint8)"
                        },
                        "typeName": {
                          "id": 621,
                          "name": "uint8",
                          "nodeType": "ElementaryTypeName",
                          "src": "2464:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": null,
                            "typeString": null
                          }
                        }
                      },
                      "id": 629,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2464:21:2",
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
                      "commonType": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      },
                      "id": 635,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "leftExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 631,
                            "name": "race",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 576,
                            "src": "2498:4:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "hexValue": "32",
                            "id": 632,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "2503:1:2",
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
                          "id": 630,
                          "name": "pullcrumb",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 550,
                          "src": "2488:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_pure$_t_uint8_$_t_uint8_$returns$_t_uint8_$",
                            "typeString": "function (uint8,uint8) pure returns (uint8)"
                          }
                        },
                        "id": 633,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2488:17:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      },
                      "nodeType": "BinaryOperation",
                      "operator": "*",
                      "rightExpression": {
                        "argumentTypes": null,
                        "hexValue": "3130",
                        "id": 634,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2506:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_10_by_1",
                          "typeString": "int_const 10"
                        },
                        "value": "10"
                      },
                      "src": "2488:20:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint8",
                        "typeString": "uint8"
                      }
                    },
                    "src": "2464:44:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2447:61:2"
                },
                {
                  "assignments": [
                    639
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 639,
                      "name": "out",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 664,
                      "src": "2538:8:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 638,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "2538:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 645,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 641,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 554,
                        "src": "2557:8:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "3135",
                        "id": 642,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "number",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2567:2:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_rational_15_by_1",
                          "typeString": "int_const 15"
                        },
                        "value": "15"
                      },
                      {
                        "argumentTypes": null,
                        "id": 643,
                        "name": "intel",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 585,
                        "src": "2570:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
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
                          "typeIdentifier": "t_uint8",
                          "typeString": "uint8"
                        }
                      ],
                      "id": 640,
                      "name": "setbyte",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 687,
                      "src": "2549:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                      }
                    },
                    "id": 644,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2549:27:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2538:38:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 652,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 646,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 639,
                      "src": "2579:3:2",
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
                          "id": 648,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 639,
                          "src": "2593:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3136",
                          "id": 649,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2598:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_16_by_1",
                            "typeString": "int_const 16"
                          },
                          "value": "16"
                        },
                        {
                          "argumentTypes": null,
                          "id": 650,
                          "name": "vital",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 601,
                          "src": "2601:5:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
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
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        ],
                        "id": 647,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 687,
                        "src": "2585:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 651,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2585:22:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2579:28:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 653,
                  "nodeType": "ExpressionStatement",
                  "src": "2579:28:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 660,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 654,
                      "name": "out",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 639,
                      "src": "2617:3:2",
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
                          "id": 656,
                          "name": "out",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 639,
                          "src": "2631:3:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        {
                          "argumentTypes": null,
                          "hexValue": "3137",
                          "id": 657,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "2636:2:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_17_by_1",
                            "typeString": "int_const 17"
                          },
                          "value": "17"
                        },
                        {
                          "argumentTypes": null,
                          "id": 658,
                          "name": "strength",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 620,
                          "src": "2639:8:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
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
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        ],
                        "id": 655,
                        "name": "setbyte",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 687,
                        "src": "2623:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_function_internal_pure$_t_uint256_$_t_uint16_$_t_uint256_$returns$_t_uint256_$",
                          "typeString": "function (uint256,uint16,uint256) pure returns (uint256)"
                        }
                      },
                      "id": 659,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "functionCall",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "2623:25:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2617:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 661,
                  "nodeType": "ExpressionStatement",
                  "src": "2617:31:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 662,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 639,
                    "src": "2723:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 558,
                  "id": 663,
                  "nodeType": "Return",
                  "src": "2716:10:2"
                }
              ]
            },
            "documentation": null,
            "id": 665,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_mkDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 555,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 552,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "2029:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 551,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2029:6:2",
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
                  "id": 554,
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "2049:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 553,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2049:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2028:38:2"
            },
            "returnParameters": {
              "id": 558,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 557,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 665,
                  "src": "2089:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 556,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2089:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2088:6:2"
            },
            "scope": 740,
            "src": "2013:720:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 686,
              "nodeType": "Block",
              "src": "2825:106:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 684,
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
                          "id": 681,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "id": 676,
                            "name": "_setdat",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 671,
                            "src": "2902:7:2",
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
                                "id": 679,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftExpression": {
                                  "argumentTypes": null,
                                  "hexValue": "38",
                                  "id": 677,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "2912:1:2",
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
                                  "id": 678,
                                  "name": "k",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 669,
                                  "src": "2914:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "2912:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint16",
                                  "typeString": "uint16"
                                }
                              }
                            ],
                            "id": 680,
                            "isConstant": false,
                            "isInlineArray": false,
                            "isLValue": false,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "TupleExpression",
                            "src": "2911:5:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "2902:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        }
                      ],
                      "id": 682,
                      "isConstant": false,
                      "isInlineArray": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "TupleExpression",
                      "src": "2901:16:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "+",
                    "rightExpression": {
                      "argumentTypes": null,
                      "id": 683,
                      "name": "_indat",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 667,
                      "src": "2918:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2901:23:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 675,
                  "id": 685,
                  "nodeType": "Return",
                  "src": "2894:30:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "b3b0705b",
            "id": 687,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setbyte",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 672,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 667,
                  "name": "_indat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2755:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 666,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2755:7:2",
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
                  "id": 669,
                  "name": "k",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2770:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint16",
                    "typeString": "uint16"
                  },
                  "typeName": {
                    "id": 668,
                    "name": "uint16",
                    "nodeType": "ElementaryTypeName",
                    "src": "2770:6:2",
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
                  "id": 671,
                  "name": "_setdat",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2779:15:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 670,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2779:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2754:41:2"
            },
            "returnParameters": {
              "id": 675,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 674,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 687,
                  "src": "2817:7:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 673,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2817:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2816:9:2"
            },
            "scope": 740,
            "src": "2738:193:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "3015:246:2",
              "statements": [
                {
                  "assignments": [
                    697
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 697,
                      "name": "dna",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 716,
                      "src": "3025:8:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 696,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3025:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 702,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 699,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 689,
                        "src": "3043:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 700,
                        "name": "_userDNA",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 693,
                        "src": "3050:8:2",
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
                      "id": 698,
                      "name": "_mkDNA",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 665,
                      "src": "3036:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) view returns (uint256)"
                      }
                    },
                    "id": 701,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3036:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3025:34:2"
                },
                {
                  "assignments": [
                    704
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 704,
                      "name": "aid",
                      "nodeType": "VariableDeclaration",
                      "overrides": null,
                      "scope": 716,
                      "src": "3069:8:2",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 703,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "3069:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "value": null,
                      "visibility": "internal"
                    }
                  ],
                  "id": 709,
                  "initialValue": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 706,
                        "name": "_name",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 689,
                        "src": "3092:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 707,
                        "name": "dna",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 697,
                        "src": "3099:3:2",
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
                      "id": 705,
                      "name": "storeAvatar",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 525,
                      "src": "3080:11:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_string_memory_ptr_$_t_uint256_$returns$_t_uint256_$",
                        "typeString": "function (string memory,uint256) returns (uint256)"
                      }
                    },
                    "id": 708,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3080:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3069:34:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 710,
                        "name": "TokenIDtoAvID",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 394,
                        "src": "3113:13:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                          "typeString": "mapping(uint256 => uint256)"
                        }
                      },
                      "id": 712,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 711,
                        "name": "_id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 691,
                        "src": "3127:3:2",
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
                      "src": "3113:18:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 713,
                      "name": "aid",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 704,
                      "src": "3134:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3113:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 715,
                  "nodeType": "ExpressionStatement",
                  "src": "3113:24:2"
                }
              ]
            },
            "documentation": null,
            "id": 717,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_birthAvatar",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 694,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 689,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "2958:19:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 688,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "2958:6:2",
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
                  "id": 691,
                  "name": "_id",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "2979:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 690,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "2979:4:2",
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
                  "name": "_userDNA",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "2989:16:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 692,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2989:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2957:50:2"
            },
            "returnParameters": {
              "id": 695,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3015:0:2"
            },
            "scope": 740,
            "src": "2936:325:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 738,
              "nodeType": "Block",
              "src": "3317:158:2",
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
                        "id": 728,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 725,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 719,
                          "src": "3406:3:2",
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
                            "id": 726,
                            "name": "avatars",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 390,
                            "src": "3413:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                              "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                            }
                          },
                          "id": 727,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "3413:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "3406:21:2",
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
                      "id": 724,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "3398:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 729,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3398:30:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 730,
                  "nodeType": "ExpressionStatement",
                  "src": "3398:30:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "expression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 731,
                        "name": "avatars",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 390,
                        "src": "3438:7:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_struct$_Avatar_$387_storage_$dyn_storage",
                          "typeString": "struct AvatarAUR.Avatar storage ref[] storage ref"
                        }
                      },
                      "id": 735,
                      "indexExpression": {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 732,
                          "name": "TokenIDtoAvID",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 394,
                          "src": "3446:13:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                            "typeString": "mapping(uint256 => uint256)"
                          }
                        },
                        "id": 734,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 733,
                          "name": "tid",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 719,
                          "src": "3460:3:2",
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
                        "src": "3446:18:2",
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
                      "src": "3438:27:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_Avatar_$387_storage",
                        "typeString": "struct AvatarAUR.Avatar storage ref"
                      }
                    },
                    "id": 736,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dna",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 386,
                    "src": "3438:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 723,
                  "id": 737,
                  "nodeType": "Return",
                  "src": "3431:38:2"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "5bb209a5",
            "id": 739,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getDNA",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 720,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 719,
                  "name": "tid",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 739,
                  "src": "3281:8:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 718,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3281:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3280:10:2"
            },
            "returnParameters": {
              "id": 723,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 722,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 739,
                  "src": "3312:4:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 721,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "3312:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3311:6:2"
            },
            "scope": 740,
            "src": "3265:210:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 741,
        "src": "137:3342:2"
      }
    ],
    "src": "0:3483:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-07-30T18:24:26.829Z",
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
  