pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

/**
    Author: Chris Markov 2020
    Project Aurbit

    The Avatar Contract for the Aurbit Strategy Game.

    Symbol: AURA

    https://github.com/aurbit/strategy-game/blob/master/docs/Avatars.md

 */
contract AvatarAUR is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address payable owner;
    uint256 createAvatarFee = 10**16;
    //uint dnasize = 16;
    //uint dnamod = 10 ** dnasize;
    address payable govContract;
    struct Avatar {
        string name;
        uint256 dna;
    }

    Avatar[] public avatars;
    mapping(uint256 => uint256) public TokenIDtoAvID;

    event Minted(address sender, uint256 dna, uint256 avatarId);
    event FeeUpdated(uint256 newFee);

    constructor(address payable _govContract)
        public
        ERC721("Aurbit Avatar", "AURA")
    {
        govContract = _govContract;
        owner = msg.sender; //set owner addres as sender on deploy
    }

    function forward() private {
        govContract.transfer(address(this).balance);
    }

    function mintAvatar(string memory name, uint256 _userDNA)
        public
        payable
        returns (uint256)
    {
        require(msg.value == createAvatarFee, "pay fee");
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
                    "Aurbit avatar",
                    '", "image": "',
                    "sample image uri",
                    '"}'
                )
            )
        );
        //sample description and sample image uri should be replaced with variables, didnt bother declaring them yet
        return newItemId;
    }

    function setcreateAvatarFee(uint256 _newfee) public {
        require(govContract == msg.sender);
        createAvatarFee = _newfee;
        emit FeeUpdated(_newfee);
    }

    function storeAvatar(string memory _name, uint256 _dna)
        private
        returns (uint256)
    {
        //store in array of avatars, return index
        avatars.push(Avatar(_name, _dna));
        return avatars.length - 1;
    }

    function pullcrumb(uint8 b, uint8 pos) public pure returns (uint8) {
        //pulls bits in 2 bit pairs i call crumbs
        //8 bits a byte 4 bits a niddle 2 bits a crumb.
        return ((b & (3 << (2 * pos))) >> (2 * pos));
    }

    function _mkDNA(string memory _name, uint256 _userDNA)
        private
        view
        returns (uint256)
    {
        uint256 prand = uint256(
            keccak256(
                abi.encodePacked(_name, blockhash(block.number), block.number)
            )
        );
        //uint prand = uint(blockhash(block.number));
        uint8 race = uint8(_userDNA & 255); //pulls first byte, the race

        uint256 intel = (prand % ((pullcrumb(race, 0) + 1) * 15)) + 40; //first 2 bits littleendian gives intel
        uint256 vital = ((prand >> 8) % ((pullcrumb(race, 1) + 1) * 15)) + 40; //second is vital
        uint256 strength = ((prand >> 16) % ((pullcrumb(race, 2) + 1) * 15)) +
            40; //third is strength
        uint256 out = setbyte(_userDNA, 15, intel);
        out = setbyte(out, 16, vital);
        out = setbyte(out, 17, strength); //this is the first of the batch when returned as array...
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
        emit Minted(msg.sender, dna, aid);
    }

    function getDNA(uint256 tid) public view returns (uint256) {
        //gets DNA from token ID. not sure the exact proper error handling for this.
        require(tid <= avatars.length);
        return avatars[TokenIDtoAvID[tid]].dna;
    }
}
