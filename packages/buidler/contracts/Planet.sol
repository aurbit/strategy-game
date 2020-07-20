//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

/*
interface AvatarI {//Avatar Interface
    function ownerOf(uint256 tokenId) external view returns (address owner);
}
*/

contract Planet {
    address payable owner;
    address payable avatarContract;
    uint256 constant Nx = 112; //must be div by 8
    uint256 constant Ny = 64;
    uint256 constant N = Nx * Ny;
    //mapping(uint => uint8) public map;

    uint8[N / 8] public map;
    //NOTE, SHOULD CHANGE THE LAND INDICIES TO UINT16 BECAUSE
    // WE CANT STORE MORE THAN THAT CAN HOLD ANYWAYS.
    // we can only store about 2**14 tiles, and must store
    // these indicies a lot in the player structs
    // all the godamned error messages must be declared as const to save mem
    //actually should have ownership array. maps tile to owner
    struct tile {
        uint16 ind; // tile address/index
        uint256 bal; // resources allocated to tile
	uint256 owner;
    }

    struct Player {
        uint256 tokenId; //tokenid of avatar
        //tile[] territory;
        uint256 balance; //total balance.(not all resources must be allocated)
    }
    Player[] Players;
    tile[] Tiles;
    constructor(address payable _avatarContract, uint8[N / 8] memory _map)
        public
    {
        owner = msg.sender;
        avatarContract = _avatarContract;
        map = _map;
        //mkmap();
    }

    function changeContractOwner(address payable _newOwner) public returns (address) {
        require(msg.sender == owner, "UNAUTHORIZED");
        owner = _newOwner;
    }

    /*function mkmap() private{ //test function to make rand map
    	for (uint i=0; i<(N/8); i++) {
            map[i] = uint8(i%256); //just making up shit here to fill the map
    	}
    }*/

    // gets the wallet address of the ERC 721 Token owner
    function getPlayerAddress(uint256 tokenId) public view returns (address){
        return IERC721(avatarContract).ownerOf(tokenId);
    }

    function claim(uint16 _ind,uint256 _tokenId) public payable returns (bool) {
//         require(msg.value==10**16);
         require(_ind < N,'off map');
         require(msg.sender==getPlayerAddress(_tokenId),'UNAUTHORIZED');
         require(isPlaying(_tokenId),'not playing');
         //require(isOwned(_ind)==false,'already owned');
         //uint i = getPlayer(_tokenId);
         newTileOwner(_ind,_tokenId);
         return true;
    }
    function newTileOwner(uint16 _ind,uint256 _tokenId) private returns(bool){
         require(isOwned(_ind)==false,'already owned');
         Tiles.push();
         Tiles[Tiles.length-1].owner = _tokenId;
         Tiles[Tiles.length-1].ind = _ind;
         return true;
    }
    function take(uint16 _ind, uint256 _tokenId,uint16 _myind1,uint16 _myind2) public returns (bool){
	//roughly how it hsould go, as the functions here just authorize rather than search for the gamplay mechanics
	// as a result we have to specify the tiles we are using to take it. 
         require(_ind < N,'off map');
         require(msg.sender==getPlayerAddress(_tokenId),'UNAUTHORIZED');
         require(isPlaying(_tokenId),'not playing');
         bool out = false;
         if (isneighbor(_ind,_myind1) && isneighbor(_ind,_myind2)){
             changeTileOwner(_ind,_tokenId);
             out = true;
         }
         return out;
    }
    function changeTileOwner(uint16 _ind,uint256 _tokenId) private returns (bool){
         require(_ind < N,'off map');
         require(msg.sender==getPlayerAddress(_tokenId),'UNAUTHORIZED');
         require(isPlaying(_tokenId),'not playing');    
         (uint256 cOwn,uint256 ti) = WhoOwns(_ind);
         bool out = false;
         if (cOwn>0){//make sure owned currently
             Tiles[ti].owner = _tokenId;
             Tiles[ti].ind = _ind;
             out = true;
         }else if(cOwn==0){
             out = newTileOwner(_ind,_tokenId);
         }
         return out;
    }
    function getPlayer(uint256 _tokenId) public view returns(uint){
       require(isPlaying(_tokenId));//this is sort of dumb and inefficient but
       uint out;//do it for now
       for (uint i=0; i<Players.length;i++){
                if (Players[i].tokenId == _tokenId){out=i; break;}
        }
       return out;
    }
    function initPlay(uint256 _tokenId) public payable returns(bool){
    	require(msg.sender==getPlayerAddress(_tokenId),'UNAUTHORIZED');
	require(isPlaying(_tokenId)==false,'YOU ARE ALREADY INITIALIZED');
	Players.push();
	Players[Players.length-1].tokenId = _tokenId;
	return true;
    }
    function isPlaying(uint _tokenId) public view returns (bool){
	bool out = false;
    	for (uint i=0; i<Players.length;i++){
		if (Players[i].tokenId == _tokenId){out=true; break;}
        }
	return out;
    }

    function isOwned(uint16 _ind) public view returns (bool){
       require(_ind < N,'off map');
       (uint256 tID,) = WhoOwns(_ind);
       return tID>0;
    }
    function WhoOwns(uint16 _ind) public view returns (uint256,uint256){
        require(_ind < N,'off map');
        uint256 out = 0;//return 0, if not found. Tokenids start at 1 so no issue
        uint256 ti=0;
        for (uint i=0; i<Tiles.length;i++){
		if (Tiles[i].ind==_ind){out=Tiles[i].owner; ti = i; break;}
        }
       return (out,ti);
    }
    function mkindex(uint256 x, uint256 y) public pure returns (uint256) {
        //0 start row major
        uint256 out = x + Nx * y;
        return out;
    }

    function getcoord(uint16 ind) public pure returns (uint256, uint256) {
        uint256 x = uint256(ind) % Nx;
        uint256 y = (uint256(ind) - x) / Nx;
        return (x, y);
    }

    function getneighbors(uint16 ind) public pure returns (uint256,uint256,uint256,uint256){
        //this can be more efficient. fix later
        (uint256 x, uint256 y) = getcoord(ind);
	uint256 ym; uint256 xm;
	if (y==0){ym = Ny-1;}else{ym = y-1;}
	if (x==0){xm = Nx-1;}else{xm = x-1;}
        //these two are necessary to wrap around neg dir as we are unsigned
        uint256 out1 = mkindex(x, ym);
        uint256 out2 = mkindex(x, (y + 1)%Ny);
        uint256 out3 = mkindex(xm, y);
        uint256 out4 = mkindex((x + 1)%Nx, y);
        //must add conditionals for boundary items, or modulus Nx,Ny
        //conditionals for negative wrap around, modulus to take care of positive wrap around
        return (out1, out2, out3, out4);
    }
    function isneighbor(uint16 _ind1, uint16 _ind2) public pure returns(bool){
         //sorry this function doesnt read nice but im saving ops here
         bool out = ((_ind1 + 1)%N == _ind2 )||(_ind1==(_ind2+1)%N);//hax but efficient
    	 out = out||(mkindex(uint256(_ind1)%Nx, (_ind1/Nx + 1)%Ny)==_ind2);
	 return out||(mkindex(uint256(_ind2)%Nx, (_ind2/Nx + 1)%Ny)==_ind1);
    }

    function pullbit(uint8 b, uint8 pos) public pure returns (bool) {
        return ((b & (1 << pos)) >> pos) == 1;
    }

    function isLand(uint16 ind) public view returns (bool) {
	require(ind < N,'coord off map');
        uint256 loc = uint256(ind / 8); //8 bit ints, find element in array index
        uint8 bitpos = uint8(7 - (ind % 8)); //find the bit in the element, 7- because we address from left in pullbit
        return pullbit(map[loc], bitpos);
    }
}
