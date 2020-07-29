
pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
//import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "./IAUR.sol";
import "./IPlanet.sol";

contract AURGov{
address payable owner;
address[] Planets;
address tokenContract;
IAUR private AURToken;

constructor() public {
owner = msg.sender;
}


    function withdraw() public{
        require(isAuthed());
        owner.transfer(address(this).balance);
    }
   function setTokenContract(address payable _tokencontract) public{
       require(isAuthed());
       tokenContract = _tokencontract;
       AURToken = IAUR(_tokencontract);
    }

   function addPlanet(address _newplanet) private{
      require(isAuthed());
      Planets.push(_newplanet);
   
   }
   function isAuthed() private view returns(bool){
     return msg.sender==owner;
   }
   

}
