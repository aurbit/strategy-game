pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";
import "./IAURGov.sol";

/**
    Author: Chris Markov 2020
    Project Aurbit
 */

contract AURToken is ERC777 {
    address payable owner;
    IAURGov private AURGov;
    address payable govContract;

    //address payable planet;
    //maybe have a list of admins and a list of planets rather than just "minters"
    //address payable[] minters; //array of authed minters, which will be planet cotnracts
    //address[] dOperators;//dunno what would go here but not needed
    constructor(address payable govaddy)
        public
        ERC777("Aurbit Token", "AUR", new address[](0))
    {
        uint256 initialBalance = 1000000 * 10**18;
        //do this shit with safe math or whatever
        //if this is the officially best way to write this then i am disappointed
        owner = msg.sender;
        AURGov = IAURGov(govaddy);
        govContract = govaddy;
        //minters.push(planet0);
        _mint(owner, initialBalance, "", "");
    }

    //figure out user and operator data fields nad what to do with them
    //figure out how to send and receive them in the Planet contract
    //figure out how to burn them and if you need to use approve functions
    //must register send hook?
    function mintInternal(uint256 amount) public {
        require(ismintAuthed());
        _mint(msg.sender, amount, "MINTEDCOINS", "");
        //gets minted to sender, depositing them in the contract where corresponding users can WD them
        //not sure what dod do with data fields, has to do with send hook
    }

    function burnInternal(uint256 amount) public {
        require(ismintAuthed());
        burn(amount, "");
    }

    function ismintAuthed() private view returns (bool) {
        //gov contract and planets and owner can mint or burn
        return
            AURGov.isPlanet(msg.sender) ||
            (owner == msg.sender) ||
            (msg.sender == govContract);
    }
    //    function ismintAuthed() public view returns (bool){
    //	bool out = false;
    //        out = out || (owner==msg.sender);//owner can mint
    //        for (uint i = 0;i<minters.length;i++){
    //               if (out){break;}
    //               out = out || (msg.sender==minters[i]);
    //        }
    //        return out;
    //    }

    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
    /*    function authMinter(address payable _minter) public{
       require(ismintAuthed());
       minters.push(_minter);
    }
    function deauthMinter(address payable _minter) public{
        for (uint i = 0;i<minters.length;i++){
               if (minters[i]==_minter){delete minters[i];}
           //need to figure out exactly what this does, 
          //  what i will get when i call minter[i] now? if it sets to 0 that is ok. must test
        } 
    }
*/
}
