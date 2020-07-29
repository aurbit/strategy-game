pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AvatarAUR is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address payable owner;
    uint createAvatarFee = 10**16;
    //uint dnasize = 16;
    //uint dnamod = 10 ** dnasize;
    
    struct Avatar {
        string name;
        uint dna;
    }

    Avatar[] public avatars;
    mapping (uint => uint) public TokenIDtoAvID;



    constructor() ERC721("Aurbit Avatar", "AURA") public {
    owner = msg.sender; //set owner addres as sender on deploy
    }
    function forward() private{
	owner.transfer(address(this).balance);
    }

    function mintAvatar(string memory name,uint256 _userDNA) payable public returns (uint256) {
	require(msg.value == createAvatarFee,"pay 0.01 eth"); forward();//enforce fee of 0.01 and forward to owner. bad way?
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(msg.sender, newItemId);
	//uint dna = 
	_birthAvatar(name,newItemId, _userDNA);
        _setTokenURI(newItemId, string(abi.encodePacked('{"name": "', name, '", "description": "','sample description','", "image": "','sample image uri' ,'"}')));
	//sample description and sample image uri should be replaced with variables, didnt bother declaring them yet
        return newItemId;
    }
  
    function setcreateAvatarFee(uint _newfee) public{
         require(owner==msg.sender);
         createAvatarFee = _newfee;
    }

    function storeAvatar(string memory _name, uint _dna) private returns (uint){
        //store in array of avatars, return index
        avatars.push(Avatar(_name, _dna));
        return avatars.length - 1;
    }
    function _mkDNA(string memory _name,uint256 _userDNA) private view returns (uint) {
        uint prand = uint(keccak256(abi.encodePacked(_name,blockhash(block.number))));
        uint intel = prand%50 + 50;
        uint vital = (prand>>8)%50 + 50;
        uint strength = (prand>>16)%50 + 50;
        uint out = setbyte(_userDNA ,15,intel);
	out = setbyte(out ,16,vital);
        out = setbyte(out ,17,strength);
        return out;
    }
    function setbyte(uint256 _indat,uint16 k,uint256 _setdat) public pure returns (uint256){
        //set kth byte from the right in _indat to _setdat
        return (_setdat<<(8*k))+_indat;
    }
    function _birthAvatar(string memory _name, uint _id, uint256 _userDNA ) private{
        uint dna = _mkDNA(_name, _userDNA);
        uint aid = storeAvatar(_name, dna);
        TokenIDtoAvID[_id] = aid;
        //return dna; could return DNA to put in description, but parsing numbers to string is a little dumb i think
    }
   function getDNA(uint tid) public view returns (uint){
	//gets DNA from token ID. not sure the exact proper error handling for this.
	require(tid <= avatars.length);
	return avatars[TokenIDtoAvID[tid]].dna;
   }


}



