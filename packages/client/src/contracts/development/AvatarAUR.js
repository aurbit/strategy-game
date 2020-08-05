
    module.exports = {
      "network": "development",
      "address": "0x542e2c74dF94c9E1AA332488D24E7F25D304caDB",
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
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_govContract\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newFee\",\"type\":\"uint256\"}],\"name\":\"FeeUpdated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"avatarId\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"Minted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"TokenIDtoAvID\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"avatars\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"dna\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"baseURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tid\",\"type\":\"uint256\"}],\"name\":\"getDNA\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_userDNA\",\"type\":\"uint256\"}],\"name\":\"mintAvatar\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint8\",\"name\":\"b\",\"type\":\"uint8\"},{\"internalType\":\"uint8\",\"name\":\"pos\",\"type\":\"uint8\"}],\"name\":\"pullcrumb\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_indat\",\"type\":\"uint256\"},{\"internalType\":\"uint16\",\"name\":\"k\",\"type\":\"uint16\"},{\"internalType\":\"uint256\",\"name\":\"_setdat\",\"type\":\"uint256\"}],\"name\":\"setbyte\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"_newfee\",\"type\":\"uint256\"}],\"name\":\"setcreateAvatarFee\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"tokenOfOwnerByIndex\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"tokenURI\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"approve(address,uint256)\":{\"details\":\"See {IERC721-approve}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC721-balanceOf}.\"},\"baseURI()\":{\"details\":\"Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.\"},\"getApproved(uint256)\":{\"details\":\"See {IERC721-getApproved}.\"},\"isApprovedForAll(address,address)\":{\"details\":\"See {IERC721-isApprovedForAll}.\"},\"name()\":{\"details\":\"See {IERC721Metadata-name}.\"},\"ownerOf(uint256)\":{\"details\":\"See {IERC721-ownerOf}.\"},\"safeTransferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"safeTransferFrom(address,address,uint256,bytes)\":{\"details\":\"See {IERC721-safeTransferFrom}.\"},\"setApprovalForAll(address,bool)\":{\"details\":\"See {IERC721-setApprovalForAll}.\"},\"supportsInterface(bytes4)\":{\"details\":\"See {IERC165-supportsInterface}.     * Time complexity O(1), guaranteed to always use less than 30 000 gas.\"},\"symbol()\":{\"details\":\"See {IERC721Metadata-symbol}.\"},\"tokenByIndex(uint256)\":{\"details\":\"See {IERC721Enumerable-tokenByIndex}.\"},\"tokenOfOwnerByIndex(address,uint256)\":{\"details\":\"See {IERC721Enumerable-tokenOfOwnerByIndex}.\"},\"tokenURI(uint256)\":{\"details\":\"See {IERC721Metadata-tokenURI}.\"},\"totalSupply()\":{\"details\":\"See {IERC721Enumerable-totalSupply}.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC721-transferFrom}.\"}}},\"userdoc\":{\"methods\":{},\"notice\":\"Author: Chris Markov 2020 Project Aurbit The Avatar Contract for the Aurbit Strategy Game. Symbol: AURA https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md\"}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":\"AvatarAUR\"},\"evmVersion\":\"constantinople\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AvatarAUR.sol\":{\"keccak256\":\"0xfa459b81bcd2cb7b539dc5f5912d0e1ee86922ebbbd68026ba0aa9e8857de52c\",\"urls\":[\"bzz-raw://b19f8a773185b3e88a82a60e680b804cce09cebde3a602edbe1845ffffc6f327\",\"dweb:/ipfs/QmTxr1HbbKwB4ePpCkFzkcGZpCbf8MK4Dvf7sWriTpRz6i\"]},\"@openzeppelin/contracts/GSN/Context.sol\":{\"keccak256\":\"0xdb26cbf4d028490f49831a7865c2fe1b28db44b535ca8d343785a3b768aae183\",\"urls\":[\"bzz-raw://840b14ce0315c47d49ba328f1f9fa7654ded1c9e1559e6c5e777a7b2dc28bf0a\",\"dweb:/ipfs/QmTLLabn4wcfGro9LEmUXUN2nwKqZSotXMvjDCLXEnLtZP\"]},\"@openzeppelin/contracts/introspection/ERC165.sol\":{\"keccak256\":\"0xb046d18f9d09683ca1c0ed6d80c61da8a8a7d9b30bad70a17b898538683eff74\",\"urls\":[\"bzz-raw://4728713afa6ae36cc9e92c7107c796a313add3ec20f813be2cde76c814486b2a\",\"dweb:/ipfs/QmUJBTXvYaGDF5PVnd5pUvYerc9DRXvqANDzgCzAp3FkkA\"]},\"@openzeppelin/contracts/introspection/IERC165.sol\":{\"keccak256\":\"0xfa152b6e88a1dc50780e8f1580426dc23ad2e1e2c2f086a088adf206a202f453\",\"urls\":[\"bzz-raw://5127b264994adab88fae419b1c493efc5acd07134c19ee5c0397e50018291ebf\",\"dweb:/ipfs/QmWwJZVhvdmvUCdimbb6R2Jiu59zjPqm6XTMchM6LaEHAp\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x9a9cf02622cd7a64261b10534fc3260449da25c98c9e96d1b4ae8110a20e5806\",\"urls\":[\"bzz-raw://2df142592d1dc267d9549049ee3317fa190d2f87eaa565f86ab05ec83f7ab8f5\",\"dweb:/ipfs/QmSkJtcfWo7c42KnL5hho6GFxK6HRNV91XABx1P7xDtfLV\"]},\"@openzeppelin/contracts/token/ERC721/ERC721.sol\":{\"keccak256\":\"0x1071a23188ba7f5bb16f51b0b01a67fd41fe56f862d8f83985788cf46f3b91bd\",\"urls\":[\"bzz-raw://c7082ca99b93f2e541cafaad00ed32675adf0752eab78eccabcf91dec9fd5d73\",\"dweb:/ipfs/QmdqooMmYBQVi7p6subDFM4e1944AuLjZUpHMjGtae7Lgd\"]},\"@openzeppelin/contracts/token/ERC721/IERC721.sol\":{\"keccak256\":\"0x227bafd3e165b13f5d98c42a44376e48d41f4a265db8803f2707faaeae9659aa\",\"urls\":[\"bzz-raw://c9aa7959a30871669ce46172cd117b084b607d602d9ce695ce79005582b0b69b\",\"dweb:/ipfs/QmXZUWeLXmArQinHL4RnacJLT22GvCExqREYM6pHLX7CX9\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol\":{\"keccak256\":\"0x3636662804cd8f474536b2875a9038a4c3fb91879f1bbff48af5c3f140fcd2f0\",\"urls\":[\"bzz-raw://9fab8521263fa581544000cb57335a3f2e6bcdfbb5579d3ceaa5acf741c67c4f\",\"dweb:/ipfs/QmZfXnMom7JSNtfyie5yGPN1SUC4SmHbz4ScVBH88URmA7\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol\":{\"keccak256\":\"0xe7f984cedc00a138dc27f263c73c32ba9a4b2fd23b6c34ac46f46c074b943538\",\"urls\":[\"bzz-raw://0f4acda12f076fe7584921241ddbb5b460ca7cad6cb8a42252ac7f2a9f539127\",\"dweb:/ipfs/QmQmfhkEv9GrhdWe67QtXnU19AMuoEmy31QnHPkucdYLjZ\"]},\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\":{\"keccak256\":\"0x321ee37ef4925020aa818a03ec7fe48e057561f65ab009a84f6c20c86026ade7\",\"urls\":[\"bzz-raw://01f9d74a17a56024984251b97e428e24c9d3abffbae5bd290f0ec263c82e9694\",\"dweb:/ipfs/QmRryCuuXu2ukrDmatB8TqdEhPLiK6NBRt41RiPUaX1qKy\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0xdfb4f812600ba4ce6738c35584ceb8c9433472583051b48ba5b1f66cb758a498\",\"urls\":[\"bzz-raw://df02dffe1c1de089d9b4f6192f0dcf464526f2230f420b3deec4645e0cdd2bff\",\"dweb:/ipfs/QmcqXGAU3KJqwrgUVoGJ2W8osomhSJ4R5kdsRpbuW3fELS\"]},\"@openzeppelin/contracts/utils/Counters.sol\":{\"keccak256\":\"0x2d68b8e6425249cd05cc0a66ea50cb5b8d10cbdac59c6de834e1002232813faf\",\"urls\":[\"bzz-raw://e3ce6b6ac17c67bba01e9c8c778f82f68fd4823bd083359cdd03040b70eeeba3\",\"dweb:/ipfs/QmX4t1jWwKaAkacvmQxEG5rBtLXg3EHw6pRjKhMZR8iw3n\"]},\"@openzeppelin/contracts/utils/EnumerableMap.sol\":{\"keccak256\":\"0x244e4b74b17716120cf28e58636f11c699b8c0c94628bd952a95cee038d7e32b\",\"urls\":[\"bzz-raw://198d566157120c526bd6b5086b32cae85a11389b8a538f533ba9f9447915da0e\",\"dweb:/ipfs/QmeE6d8KWERx7f1FVS5tMnitNJxBm2yWXRSEUBF7R6voLh\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0xb2a11b236f073662f5a196995863f51c11d006bf7c3de158b316dfa1506c4b79\",\"urls\":[\"bzz-raw://8651649cf0b9efa18c3b01c030276fa320d41adbdc286833417e7f36e357b2f3\",\"dweb:/ipfs/QmafhM2Nd1aP43QVB1eRRZaqRXQKswNfQcWi8U8xjrxCfN\"]},\"@openzeppelin/contracts/utils/Strings.sol\":{\"keccak256\":\"0x79484115dbfa737054f73e041009a02eeb434dd81be5d684bf4255ad3b5ab558\",\"urls\":[\"bzz-raw://12c119699463450c2544f5b9d8709b5e9e9164c62948a79c3ec53423a051d969\",\"dweb:/ipfs/QmPJduzSAaekq447QeFqAp3E7dc8CnNk5ajofckJ4ahA7Q\"]}},\"version\":1}",
  "bytecode": "0x6080604052662386f26fc10000600c553480156200001c57600080fd5b506040516200290438038062002904833981810160405260208110156200004257600080fd5b5051604080518082018252600d81527f41757262697420417661746172000000000000000000000000000000000000006020828101919091528251808401909352600483527f41555241000000000000000000000000000000000000000000000000000000009083015290620000e17f01ffc9a7000000000000000000000000000000000000000000000000000000006001600160e01b03620001da16565b8151620000f6906006906020850190620002a9565b5080516200010c906007906020840190620002a9565b50620001417f80ac58cd000000000000000000000000000000000000000000000000000000006001600160e01b03620001da16565b620001757f5b5e139f000000000000000000000000000000000000000000000000000000006001600160e01b03620001da16565b620001a97f780e9d63000000000000000000000000000000000000000000000000000000006001600160e01b03620001da16565b5050600d80546001600160a01b039092166001600160a01b0319928316179055600b8054909116331790556200034e565b7fffffffff0000000000000000000000000000000000000000000000000000000080821614156200026c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b7fffffffff00000000000000000000000000000000000000000000000000000000166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002ec57805160ff19168380011785556200031c565b828001600101855582156200031c579182015b828111156200031c578251825591602001919060010190620002ff565b506200032a9291506200032e565b5090565b6200034b91905b808211156200032a576000815560010162000335565b90565b6125a6806200035e6000396000f3fe60806040526004361061014b5760003560e01c80636c0360eb116100b657806395d89b411161006f57806395d89b411461063f578063a22cb46514610654578063b3b0705b1461068f578063b88d4fde146106c9578063c87b56dd1461079c578063e985e9c5146107c65761014b565b80636c0360eb146104af57806370a08231146104c457806374411eef146104f75780637660271d146105215780638177b6761461056c578063834d5fac146105965761014b565b806323b872dd1161010857806323b872dd146103725780632f745c59146103b557806342842e0e146103ee5780634f6ccce7146104315780635bb209a51461045b5780636352211e146104855761014b565b806301ffc9a71461015057806306fdde0314610198578063081812fc14610222578063095ea7b3146102685780630c106beb146102a357806318160ddd1461035d575b600080fd5b34801561015c57600080fd5b506101846004803603602081101561017357600080fd5b50356001600160e01b031916610801565b604080519115158252519081900360200190f35b3480156101a457600080fd5b506101ad610824565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e75781810151838201526020016101cf565b50505050905090810190601f1680156102145780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022e57600080fd5b5061024c6004803603602081101561024557600080fd5b50356108bb565b604080516001600160a01b039092168252519081900360200190f35b34801561027457600080fd5b506102a16004803603604081101561028b57600080fd5b506001600160a01b03813516906020013561091d565b005b61034b600480360360408110156102b957600080fd5b8101906020810181356401000000008111156102d457600080fd5b8201836020820111156102e657600080fd5b8035906020019184600183028401116401000000008311171561030857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506109f8915050565b60408051918252519081900360200190f35b34801561036957600080fd5b5061034b610b6a565b34801561037e57600080fd5b506102a16004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610b7b565b3480156103c157600080fd5b5061034b600480360360408110156103d857600080fd5b506001600160a01b038135169060200135610bd2565b3480156103fa57600080fd5b506102a16004803603606081101561041157600080fd5b506001600160a01b03813581169160208101359091169060400135610bfa565b34801561043d57600080fd5b5061034b6004803603602081101561045457600080fd5b5035610c15565b34801561046757600080fd5b5061034b6004803603602081101561047e57600080fd5b5035610c31565b34801561049157600080fd5b5061024c600480360360208110156104a857600080fd5b5035610c7a565b3480156104bb57600080fd5b506101ad610ca8565b3480156104d057600080fd5b5061034b600480360360208110156104e757600080fd5b50356001600160a01b0316610d09565b34801561050357600080fd5b506102a16004803603602081101561051a57600080fd5b5035610d71565b34801561052d57600080fd5b506105566004803603604081101561054457600080fd5b5060ff81358116916020013516610dc3565b6040805160ff9092168252519081900360200190f35b34801561057857600080fd5b5061034b6004803603602081101561058f57600080fd5b5035610ddb565b3480156105a257600080fd5b506105c0600480360360208110156105b957600080fd5b5035610ded565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156106035781810151838201526020016105eb565b50505050905090810190601f1680156106305780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561064b57600080fd5b506101ad610ea0565b34801561066057600080fd5b506102a16004803603604081101561067757600080fd5b506001600160a01b0381351690602001351515610f01565b34801561069b57600080fd5b5061034b600480360360608110156106b257600080fd5b5080359061ffff6020820135169060400135611006565b3480156106d557600080fd5b506102a1600480360360808110156106ec57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561072757600080fd5b82018360208201111561073957600080fd5b8035906020019184600183028401116401000000008311171561075b57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061101b945050505050565b3480156107a857600080fd5b506101ad600480360360208110156107bf57600080fd5b5035611079565b3480156107d257600080fd5b50610184600480360360408110156107e957600080fd5b506001600160a01b0381358116916020013516611320565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b820191906000526020600020905b81548152906001019060200180831161089357829003601f168201915b505050505090505b90565b60006108c68261134e565b6109015760405162461bcd60e51b815260040180806020018281038252602c81526020018061246f602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061092882610c7a565b9050806001600160a01b0316836001600160a01b0316141561097b5760405162461bcd60e51b815260040180806020018281038252602181526020018061251f6021913960400191505060405180910390fd5b806001600160a01b031661098d611361565b6001600160a01b031614806109ae57506109ae816109a9611361565b611320565b6109e95760405162461bcd60e51b81526004018080602001828103825260388152602001806123c26038913960400191505060405180910390fd5b6109f38383611365565b505050565b6000600c543414610a3a576040805162461bcd60e51b81526020600482015260076024820152667061792066656560c81b604482015290519081900360640190fd5b610a426113d3565b610a4c600a611410565b6000610a58600a611419565b9050610a64338261141d565b610a6f848285611557565b610b6181856040516020018080693d913730b6b2911d101160b11b815250600a0182805190602001908083835b60208310610abb5780518252601f199092019160209182019101610a9c565b51815160001960209485036101000a0190811690199190911617905272111610113232b9b1b934b83a34b7b7111d101160691b939091019283526c20bab93134ba1030bb30ba30b960991b60138401526c1116101134b6b0b3b2911d101160991b90830152506f73616d706c6520696d6167652075726960801b602d82015261227d60f01b603d82015260408051601f818403018152603f909201905291506116559050565b90505b92915050565b6000610b7660026116b8565b905090565b610b8c610b86611361565b826116c3565b610bc75760405162461bcd60e51b81526004018080602001828103825260318152602001806125406031913960400191505060405180910390fd5b6109f3838383611767565b6001600160a01b0382166000908152600160205260408120610b61908363ffffffff6118c516565b6109f38383836040518060200160405280600081525061101b565b600080610c2960028463ffffffff6118d116565b509392505050565b600e54600090821115610c4357600080fd5b6000828152600f6020526040902054600e80549091908110610c6157fe5b9060005260206000209060020201600101549050919050565b6000610b6482604051806060016040528060298152602001612424602991396002919063ffffffff6118ed16565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b60006001600160a01b038216610d505760405162461bcd60e51b815260040180806020018281038252602a8152602001806123fa602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600160205260409020610b64906116b8565b600d546001600160a01b03163314610d8857600080fd5b600c8190556040805182815290517f8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c769181900360200190a150565b600360ff60028302811691821b841616901c92915050565b600f6020526000908152604090205481565b600e8181548110610dfa57fe5b60009182526020918290206002918202018054604080516001831615610100026000190190921693909304601f810185900485028201850190935282815290935091839190830182828015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b5050505050908060010154905082565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b610f09611361565b6001600160a01b0316826001600160a01b03161415610f6f576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610f7c611361565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610fc0611361565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b61ffff600883021681901b83015b9392505050565b61102c611026611361565b836116c3565b6110675760405162461bcd60e51b81526004018080602001828103825260318152602001806125406031913960400191505060405180910390fd5b611073848484846118fa565b50505050565b60606110848261134e565b6110bf5760405162461bcd60e51b815260040180806020018281038252602f8152602001806124f0602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156111545780601f1061112957610100808354040283529160200191611154565b820191906000526020600020905b81548152906001019060200180831161113757829003601f168201915b50506009549394505050506002600019610100600184161502019091160461117d57905061081f565b80511561124e5760098160405160200180838054600181600116156101000203166002900480156111e55780601f106111c35761010080835404028352918201916111e5565b820191906000526020600020905b8154815290600101906020018083116111d1575b5050825160208401908083835b602083106112115780518252601f1990920191602091820191016111f2565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061081f565b60096112598461194c565b60405160200180838054600181600116156101000203166002900480156112b75780601f106112955761010080835404028352918201916112b7565b820191906000526020600020905b8154815290600101906020018083116112a3575b5050825160208401908083835b602083106112e35780518252601f1990920191602091820191016112c4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610b6460028363ffffffff611a1016565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061139a82610c7a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600d546040516001600160a01b0390911690303180156108fc02916000818181858888f1935050505015801561140d573d6000803e3d6000fd5b50565b80546001019055565b5490565b6001600160a01b038216611478576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6114818161134e565b156114d3576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6114df600083836109f3565b6001600160a01b0382166000908152600160205260409020611507908263ffffffff611a1c16565b5061151a6002828463ffffffff611a2816565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006115638483611a3e565b905060006115718583611b65565b905080600f6000868152602001908152602001600020819055507ff2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b43383838860405180856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156116115781810151838201526020016115f9565b50505050905090810190601f16801561163e5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15050505050565b61165e8261134e565b6116995760405162461bcd60e51b815260040180806020018281038252602c81526020018061249b602c913960400191505060405180910390fd5b600082815260086020908152604090912082516109f392840190612285565b6000610b6482611419565b60006116ce8261134e565b6117095760405162461bcd60e51b815260040180806020018281038252602c815260200180612396602c913960400191505060405180910390fd5b600061171483610c7a565b9050806001600160a01b0316846001600160a01b0316148061174f5750836001600160a01b0316611744846108bb565b6001600160a01b0316145b8061175f575061175f8185611320565b949350505050565b826001600160a01b031661177a82610c7a565b6001600160a01b0316146117bf5760405162461bcd60e51b81526004018080602001828103825260298152602001806124c76029913960400191505060405180910390fd5b6001600160a01b0382166118045760405162461bcd60e51b81526004018080602001828103825260248152602001806123726024913960400191505060405180910390fd5b61180f8383836109f3565b61181a600082611365565b6001600160a01b0383166000908152600160205260409020611842908263ffffffff611be116565b506001600160a01b038216600090815260016020526040902061186b908263ffffffff611a1c16565b5061187e6002828463ffffffff611a2816565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610b618383611bed565b60008080806118e08686611c51565b9097909650945050505050565b600061175f848484611ccc565b611905848484611767565b61191184848484611d96565b6110735760405162461bcd60e51b81526004018080602001828103825260328152602001806123406032913960400191505060405180910390fd5b60608161197157506040805180820190915260018152600360fc1b602082015261081f565b8160005b811561198957600101600a82049150611975565b6060816040519080825280601f01601f1916602001820160405280156119b6576020820181803883390190505b50859350905060001982015b8315611a0757600a840660300160f81b828280600190039350815181106119e557fe5b60200101906001600160f81b031916908160001a905350600a840493506119c2565b50949350505050565b6000610b618383611f16565b6000610b618383611f2e565b600061175f84846001600160a01b038516611f78565b600080834340436040516020018084805190602001908083835b60208310611a775780518252601f199092019160209182019101611a58565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181529281019052815191012091505060ff83166000611ac78282610dc3565b600101600f0260ff168381611ad857fe5b0660280190506000611aeb836001610dc3565b600101600f0260ff16600885901c81611b0057fe5b0660280190506000611b13846002610dc3565b600101600f0260ff16601086901c81611b2857fe5b0660280190506000611b3c88600f86611006565b9050611b4a81601085611006565b9050611b5881601184611006565b9998505050505050505050565b604080518082019091528281526020808201839052600e805460018101825560009182528351805192949360029092027fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0192611bc59284920190612285565b506020919091015160019091015550600e546000190192915050565b6000610b61838361200f565b81546000908210611c2f5760405162461bcd60e51b815260040180806020018281038252602281526020018061231e6022913960400191505060405180910390fd5b826000018281548110611c3e57fe5b9060005260206000200154905092915050565b815460009081908310611c955760405162461bcd60e51b815260040180806020018281038252602281526020018061244d6022913960400191505060405180910390fd5b6000846000018481548110611ca657fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611d675760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d2c578181015183820152602001611d14565b50505050905090810190601f168015611d595780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611d7a57fe5b9060005260206000209060020201600101549150509392505050565b6000611daa846001600160a01b03166120d5565b611db65750600161175f565b6060611edc630a85bd0160e11b611dcb611361565b88878760405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611e44578181015183820152602001611e2c565b50505050905090810190601f168015611e715780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001612340603291396001600160a01b038816919063ffffffff61210e16565b90506000818060200190516020811015611ef557600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6000611f3a8383611f16565b611f7057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610b64565b506000610b64565b600082815260018401602052604081205480611fdd575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055611014565b82856000016001830381548110611ff057fe5b9060005260206000209060020201600101819055506000915050611014565b600081815260018301602052604081205480156120cb578354600019808301919081019060009087908390811061204257fe5b906000526020600020015490508087600001848154811061205f57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061208f57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610b64565b6000915050610b64565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061175f575050151592915050565b606061175f84846000856060612123856120d5565b612174576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106121b35780518252601f199092019160209182019101612194565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612215576040519150601f19603f3d011682016040523d82523d6000602084013e61221a565b606091505b5091509150811561222e57915061175f9050565b80511561223e5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611d2c578181015183820152602001611d14565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106122c657805160ff19168380011785556122f3565b828001600101855582156122f3579182015b828111156122f35782518255916020019190600101906122d8565b506122ff929150612303565b5090565b6108b891905b808211156122ff576000815560010161230956fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122081c728d25e913f084c3b30a1d1b17345d29d08ba3a1604aed4f9aaeae318aa4164736f6c63430006020033",
  "deployedBytecode": "0x60806040526004361061014b5760003560e01c80636c0360eb116100b657806395d89b411161006f57806395d89b411461063f578063a22cb46514610654578063b3b0705b1461068f578063b88d4fde146106c9578063c87b56dd1461079c578063e985e9c5146107c65761014b565b80636c0360eb146104af57806370a08231146104c457806374411eef146104f75780637660271d146105215780638177b6761461056c578063834d5fac146105965761014b565b806323b872dd1161010857806323b872dd146103725780632f745c59146103b557806342842e0e146103ee5780634f6ccce7146104315780635bb209a51461045b5780636352211e146104855761014b565b806301ffc9a71461015057806306fdde0314610198578063081812fc14610222578063095ea7b3146102685780630c106beb146102a357806318160ddd1461035d575b600080fd5b34801561015c57600080fd5b506101846004803603602081101561017357600080fd5b50356001600160e01b031916610801565b604080519115158252519081900360200190f35b3480156101a457600080fd5b506101ad610824565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101e75781810151838201526020016101cf565b50505050905090810190601f1680156102145780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561022e57600080fd5b5061024c6004803603602081101561024557600080fd5b50356108bb565b604080516001600160a01b039092168252519081900360200190f35b34801561027457600080fd5b506102a16004803603604081101561028b57600080fd5b506001600160a01b03813516906020013561091d565b005b61034b600480360360408110156102b957600080fd5b8101906020810181356401000000008111156102d457600080fd5b8201836020820111156102e657600080fd5b8035906020019184600183028401116401000000008311171561030857600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955050913592506109f8915050565b60408051918252519081900360200190f35b34801561036957600080fd5b5061034b610b6a565b34801561037e57600080fd5b506102a16004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610b7b565b3480156103c157600080fd5b5061034b600480360360408110156103d857600080fd5b506001600160a01b038135169060200135610bd2565b3480156103fa57600080fd5b506102a16004803603606081101561041157600080fd5b506001600160a01b03813581169160208101359091169060400135610bfa565b34801561043d57600080fd5b5061034b6004803603602081101561045457600080fd5b5035610c15565b34801561046757600080fd5b5061034b6004803603602081101561047e57600080fd5b5035610c31565b34801561049157600080fd5b5061024c600480360360208110156104a857600080fd5b5035610c7a565b3480156104bb57600080fd5b506101ad610ca8565b3480156104d057600080fd5b5061034b600480360360208110156104e757600080fd5b50356001600160a01b0316610d09565b34801561050357600080fd5b506102a16004803603602081101561051a57600080fd5b5035610d71565b34801561052d57600080fd5b506105566004803603604081101561054457600080fd5b5060ff81358116916020013516610dc3565b6040805160ff9092168252519081900360200190f35b34801561057857600080fd5b5061034b6004803603602081101561058f57600080fd5b5035610ddb565b3480156105a257600080fd5b506105c0600480360360208110156105b957600080fd5b5035610ded565b6040518080602001838152602001828103825284818151815260200191508051906020019080838360005b838110156106035781810151838201526020016105eb565b50505050905090810190601f1680156106305780820380516001836020036101000a031916815260200191505b50935050505060405180910390f35b34801561064b57600080fd5b506101ad610ea0565b34801561066057600080fd5b506102a16004803603604081101561067757600080fd5b506001600160a01b0381351690602001351515610f01565b34801561069b57600080fd5b5061034b600480360360608110156106b257600080fd5b5080359061ffff6020820135169060400135611006565b3480156106d557600080fd5b506102a1600480360360808110156106ec57600080fd5b6001600160a01b0382358116926020810135909116916040820135919081019060808101606082013564010000000081111561072757600080fd5b82018360208201111561073957600080fd5b8035906020019184600183028401116401000000008311171561075b57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061101b945050505050565b3480156107a857600080fd5b506101ad600480360360208110156107bf57600080fd5b5035611079565b3480156107d257600080fd5b50610184600480360360408110156107e957600080fd5b506001600160a01b0381358116916020013516611320565b6001600160e01b0319811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b820191906000526020600020905b81548152906001019060200180831161089357829003601f168201915b505050505090505b90565b60006108c68261134e565b6109015760405162461bcd60e51b815260040180806020018281038252602c81526020018061246f602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061092882610c7a565b9050806001600160a01b0316836001600160a01b0316141561097b5760405162461bcd60e51b815260040180806020018281038252602181526020018061251f6021913960400191505060405180910390fd5b806001600160a01b031661098d611361565b6001600160a01b031614806109ae57506109ae816109a9611361565b611320565b6109e95760405162461bcd60e51b81526004018080602001828103825260388152602001806123c26038913960400191505060405180910390fd5b6109f38383611365565b505050565b6000600c543414610a3a576040805162461bcd60e51b81526020600482015260076024820152667061792066656560c81b604482015290519081900360640190fd5b610a426113d3565b610a4c600a611410565b6000610a58600a611419565b9050610a64338261141d565b610a6f848285611557565b610b6181856040516020018080693d913730b6b2911d101160b11b815250600a0182805190602001908083835b60208310610abb5780518252601f199092019160209182019101610a9c565b51815160001960209485036101000a0190811690199190911617905272111610113232b9b1b934b83a34b7b7111d101160691b939091019283526c20bab93134ba1030bb30ba30b960991b60138401526c1116101134b6b0b3b2911d101160991b90830152506f73616d706c6520696d6167652075726960801b602d82015261227d60f01b603d82015260408051601f818403018152603f909201905291506116559050565b90505b92915050565b6000610b7660026116b8565b905090565b610b8c610b86611361565b826116c3565b610bc75760405162461bcd60e51b81526004018080602001828103825260318152602001806125406031913960400191505060405180910390fd5b6109f3838383611767565b6001600160a01b0382166000908152600160205260408120610b61908363ffffffff6118c516565b6109f38383836040518060200160405280600081525061101b565b600080610c2960028463ffffffff6118d116565b509392505050565b600e54600090821115610c4357600080fd5b6000828152600f6020526040902054600e80549091908110610c6157fe5b9060005260206000209060020201600101549050919050565b6000610b6482604051806060016040528060298152602001612424602991396002919063ffffffff6118ed16565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b60006001600160a01b038216610d505760405162461bcd60e51b815260040180806020018281038252602a8152602001806123fa602a913960400191505060405180910390fd5b6001600160a01b0382166000908152600160205260409020610b64906116b8565b600d546001600160a01b03163314610d8857600080fd5b600c8190556040805182815290517f8c4d35e54a3f2ef1134138fd8ea3daee6a3c89e10d2665996babdf70261e2c769181900360200190a150565b600360ff60028302811691821b841616901c92915050565b600f6020526000908152604090205481565b600e8181548110610dfa57fe5b60009182526020918290206002918202018054604080516001831615610100026000190190921693909304601f810185900485028201850190935282815290935091839190830182828015610e905780601f10610e6557610100808354040283529160200191610e90565b820191906000526020600020905b815481529060010190602001808311610e7357829003601f168201915b5050505050908060010154905082565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156108b05780601f10610885576101008083540402835291602001916108b0565b610f09611361565b6001600160a01b0316826001600160a01b03161415610f6f576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610f7c611361565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610fc0611361565b60408051841515815290516001600160a01b0392909216917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c319181900360200190a35050565b61ffff600883021681901b83015b9392505050565b61102c611026611361565b836116c3565b6110675760405162461bcd60e51b81526004018080602001828103825260318152602001806125406031913960400191505060405180910390fd5b611073848484846118fa565b50505050565b60606110848261134e565b6110bf5760405162461bcd60e51b815260040180806020018281038252602f8152602001806124f0602f913960400191505060405180910390fd5b60008281526008602090815260409182902080548351601f60026000196101006001861615020190931692909204918201849004840281018401909452808452606093928301828280156111545780601f1061112957610100808354040283529160200191611154565b820191906000526020600020905b81548152906001019060200180831161113757829003601f168201915b50506009549394505050506002600019610100600184161502019091160461117d57905061081f565b80511561124e5760098160405160200180838054600181600116156101000203166002900480156111e55780601f106111c35761010080835404028352918201916111e5565b820191906000526020600020905b8154815290600101906020018083116111d1575b5050825160208401908083835b602083106112115780518252601f1990920191602091820191016111f2565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405291505061081f565b60096112598461194c565b60405160200180838054600181600116156101000203166002900480156112b75780601f106112955761010080835404028352918201916112b7565b820191906000526020600020905b8154815290600101906020018083116112a3575b5050825160208401908083835b602083106112e35780518252601f1990920191602091820191016112c4565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6000610b6460028363ffffffff611a1016565b3390565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061139a82610c7a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600d546040516001600160a01b0390911690303180156108fc02916000818181858888f1935050505015801561140d573d6000803e3d6000fd5b50565b80546001019055565b5490565b6001600160a01b038216611478576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6114818161134e565b156114d3576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6114df600083836109f3565b6001600160a01b0382166000908152600160205260409020611507908263ffffffff611a1c16565b5061151a6002828463ffffffff611a2816565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006115638483611a3e565b905060006115718583611b65565b905080600f6000868152602001908152602001600020819055507ff2cb5e52049d127ad1c335f1cc25f2fdbc911bec1beb2611f4c1e8b1c274d4b43383838860405180856001600160a01b03166001600160a01b0316815260200184815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156116115781810151838201526020016115f9565b50505050905090810190601f16801561163e5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a15050505050565b61165e8261134e565b6116995760405162461bcd60e51b815260040180806020018281038252602c81526020018061249b602c913960400191505060405180910390fd5b600082815260086020908152604090912082516109f392840190612285565b6000610b6482611419565b60006116ce8261134e565b6117095760405162461bcd60e51b815260040180806020018281038252602c815260200180612396602c913960400191505060405180910390fd5b600061171483610c7a565b9050806001600160a01b0316846001600160a01b0316148061174f5750836001600160a01b0316611744846108bb565b6001600160a01b0316145b8061175f575061175f8185611320565b949350505050565b826001600160a01b031661177a82610c7a565b6001600160a01b0316146117bf5760405162461bcd60e51b81526004018080602001828103825260298152602001806124c76029913960400191505060405180910390fd5b6001600160a01b0382166118045760405162461bcd60e51b81526004018080602001828103825260248152602001806123726024913960400191505060405180910390fd5b61180f8383836109f3565b61181a600082611365565b6001600160a01b0383166000908152600160205260409020611842908263ffffffff611be116565b506001600160a01b038216600090815260016020526040902061186b908263ffffffff611a1c16565b5061187e6002828463ffffffff611a2816565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610b618383611bed565b60008080806118e08686611c51565b9097909650945050505050565b600061175f848484611ccc565b611905848484611767565b61191184848484611d96565b6110735760405162461bcd60e51b81526004018080602001828103825260328152602001806123406032913960400191505060405180910390fd5b60608161197157506040805180820190915260018152600360fc1b602082015261081f565b8160005b811561198957600101600a82049150611975565b6060816040519080825280601f01601f1916602001820160405280156119b6576020820181803883390190505b50859350905060001982015b8315611a0757600a840660300160f81b828280600190039350815181106119e557fe5b60200101906001600160f81b031916908160001a905350600a840493506119c2565b50949350505050565b6000610b618383611f16565b6000610b618383611f2e565b600061175f84846001600160a01b038516611f78565b600080834340436040516020018084805190602001908083835b60208310611a775780518252601f199092019160209182019101611a58565b51815160209384036101000a6000190180199092169116179052920194855250838101929092525060408051808403830181529281019052815191012091505060ff83166000611ac78282610dc3565b600101600f0260ff168381611ad857fe5b0660280190506000611aeb836001610dc3565b600101600f0260ff16600885901c81611b0057fe5b0660280190506000611b13846002610dc3565b600101600f0260ff16601086901c81611b2857fe5b0660280190506000611b3c88600f86611006565b9050611b4a81601085611006565b9050611b5881601184611006565b9998505050505050505050565b604080518082019091528281526020808201839052600e805460018101825560009182528351805192949360029092027fbb7b4a454dc3493923482f07822329ed19e8244eff582cc204f8554c3620c3fd0192611bc59284920190612285565b506020919091015160019091015550600e546000190192915050565b6000610b61838361200f565b81546000908210611c2f5760405162461bcd60e51b815260040180806020018281038252602281526020018061231e6022913960400191505060405180910390fd5b826000018281548110611c3e57fe5b9060005260206000200154905092915050565b815460009081908310611c955760405162461bcd60e51b815260040180806020018281038252602281526020018061244d6022913960400191505060405180910390fd5b6000846000018481548110611ca657fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611d675760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611d2c578181015183820152602001611d14565b50505050905090810190601f168015611d595780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611d7a57fe5b9060005260206000209060020201600101549150509392505050565b6000611daa846001600160a01b03166120d5565b611db65750600161175f565b6060611edc630a85bd0160e11b611dcb611361565b88878760405160240180856001600160a01b03166001600160a01b03168152602001846001600160a01b03166001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611e44578181015183820152602001611e2c565b50505050905090810190601f168015611e715780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b038381831617835250505050604051806060016040528060328152602001612340603291396001600160a01b038816919063ffffffff61210e16565b90506000818060200190516020811015611ef557600080fd5b50516001600160e01b031916630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6000611f3a8383611f16565b611f7057508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610b64565b506000610b64565b600082815260018401602052604081205480611fdd575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055611014565b82856000016001830381548110611ff057fe5b9060005260206000209060020201600101819055506000915050611014565b600081815260018301602052604081205480156120cb578354600019808301919081019060009087908390811061204257fe5b906000526020600020015490508087600001848154811061205f57fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061208f57fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610b64565b6000915050610b64565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061175f575050151592915050565b606061175f84846000856060612123856120d5565b612174576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106121b35780518252601f199092019160209182019101612194565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612215576040519150601f19603f3d011682016040523d82523d6000602084013e61221a565b606091505b5091509150811561222e57915061175f9050565b80511561223e5780518082602001fd5b60405162461bcd60e51b8152602060048201818152865160248401528651879391928392604401919085019080838360008315611d2c578181015183820152602001611d14565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106122c657805160ff19168380011785556122f3565b828001600101855582156122f3579182015b828111156122f35782518255916020019190600101906122d8565b506122ff929150612303565b5090565b6108b891905b808211156122ff576000815560010161230956fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732314d657461646174613a2055524920736574206f66206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a264697066735822122081c728d25e913f084c3b30a1d1b17345d29d08ba3a1604aed4f9aaeae318aa4164736f6c63430006020033",
  "sourceMap": "341:4342:2:-:0;;;510:6;484:32;;885:211;8:9:-1;5:2;;;30:1;27;20:12;5:2;885:211:2;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;885:211:2;3565:365:15;;;;;;;;;;;;885:211:2;3565:365:15;;;;;;;;;;;;;;;;;;;;;;;;751:40:10;770:20;-1:-1:-1;;;;;751:18:10;:40;:::i;:::-;3637:12:15;;;;:5;;:12;;;;;:::i;:::-;-1:-1:-1;3659:16:15;;;;:7;;:16;;;;;:::i;:::-;-1:-1:-1;3763:40:15;3782:20;-1:-1:-1;;;;;3763:18:15;:40;:::i;:::-;3813:49;3832:29;-1:-1:-1;;;;;3813:18:15;:49;:::i;:::-;3872:51;3891:31;-1:-1:-1;;;;;3872:18:15;:51;:::i;:::-;-1:-1:-1;;996:11:2::1;:26:::0;;-1:-1:-1;;;;;996:26:2;;::::1;-1:-1:-1::0;;;;;;996:26:2;;::::1;;::::0;;1032:5:::1;:18:::0;;;;::::1;1040:10;1032:18;::::0;;341:4342;;1482:198:10;1565:25;;;;;;1557:66;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1633:33;;:20;:33;;;;;;;;;;:40;;-1:-1:-1;;1633:40:10;1669:4;1633:40;;;1482:198::o;341:4342:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;341:4342:2;;;-1:-1:-1;341:4342:2;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "341:4342:2:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;948:140:10;;8:9:-1;5:2;;;30:1;27;20:12;5:2;948:140:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;948:140:10;-1:-1:-1;;;;;;948:140:10;;:::i;:::-;;;;;;;;;;;;;;;;;;4486:90:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4486:90:15;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8:100:-1;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;4486:90:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7093:209;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7093:209:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;7093:209:15;;:::i;:::-;;;;-1:-1:-1;;;;;7093:209:15;;;;;;;;;;;;;;6651:381;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6651:381:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;6651:381:15;;;;;;;;:::i;:::-;;1195:971:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1195:971:2;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;1195:971:2;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;1195:971:2;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;1195:971:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;1195:971:2;;-1:-1:-1;;1195:971:2;;;-1:-1:-1;1195:971:2;;-1:-1:-1;;1195:971:2:i;:::-;;;;;;;;;;;;;;;;6161:200:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6161:200:15;;;:::i;7941:300::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7941:300:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;7941:300:15;;;;;;;;;;;;;;;;;:::i;5938:152::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5938:152:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;5938:152:15;;;;;;;;:::i;8307:149::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8307:149:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;8307:149:15;;;;;;;;;;;;;;;;;:::i;6433:161::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;6433:161:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;6433:161:15;;:::i;4442:239:2:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4442:239:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4442:239:2;;:::i;4257:167:15:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4257:167:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4257:167:15;;:::i;5772:87::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5772:87:15;;;:::i;3989:211::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3989:211:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3989:211:15;-1:-1:-1;;;;;3989:211:15;;:::i;2172:172:2:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2172:172:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2172:172:2;;:::i;2593:234::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2593:234:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;2593:234:2;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;713:48;;8:9:-1;5:2;;;30:1;27;20:12;5:2;713:48:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;713:48:2;;:::i;684:23::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;684:23:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;684:23:2;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;684:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4640:94:15;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4640:94:15;;;:::i;7369:290::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7369:290:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;7369:290:15;;;;;;;;;;:::i;3784:232:2:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3784:232:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;3784:232:2;;;;;;;;;;;;;;:::i;8522:282:15:-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;8522:282:15;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;-1:-1;;;;;8522:282:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;21:11:-1;5:28;;2:2;;;46:1;43;36:12;2:2;8522:282:15;;35:9:-1;28:4;12:14;8:25;5:40;2:2;;;58:1;55;48:12;2:2;8522:282:15;;;;;;100:9:-1;95:1;81:12;77:20;67:8;63:35;60:50;39:11;25:12;22:29;11:107;8:2;;;131:1;128;121:12;8:2;8522:282:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;30:3:-1;22:6;14;1:33;99:1;81:16;;74:27;;;;-1:-1;8522:282:15;;-1:-1:-1;8522:282:15;;-1:-1:-1;;;;;8522:282:15:i;4800:740::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4800:740:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;4800:740:15;;:::i;7725:154::-;;8:9:-1;5:2;;;30:1;27;20:12;5:2;7725:154:15;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;;;;;;7725:154:15;;;;;;;;;;:::i;948:140:10:-;-1:-1:-1;;;;;;1048:33:10;;1025:4;1048:33;;;;;;;;;;;;;948:140;;;;:::o;4486:90:15:-;4564:5;4557:12;;;;;;;;-1:-1:-1;;4557:12:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4532:13;;4557:12;;4564:5;;4557:12;;4564:5;4557:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4486:90;;:::o;7093:209::-;7161:7;7188:16;7196:7;7188;:16::i;:::-;7180:73;;;;-1:-1:-1;;;7180:73:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;7271:24:15;;;;:15;:24;;;;;;-1:-1:-1;;;;;7271:24:15;;7093:209::o;6651:381::-;6731:13;6747:16;6755:7;6747;:16::i;:::-;6731:32;;6787:5;-1:-1:-1;;;;;6781:11:15;:2;-1:-1:-1;;;;;6781:11:15;;;6773:57;;;;-1:-1:-1;;;6773:57:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6865:5;-1:-1:-1;;;;;6849:21:15;:12;:10;:12::i;:::-;-1:-1:-1;;;;;6849:21:15;;:62;;;;6874:37;6891:5;6898:12;:10;:12::i;:::-;6874:16;:37::i;:::-;6841:152;;;;-1:-1:-1;;;6841:152:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7004:21;7013:2;7017:7;7004:8;:21::i;:::-;6651:381;;;:::o;1195:971:2:-;1301:7;1345:15;;1332:9;:28;1324:48;;;;;-1:-1:-1;;;1324:48:2;;;;;;;;;;;;-1:-1:-1;;;1324:48:2;;;;;;;;;;;;;;;1382:9;:7;:9::i;:::-;1454:21;:9;:19;:21::i;:::-;1485:17;1505:19;:9;:17;:19::i;:::-;1485:39;;1534:28;1540:10;1552:9;1534:5;:28::i;:::-;1593:39;1606:4;1612:9;1623:8;1593:12;:39::i;:::-;1642:374;1668:9;1787:4;1715:277;;;;;;-1:-1:-1;;;1715:277:2;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;-1:-1;;263:2;259:12;;;254:3;250:22;246:30;340:21;;;311:9;;295:26;;;;377:20;365:33;;-1:-1;;;1715:277:2;;;;;;;-1:-1:-1;;;1715:277:2;;;;-1:-1:-1;;;1715:277:2;;;;-1:-1:-1;;;;1715:277:2;;;;-1:-1:-1;;;1715:277:2;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1715:277:2;;;;;;;-1:-1:-1;1642:12:2;;-1:-1:-1;1642:374:2:i;:::-;2150:9;-1:-1:-1;1195:971:2;;;;;:::o;6161:200:15:-;6214:7;6333:21;:12;:19;:21::i;:::-;6326:28;;6161:200;:::o;7941:300::-;8100:41;8119:12;:10;:12::i;:::-;8133:7;8100:18;:41::i;:::-;8092:103;;;;-1:-1:-1;;;8092:103:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8206:28;8216:4;8222:2;8226:7;8206:9;:28::i;5938:152::-;-1:-1:-1;;;;;6053:20:15;;6027:7;6053:20;;;:13;:20;;;;;:30;;6077:5;6053:30;:23;:30;:::i;8307:149::-;8410:39;8427:4;8433:2;8437:7;8410:39;;;;;;;;;;;;:16;:39::i;6433:161::-;6500:7;;6541:22;:12;6557:5;6541:22;:15;:22;:::i;:::-;-1:-1:-1;6519:44:15;6433:161;-1:-1:-1;;;6433:161:15:o;4442:239:2:-;4611:7;:14;4492:7;;4604:21;;;4596:30;;;;;;4651:18;;;;:13;:18;;;;;;4643:7;:27;;:7;;4651:18;4643:27;;;;;;;;;;;;;;;;:31;;;4636:38;;4442:239;;;:::o;4257:167:15:-;4321:7;4347:70;4364:7;4347:70;;;;;;;;;;;;;;;;;:12;;:70;;:16;:70;:::i;5772:87::-;5844:8;5837:15;;;;;;;;-1:-1:-1;;5837:15:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5812:13;;5837:15;;5844:8;;5837:15;;5844:8;5837:15;;;;;;;;;;;;;;;;;;;;;;;;3989:211;4053:7;-1:-1:-1;;;;;4080:19:15;;4072:74;;;;-1:-1:-1;;;4072:74:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;4164:20:15;;;;;;:13;:20;;;;;:29;;:27;:29::i;2172:172:2:-;2242:11;;-1:-1:-1;;;;;2242:11:2;2257:10;2242:25;2234:34;;;;;;2278:15;:25;;;2318:19;;;;;;;;;;;;;;;;;2172:172;:::o;2593:234::-;2790:1;2784:35;2811:1;:7;;2784:35;;2790:14;;;2785:20;;2784:35;;;2593:234;;;;:::o;713:48::-;;;;;;;;;;;;;:::o;684:23::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;684:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;684:23:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;4640:94:15:-;4720:7;4713:14;;;;;;;;-1:-1:-1;;4713:14:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4688:13;;4713:14;;4720:7;;4713:14;;4720:7;4713:14;;;;;;;;;;;;;;;;;;;;;;;;7369:290;7483:12;:10;:12::i;:::-;-1:-1:-1;;;;;7471:24:15;:8;-1:-1:-1;;;;;7471:24:15;;;7463:62;;;;;-1:-1:-1;;;7463:62:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;7581:8;7536:18;:32;7555:12;:10;:12::i;:::-;-1:-1:-1;;;;;7536:32:15;;;;;;;;;;;;;;;;;-1:-1:-1;7536:32:15;;;:42;;;;;;;;;;;;:53;;-1:-1:-1;;7536:53:15;;;;;;;;;;;7619:12;:10;:12::i;:::-;7604:48;;;;;;;;;;-1:-1:-1;;;;;7604:48:15;;;;;;;;;;;;;;7369:290;;:::o;3784:232:2:-;3981:18;3993:1;:5;;3981:18;;;;3980:29;;3784:232;;;;;;:::o;8522:282:15:-;8653:41;8672:12;:10;:12::i;:::-;8686:7;8653:18;:41::i;:::-;8645:103;;;;-1:-1:-1;;;8645:103:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8758:39;8772:4;8778:2;8782:7;8791:5;8758:13;:39::i;:::-;8522:282;;;;:::o;4800:740::-;4865:13;4898:16;4906:7;4898;:16::i;:::-;4890:76;;;;-1:-1:-1;;;4890:76:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5003:19;;;;:10;:19;;;;;;;;;4977:45;;;;;;-1:-1:-1;;4977:45:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:23;;:45;;;5003:19;4977:45;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5101:8:15;5095:22;4977:45;;-1:-1:-1;;;;5095:22:15;-1:-1:-1;;5095:22:15;;;;;;;;;;;5091:74;;5145:9;-1:-1:-1;5138:16:15;;5091:74;5267:23;;:27;5263:110;;5341:8;5351:9;5324:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5324:37:15;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5324:37:15;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5324:37:15;;;5310:52;;;;;5263:110;5503:8;5513:18;:7;:16;:18::i;:::-;5486:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;5486:46:15;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5486:46:15;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;5486:46:15;;;5472:61;;;4800:740;;;:::o;7725:154::-;-1:-1:-1;;;;;7837:25:15;;;7814:4;7837:25;;;:18;:25;;;;;;;;:35;;;;;;;;;;;;;;;7725:154::o;10237:117::-;10294:4;10317:30;:12;10339:7;10317:30;:21;:30;:::i;590:104:9:-;677:10;590:104;:::o;15893:155:15:-;15958:24;;;;:15;:24;;;;;:29;;-1:-1:-1;;;;;;15958:29:15;-1:-1:-1;;;;;15958:29:15;;;;;;;;:24;;16011:16;15958:24;16011:7;:16::i;:::-;-1:-1:-1;;;;;16002:39:15;;;;;;;;;;;15893:155;;:::o;1102:87:2:-;1139:11;;:43;;-1:-1:-1;;;;;1139:11:2;;;;1168:4;1160:21;1139:43;;;;;:11;:43;:11;:43;1160:21;1139:11;:43;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;1139:43:2;1102:87::o;1216:178:25:-;1368:19;;1386:1;1368:19;;;1216:178::o;1098:112::-;1189:14;;1098:112::o;12070:393:15:-;-1:-1:-1;;;;;12149:16:15;;12141:61;;;;;-1:-1:-1;;;12141:61:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12221:16;12229:7;12221;:16::i;:::-;12220:17;12212:58;;;;;-1:-1:-1;;;12212:58:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;12281:45;12310:1;12314:2;12318:7;12281:20;:45::i;:::-;-1:-1:-1;;;;;12337:17:15;;;;;;:13;:17;;;;;:30;;12359:7;12337:30;:21;:30;:::i;:::-;-1:-1:-1;12378:29:15;:12;12395:7;12404:2;12378:29;:16;:29;:::i;:::-;-1:-1:-1;12423:33:15;;12448:7;;-1:-1:-1;;;;;12423:33:15;;;12440:1;;12423:33;;12440:1;;12423:33;12070:393;;:::o;4022:414:2:-;4144:11;4158:23;4165:5;4172:8;4158:6;:23::i;:::-;4144:37;;4191:11;4205:23;4217:5;4224:3;4205:11;:23::i;:::-;4191:37;;4259:3;4238:13;:18;4252:3;4238:18;;;;;;;;;;;:24;;;;4394:35;4401:10;4413:3;4418;4423:5;4394:35;;;;-1:-1:-1;;;;;4394:35:2;-1:-1:-1;;;;;4394:35:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;4394:35:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4022:414;;;;;:::o;14212:212:15:-;14311:16;14319:7;14311;:16::i;:::-;14303:73;;;;-1:-1:-1;;;14303:73:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;14386:19;;;;:10;:19;;;;;;;;:31;;;;;;;;:::i;7023:121:26:-;7092:7;7118:19;7126:3;7118:7;:19::i;10512:329:15:-;10597:4;10621:16;10629:7;10621;:16::i;:::-;10613:73;;;;-1:-1:-1;;;10613:73:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;10696:13;10712:16;10720:7;10712;:16::i;:::-;10696:32;;10757:5;-1:-1:-1;;;;;10746:16:15;:7;-1:-1:-1;;;;;10746:16:15;;:51;;;;10790:7;-1:-1:-1;;;;;10766:31:15;:20;10778:7;10766:11;:20::i;:::-;-1:-1:-1;;;;;10766:31:15;;10746:51;:87;;;;10801:32;10818:5;10825:7;10801:16;:32::i;:::-;10738:96;10512:329;-1:-1:-1;;;;10512:329:15:o;13506:559::-;13623:4;-1:-1:-1;;;;;13603:24:15;:16;13611:7;13603;:16::i;:::-;-1:-1:-1;;;;;13603:24:15;;13595:78;;;;-1:-1:-1;;;13595:78:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;13691:16:15;;13683:65;;;;-1:-1:-1;;;13683:65:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13759:39;13780:4;13786:2;13790:7;13759:20;:39::i;:::-;13860:29;13877:1;13881:7;13860:8;:29::i;:::-;-1:-1:-1;;;;;13900:19:15;;;;;;:13;:19;;;;;:35;;13927:7;13900:35;:26;:35;:::i;:::-;-1:-1:-1;;;;;;13945:17:15;;;;;;:13;:17;;;;;:30;;13967:7;13945:30;:21;:30;:::i;:::-;-1:-1:-1;13986:29:15;:12;14003:7;14012:2;13986:29;:16;:29;:::i;:::-;;14050:7;14046:2;-1:-1:-1;;;;;14031:27:15;14040:4;-1:-1:-1;;;;;14031:27:15;;;;;;;;;;;13506:559;;;:::o;7649:135:27:-;7720:7;7754:22;7758:3;7770:5;7754:3;:22::i;7472:224:26:-;7552:7;;;;7611:22;7615:3;7627:5;7611:3;:22::i;:::-;7580:53;;;;-1:-1:-1;7472:224:26;-1:-1:-1;;;;;7472:224:26:o;8115:202::-;8222:7;8264:44;8269:3;8289;8295:12;8264:4;:44::i;9665:269:15:-;9778:28;9788:4;9794:2;9798:7;9778:9;:28::i;:::-;9824:48;9847:4;9853:2;9857:7;9866:5;9824:22;:48::i;:::-;9816:111;;;;-1:-1:-1;;;9816:111:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;202:723:28;258:13;475:10;471:51;;-1:-1:-1;501:10:28;;;;;;;;;;;;-1:-1:-1;;;501:10:28;;;;;;471:51;546:5;531:12;585:75;592:9;;585:75;;617:8;;647:2;639:10;;;;585:75;;;669:19;701:6;691:17;;;;;;;;;;;;;;;;;;;;;;;;;21:6:-1;;104:10;691:17:28;87:34:-1;135:17;;-1:-1;691:17:28;-1:-1:-1;761:5:28;;-1:-1:-1;669:39:28;-1:-1:-1;;;734:10:28;;776:112;783:9;;776:112;;849:2;842:4;:9;837:2;:14;826:27;;808:6;815:7;;;;;;;808:15;;;;;;;;;;;:45;-1:-1:-1;;;;;808:45:28;;;;;;;;-1:-1:-1;875:2:28;867:10;;;;776:112;;;-1:-1:-1;911:6:28;202:723;-1:-1:-1;;;;202:723:28:o;6791:149:26:-;6875:4;6898:35;6908:3;6928;6898:9;:35::i;6467:129:27:-;6534:4;6557:32;6562:3;6582:5;6557:4;:32::i;6239:174:26:-;6328:4;6351:55;6356:3;6376;-1:-1:-1;;;;;6390:14:26;;6351:4;:55::i;2833:945:2:-;2934:7;2957:13;3038:5;3055:12;3045:23;3070:12;3021:62;;;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;299:10;344;;263:2;259:12;;;254:3;250:22;-1:-1;;246:30;311:9;;295:26;;;340:21;;377:20;365:33;;3021:62:2;;;;;-1:-1:-1;3021:62:2;;;;;;;-1:-1:-1;3021:62:2;;;26:21:-1;;;22:32;;6:49;;3021:62:2;;;;;2994:103;;;;;;-1:-1:-1;;3201:3:2;3190:14;;-1:-1:-1;3272:18:2;3190:14;-1:-1:-1;3272:9:2;:18::i;:::-;3293:1;3272:22;3298:2;3271:29;3262:39;;:5;:39;;;;;;3305:2;3261:46;3245:62;;3357:13;3391:18;3401:4;3407:1;3391:9;:18::i;:::-;3412:1;3391:22;3417:2;3390:29;3374:46;;3384:1;3375:5;:10;;3374:46;;;;;;3424:2;3373:53;3357:69;;3454:16;3492:18;3502:4;3508:1;3492:9;:18::i;:::-;3513:1;3492:22;3518:2;3491:29;3474:47;;3484:2;3475:5;:11;;3474:47;;;;;;3537:2;3473:66;3454:85;;3569:11;3583:28;3591:8;3601:2;3605:5;3583:7;:28::i;:::-;3569:42;;3627:23;3635:3;3640:2;3644:5;3627:7;:23::i;:::-;3621:29;;3666:26;3674:3;3679:2;3683:8;3666:7;:26::i;:::-;3660:32;2833:945;-1:-1:-1;;;;;;;;;2833:945:2:o;2350:237::-;2525:19;;;;;;;;;;;;;;;;;;;2512:7;27:10:-1;;39:1;23:18;;45:23;;2439:7:2;2512:33;;;;;;;2439:7;;2525:19;2512:33;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;2512:33:2;;;;;;;;;;;-1:-1:-1;2562:7:2;:14;-1:-1:-1;;2562:18:2;2350:237;;;;:::o;6764:135:27:-;6834:4;6857:35;6865:3;6885:5;6857:7;:35::i;4423:201::-;4517:18;;4490:7;;4517:26;-1:-1:-1;4509:73:27;;;;-1:-1:-1;;;4509:73:27;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4599:3;:11;;4611:5;4599:18;;;;;;;;;;;;;;;;4592:25;;4423:201;;;;:::o;4934:274:26:-;5037:19;;5001:7;;;;5037:27;-1:-1:-1;5029:74:26;;;;-1:-1:-1;;;5029:74:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5114:22;5139:3;:12;;5152:5;5139:19;;;;;;;;;;;;;;;;;;5114:44;;5176:5;:10;;;5188:5;:12;;;5168:33;;;;;4934:274;;;;;:::o;5615:315::-;5709:7;5747:17;;;:12;;;:17;;;;;;5797:12;5782:13;5774:36;;;;-1:-1:-1;;;5774:36:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;5774:36:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5863:3;:12;;5887:1;5876:8;:12;5863:26;;;;;;;;;;;;;;;;;;:33;;;5856:40;;;5615:315;;;;;:::o;15298:589:15:-;15418:4;15443:15;:2;-1:-1:-1;;;;;15443:13:15;;:15::i;:::-;15438:58;;-1:-1:-1;15481:4:15;15474:11;;15438:58;15505:23;15531:246;-1:-1:-1;;;15642:12:15;:10;:12::i;:::-;15668:4;15686:7;15707:5;15547:175;;;;;;-1:-1:-1;;;;;15547:175:15;-1:-1:-1;;;;;15547:175:15;;;;;;-1:-1:-1;;;;;15547:175:15;-1:-1:-1;;;;;15547:175:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;;12:14;15547:175:15;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;49:4:-1;39:7;30;26:21;22:32;13:7;6:49;15547:175:15;;;;-1:-1:-1;;;;;15547:175:15;;38:4:-1;29:7;25:18;67:10;61:17;-1:-1;;;;;199:8;192:4;186;182:15;179:29;167:10;160:49;0:215;;;15547:175:15;15531:246;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;15531:15:15;;;:246;;:15;:246;:::i;:::-;15505:272;;15787:13;15814:10;15803:32;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;15803:32:15;-1:-1:-1;;;;;;15853:26:15;-1:-1:-1;;;15853:26:15;;-1:-1:-1;;;15298:589:15;;;;;;:::o;4270:123:26:-;4341:4;4364:17;;;:12;;;;;:17;;;;;;:22;;;4270:123::o;1611:404:27:-;1674:4;1695:21;1705:3;1710:5;1695:9;:21::i;:::-;1690:319;;-1:-1:-1;27:10;;39:1;23:18;;;45:23;;1732:11:27;:23;;;;;;;;;;;;;1912:18;;1890:19;;;:12;;;:19;;;;;;:40;;;;1944:11;;1690:319;-1:-1:-1;1993:5:27;1986:12;;1828:678:26;1904:4;2037:17;;;:12;;;:17;;;;;;2069:13;2065:435;;-1:-1:-1;;2153:38:26;;;;;;;;;;;;;;;;;;27:10:-1;;39:1;23:18;;;45:23;;2135:12:26;:57;;;;;;;;;;;;;;;;;;;;;;;;2347:19;;2327:17;;;:12;;;:17;;;;;;;:39;2380:11;;2065:435;2458:5;2422:3;:12;;2446:1;2435:8;:12;2422:26;;;;;;;;;;;;;;;;;;:33;;:41;;;;2484:5;2477:12;;;;;2183:1512:27;2249:4;2386:19;;;:12;;;:19;;;;;;2420:15;;2416:1273;;2849:18;;-1:-1:-1;;2801:14:27;;;;2849:22;;;;2777:21;;2849:3;;:22;;3131;;;;;;;;;;;;;;3111:42;;3274:9;3245:3;:11;;3257:13;3245:26;;;;;;;;;;;;;;;;;;;:38;;;;3349:23;;;3391:1;3349:12;;;:23;;;;;;3375:17;;;3349:43;;3498:17;;3349:3;;3498:17;;;;;;;;;;;;;;;;;;;;;;3590:3;:12;;:19;3603:5;3590:19;;;;;;;;;;;3583:26;;;3631:4;3624:11;;;;;;;;2416:1273;3673:5;3666:12;;;;;718:610:24;778:4;1239:20;;1084:66;1278:23;;;;;;:42;;-1:-1:-1;;1305:15:24;;;1270:51;-1:-1:-1;;718:610:24:o;3770:194::-;3873:12;3904:53;3927:6;3935:4;3941:1;3944:12;5247;5279:18;5290:6;5279:10;:18::i;:::-;5271:60;;;;;-1:-1:-1;;;5271:60:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;5402:12;5416:23;5443:6;-1:-1:-1;;;;;5443:11:24;5463:8;5474:4;5443:36;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:11;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;5443:36:24;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;19;14:27;;;;67:4;61:11;56:16;;134:4;130:9;123:4;105:16;101:27;97:43;94:1;90:51;84:4;77:65;157:16;154:1;147:27;211:16;208:1;201:4;198:1;194:12;179:49;5:228;;14:27;32:4;27:9;;5:228;;5401:78:24;;;;5493:7;5489:580;;;5523:10;-1:-1:-1;5516:17:24;;-1:-1:-1;5516:17:24;5489:580;5634:17;;:21;5630:429;;5892:10;5886:17;5952:15;5939:10;5935:2;5931:19;5924:44;5841:145;6024:20;;-1:-1:-1;;;6024:20:24;;;;;;;;;;;;;;;;;6031:12;;6024:20;;;;;;;;;;;;;;;27:10:-1;;8:100;;90:11;;;84:18;71:11;;;64:39;52:2;45:10;8:100;;341:4342:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;341:4342:2;;;-1:-1:-1;341:4342:2;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;",
  "source": "pragma solidity ^0.6.2;\n\nimport \"@openzeppelin/contracts/token/ERC721/ERC721.sol\";\nimport \"@openzeppelin/contracts/utils/Counters.sol\";\n\n/**\n    Author: Chris Markov 2020\n    Project Aurbit\n\n    The Avatar Contract for the Aurbit Strategy Game.\n\n    Symbol: AURA\n\n    https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md\n\n */\ncontract AvatarAUR is ERC721 {\n    using Counters for Counters.Counter;\n    Counters.Counter private _tokenIds;\n    address payable owner;\n    uint256 createAvatarFee = 10**16;\n    //uint dnasize = 16;\n    //uint dnamod = 10 ** dnasize;\n    address payable govContract;\n    struct Avatar {\n        string name;\n        uint256 dna;\n    }\n\n    Avatar[] public avatars;\n    mapping(uint256 => uint256) public TokenIDtoAvID;\n\n    event Minted(address sender, uint256 dna, uint256 avatarId, string name);\n    event FeeUpdated(uint256 newFee);\n\n    constructor(address payable _govContract)\n        public\n        ERC721(\"Aurbit Avatar\", \"AURA\")\n    {\n        govContract = _govContract;\n        owner = msg.sender; //set owner addres as sender on deploy\n    }\n\n    function forward() private {\n        govContract.transfer(address(this).balance);\n    }\n\n    function mintAvatar(string memory name, uint256 _userDNA)\n        public\n        payable\n        returns (uint256)\n    {\n        require(msg.value == createAvatarFee, \"pay fee\");\n        forward(); //enforce fee of 0.01 and forward to owner. bad way?\n        _tokenIds.increment();\n        uint256 newItemId = _tokenIds.current();\n        _mint(msg.sender, newItemId);\n        //uint dna =\n        _birthAvatar(name, newItemId, _userDNA);\n        _setTokenURI(\n            newItemId,\n            string(\n                abi.encodePacked(\n                    '{\"name\": \"',\n                    name,\n                    '\", \"description\": \"',\n                    \"Aurbit avatar\",\n                    '\", \"image\": \"',\n                    \"sample image uri\",\n                    '\"}'\n                )\n            )\n        );\n        //sample description and sample image uri should be replaced with variables, didnt bother declaring them yet\n        return newItemId;\n    }\n\n    function setcreateAvatarFee(uint256 _newfee) public {\n        require(govContract == msg.sender);\n        createAvatarFee = _newfee;\n        emit FeeUpdated(_newfee);\n    }\n\n    function storeAvatar(string memory _name, uint256 _dna)\n        private\n        returns (uint256)\n    {\n        //store in array of avatars, return index\n        avatars.push(Avatar(_name, _dna));\n        return avatars.length - 1;\n    }\n\n    function pullcrumb(uint8 b, uint8 pos) public pure returns (uint8) {\n        //pulls bits in 2 bit pairs i call crumbs\n        //8 bits a byte 4 bits a niddle 2 bits a crumb.\n        return ((b & (3 << (2 * pos))) >> (2 * pos));\n    }\n\n    function _mkDNA(string memory _name, uint256 _userDNA)\n        private\n        view\n        returns (uint256)\n    {\n        uint256 prand = uint256(\n            keccak256(\n                abi.encodePacked(_name, blockhash(block.number), block.number)\n            )\n        );\n        //uint prand = uint(blockhash(block.number));\n        uint8 race = uint8(_userDNA & 255); //pulls first byte, the race\n\n        uint256 intel = (prand % ((pullcrumb(race, 0) + 1) * 15)) + 40; //first 2 bits littleendian gives intel\n        uint256 vital = ((prand >> 8) % ((pullcrumb(race, 1) + 1) * 15)) + 40; //second is vital\n        uint256 strength = ((prand >> 16) % ((pullcrumb(race, 2) + 1) * 15)) +\n            40; //third is strength\n        uint256 out = setbyte(_userDNA, 15, intel);\n        out = setbyte(out, 16, vital);\n        out = setbyte(out, 17, strength); //this is the first of the batch when returned as array...\n        return out;\n    }\n\n    function setbyte(\n        uint256 _indat,\n        uint16 k,\n        uint256 _setdat\n    ) public pure returns (uint256) {\n        //set kth byte from the right in _indat to _setdat\n        return (_setdat << (8 * k)) + _indat;\n    }\n\n    function _birthAvatar(\n        string memory _name,\n        uint256 _id,\n        uint256 _userDNA\n    ) private {\n        uint256 dna = _mkDNA(_name, _userDNA);\n        uint256 aid = storeAvatar(_name, dna);\n        TokenIDtoAvID[_id] = aid;\n        //return dna; could return DNA to put in description, but parsing numbers to string is a little dumb i think\n        emit Minted(msg.sender, dna, aid, _name);\n    }\n\n    function getDNA(uint256 tid) public view returns (uint256) {\n        //gets DNA from token ID. not sure the exact proper error handling for this.\n        require(tid <= avatars.length);\n        return avatars[TokenIDtoAvID[tid]].dna;\n    }\n}\n",
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
        "sourceUnit": 4739,
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
        "sourceUnit": 6408,
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
              "referencedDeclaration": 4738,
              "src": "363:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4738",
                "typeString": "contract ERC721"
              }
            },
            "id": 660,
            "nodeType": "InheritanceSpecifier",
            "src": "363:6:2"
          }
        ],
        "contractDependencies": [
          3437,
          3490,
          3500,
          4738,
          4841,
          4868,
          4891
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit\nThe Avatar Contract for the Aurbit Strategy Game.\nSymbol: AURA\nhttps://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md",
        "fullyImplemented": true,
        "id": 1074,
        "linearizedBaseContracts": [
          1074,
          4738,
          4868,
          4891,
          4841,
          3490,
          3500,
          3437
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
              "referencedDeclaration": 6407,
              "src": "382:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$6407",
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
              "referencedDeclaration": 6367,
              "src": "395:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6367_storage_ptr",
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
              "typeIdentifier": "t_struct$_Counter_$6367_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 664,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6367,
              "src": "417:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6367_storage_ptr",
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
            "id": 672,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "484:32:2",
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
                "src": "510:2:2",
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
                "src": "514:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "510:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 674,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "582:27:2",
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
              "src": "582:15:2",
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
                "src": "639:11:2",
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
                  "src": "639:6:2",
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
                "src": "660:11:2",
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
                  "src": "660:7:2",
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
            "src": "615:63:2",
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
            "src": "684:23:2",
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
                "src": "684:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$679_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 681,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "684:8:2",
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
            "src": "713:48:2",
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
                "src": "721:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "713:27:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 684,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "732:7:2",
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
                  "src": "781:14:2",
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
                    "src": "781:7:2",
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
                  "src": "797:11:2",
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
                    "src": "797:7:2",
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
                  "src": "810:16:2",
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
                    "src": "810:7:2",
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
                  "src": "828:11:2",
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
                    "src": "828:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "780:60:2"
            },
            "src": "768:73:2"
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
                  "src": "863:14:2",
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
                    "src": "863:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:16:2"
            },
            "src": "846:33:2"
          },
          {
            "body": {
              "id": 718,
              "nodeType": "Block",
              "src": "986:110:2",
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
                      "src": "996:11:2",
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
                      "src": "1010:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "996:26:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 712,
                  "nodeType": "ExpressionStatement",
                  "src": "996:26:2"
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
                      "src": "1032:5:2",
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
                        "src": "1040:3:2",
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
                      "src": "1040:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1032:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 717,
                  "nodeType": "ExpressionStatement",
                  "src": "1032:18:2"
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
                    "src": "957:15:2",
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
                    "src": "974:6:2",
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
                  "referencedDeclaration": 4738,
                  "src": "950:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4738_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "950:31:2"
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
                  "src": "897:28:2",
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
                    "src": "897:15:2",
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
              "src": "896:30:2"
            },
            "returnParameters": {
              "id": 708,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "986:0:2"
            },
            "scope": 1074,
            "src": "885:211:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 732,
              "nodeType": "Block",
              "src": "1129:60:2",
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
                              "src": "1168:4:2",
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
                            "src": "1160:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 725,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1160:7:2",
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
                          "src": "1160:13:2",
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
                        "src": "1160:21:2",
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
                        "src": "1139:11:2",
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
                      "src": "1139:20:2",
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
                    "src": "1139:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 731,
                  "nodeType": "ExpressionStatement",
                  "src": "1139:43:2"
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
              "src": "1118:2:2"
            },
            "returnParameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1129:0:2"
            },
            "scope": 1074,
            "src": "1102:87:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 795,
              "nodeType": "Block",
              "src": "1314:852:2",
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
                            "src": "1332:3:2",
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
                          "src": "1332:9:2",
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
                          "src": "1345:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1332:28:2",
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
                        "src": "1362:9:2",
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
                      "src": "1324:7:2",
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
                    "src": "1324:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "1324:48:2"
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
                      "src": "1382:7:2",
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
                    "src": "1382:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 752,
                  "nodeType": "ExpressionStatement",
                  "src": "1382:9:2"
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
                        "src": "1454:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6367_storage",
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
                      "referencedDeclaration": 6390,
                      "src": "1454:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$6367_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$6367_storage_ptr_$",
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
                    "src": "1454:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 757,
                  "nodeType": "ExpressionStatement",
                  "src": "1454:21:2"
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
                      "src": "1485:17:2",
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
                        "src": "1485:7:2",
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
                        "src": "1505:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6367_storage",
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
                      "referencedDeclaration": 6378,
                      "src": "1505:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$6367_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$6367_storage_ptr_$",
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
                    "src": "1505:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1485:39:2"
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
                          "src": "1540:3:2",
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
                        "src": "1540:10:2",
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
                        "src": "1552:9:2",
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
                      "referencedDeclaration": 4480,
                      "src": "1534:5:2",
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
                    "src": "1534:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 769,
                  "nodeType": "ExpressionStatement",
                  "src": "1534:28:2"
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
                        "src": "1606:4:2",
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
                        "src": "1612:9:2",
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
                        "src": "1623:8:2",
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
                      "src": "1593:12:2",
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
                    "src": "1593:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 775,
                  "nodeType": "ExpressionStatement",
                  "src": "1593:39:2"
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
                        "src": "1668:9:2",
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
                                "src": "1753:12:2",
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
                                "src": "1787:4:2",
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
                                "src": "1813:21:2",
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
                                "src": "1856:15:2",
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
                                "src": "1893:15:2",
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
                                "src": "1930:18:2",
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
                                "src": "1970:4:2",
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
                                "src": "1715:3:2",
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
                              "src": "1715:16:2",
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
                            "src": "1715:277:2",
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
                          "src": "1691:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 778,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1691:6:2",
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
                        "src": "1691:315:2",
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
                      "referencedDeclaration": 4638,
                      "src": "1642:12:2",
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
                    "src": "1642:374:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 792,
                  "nodeType": "ExpressionStatement",
                  "src": "1642:374:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 793,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 759,
                    "src": "2150:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 741,
                  "id": 794,
                  "nodeType": "Return",
                  "src": "2143:16:2"
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
                  "src": "1215:18:2",
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
                    "src": "1215:6:2",
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
                  "src": "1235:16:2",
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
                    "src": "1235:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1214:38:2"
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
                  "src": "1301:7:2",
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
                    "src": "1301:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1300:9:2"
            },
            "scope": 1074,
            "src": "1195:971:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 816,
              "nodeType": "Block",
              "src": "2224:120:2",
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
                          "src": "2242:11:2",
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
                            "src": "2257:3:2",
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
                          "src": "2257:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2242:25:2",
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
                      "src": "2234:7:2",
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
                    "src": "2234:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 807,
                  "nodeType": "ExpressionStatement",
                  "src": "2234:34:2"
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
                      "src": "2278:15:2",
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
                      "src": "2296:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2278:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 811,
                  "nodeType": "ExpressionStatement",
                  "src": "2278:25:2"
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
                        "src": "2329:7:2",
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
                      "src": "2318:10:2",
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
                    "src": "2318:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 815,
                  "nodeType": "EmitStatement",
                  "src": "2313:24:2"
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
                  "src": "2200:15:2",
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
                    "src": "2200:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2199:17:2"
            },
            "returnParameters": {
              "id": 800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2224:0:2"
            },
            "scope": 1074,
            "src": "2172:172:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 840,
              "nodeType": "Block",
              "src": "2452:135:2",
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
                            "src": "2532:5:2",
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
                            "src": "2539:4:2",
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
                          "src": "2525:6:2",
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
                        "src": "2525:19:2",
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
                        "src": "2512:7:2",
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
                      "src": "2512:12:2",
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
                    "src": "2512:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 834,
                  "nodeType": "ExpressionStatement",
                  "src": "2512:33:2"
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
                        "src": "2562:7:2",
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
                      "src": "2562:14:2",
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
                      "src": "2579:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2562:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 825,
                  "id": 839,
                  "nodeType": "Return",
                  "src": "2555:25:2"
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
                  "src": "2371:19:2",
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
                    "src": "2371:6:2",
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
                  "src": "2392:12:2",
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
                    "src": "2392:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2370:35:2"
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
                  "src": "2439:7:2",
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
                    "src": "2439:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2438:9:2"
            },
            "scope": 1074,
            "src": "2350:237:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 867,
              "nodeType": "Block",
              "src": "2660:167:2",
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
                                "src": "2785:1:2",
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
                                      "src": "2790:1:2",
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
                                            "src": "2796:1:2",
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
                                            "src": "2800:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          "src": "2796:7:2",
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
                                      "src": "2795:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "2790:14:2",
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
                                "src": "2789:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2785:20:2",
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
                          "src": "2784:22:2",
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
                                "src": "2811:1:2",
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
                                "src": "2815:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2811:7:2",
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
                          "src": "2810:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2784:35:2",
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
                    "src": "2783:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 849,
                  "id": 866,
                  "nodeType": "Return",
                  "src": "2776:44:2"
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
                  "src": "2612:7:2",
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
                    "src": "2612:5:2",
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
                  "src": "2621:9:2",
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
                    "src": "2621:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2611:20:2"
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
                  "src": "2653:5:2",
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
                    "src": "2653:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2652:7:2"
            },
            "scope": 1074,
            "src": "2593:234:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 990,
              "nodeType": "Block",
              "src": "2947:831:2",
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
                      "src": "2957:13:2",
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
                        "src": "2957:7:2",
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
                                "src": "3038:5:2",
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
                                      "src": "3055:5:2",
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
                                    "src": "3055:12:2",
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
                                  "src": "3045:9:2",
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
                                "src": "3045:23:2",
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
                                  "src": "3070:5:2",
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
                                "src": "3070:12:2",
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
                                "src": "3021:3:2",
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
                              "src": "3021:16:2",
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
                            "src": "3021:62:2",
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
                          "src": "2994:9:2",
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
                        "src": "2994:103:2",
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
                      "src": "2973:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 879,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2973:7:2",
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
                    "src": "2973:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2957:150:2"
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
                      "src": "3171:10:2",
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
                        "src": "3171:5:2",
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
                          "src": "3190:8:2",
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
                          "src": "3201:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "3190:14:2",
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
                      "src": "3184:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 897,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "3184:5:2",
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
                    "src": "3184:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3171:34:2"
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
                      "src": "3245:13:2",
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
                        "src": "3245:7:2",
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
                            "src": "3262:5:2",
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
                                            "src": "3282:4:2",
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
                                            "src": "3288:1:2",
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
                                          "src": "3272:9:2",
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
                                        "src": "3272:18:2",
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
                                        "src": "3293:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3272:22:2",
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
                                  "src": "3271:24:2",
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
                                  "src": "3298:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3271:29:2",
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
                            "src": "3270:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3262:39:2",
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
                      "src": "3261:41:2",
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
                      "src": "3305:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3261:46:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3245:62:2"
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
                      "src": "3357:13:2",
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
                        "src": "3357:7:2",
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
                                  "src": "3375:5:2",
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
                                  "src": "3384:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "3375:10:2",
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
                            "src": "3374:12:2",
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
                                            "src": "3401:4:2",
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
                                            "src": "3407:1:2",
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
                                          "src": "3391:9:2",
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
                                        "src": "3391:18:2",
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
                                        "src": "3412:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3391:22:2",
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
                                  "src": "3390:24:2",
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
                                  "src": "3417:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3390:29:2",
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
                            "src": "3389:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3374:46:2",
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
                      "src": "3373:48:2",
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
                      "src": "3424:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3373:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3357:69:2"
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
                      "src": "3454:16:2",
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
                        "src": "3454:7:2",
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
                                  "src": "3475:5:2",
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
                                  "src": "3484:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "3475:11:2",
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
                            "src": "3474:13:2",
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
                                            "src": "3502:4:2",
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
                                            "src": "3508:1:2",
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
                                          "src": "3492:9:2",
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
                                        "src": "3492:18:2",
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
                                        "src": "3513:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3492:22:2",
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
                                  "src": "3491:24:2",
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
                                  "src": "3518:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3491:29:2",
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
                            "src": "3490:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3474:47:2",
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
                      "src": "3473:49:2",
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
                      "src": "3537:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3473:66:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3454:85:2"
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
                      "src": "3569:11:2",
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
                        "src": "3569:7:2",
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
                        "src": "3591:8:2",
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
                        "src": "3601:2:2",
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
                        "src": "3605:5:2",
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
                      "src": "3583:7:2",
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
                    "src": "3583:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3569:42:2"
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
                      "src": "3621:3:2",
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
                          "src": "3635:3:2",
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
                          "src": "3640:2:2",
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
                          "src": "3644:5:2",
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
                        "src": "3627:7:2",
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
                      "src": "3627:23:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3621:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 979,
                  "nodeType": "ExpressionStatement",
                  "src": "3621:29:2"
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
                      "src": "3660:3:2",
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
                          "src": "3674:3:2",
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
                          "src": "3679:2:2",
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
                          "src": "3683:8:2",
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
                        "src": "3666:7:2",
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
                      "src": "3666:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3660:32:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 987,
                  "nodeType": "ExpressionStatement",
                  "src": "3660:32:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 988,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 965,
                    "src": "3768:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 876,
                  "id": 989,
                  "nodeType": "Return",
                  "src": "3761:10:2"
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
                  "src": "2849:19:2",
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
                    "src": "2849:6:2",
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
                  "src": "2870:16:2",
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
                    "src": "2870:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2848:39:2"
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
                  "src": "2934:7:2",
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
                    "src": "2934:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2933:9:2"
            },
            "scope": 1074,
            "src": "2833:945:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1012,
              "nodeType": "Block",
              "src": "3904:112:2",
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
                            "src": "3981:7:2",
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
                                  "src": "3993:1:2",
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
                                  "src": "3997:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "3993:5:2",
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
                            "src": "3992:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3981:18:2",
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
                      "src": "3980:20:2",
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
                      "src": "4003:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3980:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1001,
                  "id": 1011,
                  "nodeType": "Return",
                  "src": "3973:36:2"
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
                  "src": "3810:14:2",
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
                    "src": "3810:7:2",
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
                  "src": "3834:8:2",
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
                    "src": "3834:6:2",
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
                  "src": "3852:15:2",
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
                    "src": "3852:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3800:73:2"
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
                  "src": "3895:7:2",
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
                    "src": "3895:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3894:9:2"
            },
            "scope": 1074,
            "src": "3784:232:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1050,
              "nodeType": "Block",
              "src": "4134:302:2",
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
                      "src": "4144:11:2",
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
                        "src": "4144:7:2",
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
                        "src": "4165:5:2",
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
                        "src": "4172:8:2",
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
                      "src": "4158:6:2",
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
                    "src": "4158:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4144:37:2"
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
                      "src": "4191:11:2",
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
                        "src": "4191:7:2",
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
                        "src": "4217:5:2",
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
                        "src": "4224:3:2",
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
                      "src": "4205:11:2",
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
                    "src": "4205:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4191:37:2"
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
                        "src": "4238:13:2",
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
                        "src": "4252:3:2",
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
                      "src": "4238:18:2",
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
                      "src": "4259:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4238:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1041,
                  "nodeType": "ExpressionStatement",
                  "src": "4238:24:2"
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
                          "src": "4401:3:2",
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
                        "src": "4401:10:2",
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
                        "src": "4413:3:2",
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
                        "src": "4418:3:2",
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
                        "src": "4423:5:2",
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
                      "src": "4394:6:2",
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
                    "src": "4394:35:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1049,
                  "nodeType": "EmitStatement",
                  "src": "4389:40:2"
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
                  "src": "4053:19:2",
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
                    "src": "4053:6:2",
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
                  "src": "4082:11:2",
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
                    "src": "4082:7:2",
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
                  "src": "4103:16:2",
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
                    "src": "4103:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4043:82:2"
            },
            "returnParameters": {
              "id": 1021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4134:0:2"
            },
            "scope": 1074,
            "src": "4022:414:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1072,
              "nodeType": "Block",
              "src": "4501:180:2",
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
                          "src": "4604:3:2",
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
                            "src": "4611:7:2",
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
                          "src": "4611:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4604:21:2",
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
                      "src": "4596:7:2",
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
                    "src": "4596:30:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1064,
                  "nodeType": "ExpressionStatement",
                  "src": "4596:30:2"
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
                        "src": "4643:7:2",
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
                          "src": "4651:13:2",
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
                          "src": "4665:3:2",
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
                        "src": "4651:18:2",
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
                      "src": "4643:27:2",
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
                    "src": "4643:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1057,
                  "id": 1071,
                  "nodeType": "Return",
                  "src": "4636:38:2"
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
                  "src": "4458:11:2",
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
                    "src": "4458:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4457:13:2"
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
                  "src": "4492:7:2",
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
                    "src": "4492:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4491:9:2"
            },
            "scope": 1074,
            "src": "4442:239:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1075,
        "src": "341:4342:2"
      }
    ],
    "src": "0:4684:2"
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
        "sourceUnit": 4739,
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
        "sourceUnit": 6408,
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
              "referencedDeclaration": 4738,
              "src": "363:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC721_$4738",
                "typeString": "contract ERC721"
              }
            },
            "id": 660,
            "nodeType": "InheritanceSpecifier",
            "src": "363:6:2"
          }
        ],
        "contractDependencies": [
          3437,
          3490,
          3500,
          4738,
          4841,
          4868,
          4891
        ],
        "contractKind": "contract",
        "documentation": "Author: Chris Markov 2020\nProject Aurbit\nThe Avatar Contract for the Aurbit Strategy Game.\nSymbol: AURA\nhttps://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md",
        "fullyImplemented": true,
        "id": 1074,
        "linearizedBaseContracts": [
          1074,
          4738,
          4868,
          4891,
          4841,
          3490,
          3500,
          3437
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
              "referencedDeclaration": 6407,
              "src": "382:8:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Counters_$6407",
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
              "referencedDeclaration": 6367,
              "src": "395:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6367_storage_ptr",
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
              "typeIdentifier": "t_struct$_Counter_$6367_storage",
              "typeString": "struct Counters.Counter"
            },
            "typeName": {
              "contractScope": null,
              "id": 664,
              "name": "Counters.Counter",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 6367,
              "src": "417:16:2",
              "typeDescriptions": {
                "typeIdentifier": "t_struct$_Counter_$6367_storage_ptr",
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
            "id": 672,
            "name": "createAvatarFee",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "484:32:2",
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
                "src": "510:2:2",
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
                "src": "514:2:2",
                "subdenomination": null,
                "typeDescriptions": {
                  "typeIdentifier": "t_rational_16_by_1",
                  "typeString": "int_const 16"
                },
                "value": "16"
              },
              "src": "510:6:2",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_10000000000000000_by_1",
                "typeString": "int_const 10000000000000000"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 674,
            "name": "govContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 1074,
            "src": "582:27:2",
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
              "src": "582:15:2",
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
                "src": "639:11:2",
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
                  "src": "639:6:2",
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
                "src": "660:11:2",
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
                  "src": "660:7:2",
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
            "src": "615:63:2",
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
            "src": "684:23:2",
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
                "src": "684:6:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_Avatar_$679_storage_ptr",
                  "typeString": "struct AvatarAUR.Avatar"
                }
              },
              "id": 681,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "684:8:2",
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
            "src": "713:48:2",
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
                "src": "721:7:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "713:27:2",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_uint256_$",
                "typeString": "mapping(uint256 => uint256)"
              },
              "valueType": {
                "id": 684,
                "name": "uint256",
                "nodeType": "ElementaryTypeName",
                "src": "732:7:2",
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
                  "src": "781:14:2",
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
                    "src": "781:7:2",
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
                  "src": "797:11:2",
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
                    "src": "797:7:2",
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
                  "src": "810:16:2",
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
                    "src": "810:7:2",
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
                  "src": "828:11:2",
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
                    "src": "828:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "780:60:2"
            },
            "src": "768:73:2"
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
                  "src": "863:14:2",
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
                    "src": "863:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "862:16:2"
            },
            "src": "846:33:2"
          },
          {
            "body": {
              "id": 718,
              "nodeType": "Block",
              "src": "986:110:2",
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
                      "src": "996:11:2",
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
                      "src": "1010:12:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "996:26:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 712,
                  "nodeType": "ExpressionStatement",
                  "src": "996:26:2"
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
                      "src": "1032:5:2",
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
                        "src": "1040:3:2",
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
                      "src": "1040:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "1032:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 717,
                  "nodeType": "ExpressionStatement",
                  "src": "1032:18:2"
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
                    "src": "957:15:2",
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
                    "src": "974:6:2",
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
                  "referencedDeclaration": 4738,
                  "src": "950:6:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC721_$4738_$",
                    "typeString": "type(contract ERC721)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "950:31:2"
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
                  "src": "897:28:2",
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
                    "src": "897:15:2",
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
              "src": "896:30:2"
            },
            "returnParameters": {
              "id": 708,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "986:0:2"
            },
            "scope": 1074,
            "src": "885:211:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 732,
              "nodeType": "Block",
              "src": "1129:60:2",
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
                              "src": "1168:4:2",
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
                            "src": "1160:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 725,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "1160:7:2",
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
                          "src": "1160:13:2",
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
                        "src": "1160:21:2",
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
                        "src": "1139:11:2",
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
                      "src": "1139:20:2",
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
                    "src": "1139:43:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 731,
                  "nodeType": "ExpressionStatement",
                  "src": "1139:43:2"
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
              "src": "1118:2:2"
            },
            "returnParameters": {
              "id": 721,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1129:0:2"
            },
            "scope": 1074,
            "src": "1102:87:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 795,
              "nodeType": "Block",
              "src": "1314:852:2",
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
                            "src": "1332:3:2",
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
                          "src": "1332:9:2",
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
                          "src": "1345:15:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1332:28:2",
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
                        "src": "1362:9:2",
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
                      "src": "1324:7:2",
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
                    "src": "1324:48:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "1324:48:2"
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
                      "src": "1382:7:2",
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
                    "src": "1382:9:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 752,
                  "nodeType": "ExpressionStatement",
                  "src": "1382:9:2"
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
                        "src": "1454:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6367_storage",
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
                      "referencedDeclaration": 6390,
                      "src": "1454:19:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_struct$_Counter_$6367_storage_ptr_$returns$__$bound_to$_t_struct$_Counter_$6367_storage_ptr_$",
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
                    "src": "1454:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 757,
                  "nodeType": "ExpressionStatement",
                  "src": "1454:21:2"
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
                      "src": "1485:17:2",
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
                        "src": "1485:7:2",
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
                        "src": "1505:9:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_Counter_$6367_storage",
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
                      "referencedDeclaration": 6378,
                      "src": "1505:17:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_view$_t_struct$_Counter_$6367_storage_ptr_$returns$_t_uint256_$bound_to$_t_struct$_Counter_$6367_storage_ptr_$",
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
                    "src": "1505:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1485:39:2"
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
                          "src": "1540:3:2",
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
                        "src": "1540:10:2",
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
                        "src": "1552:9:2",
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
                      "referencedDeclaration": 4480,
                      "src": "1534:5:2",
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
                    "src": "1534:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 769,
                  "nodeType": "ExpressionStatement",
                  "src": "1534:28:2"
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
                        "src": "1606:4:2",
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
                        "src": "1612:9:2",
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
                        "src": "1623:8:2",
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
                      "src": "1593:12:2",
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
                    "src": "1593:39:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 775,
                  "nodeType": "ExpressionStatement",
                  "src": "1593:39:2"
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
                        "src": "1668:9:2",
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
                                "src": "1753:12:2",
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
                                "src": "1787:4:2",
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
                                "src": "1813:21:2",
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
                                "src": "1856:15:2",
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
                                "src": "1893:15:2",
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
                                "src": "1930:18:2",
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
                                "src": "1970:4:2",
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
                                "src": "1715:3:2",
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
                              "src": "1715:16:2",
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
                            "src": "1715:277:2",
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
                          "src": "1691:6:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_string_storage_ptr_$",
                            "typeString": "type(string storage pointer)"
                          },
                          "typeName": {
                            "id": 778,
                            "name": "string",
                            "nodeType": "ElementaryTypeName",
                            "src": "1691:6:2",
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
                        "src": "1691:315:2",
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
                      "referencedDeclaration": 4638,
                      "src": "1642:12:2",
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
                    "src": "1642:374:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 792,
                  "nodeType": "ExpressionStatement",
                  "src": "1642:374:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 793,
                    "name": "newItemId",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 759,
                    "src": "2150:9:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 741,
                  "id": 794,
                  "nodeType": "Return",
                  "src": "2143:16:2"
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
                  "src": "1215:18:2",
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
                    "src": "1215:6:2",
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
                  "src": "1235:16:2",
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
                    "src": "1235:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1214:38:2"
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
                  "src": "1301:7:2",
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
                    "src": "1301:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1300:9:2"
            },
            "scope": 1074,
            "src": "1195:971:2",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 816,
              "nodeType": "Block",
              "src": "2224:120:2",
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
                          "src": "2242:11:2",
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
                            "src": "2257:3:2",
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
                          "src": "2257:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address_payable",
                            "typeString": "address payable"
                          }
                        },
                        "src": "2242:25:2",
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
                      "src": "2234:7:2",
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
                    "src": "2234:34:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 807,
                  "nodeType": "ExpressionStatement",
                  "src": "2234:34:2"
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
                      "src": "2278:15:2",
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
                      "src": "2296:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "2278:25:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 811,
                  "nodeType": "ExpressionStatement",
                  "src": "2278:25:2"
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
                        "src": "2329:7:2",
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
                      "src": "2318:10:2",
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
                    "src": "2318:19:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 815,
                  "nodeType": "EmitStatement",
                  "src": "2313:24:2"
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
                  "src": "2200:15:2",
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
                    "src": "2200:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2199:17:2"
            },
            "returnParameters": {
              "id": 800,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2224:0:2"
            },
            "scope": 1074,
            "src": "2172:172:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 840,
              "nodeType": "Block",
              "src": "2452:135:2",
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
                            "src": "2532:5:2",
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
                            "src": "2539:4:2",
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
                          "src": "2525:6:2",
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
                        "src": "2525:19:2",
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
                        "src": "2512:7:2",
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
                      "src": "2512:12:2",
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
                    "src": "2512:33:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 834,
                  "nodeType": "ExpressionStatement",
                  "src": "2512:33:2"
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
                        "src": "2562:7:2",
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
                      "src": "2562:14:2",
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
                      "src": "2579:1:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "2562:18:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 825,
                  "id": 839,
                  "nodeType": "Return",
                  "src": "2555:25:2"
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
                  "src": "2371:19:2",
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
                    "src": "2371:6:2",
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
                  "src": "2392:12:2",
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
                    "src": "2392:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2370:35:2"
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
                  "src": "2439:7:2",
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
                    "src": "2439:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2438:9:2"
            },
            "scope": 1074,
            "src": "2350:237:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 867,
              "nodeType": "Block",
              "src": "2660:167:2",
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
                                "src": "2785:1:2",
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
                                      "src": "2790:1:2",
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
                                            "src": "2796:1:2",
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
                                            "src": "2800:3:2",
                                            "typeDescriptions": {
                                              "typeIdentifier": "t_uint8",
                                              "typeString": "uint8"
                                            }
                                          },
                                          "src": "2796:7:2",
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
                                      "src": "2795:9:2",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint8",
                                        "typeString": "uint8"
                                      }
                                    },
                                    "src": "2790:14:2",
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
                                "src": "2789:16:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2785:20:2",
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
                          "src": "2784:22:2",
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
                                "src": "2811:1:2",
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
                                "src": "2815:3:2",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint8",
                                  "typeString": "uint8"
                                }
                              },
                              "src": "2811:7:2",
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
                          "src": "2810:9:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint8",
                            "typeString": "uint8"
                          }
                        },
                        "src": "2784:35:2",
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
                    "src": "2783:37:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "functionReturnParameters": 849,
                  "id": 866,
                  "nodeType": "Return",
                  "src": "2776:44:2"
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
                  "src": "2612:7:2",
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
                    "src": "2612:5:2",
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
                  "src": "2621:9:2",
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
                    "src": "2621:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2611:20:2"
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
                  "src": "2653:5:2",
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
                    "src": "2653:5:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2652:7:2"
            },
            "scope": 1074,
            "src": "2593:234:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 990,
              "nodeType": "Block",
              "src": "2947:831:2",
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
                      "src": "2957:13:2",
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
                        "src": "2957:7:2",
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
                                "src": "3038:5:2",
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
                                      "src": "3055:5:2",
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
                                    "src": "3055:12:2",
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
                                  "src": "3045:9:2",
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
                                "src": "3045:23:2",
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
                                  "src": "3070:5:2",
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
                                "src": "3070:12:2",
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
                                "src": "3021:3:2",
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
                              "src": "3021:16:2",
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
                            "src": "3021:62:2",
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
                          "src": "2994:9:2",
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
                        "src": "2994:103:2",
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
                      "src": "2973:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint256_$",
                        "typeString": "type(uint256)"
                      },
                      "typeName": {
                        "id": 879,
                        "name": "uint256",
                        "nodeType": "ElementaryTypeName",
                        "src": "2973:7:2",
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
                    "src": "2973:134:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "2957:150:2"
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
                      "src": "3171:10:2",
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
                        "src": "3171:5:2",
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
                          "src": "3190:8:2",
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
                          "src": "3201:3:2",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_255_by_1",
                            "typeString": "int_const 255"
                          },
                          "value": "255"
                        },
                        "src": "3190:14:2",
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
                      "src": "3184:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_type$_t_uint8_$",
                        "typeString": "type(uint8)"
                      },
                      "typeName": {
                        "id": 897,
                        "name": "uint8",
                        "nodeType": "ElementaryTypeName",
                        "src": "3184:5:2",
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
                    "src": "3184:21:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3171:34:2"
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
                      "src": "3245:13:2",
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
                        "src": "3245:7:2",
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
                            "src": "3262:5:2",
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
                                            "src": "3282:4:2",
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
                                            "src": "3288:1:2",
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
                                          "src": "3272:9:2",
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
                                        "src": "3272:18:2",
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
                                        "src": "3293:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3272:22:2",
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
                                  "src": "3271:24:2",
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
                                  "src": "3298:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3271:29:2",
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
                            "src": "3270:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3262:39:2",
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
                      "src": "3261:41:2",
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
                      "src": "3305:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3261:46:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3245:62:2"
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
                      "src": "3357:13:2",
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
                        "src": "3357:7:2",
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
                                  "src": "3375:5:2",
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
                                  "src": "3384:1:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_8_by_1",
                                    "typeString": "int_const 8"
                                  },
                                  "value": "8"
                                },
                                "src": "3375:10:2",
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
                            "src": "3374:12:2",
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
                                            "src": "3401:4:2",
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
                                            "src": "3407:1:2",
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
                                          "src": "3391:9:2",
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
                                        "src": "3391:18:2",
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
                                        "src": "3412:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3391:22:2",
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
                                  "src": "3390:24:2",
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
                                  "src": "3417:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3390:29:2",
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
                            "src": "3389:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3374:46:2",
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
                      "src": "3373:48:2",
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
                      "src": "3424:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3373:53:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3357:69:2"
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
                      "src": "3454:16:2",
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
                        "src": "3454:7:2",
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
                                  "src": "3475:5:2",
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
                                  "src": "3484:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_16_by_1",
                                    "typeString": "int_const 16"
                                  },
                                  "value": "16"
                                },
                                "src": "3475:11:2",
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
                            "src": "3474:13:2",
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
                                            "src": "3502:4:2",
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
                                            "src": "3508:1:2",
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
                                          "src": "3492:9:2",
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
                                        "src": "3492:18:2",
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
                                        "src": "3513:1:2",
                                        "subdenomination": null,
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_rational_1_by_1",
                                          "typeString": "int_const 1"
                                        },
                                        "value": "1"
                                      },
                                      "src": "3492:22:2",
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
                                  "src": "3491:24:2",
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
                                  "src": "3518:2:2",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_15_by_1",
                                    "typeString": "int_const 15"
                                  },
                                  "value": "15"
                                },
                                "src": "3491:29:2",
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
                            "src": "3490:31:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint8",
                              "typeString": "uint8"
                            }
                          },
                          "src": "3474:47:2",
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
                      "src": "3473:49:2",
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
                      "src": "3537:2:2",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_40_by_1",
                        "typeString": "int_const 40"
                      },
                      "value": "40"
                    },
                    "src": "3473:66:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3454:85:2"
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
                      "src": "3569:11:2",
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
                        "src": "3569:7:2",
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
                        "src": "3591:8:2",
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
                        "src": "3601:2:2",
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
                        "src": "3605:5:2",
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
                      "src": "3583:7:2",
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
                    "src": "3583:28:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "3569:42:2"
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
                      "src": "3621:3:2",
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
                          "src": "3635:3:2",
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
                          "src": "3640:2:2",
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
                          "src": "3644:5:2",
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
                        "src": "3627:7:2",
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
                      "src": "3627:23:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3621:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 979,
                  "nodeType": "ExpressionStatement",
                  "src": "3621:29:2"
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
                      "src": "3660:3:2",
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
                          "src": "3674:3:2",
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
                          "src": "3679:2:2",
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
                          "src": "3683:8:2",
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
                        "src": "3666:7:2",
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
                      "src": "3666:26:2",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3660:32:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 987,
                  "nodeType": "ExpressionStatement",
                  "src": "3660:32:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 988,
                    "name": "out",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 965,
                    "src": "3768:3:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 876,
                  "id": 989,
                  "nodeType": "Return",
                  "src": "3761:10:2"
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
                  "src": "2849:19:2",
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
                    "src": "2849:6:2",
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
                  "src": "2870:16:2",
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
                    "src": "2870:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2848:39:2"
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
                  "src": "2934:7:2",
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
                    "src": "2934:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2933:9:2"
            },
            "scope": 1074,
            "src": "2833:945:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1012,
              "nodeType": "Block",
              "src": "3904:112:2",
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
                            "src": "3981:7:2",
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
                                  "src": "3993:1:2",
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
                                  "src": "3997:1:2",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint16",
                                    "typeString": "uint16"
                                  }
                                },
                                "src": "3993:5:2",
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
                            "src": "3992:7:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint16",
                              "typeString": "uint16"
                            }
                          },
                          "src": "3981:18:2",
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
                      "src": "3980:20:2",
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
                      "src": "4003:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3980:29:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1001,
                  "id": 1011,
                  "nodeType": "Return",
                  "src": "3973:36:2"
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
                  "src": "3810:14:2",
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
                    "src": "3810:7:2",
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
                  "src": "3834:8:2",
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
                    "src": "3834:6:2",
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
                  "src": "3852:15:2",
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
                    "src": "3852:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3800:73:2"
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
                  "src": "3895:7:2",
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
                    "src": "3895:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3894:9:2"
            },
            "scope": 1074,
            "src": "3784:232:2",
            "stateMutability": "pure",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 1050,
              "nodeType": "Block",
              "src": "4134:302:2",
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
                      "src": "4144:11:2",
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
                        "src": "4144:7:2",
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
                        "src": "4165:5:2",
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
                        "src": "4172:8:2",
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
                      "src": "4158:6:2",
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
                    "src": "4158:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4144:37:2"
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
                      "src": "4191:11:2",
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
                        "src": "4191:7:2",
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
                        "src": "4217:5:2",
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
                        "src": "4224:3:2",
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
                      "src": "4205:11:2",
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
                    "src": "4205:23:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "4191:37:2"
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
                        "src": "4238:13:2",
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
                        "src": "4252:3:2",
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
                      "src": "4238:18:2",
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
                      "src": "4259:3:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "4238:24:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 1041,
                  "nodeType": "ExpressionStatement",
                  "src": "4238:24:2"
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
                          "src": "4401:3:2",
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
                        "src": "4401:10:2",
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
                        "src": "4413:3:2",
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
                        "src": "4418:3:2",
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
                        "src": "4423:5:2",
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
                      "src": "4394:6:2",
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
                    "src": "4394:35:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1049,
                  "nodeType": "EmitStatement",
                  "src": "4389:40:2"
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
                  "src": "4053:19:2",
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
                    "src": "4053:6:2",
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
                  "src": "4082:11:2",
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
                    "src": "4082:7:2",
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
                  "src": "4103:16:2",
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
                    "src": "4103:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4043:82:2"
            },
            "returnParameters": {
              "id": 1021,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4134:0:2"
            },
            "scope": 1074,
            "src": "4022:414:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "private"
          },
          {
            "body": {
              "id": 1072,
              "nodeType": "Block",
              "src": "4501:180:2",
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
                          "src": "4604:3:2",
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
                            "src": "4611:7:2",
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
                          "src": "4611:14:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4604:21:2",
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
                      "src": "4596:7:2",
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
                    "src": "4596:30:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 1064,
                  "nodeType": "ExpressionStatement",
                  "src": "4596:30:2"
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
                        "src": "4643:7:2",
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
                          "src": "4651:13:2",
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
                          "src": "4665:3:2",
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
                        "src": "4651:18:2",
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
                      "src": "4643:27:2",
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
                    "src": "4643:31:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 1057,
                  "id": 1071,
                  "nodeType": "Return",
                  "src": "4636:38:2"
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
                  "src": "4458:11:2",
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
                    "src": "4458:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4457:13:2"
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
                  "src": "4492:7:2",
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
                    "src": "4492:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4491:9:2"
            },
            "scope": 1074,
            "src": "4442:239:2",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 1075,
        "src": "341:4342:2"
      }
    ],
    "src": "0:4684:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-08-04T16:56:37.634Z",
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
  