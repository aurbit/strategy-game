
pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
//import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "./IAUR.sol";
import "./IPlanet.sol";
import "./IAvatar.sol";

contract AURGov{
address payable owner;
address[] Planets;
//uint8[] Races;
//address payable[] Admins;
address tokenContract;
address avatarContract;
mapping (address => bool) Admins;
mapping (uint8 => bool) Races;
string UNAUTHMSG = 'UNAUTHORIZED';
IAUR private AURToken;
IAvatar private Avatar;
address authedonce = address(0x0);
uint public whatwasauthed; 
bool public EnableDoubleAuth = false;

constructor() public {
owner = msg.sender;
Admins[owner] = true;
Admins[address(0x0)] = false;
Races[0] = false; //THIS NEEDS TO BE FALSE THIS IS ONLY FOR TESTING
//setTokenContract(_tokenContract);
}
   receive() external payable {} //fallback function for recieving fees

    function withdrawAll() public{
        require(isAuthed(1),UNAUTHMSG);
        msg.sender.transfer(address(this).balance);
    }
    function withdrawTo(address payable _address,uint _amt) public{
       require(isAuthed(2),UNAUTHMSG);
       _address.transfer(_amt); 

   }
   function setTokenContract(address _tokencontract) public{
       require(isAuthed(3),UNAUTHMSG);
       tokenContract = _tokencontract;
       AURToken = IAUR(_tokencontract);
    }
   function setAvatarContract(address _avatarcontract) public{
     //have to have this so you can replace the avatar contract address in planet. or just not have it...
     require(isAuthed(4),UNAUTHMSG);
     avatarContract = _avatarcontract;
     Avatar = IAvatar(avatarContract);     
   }
   function setCreateAvatarFee(uint _newfee) public{
       require(isAuthed(5),UNAUTHMSG);
       Avatar.setcreateAvatarFee(_newfee);
   }

   function addPlanet(address _newplanet) public{
      require(isAuthed(6),UNAUTHMSG);
      Planets.push(_newplanet);
      setUpPlanet(_newplanet);
   }
   function setUpPlanet(address _newplanet) private{
      require(isAuthed(7),UNAUTHMSG);
      IPlanet Pl = IPlanet(_newplanet);
      Pl.setTokenContract(tokenContract);
      Pl.setAvatarContract(avatarContract);
   }
   function addRace(uint8 _newrace) public{
     require(isAuthed(8),UNAUTHMSG);//maybe use mapping for this?
     //Races.push(_newrace);
     Races[_newrace] = true;
   }
   function addAdmin(address payable _newadmin) public{
      require(isAuthed(9),UNAUTHMSG);
      Admins[_newadmin] = true;
   }
   function disableAdmin(address _rmadmin) public{
      require(isAuthed(10),UNAUTHMSG);
      Admins[_rmadmin] = false;
   }
   function isAuthed(uint _cmdcode) private returns(bool){
       if (EnableDoubleAuth){
          return doubleAuth(_cmdcode);  //0 is just place holder rn
       }else{
          return Admins[msg.sender];
       }
   }
   function isRaceAuthed(uint8 _race) public view returns(bool){
      return Races[_race];
   }
   function isPlanet(address _address) public view returns(bool){
     bool out = false;
     for (uint i=0;i<=Planets.length;i++){
         if (_address==Planets[i]){
             out = true;
             break;
         }
     }
     return out;
   }
   function setPlanetTileBuyFee(address _planet,uint _tilebuyfee) public{
       require(isAuthed(11),UNAUTHMSG);
       IPlanet Pl = IPlanet(_planet);
       Pl.setTileBuyFee(_tilebuyfee);
   }
   function setPlanetMiningRate(address _planet,uint _miningrate) public{
       require(isAuthed(12),UNAUTHMSG);
       IPlanet Pl = IPlanet(_planet); 
       Pl.setMiningRate(_miningrate);
   }
   function setMinAURUnit(address _planet,uint _minaurunit) public{
       require(isAuthed(13),UNAUTHMSG);
       IPlanet Pl = IPlanet(_planet);
       Pl.setminAURUnit(_minaurunit);
   }

   function doubleAuth(uint _whatwasauthed) private returns(bool){
       require(Admins[msg.sender],UNAUTHMSG);
       bool out=false;
       if (msg.sender != authedonce){
           if (whatwasauthed==_whatwasauthed){
               out = true;
               whatwasauthed = 0;//reset
               authedonce = address(0x0);
            }else{
               whatwasauthed = _whatwasauthed; 
                authedonce = msg.sender;
            }
       }else{
           whatwasauthed = _whatwasauthed;
           //reset to different command if some guy sends twice
       }
       return out;
   }
   function setEnableDoubleAuth(bool _yesno) public{
        require(isAuthed(14),UNAUTHMSG);
        EnableDoubleAuth = _yesno;
   } 
   function getPlanets() public view returns (address[] memory){
     return(Planets);
  }

//  function burnAUR(uint _amt){
//     require(isAuthed(),UNAUTHMSG);
//     AURToken.burnInternal(_amt); 
//  }//thing need token receive function for this, do we even need to burn?
//would need to send tokens into here first then run this cmd
//  function mintAUR(uint _amt){
//    require(isAuthed(),UNAUTHMSG);
//    AURToken.mintInternal(_amt);
//  }
//need proper handling of receiving tokens to here and sending them from here for this to work

}
