pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";

/**
    Author: Chris Markov 2020
    Project Aurbit
 */

interface IPlanet {
    function setTileBuyFee(uint256 _newfee) external;

    function setMiningRate(uint256 _newrate) external;

    function setminAURUnit(uint256 _newunit) external;

    function setTokenContract(address _tokencontract) external;

    //    function setGovContract(address payable _govContract) external;
    function setAvatarContract(address _avatarContract) external;

    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
    //    function authMinter(address payable _minter) public external{}
    //    function deauthMinter(address payable _minter) publicexternal{}
}
