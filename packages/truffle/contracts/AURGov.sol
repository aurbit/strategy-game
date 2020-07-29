
pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
//import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "./IAUR.sol";
import "./IPlanet.sol";

contract AURGov{
address payable owner;
address[] Planets;
//address payable[] Admins;
address tokenContract;
address avatarContract;
mapping (address => bool) Admins;
string UNAUTHMSG = 'UNAUTHORIZED';
IAUR private AURToken;

constructor(address initplanet,address _tokenContract,address _avatarContract) public {
owner = msg.sender;
Admins[owner] = true;
Admins[address(0x0)] = false;
addPlanet(initplanet);
setTokenContract(_tokenContract);
avatarContract = _avatarContract;
}


    function withdraw() public{
        require(isAuthed());
        msg.sender.transfer(address(this).balance);
    }
   function setTokenContract(address _tokencontract) public{
       require(isAuthed());
       tokenContract = _tokencontract;
       AURToken = IAUR(_tokencontract);
    }
   function setAvatarContract(address _avatarcontract) public{
     //have to have this so you can replace the avatar contract address in planet. or just not have it...
     require(isAuthed());
     avatarContract = _avatarcontract;     
   }
   

   function addPlanet(address _newplanet) public{
      require(isAuthed());
      Planets.push(_newplanet);
   
   }

   function addAdmin(address payable _newadmin) public{
      require(isAuthed());
      Admins[_newadmin] = true;
   }
   function disableAdmin(address _rmadmin) public{
      Admins[_rmadmin] = false;
   }
   function isAuthed() private view returns(bool){
       return Admins[msg.sender];
   }
      

}
