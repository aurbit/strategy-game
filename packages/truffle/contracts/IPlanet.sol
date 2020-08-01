
pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";

interface IPlanet {

    function setTileBuyFee(uint _newfee) external;
    function setMiningRate(uint _newrate) external;
    function setminAURUnit(uint _newunit) external;
    function setTokenContract(address _tokencontract) external;
//    function setGovContract(address payable _govContract) external;
    function setAvatarContract(address _avatarContract) external;



    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
//    function authMinter(address payable _minter) public external{}
//    function deauthMinter(address payable _minter) publicexternal{} 
}

