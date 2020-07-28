
pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
//import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "./IAUR.sol";
import "./IPlanet.sol";

contract AURGov{
address payable owner;
address[] Planets;
address payable[] Admins;
address tokenContract;
IAUR private AURToken;

constructor() public {
owner = msg.sender;
}


    function withdraw() public{
        require(isAuthed());
        msg.sender.transfer(address(this).balance);
    }
   function setTokenContract(address payable _tokencontract) public{
       require(isAuthed());
       tokenContract = _tokencontract;
       AURToken = IAUR(_tokencontract);
    }

   function addPlanet(address _newplanet) public{
      require(isAuthed());
      Planets.push(_newplanet);
   
   }

   function addAdmin(address payable _newadmin) public{
      require(isAuthed());
      Admins.push(_newadmin);
   }
   function disableAdmin(address _rmadmin) public{
      for(uint i=0;i<=Admins.length;i++){
          if (_rmadmin==Admins[i]){
              Admins[i] = Admins[Admins.length-1];
              //Admins.length--;
              delete Admins[Admins.length-1];
              break;
          }
      }
   }
   function isAuthed() private view returns(bool){
     bool out = false;
     for(uint i=0;i<=Admins.length;i++){
         if (msg.sender==Admins[i]){
            out = true;
            break;
         }
     }
     return out;
   }
   

}
