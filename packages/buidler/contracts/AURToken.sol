
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract AURToken is Context, ERC777 {
address payable owner;
//address payable planet;
//maybe have a list of admins and a list of planets rather than just "minters"
address payable[] minters; //array of authed minters, which will be planet cotnracts
    constructor(
//        address initialHolder,
//        uint256 initialBalance,
//        string memory name,
//        string memory symbol,
        address[] memory defaultOperators
    ) public ERC777('Aurbit Token', 'AUR', defaultOperators) {
	uint256 initialBalance = 1000000*10**18;
        //do this shit with safe math or whatever
        //if this is the officially best way to write this then i am disappointed 
        owner = msg.sender;
        _mint(owner, initialBalance, "", "");
	
    }
//figure out user and operator data fields nad what to do with them
//figure out how to send and receive them in the Planet contract
//figure out how to burn them and if you need to use approve functions
//must register send hook?
    function mintInternal (
        uint256 amount
    ) public {
        require(ismintAuthed());
        _mint(msg.sender, amount, "", "");
     //gets minted to sender, depositing them in the contract where corresponding users can WD them
     //not sure what dod do with data fields, has to do with send hook
    }
    function ismintAuthed() public view returns (bool){
	bool out = false;
        out = out || (owner==msg.sender);
        for (uint i = 0;i<minters.length;i++){
               out = out || (msg.sender==minters[i]);
        }
        return out;
    }

    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
    function authMinter(address payable _minter) public{
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
}

