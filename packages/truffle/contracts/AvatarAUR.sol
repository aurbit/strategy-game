pragma solidity ^0.6.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
pragma experimental ABIEncoderV2;

contract AvatarAUR is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address payable owner;
    uint public createAvatarFee = 10**16;
    //uint dnasize = 16;
    //uint dnamod = 10 ** dnasize;
    address payable govContract;
    struct Avatar {
        string name;
        uint dna;
    }
    struct AvatarWId{
	string name;
        uint dna;
        uint avatarId;
    }
    Avatar[] public avatars;
    //mapping (uint => uint) public TokenIDtoAvID;



    constructor(address payable _govContract) ERC721("Aurbit Avatar", "AURA") public {
    govContract = _govContract;
    avatars.push(Avatar('0',0)); //push empty filler
    owner = msg.sender; //set owner addres as sender on deploy
    }
    function forward() private{
	govContract.transfer(address(this).balance);
    }

    function mintAvatar(string memory name,uint256 _userDNA) payable public returns (uint256) {
	require(msg.value == createAvatarFee,"pay fee"); forward();//enforce fee of 0.01 and forward to owner. bad way?
        _tokenIds.increment();
        uint256 newAvId = _tokenIds.current();
        _mint(msg.sender, newAvId);
	//uint dna = 
	//_birthAvatar(name,newAvId, _userDNA);
        uint dna = _mkDNA(name, _userDNA);
        avatars.push(Avatar(name, dna));
        //uint aid = storeAvatar(name, dna);
        _setTokenURI(newAvId, string(abi.encodePacked('{"name": "', name, '", "description": "','Aurbit avatar','", "image": "','sample image uri' ,'"}')));
	//sample description and sample image uri should be replaced with variables, didnt bother declaring them yet
        return newAvId;
    }
  
    function setcreateAvatarFee(uint _newfee) public{
         require(govContract==msg.sender);
         createAvatarFee = _newfee;
    }

    //function storeAvatar(string memory _name, uint _dna) private returns (uint){
        //store in array of avatars, return index
    //    avatars.push(Avatar(_name, _dna));
    //    return avatars.length - 1;
    //}
    function pullcrumb(uint8 b, uint8 pos) public pure returns (uint8) {
        //pulls bits in 2 bit pairs i call crumbs
        //8 bits a byte 4 bits a niddle 2 bits a crumb. 
        return ((b & (3 << 2*pos)) >> 2*pos);
    } 
    function _mkDNA(string memory _name,uint256 _userDNA) private view returns (uint) {
        uint prand = uint(keccak256(abi.encodePacked(_name,blockhash(block.number),block.number)));
        //uint prand = uint(blockhash(block.number));
        uint8 race = uint8(_userDNA&255);//pulls first byte, the race
        
        uint intel = prand%((pullcrumb(race,0)+1)*15) + 40;//first 2 bits littleendian gives intel
        uint vital = (prand>>8)%((pullcrumb(race,1)+1)*15) + 40;//second is vital
        uint strength = (prand>>16)%((pullcrumb(race,2)+1)*15) + 40; //third is strength
        uint out = setbyte(_userDNA ,15,intel);
	out = setbyte(out ,16,vital);
        out = setbyte(out ,17,strength);//this is the first of the batch when returned as array...
        return out;
    }
    function setbyte(uint256 _indat,uint16 k,uint256 _setdat) private pure returns (uint256){
        //set kth byte from the right in _indat to _setdat
        return (_setdat<<(8*k))+_indat;
    }
    //function _birthAvatar(string memory _name, uint _id, uint256 _userDNA ) private{
    //    uint dna = _mkDNA(_name, _userDNA);
    //    uint aid = storeAvatar(_name, dna);
        //TokenIDtoAvID[_id] = aid;
        //return dna; could return DNA to put in description, but parsing numbers to string is a little dumb i think
   // }
   function getDNA(uint tid) public view returns (uint){
	//gets DNA from token ID. not sure the exact proper error handling for this.
	require(tid < avatars.length);
	return avatars[tid].dna;
   }
   function getAvatars(address _owner) public view returns (AvatarWId[] memory){
         uint bal = this.balanceOf(_owner);
         AvatarWId[] memory out = new AvatarWId[](bal);
         for (uint i=0;i<bal;i++){
            uint aid = this.tokenOfOwnerByIndex(_owner,i);
            out[i] = AvatarWId(avatars[aid].name, avatars[aid].dna, aid); 
         }
         //uint aid = this.tokenOfOwnerByIndex(_owner,_index);
         //return AvatarWId(avatars[aid].name, avatars[aid].dna, aid);
         return out;
     
   }


}



