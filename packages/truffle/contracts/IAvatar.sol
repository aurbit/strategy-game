pragma solidity ^0.6.0;

//import "@openzeppelin/contracts/GSN/Context.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol";

interface IAvatar is IERC721, IERC721Enumerable {
    function getDNA(uint256 tid) external view returns (uint256);

    function setcreateAvatarFee(uint256 _newfee) external;
    //function approveInternal(address holder, address spender, uint256 value) public {
    //    _approve(holder, spender, value);
    //}
    //    function authMinter(address payable _minter) public external{}
    //    function deauthMinter(address payable _minter) publicexternal{}
}
