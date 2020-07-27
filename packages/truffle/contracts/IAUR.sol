pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC777/IERC777.sol";

interface IAUR is IERC777 {
    function mintInternal(uint256 amount) external;

    function burnInternal(uint256 amount) external;
    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
    //    function authMinter(address payable _minter) public external{}
    //    function deauthMinter(address payable _minter) publicexternal{}
}
