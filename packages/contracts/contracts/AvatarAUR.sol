pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
pragma experimental ABIEncoderV2;

contract AvatarAUR is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    address payable owner;
    uint256 public createAvatarFee = 10**16;
    address payable govContract;

    struct Avatar {
        string name;
        uint256 dna;
        uint256 id;
    }

    Avatar[] public avatars;

    event Minted(address sender, uint256 dna, uint256 id, string name);

    constructor(address payable _govContract)
        public
        ERC721("Aurbit Avatar", "AURA")
    {
        govContract = _govContract;
        avatars.push(Avatar("0", 0, 0)); //push empty filler
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
        forward(); // forwards the fee to AURGov
        _tokenIds.increment();
        uint256 id = _tokenIds.current();
        _mint(msg.sender, id);
        uint256 dna = _mkDNA(name, _userDNA);
        avatars.push(Avatar(name, dna, id));
        _setTokenURI(
            id,
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
        emit Minted(msg.sender, dna, id, name);
        return id;
    }

    function setcreateAvatarFee(uint256 _newfee) public {
        require(govContract == msg.sender);
        createAvatarFee = _newfee;
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
        uint256 str = ((prand >> 16) % ((pullcrumb(race, 2) + 1) * 15)) + 40; //third is strength
        uint256 out = setbyte(_userDNA, 15, intel);
        out = setbyte(out, 16, vital);
        out = setbyte(out, 17, str); //this is the first of the batch when returned as array...
        return out;
    }

    function setbyte(
        uint256 _indat,
        uint16 k,
        uint256 _setdat
    ) private pure returns (uint256) {
        //set kth byte from the right in _indat to _setdat
        return (_setdat << (8 * k)) + _indat;
    }

    function getDNA(uint256 tid) public view returns (uint256) {
        //gets DNA from token ID. not sure the exact proper error handling for this.
        require(tid < avatars.length);
        return avatars[tid].dna;
    }

    function getAvatars(address _owner) public view returns (Avatar[] memory) {
        uint256 bal = this.balanceOf(_owner);
        Avatar[] memory out = new Avatar[](bal);
        for (uint256 i = 0; i < bal; i++) {
            uint256 aid = this.tokenOfOwnerByIndex(_owner, i);
            out[i] = Avatar(avatars[aid].name, avatars[aid].dna, aid);
        }
        return out;
    }
}
