pragma solidity ^0.6.0;

contract Game {
    string gameName;
    uint256 height;
    uint256 width;

    constructor(
        string memory _gameName,
        uint256 _height,
        uint256 _width
    ) public {
        gameName = _gameName;
        height = _height;
        width = _width;
    }
}
