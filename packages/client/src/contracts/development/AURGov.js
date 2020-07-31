
    module.exports = {
      "network": "development",
      "address": "0xbDDCaBaB323E0F2FE8eEf7F76CFFF28006D46819",
      "artifact": {
  "contractName": "AURGov",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initplanet",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_tokenContract",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_avatarContract",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_tokencontract",
          "type": "address"
        }
      ],
      "name": "setTokenContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_avatarcontract",
          "type": "address"
        }
      ],
      "name": "setAvatarContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_newplanet",
          "type": "address"
        }
      ],
      "name": "addPlanet",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "_newadmin",
          "type": "address"
        }
      ],
      "name": "addAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_rmadmin",
          "type": "address"
        }
      ],
      "name": "disableAdmin",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.2+commit.bacdbe57\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"initplanet\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_tokenContract\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_avatarContract\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"address payable\",\"name\":\"_newadmin\",\"type\":\"address\"}],\"name\":\"addAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_newplanet\",\"type\":\"address\"}],\"name\":\"addPlanet\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_rmadmin\",\"type\":\"address\"}],\"name\":\"disableAdmin\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_avatarcontract\",\"type\":\"address\"}],\"name\":\"setAvatarContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_tokencontract\",\"type\":\"address\"}],\"name\":\"setTokenContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURGov.sol\":\"AURGov\"},\"evmVersion\":\"constantinople\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURGov.sol\":{\"keccak256\":\"0xf829249e3e6f7f38f6b6e3f988e7a6043ed66ac5c99e515433c717f9da60f9bc\",\"urls\":[\"bzz-raw://3356525eb0ddd5b6d16c49b39cdb523c299024f9aadf741a344a4bb4e5ef404b\",\"dweb:/ipfs/QmeHM2ateDLva1J9doAWDFeqzF66rn9S92ZfaCMbCsYfKj\"]},\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IAUR.sol\":{\"keccak256\":\"0xa2b8533e1013dc0217d1a1f95f1f9733c63bd80adb13a6cc5b0b96610a2d1044\",\"urls\":[\"bzz-raw://45068714efbb3efab565f89cf7a61d0d2e1138fe823d43e2eb286d2b4211c8e8\",\"dweb:/ipfs/QmW6L85iRcrMRgNf2joLc5a21gNcnuyvZU5zVs3osvuPa8\"]},\"/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IPlanet.sol\":{\"keccak256\":\"0xd05d6256626e4daae697699567417beed7cc7c470023785c7d5fcf0eab382fdb\",\"urls\":[\"bzz-raw://6be201c0b0601be4ea669188a867603cf5a73259e63afd2c20248fab3cf9b61e\",\"dweb:/ipfs/QmRzixczxo7Sg3pm9bpFKmpecSfAy3S27Dx8CAGnBVLkF8\"]},\"@openzeppelin/contracts/token/ERC777/IERC777.sol\":{\"keccak256\":\"0x7846aa81baa00557eba6215442eab916bc98f2e692fdc7b8523cf31122dc8e28\",\"urls\":[\"bzz-raw://40a5491dcdcdbea4bf8695e1c75f5f723dcd19c1392e8ff7a5fc56e13b5794e1\",\"dweb:/ipfs/QmcAFeKKXAFFEzCShHhT65smF8SDhhMg5oWmU3TWKPpTFT\"]}},\"version\":1}",
  "bytecode": "0x60c0604052600c60808190527f554e415554484f52495a4544000000000000000000000000000000000000000060a090815261003e91600591906101f3565b5034801561004b57600080fd5b5060405161057e38038061057e8339818101604052606081101561006e57600080fd5b508051602080830151604093840151600080546001600160a01b03191633178082556001600160a01b031681526004909352938220805460ff199081166001179091559180527f17ef568e3e12ab5b9c7254a8d58478811de00f9e6eb34345acd53bf8fd09d3ec805490921690915590916100f1836001600160e01b0361012b16565b610103826001600160e01b0361019616565b600380546001600160a01b0319166001600160a01b03929092169190911790555061028b9050565b61013c6001600160e01b036101dc16565b61014557600080fd5b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055565b6101a76001600160e01b036101dc16565b6101b057600080fd5b600280546001600160a01b039092166001600160a01b0319928316811790915560068054909216179055565b3360009081526004602052604090205460ff165b90565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023457805160ff1916838001178555610261565b82800160010185558215610261579182015b82811115610261578251825591602001919060010190610246565b5061026d929150610271565b5090565b6101f091905b8082111561026d5760008155600101610277565b6102e48061029a6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80633ccfd60b14610067578063476c10ff146100715780637048027514610097578063751e9a9c146100bd5780638c19ebc8146100e3578063bbcd5bbe14610109575b600080fd5b61006f61012f565b005b61006f6004803603602081101561008757600080fd5b50356001600160a01b0316610170565b61006f600480360360208110156100ad57600080fd5b50356001600160a01b03166101d2565b61006f600480360360208110156100d357600080fd5b50356001600160a01b0316610207565b61006f600480360360208110156100f957600080fd5b50356001600160a01b0316610228565b61006f6004803603602081101561011f57600080fd5b50356001600160a01b031661025b565b610137610298565b61014057600080fd5b6040513390303180156108fc02916000818181858888f1935050505015801561016d573d6000803e3d6000fd5b50565b610178610298565b61018157600080fd5b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055565b6101da610298565b6101e357600080fd5b6001600160a01b03166000908152600460205260409020805460ff19166001179055565b6001600160a01b03166000908152600460205260409020805460ff19169055565b610230610298565b61023957600080fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610263610298565b61026c57600080fd5b600280546001600160a01b039092166001600160a01b0319928316811790915560068054909216179055565b3360009081526004602052604090205460ff169056fea26469706673582212203275c9fe1b6755809c806cc04d0a4ca84bada24239657e442591a614861f1bd664736f6c63430006020033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c80633ccfd60b14610067578063476c10ff146100715780637048027514610097578063751e9a9c146100bd5780638c19ebc8146100e3578063bbcd5bbe14610109575b600080fd5b61006f61012f565b005b61006f6004803603602081101561008757600080fd5b50356001600160a01b0316610170565b61006f600480360360208110156100ad57600080fd5b50356001600160a01b03166101d2565b61006f600480360360208110156100d357600080fd5b50356001600160a01b0316610207565b61006f600480360360208110156100f957600080fd5b50356001600160a01b0316610228565b61006f6004803603602081101561011f57600080fd5b50356001600160a01b031661025b565b610137610298565b61014057600080fd5b6040513390303180156108fc02916000818181858888f1935050505015801561016d573d6000803e3d6000fd5b50565b610178610298565b61018157600080fd5b6001805480820182556000919091527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319166001600160a01b0392909216919091179055565b6101da610298565b6101e357600080fd5b6001600160a01b03166000908152600460205260409020805460ff19166001179055565b6001600160a01b03166000908152600460205260409020805460ff19169055565b610230610298565b61023957600080fd5b600380546001600160a01b0319166001600160a01b0392909216919091179055565b610263610298565b61026c57600080fd5b600280546001600160a01b039092166001600160a01b0319928316811790915560068054909216179055565b3360009081526004602052604090205460ff169056fea26469706673582212203275c9fe1b6755809c806cc04d0a4ca84bada24239657e442591a614861f1bd664736f6c63430006020033",
  "sourceMap": "353:33:0:-:0;185:1450;353:33;;185:1450;353:33;;;;;;;;;;;;;;:::i;:::-;;412:252;8:9:-1;5:2;;;30:1;27;20:12;5:2;412:252:0;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;412:252:0;;;;;;;;;;;;500:5;:18;;-1:-1:-1;;;;;;500:18:0;508:10;500:18;;;;-1:-1:-1;;;;;527:5:0;520:13;;:6;:13;;;;;;:20;;-1:-1:-1;;520:20:0;;;500:18;520:20;;;;542;;;;:28;;;;;;;;412:252;;572:21;412:252;-1:-1:-1;;;;;572:9:0;:21;:::i;:::-;595:32;612:14;-1:-1:-1;;;;;595:16:0;:32;:::i;:::-;629:14;:32;;-1:-1:-1;;;;;;629:32:0;-1:-1:-1;;;;;629:32:0;;;;;;;;;;-1:-1:-1;185:1450:0;;-1:-1:-1;185:1450:0;1212:114;1273:10;-1:-1:-1;;;;;1273:8:0;:10;:::i;:::-;1265:19;;;;;;1292:7;27:10:-1;;23:18;;;45:23;;-1:-1;1292:24:0;;;;;;;;-1:-1:-1;;;;;;1292:24:0;-1:-1:-1;;;;;1292:24:0;;;;;;;;;;1212:114::o;789:170::-;862:10;-1:-1:-1;;;;;862:8:0;:10;:::i;:::-;854:19;;;;;;882:13;:30;;-1:-1:-1;;;;;882:30:0;;;-1:-1:-1;;;;;;882:30:0;;;;;;;;921:8;:31;;;;;;;;789:170::o;1539:86::-;1608:10;1580:4;1601:18;;;:6;:18;;;;;;;;1539:86;;:::o;185:1450::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;185:1450:0;;;-1:-1:-1;185:1450:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;",
  "deployedSourceMap": "185:1450:0:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;185:1450:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;671:114;;;:::i;:::-;;1212;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1212:114:0;-1:-1:-1;;;;;1212:114:0;;:::i;1331:116::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1331:116:0;-1:-1:-1;;;;;1331:116:0;;:::i;1451:84::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;1451:84:0;-1:-1:-1;;;;;1451:84:0;;:::i;963:240::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;963:240:0;-1:-1:-1;;;;;963:240:0;;:::i;789:170::-;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;-1:-1;789:170:0;-1:-1:-1;;;;;789:170:0;;:::i;671:114::-;715:10;:8;:10::i;:::-;707:19;;;;;;736:42;;:10;;764:4;756:21;736:42;;;;;;;;;756:21;736:10;:42;;;;;;;;8:9:-1;5:2;;;45:16;42:1;39;24:38;77:16;74:1;67:27;5:2;736:42:0;671:114::o;1212:::-;1273:10;:8;:10::i;:::-;1265:19;;;;;;1292:7;27:10:-1;;23:18;;;45:23;;-1:-1;1292:24:0;;;;;;;;-1:-1:-1;;;;;;1292:24:0;-1:-1:-1;;;;;1292:24:0;;;;;;;;;;1212:114::o;1331:116::-;1398:10;:8;:10::i;:::-;1390:19;;;;;;-1:-1:-1;;;;;1417:17:0;;;;;:6;:17;;;;;:24;;-1:-1:-1;;1417:24:0;1437:4;1417:24;;;1331:116::o;1451:84::-;-1:-1:-1;;;;;1505:16:0;1524:5;1505:16;;;:6;:16;;;;;:24;;-1:-1:-1;;1505:24:0;;;1451:84::o;963:240::-;1142:10;:8;:10::i;:::-;1134:19;;;;;;1160:14;:32;;-1:-1:-1;;;;;;1160:32:0;-1:-1:-1;;;;;1160:32:0;;;;;;;;;;963:240::o;789:170::-;862:10;:8;:10::i;:::-;854:19;;;;;;882:13;:30;;-1:-1:-1;;;;;882:30:0;;;-1:-1:-1;;;;;;882:30:0;;;;;;;;921:8;:31;;;;;;;;789:170::o;1539:86::-;1608:10;1580:4;1601:18;;;:6;:18;;;;;;;;1539:86;:::o",
  "source": "\npragma solidity ^0.6.0;\n\n//import \"@openzeppelin/contracts/GSN/Context.sol\";\n//import \"@openzeppelin/contracts/token/ERC777/IERC777.sol\";\nimport \"./IAUR.sol\";\nimport \"./IPlanet.sol\";\n\ncontract AURGov{\naddress payable owner;\naddress[] Planets;\n//address payable[] Admins;\naddress tokenContract;\naddress avatarContract;\nmapping (address => bool) Admins;\nstring UNAUTHMSG = 'UNAUTHORIZED';\nIAUR private AURToken;\n\nconstructor(address initplanet,address _tokenContract,address _avatarContract) public {\nowner = msg.sender;\nAdmins[owner] = true;\nAdmins[address(0x0)] = false;\naddPlanet(initplanet);\nsetTokenContract(_tokenContract);\navatarContract = _avatarContract;\n}\n\n\n    function withdraw() public{\n        require(isAuthed());\n        msg.sender.transfer(address(this).balance);\n    }\n   function setTokenContract(address _tokencontract) public{\n       require(isAuthed());\n       tokenContract = _tokencontract;\n       AURToken = IAUR(_tokencontract);\n    }\n   function setAvatarContract(address _avatarcontract) public{\n     //have to have this so you can replace the avatar contract address in planet. or just not have it...\n     require(isAuthed());\n     avatarContract = _avatarcontract;     \n   }\n   \n\n   function addPlanet(address _newplanet) public{\n      require(isAuthed());\n      Planets.push(_newplanet);\n   \n   }\n\n   function addAdmin(address payable _newadmin) public{\n      require(isAuthed());\n      Admins[_newadmin] = true;\n   }\n   function disableAdmin(address _rmadmin) public{\n      Admins[_rmadmin] = false;\n   }\n   function isAuthed() private view returns(bool){\n       return Admins[msg.sender];\n   }\n      \n\n}\n",
  "sourcePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURGov.sol",
  "ast": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURGov.sol",
    "exportedSymbols": {
      "AURGov": [
        178
      ]
    },
    "id": 179,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "1:23:0"
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IAUR.sol",
        "file": "./IAUR.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 179,
        "sourceUnit": 757,
        "src": "139:20:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IPlanet.sol",
        "file": "./IPlanet.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 179,
        "sourceUnit": 780,
        "src": "160:23:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 178,
        "linearizedBaseContracts": [
          178
        ],
        "name": "AURGov",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "202:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 4,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "202:15:0",
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
            "id": 8,
            "name": "Planets",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "225:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 6,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "225:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 7,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "225:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10,
            "name": "tokenContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "272:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "272:7:0",
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
            "id": 12,
            "name": "avatarContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "295:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 11,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "295:7:0",
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
            "id": 16,
            "name": "Admins",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "319:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 15,
              "keyType": {
                "id": 13,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "328:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "319:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 14,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "339:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 19,
            "name": "UNAUTHMSG",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "353:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 17,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "353:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "554e415554484f52495a4544",
              "id": 18,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "372:14:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528",
                "typeString": "literal_string \"UNAUTHORIZED\""
              },
              "value": "UNAUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 21,
            "name": "AURToken",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "388:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IAUR_$756",
              "typeString": "contract IAUR"
            },
            "typeName": {
              "contractScope": null,
              "id": 20,
              "name": "IAUR",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 756,
              "src": "388:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAUR_$756",
                "typeString": "contract IAUR"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 62,
              "nodeType": "Block",
              "src": "498:166:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "500:5:0",
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
                        "id": 31,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "508:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 32,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "508:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "500:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 34,
                  "nodeType": "ExpressionStatement",
                  "src": "500:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "520:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 37,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 36,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "527:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "520:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "536:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "520:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 40,
                  "nodeType": "ExpressionStatement",
                  "src": "520:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 41,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "542:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 46,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307830",
                            "id": 44,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "557:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 43,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "549:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "549:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 45,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "549:12:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "542:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 47,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "565:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "542:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "542:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "initplanet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "582:10:0",
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
                      "id": 50,
                      "name": "addPlanet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 137,
                      "src": "572:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "572:21:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "ExpressionStatement",
                  "src": "572:21:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "_tokenContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "612:14:0",
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
                      "id": 54,
                      "name": "setTokenContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 105,
                      "src": "595:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "595:32:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57,
                  "nodeType": "ExpressionStatement",
                  "src": "595:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 60,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 58,
                      "name": "avatarContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "629:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 59,
                      "name": "_avatarContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "646:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "629:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61,
                  "nodeType": "ExpressionStatement",
                  "src": "629:32:0"
                }
              ]
            },
            "documentation": null,
            "id": 63,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23,
                  "name": "initplanet",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 63,
                  "src": "424:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:0",
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
                  "id": 25,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 63,
                  "src": "443:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:7:0",
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
                  "id": 27,
                  "name": "_avatarContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 63,
                  "src": "466:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "466:7:0",
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
              "src": "423:67:0"
            },
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:0:0"
            },
            "scope": 178,
            "src": "412:252:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 83,
              "nodeType": "Block",
              "src": "697:88:0",
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
                          "id": 67,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "715:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "715:10:0",
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
                      "id": 66,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "707:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "707:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "707:19:0"
                },
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
                              "id": 78,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "764:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AURGov_$178",
                                "typeString": "contract AURGov"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AURGov_$178",
                                "typeString": "contract AURGov"
                              }
                            ],
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "756:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 76,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "756:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "756:13:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "756:21:0",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 71,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "736:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "736:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "736:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 81,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "736:42:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 82,
                  "nodeType": "ExpressionStatement",
                  "src": "736:42:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "3ccfd60b",
            "id": 84,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:2:0"
            },
            "returnParameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "697:0:0"
            },
            "scope": 178,
            "src": "671:114:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 104,
              "nodeType": "Block",
              "src": "845:114:0",
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
                          "id": 90,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "862:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "862:10:0",
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
                      "id": 89,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "854:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "854:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 93,
                  "nodeType": "ExpressionStatement",
                  "src": "854:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 94,
                      "name": "tokenContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "882:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "_tokencontract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86,
                      "src": "898:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "882:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 97,
                  "nodeType": "ExpressionStatement",
                  "src": "882:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 98,
                      "name": "AURToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "921:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAUR_$756",
                        "typeString": "contract IAUR"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 100,
                          "name": "_tokencontract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "937:14:0",
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
                        "id": 99,
                        "name": "IAUR",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 756,
                        "src": "932:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IAUR_$756_$",
                          "typeString": "type(contract IAUR)"
                        }
                      },
                      "id": 101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "932:20:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAUR_$756",
                        "typeString": "contract IAUR"
                      }
                    },
                    "src": "921:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IAUR_$756",
                      "typeString": "contract IAUR"
                    }
                  },
                  "id": 103,
                  "nodeType": "ExpressionStatement",
                  "src": "921:31:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "bbcd5bbe",
            "id": 105,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTokenContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86,
                  "name": "_tokencontract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 105,
                  "src": "815:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:7:0",
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
              "src": "814:24:0"
            },
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "845:0:0"
            },
            "scope": 178,
            "src": "789:170:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "1021:182:0",
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
                          "id": 111,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "1142:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1142:10:0",
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
                      "id": 110,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1134:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1134:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 114,
                  "nodeType": "ExpressionStatement",
                  "src": "1134:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "name": "avatarContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "1160:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 116,
                      "name": "_avatarcontract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 107,
                      "src": "1177:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1160:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 118,
                  "nodeType": "ExpressionStatement",
                  "src": "1160:32:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8c19ebc8",
            "id": 120,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setAvatarContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 107,
                  "name": "_avatarcontract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 120,
                  "src": "990:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 106,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "990:7:0",
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
              "src": "989:25:0"
            },
            "returnParameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1021:0:0"
            },
            "scope": 178,
            "src": "963:240:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 136,
              "nodeType": "Block",
              "src": "1257:69:0",
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
                          "id": 126,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "1273:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1273:10:0",
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
                      "id": 125,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1265:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1265:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "1265:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "_newplanet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 122,
                        "src": "1305:10:0",
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
                        "id": 130,
                        "name": "Planets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "1292:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1292:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1292:24:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 135,
                  "nodeType": "ExpressionStatement",
                  "src": "1292:24:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "476c10ff",
            "id": 137,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addPlanet",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 122,
                  "name": "_newplanet",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 137,
                  "src": "1231:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:7:0",
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
              "src": "1230:20:0"
            },
            "returnParameters": {
              "id": 124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1257:0:0"
            },
            "scope": 178,
            "src": "1212:114:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 153,
              "nodeType": "Block",
              "src": "1382:65:0",
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
                          "id": 143,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "1398:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1398:10:0",
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
                      "id": 142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1390:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1390:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146,
                  "nodeType": "ExpressionStatement",
                  "src": "1390:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1417:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 149,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "_newadmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 139,
                        "src": "1424:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1417:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1437:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1417:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 152,
                  "nodeType": "ExpressionStatement",
                  "src": "1417:24:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "70480275",
            "id": 154,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 139,
                  "name": "_newadmin",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 154,
                  "src": "1349:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1349:15:0",
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
              "src": "1348:27:0"
            },
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1382:0:0"
            },
            "scope": 178,
            "src": "1331:116:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 165,
              "nodeType": "Block",
              "src": "1497:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 159,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1505:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 161,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 160,
                        "name": "_rmadmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 156,
                        "src": "1512:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1505:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1524:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1505:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 164,
                  "nodeType": "ExpressionStatement",
                  "src": "1505:24:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "751e9a9c",
            "id": 166,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "disableAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 156,
                  "name": "_rmadmin",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 166,
                  "src": "1473:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 155,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:7:0",
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
              "src": "1472:18:0"
            },
            "returnParameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1497:0:0"
            },
            "scope": 178,
            "src": "1451:84:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "1585:40:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 171,
                      "name": "Admins",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "1601:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 174,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 172,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1608:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1608:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1601:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 170,
                  "id": 175,
                  "nodeType": "Return",
                  "src": "1594:25:0"
                }
              ]
            },
            "documentation": null,
            "id": 177,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAuthed",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1556:2:0"
            },
            "returnParameters": {
              "id": 170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 169,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 177,
                  "src": "1580:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 168,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1579:6:0"
            },
            "scope": 178,
            "src": "1539:86:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "scope": 179,
        "src": "185:1450:0"
      }
    ],
    "src": "1:1635:0"
  },
  "legacyAST": {
    "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/AURGov.sol",
    "exportedSymbols": {
      "AURGov": [
        178
      ]
    },
    "id": 179,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          "^",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "1:23:0"
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IAUR.sol",
        "file": "./IAUR.sol",
        "id": 2,
        "nodeType": "ImportDirective",
        "scope": 179,
        "sourceUnit": 757,
        "src": "139:20:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/Users/xhad/code/aurbit/strategy-game/packages/truffle/contracts/IPlanet.sol",
        "file": "./IPlanet.sol",
        "id": 3,
        "nodeType": "ImportDirective",
        "scope": 179,
        "sourceUnit": 780,
        "src": "160:23:0",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 178,
        "linearizedBaseContracts": [
          178
        ],
        "name": "AURGov",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "202:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address_payable",
              "typeString": "address payable"
            },
            "typeName": {
              "id": 4,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "202:15:0",
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
            "id": 8,
            "name": "Planets",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "225:17:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 6,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "225:7:0",
                "stateMutability": "nonpayable",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 7,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "225:9:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 10,
            "name": "tokenContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "272:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 9,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "272:7:0",
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
            "id": 12,
            "name": "avatarContract",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "295:22:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 11,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "295:7:0",
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
            "id": 16,
            "name": "Admins",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "319:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 15,
              "keyType": {
                "id": 13,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "328:7:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "319:25:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 14,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "339:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 19,
            "name": "UNAUTHMSG",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "353:33:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_storage",
              "typeString": "string"
            },
            "typeName": {
              "id": 17,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "353:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "554e415554484f52495a4544",
              "id": 18,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "372:14:0",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_269df367cd41cace5897a935d0e0858fe4543b5619d45e09af6b124c1bb3d528",
                "typeString": "literal_string \"UNAUTHORIZED\""
              },
              "value": "UNAUTHORIZED"
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 21,
            "name": "AURToken",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 178,
            "src": "388:21:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_contract$_IAUR_$756",
              "typeString": "contract IAUR"
            },
            "typeName": {
              "contractScope": null,
              "id": 20,
              "name": "IAUR",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 756,
              "src": "388:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_IAUR_$756",
                "typeString": "contract IAUR"
              }
            },
            "value": null,
            "visibility": "private"
          },
          {
            "body": {
              "id": 62,
              "nodeType": "Block",
              "src": "498:166:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 33,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 30,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5,
                      "src": "500:5:0",
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
                        "id": 31,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "508:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 32,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "508:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "src": "500:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address_payable",
                      "typeString": "address payable"
                    }
                  },
                  "id": 34,
                  "nodeType": "ExpressionStatement",
                  "src": "500:18:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 39,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 35,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "520:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 37,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 36,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5,
                        "src": "527:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "520:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 38,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "536:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "520:20:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 40,
                  "nodeType": "ExpressionStatement",
                  "src": "520:20:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 48,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 41,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "542:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 46,
                      "indexExpression": {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "hexValue": "307830",
                            "id": 44,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "557:3:0",
                            "subdenomination": null,
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            },
                            "value": "0x0"
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_rational_0_by_1",
                              "typeString": "int_const 0"
                            }
                          ],
                          "id": 43,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "lValueRequested": false,
                          "nodeType": "ElementaryTypeNameExpression",
                          "src": "549:7:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_type$_t_address_$",
                            "typeString": "type(address)"
                          },
                          "typeName": {
                            "id": 42,
                            "name": "address",
                            "nodeType": "ElementaryTypeName",
                            "src": "549:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": null,
                              "typeString": null
                            }
                          }
                        },
                        "id": 45,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "typeConversion",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "549:12:0",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "542:20:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 47,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "565:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "542:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 49,
                  "nodeType": "ExpressionStatement",
                  "src": "542:28:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 51,
                        "name": "initplanet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 23,
                        "src": "582:10:0",
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
                      "id": 50,
                      "name": "addPlanet",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 137,
                      "src": "572:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 52,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "572:21:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 53,
                  "nodeType": "ExpressionStatement",
                  "src": "572:21:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 55,
                        "name": "_tokenContract",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "612:14:0",
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
                      "id": 54,
                      "name": "setTokenContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 105,
                      "src": "595:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 56,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "595:32:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 57,
                  "nodeType": "ExpressionStatement",
                  "src": "595:32:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 60,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 58,
                      "name": "avatarContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "629:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 59,
                      "name": "_avatarContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 27,
                      "src": "646:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "629:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 61,
                  "nodeType": "ExpressionStatement",
                  "src": "629:32:0"
                }
              ]
            },
            "documentation": null,
            "id": 63,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 28,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 23,
                  "name": "initplanet",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 63,
                  "src": "424:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 22,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "424:7:0",
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
                  "id": 25,
                  "name": "_tokenContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 63,
                  "src": "443:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "443:7:0",
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
                  "id": 27,
                  "name": "_avatarContract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 63,
                  "src": "466:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "466:7:0",
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
              "src": "423:67:0"
            },
            "returnParameters": {
              "id": 29,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "498:0:0"
            },
            "scope": 178,
            "src": "412:252:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 83,
              "nodeType": "Block",
              "src": "697:88:0",
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
                          "id": 67,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "715:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 68,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "715:10:0",
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
                      "id": 66,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "707:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 69,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "707:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 70,
                  "nodeType": "ExpressionStatement",
                  "src": "707:19:0"
                },
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
                              "id": 78,
                              "name": "this",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": -28,
                              "src": "764:4:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_contract$_AURGov_$178",
                                "typeString": "contract AURGov"
                              }
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_contract$_AURGov_$178",
                                "typeString": "contract AURGov"
                              }
                            ],
                            "id": 77,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "756:7:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": {
                              "id": 76,
                              "name": "address",
                              "nodeType": "ElementaryTypeName",
                              "src": "756:7:0",
                              "typeDescriptions": {
                                "typeIdentifier": null,
                                "typeString": null
                              }
                            }
                          },
                          "id": 79,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "756:13:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "id": 80,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "balance",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "756:21:0",
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
                        "expression": {
                          "argumentTypes": null,
                          "id": 71,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": -15,
                          "src": "736:3:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 74,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "736:10:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "id": 75,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "transfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "736:19:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_transfer_nonpayable$_t_uint256_$returns$__$",
                        "typeString": "function (uint256)"
                      }
                    },
                    "id": 81,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "736:42:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 82,
                  "nodeType": "ExpressionStatement",
                  "src": "736:42:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "3ccfd60b",
            "id": 84,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "withdraw",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 64,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:2:0"
            },
            "returnParameters": {
              "id": 65,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "697:0:0"
            },
            "scope": 178,
            "src": "671:114:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 104,
              "nodeType": "Block",
              "src": "845:114:0",
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
                          "id": 90,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "862:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 91,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "862:10:0",
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
                      "id": 89,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "854:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 92,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "854:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 93,
                  "nodeType": "ExpressionStatement",
                  "src": "854:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 96,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 94,
                      "name": "tokenContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 10,
                      "src": "882:13:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 95,
                      "name": "_tokencontract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 86,
                      "src": "898:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "882:30:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 97,
                  "nodeType": "ExpressionStatement",
                  "src": "882:30:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 102,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 98,
                      "name": "AURToken",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 21,
                      "src": "921:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAUR_$756",
                        "typeString": "contract IAUR"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "id": 100,
                          "name": "_tokencontract",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 86,
                          "src": "937:14:0",
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
                        "id": 99,
                        "name": "IAUR",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 756,
                        "src": "932:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_contract$_IAUR_$756_$",
                          "typeString": "type(contract IAUR)"
                        }
                      },
                      "id": 101,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "932:20:0",
                      "tryCall": false,
                      "typeDescriptions": {
                        "typeIdentifier": "t_contract$_IAUR_$756",
                        "typeString": "contract IAUR"
                      }
                    },
                    "src": "921:31:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_contract$_IAUR_$756",
                      "typeString": "contract IAUR"
                    }
                  },
                  "id": 103,
                  "nodeType": "ExpressionStatement",
                  "src": "921:31:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "bbcd5bbe",
            "id": 105,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setTokenContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 87,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86,
                  "name": "_tokencontract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 105,
                  "src": "815:22:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "815:7:0",
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
              "src": "814:24:0"
            },
            "returnParameters": {
              "id": 88,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "845:0:0"
            },
            "scope": 178,
            "src": "789:170:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 119,
              "nodeType": "Block",
              "src": "1021:182:0",
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
                          "id": 111,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "1142:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 112,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1142:10:0",
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
                      "id": 110,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1134:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 113,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1134:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 114,
                  "nodeType": "ExpressionStatement",
                  "src": "1134:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 117,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 115,
                      "name": "avatarContract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 12,
                      "src": "1160:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 116,
                      "name": "_avatarcontract",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 107,
                      "src": "1177:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1160:32:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 118,
                  "nodeType": "ExpressionStatement",
                  "src": "1160:32:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "8c19ebc8",
            "id": 120,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "setAvatarContract",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 108,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 107,
                  "name": "_avatarcontract",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 120,
                  "src": "990:23:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 106,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "990:7:0",
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
              "src": "989:25:0"
            },
            "returnParameters": {
              "id": 109,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1021:0:0"
            },
            "scope": 178,
            "src": "963:240:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 136,
              "nodeType": "Block",
              "src": "1257:69:0",
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
                          "id": 126,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "1273:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 127,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1273:10:0",
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
                      "id": 125,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1265:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 128,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1265:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 129,
                  "nodeType": "ExpressionStatement",
                  "src": "1265:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 133,
                        "name": "_newplanet",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 122,
                        "src": "1305:10:0",
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
                        "id": 130,
                        "name": "Planets",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 8,
                        "src": "1292:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 132,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1292:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 134,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1292:24:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 135,
                  "nodeType": "ExpressionStatement",
                  "src": "1292:24:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "476c10ff",
            "id": 137,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addPlanet",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 122,
                  "name": "_newplanet",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 137,
                  "src": "1231:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1231:7:0",
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
              "src": "1230:20:0"
            },
            "returnParameters": {
              "id": 124,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1257:0:0"
            },
            "scope": 178,
            "src": "1212:114:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 153,
              "nodeType": "Block",
              "src": "1382:65:0",
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
                          "id": 143,
                          "name": "isAuthed",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 177,
                          "src": "1398:8:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_bool_$",
                            "typeString": "function () view returns (bool)"
                          }
                        },
                        "id": 144,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1398:10:0",
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
                      "id": 142,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1390:7:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 145,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1390:19:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 146,
                  "nodeType": "ExpressionStatement",
                  "src": "1390:19:0"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 151,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 147,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1417:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 149,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 148,
                        "name": "_newadmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 139,
                        "src": "1424:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1417:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 150,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1437:4:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "1417:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 152,
                  "nodeType": "ExpressionStatement",
                  "src": "1417:24:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "70480275",
            "id": 154,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "addAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 140,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 139,
                  "name": "_newadmin",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 154,
                  "src": "1349:25:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address_payable",
                    "typeString": "address payable"
                  },
                  "typeName": {
                    "id": 138,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1349:15:0",
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
              "src": "1348:27:0"
            },
            "returnParameters": {
              "id": 141,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1382:0:0"
            },
            "scope": 178,
            "src": "1331:116:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 165,
              "nodeType": "Block",
              "src": "1497:38:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 163,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 159,
                        "name": "Admins",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 16,
                        "src": "1505:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 161,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 160,
                        "name": "_rmadmin",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 156,
                        "src": "1512:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "1505:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "66616c7365",
                      "id": 162,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1524:5:0",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "false"
                    },
                    "src": "1505:24:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 164,
                  "nodeType": "ExpressionStatement",
                  "src": "1505:24:0"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "751e9a9c",
            "id": 166,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "disableAdmin",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 156,
                  "name": "_rmadmin",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 166,
                  "src": "1473:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 155,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1473:7:0",
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
              "src": "1472:18:0"
            },
            "returnParameters": {
              "id": 158,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1497:0:0"
            },
            "scope": 178,
            "src": "1451:84:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 176,
              "nodeType": "Block",
              "src": "1585:40:0",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "baseExpression": {
                      "argumentTypes": null,
                      "id": 171,
                      "name": "Admins",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 16,
                      "src": "1601:6:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                        "typeString": "mapping(address => bool)"
                      }
                    },
                    "id": 174,
                    "indexExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 172,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -15,
                        "src": "1608:3:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 173,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "1608:10:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address_payable",
                        "typeString": "address payable"
                      }
                    },
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "IndexAccess",
                    "src": "1601:18:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "functionReturnParameters": 170,
                  "id": 175,
                  "nodeType": "Return",
                  "src": "1594:25:0"
                }
              ]
            },
            "documentation": null,
            "id": 177,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "isAuthed",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 167,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1556:2:0"
            },
            "returnParameters": {
              "id": 170,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 169,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 177,
                  "src": "1580:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bool",
                    "typeString": "bool"
                  },
                  "typeName": {
                    "id": 168,
                    "name": "bool",
                    "nodeType": "ElementaryTypeName",
                    "src": "1580:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1579:6:0"
            },
            "scope": 178,
            "src": "1539:86:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "private"
          }
        ],
        "scope": 179,
        "src": "185:1450:0"
      }
    ],
    "src": "1:1635:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.2+commit.bacdbe57.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.2.3",
  "updatedAt": "2020-07-30T18:24:26.825Z",
  "devdoc": {
    "methods": {}
  },
  "userdoc": {
    "methods": {}
  }
}
    }
  