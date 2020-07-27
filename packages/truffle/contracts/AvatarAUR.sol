pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AvatarAUR is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address payable owner;

    //uint dnasize = 16;
    //uint dnamod = 10 ** dnasize;

    struct Avatar {
        string name;
        uint256 dna;
    }

    Avatar[] public avatars;
    mapping(uint256 => uint256) public TokenIDtoAvID;

    constructor() public ERC721("Aurbit Avatar", "AURA") {
        owner = msg.sender; //set owner addres as sender on deploy
    }

    function forward() private {
        owner.transfer(address(this).balance);
    }

    function mintAvatar(string memory name, uint256 _userDNA)
        public
        payable
        returns (uint256)
    {
        require(msg.value == 10**16, "pay 0.01 eth");
        forward(); //enforce fee of 0.01 and forward to owner. bad way?
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
        //uint dna =
        _birthAvatar(name, newItemId, _userDNA);
        _setTokenURI(
            newItemId,
            string(
                abi.encodePacked(
                    '{"name": "',
                    name,
                    '", "description": "',
                    "sample description",
                    '", "image": "',
                    "sample image uri",
                    '"}'
                )
            )
        );
        //sample description and sample image uri should be replaced with variables, didnt bother declaring them yet
        return newItemId;
    }

    function storeAvatar(string memory _name, uint256 _dna)
        private
        returns (uint256)
    {
        //store in array of avatars, return index
        avatars.push(Avatar(_name, _dna));
        return avatars.length - 1;
    }

    function _mkDNA(string memory _name, uint256 _userDNA)
        private
        view
        returns (uint256)
    {
        uint256 prand = uint256(
            keccak256(abi.encodePacked(_name, blockhash(block.number)))
        );
        uint256 intel = (prand % 50) + 50;
        uint256 vital = ((prand >> 8) % 50) + 50;
        uint256 strength = ((prand >> 16) % 50) + 50;
        uint256 out = setbyte(_userDNA, 15, intel);
        out = setbyte(out, 16, vital);
        out = setbyte(out, 17, strength);
        return out;
    }

    function setbyte(
        uint256 _indat,
        uint16 k,
        uint256 _setdat
    ) public pure returns (uint256) {
        //set kth byte from the right in _indat to _setdat
        return (_setdat << (8 * k)) + _indat;
    }

    function _birthAvatar(
        string memory _name,
        uint256 _id,
        uint256 _userDNA
    ) private {
        uint256 dna = _mkDNA(_name, _userDNA);
        uint256 aid = storeAvatar(_name, dna);
        TokenIDtoAvID[_id] = aid;
        //return dna; could return DNA to put in description, but parsing numbers to string is a little dumb i think
    }

    function getDNA(uint256 tid) public view returns (uint256) {
        //gets DNA from token ID. not sure the exact proper error handling for this.
        require(tid <= avatars.length);
        return avatars[TokenIDtoAvID[tid]].dna;
    }
}
