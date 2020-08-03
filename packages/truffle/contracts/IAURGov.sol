pragma solidity ^0.6.0;

/**
    Author: Chris Markov 2020
    Project Aurbit
 */
interface IAURGov {
    function isRaceAuthed(uint8 race) external view returns (bool);

    function isPlanet(address _address) external view returns (bool);

    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
    //    function authMinter(address payable _minter) public external{}
    //    function deauthMinter(address payable _minter) publicexternal{}
}
