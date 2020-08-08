pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC777/IERC777.sol";

/**
    Author: Chris Markov 2020
    Project Aurbit
 */

interface IAUR is IERC777 {
    function mintInternal(uint256 amount) external;

    function burnInternal(uint256 amount) external;
}
