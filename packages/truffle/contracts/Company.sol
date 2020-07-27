pragma solidity ^0.6.0;

contract Company {
    string name;
    address payable owner;

    constructor(
        string memory _name,
        uint256 _height,
        uint256 _width
    ) public {
        owner = msg.sender; //set owner address as sender on deploy
        name = _name;
    }

    function withdraw() public {
        require(msg.sender == owner, "Only the owner can withdraw.");
    }

    function forward() private {
        owner.transfer(address(this).balance);
    }

    // function getName() public view {
    //     return name;
    // }
}
