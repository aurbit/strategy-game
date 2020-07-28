//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
//import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "./IAUR.sol";
import "@openzeppelin/contracts/introspection/IERC1820Registry.sol";//figure out what this actually does
import "@openzeppelin/contracts/token/ERC777/IERC777Recipient.sol";
/*
interface AvatarI {//Avatar Interface
    function ownerOf(uint256 avatarId) external view returns (address owner);
}
*/

contract Planet is IERC777Recipient {
    address payable owner;
    address payable avatarContract;
    uint256 constant Nx = 112; //must be div by 8
    uint256 constant Ny = 64;
    uint256 constant public N = Nx * Ny;
    uint launchBlockNumber; 
    string UNAUTHMSG = "UNAUTHORIZED";   
    string ERR_INSUF_VAL = 'insufficient funds sent';
    string TILEOFFMAP = 'Tile index invalid/off map';
    uint TileBuyFee;
    uint minAURUnit; 
    uint satsPerBlockPerTile;
    address payable tokenContract;
    IAUR private AURToken;
    IERC1820Registry private _erc1820 = IERC1820Registry(0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24);
    //figure out what the fuck this address is and why i need it here. 
    bytes32 constant private TOKENS_RECIPIENT_INTERFACE_HASH = keccak256("ERC777TokensRecipient");
    event ReceivedDeposit(address operator, address from, address to, uint256 amount, bytes userData, bytes operatorData);
    event TileChanged(uint tile_ind,uint tile_owner, uint tile_bal); //seems implemented, double check
    event MinedAUR(uint _ammount, uint _avatarId);//implemented
    event Battle(uint aggressor_avatarId,uint defender_avatarId,uint winner_avatarId, uint tile_ind, string attackType, uint resources_burnt);//implemented
    event NewPlayer(uint _avatarId);//implemented
    event PlayerBalanceChange(uint _avatarId,uint _balance_ammount); //implemented

   
    uint8[N / 8] public map;
    //actually should have ownership array. maps tile to owner
    struct tile {
        uint16 ind; // tile address/index
        uint256 bal; // resources allocated to tile
	uint256 owner;//avatarId of owner
        uint256 LastMineBlockTime;
    }

    struct Player {
        uint256 avatarId; //tokenid of avatar
        uint256 balance; //BALANCE OF UNALOCATED TOKENS
    }
    Player[] Players;
    tile[] Tiles;
    constructor(address payable _avatarContract, uint8[N / 8] memory _map)//,address payable addyerc1820)
        public
    {
        _erc1820.setInterfaceImplementer(address(this), TOKENS_RECIPIENT_INTERFACE_HASH, address(this));
        owner = msg.sender;
        avatarContract = _avatarContract;
        map = _map;
        launchBlockNumber = block.number;
        TileBuyFee = 10**16;//buy in in ether
        minAURUnit = 10**16;
        satsPerBlockPerTile = 10**14; 
    }
    function bytes2uint(bytes memory b) public pure returns (uint256){
     uint256 number;
     for(uint i=0;i<b.length;i++){
       number = number + uint256(uint8(b[i]))*(2**(8*(b.length-(i+1))));
     }
     return number;
    }
    function forward() private{
        owner.transfer(address(this).balance);
    }

    function changeContractOwner(address payable _newOwner) public returns (address) {
        require(msg.sender == owner, UNAUTHMSG);
        owner = _newOwner;
    }
    function setTileBuyFee(uint _newfee) public{
       require(msg.sender == owner, UNAUTHMSG);
       TileBuyFee = _newfee;
    }
    function setMiningRate(uint _newrate) public{
       require(msg.sender == owner, UNAUTHMSG);
       satsPerBlockPerTile = _newrate;
    }
    function setminAURUnit(uint _newunit) public{
       //this is the unit of AUR tokens used for one 'roll' in the riskroll function
       //should be 10**16 or more i guess. depends on value
       require(msg.sender == owner, UNAUTHMSG);
       minAURUnit = _newunit;
    }
    function setTokenContract(address payable _tokencontract) public{
       require(msg.sender == owner, UNAUTHMSG);
       tokenContract = _tokencontract;     
       AURToken = IAUR(_tokencontract);        

    }
    function mintTokens(uint _ammount) private{//must change to private after test
           AURToken.mintInternal(_ammount);
    }
    function burnTokens(uint _ammount) private{//must change to private after test
           AURToken.burnInternal(_ammount);
    }
    function mineMyTokens(uint _avatarId) public returns (uint){
         //mine time is continuous, u get a certain number for each block and you choose when to mint them. 
         require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);//this is actually not necessary but makes sense
         (,uint pid) = getPlayerId(_avatarId);
         uint256 _add = 0;
         for (uint i; i<Tiles.length;i++){
              if (isLand(Tiles[i].ind)&&(_avatarId==Tiles[i].owner)){
                    _add += Tiles[i].bal*getMineRatio(i);
                    Tiles[i].LastMineBlockTime = block.number;
              }
         }
         Players[pid].balance += _add;
         mintTokens(_add);
         emit MinedAUR(_add,_avatarId);
         emit PlayerBalanceChange(_avatarId,Players[pid].balance);
         return _add;
    }
   
    function deallocateTokens(uint16 _ind,uint _avatarId, uint _amt) public returns (bool){
         require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
         (uint _tileOwner, uint _tileindex) = WhoOwnsTile(_ind);
         bool out = false;
         (,uint pid) = getPlayerId(_avatarId);
         if ((_tileOwner == _avatarId)&&(Tiles[_tileindex].bal>=_amt)){
             Tiles[_tileindex].bal -= _amt;
             Players[pid].balance += _amt;
             out = true;
             emit PlayerBalanceChange(_avatarId,Players[pid].balance);
             emit TileChanged(_ind,_avatarId, Tiles[_tileindex].bal);
         }
         return out;
              
    }
    //THESE TWO FUNCTIONS ABOVE AND BELOW ARE SO SIMILAR SHOULD BE MERGED for space
    function allocateTokens(uint16 _ind, uint _avatarId, uint _amt) public returns (bool){
        require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
         (uint _tileOwner, uint _tileindex) = WhoOwnsTile(_ind);
         bool out = false;
         (,uint pid) = getPlayerId(_avatarId);
         if ((_tileOwner == _avatarId)&&(Players[pid].balance>=_amt)){
             Tiles[_tileindex].bal += _amt;
             Players[pid].balance -= _amt;
             out = true;
             emit TileChanged(_ind,_avatarId, Tiles[_tileindex].bal);
             emit PlayerBalanceChange(_avatarId,Players[pid].balance);
         }
         return out;
    }
    function getMineRatio(uint tid) public view returns(uint){//takes tile id
          //calc the number of tokens to reward per staked token
          //based on block time passed from last payout per tile
          uint timePassed = block.number - Tiles[tid].LastMineBlockTime;
          return timePassed*satsPerBlockPerTile; 
          
    }
    function tokensReceived(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes calldata userData,
        bytes calldata operatorData
    ) external override {
        require(msg.sender == address(AURToken), "Invalid token sent");
        if(keccak256(userData)!=keccak256(abi.encodePacked("MINTEDCOINS"))){
          //do this if not minted coins, IE they are deposited to some id
          //this needs to be done with events... so its more proper
            uint256 _avatarId = bytes2uint(userData);
    	    (,uint pid) = getPlayerId(_avatarId); 
            if (tx.origin==getPlayerAddress(_avatarId)){
               Players[pid].balance += amount;
               emit PlayerBalanceChange(_avatarId,Players[pid].balance);
            // + Players[pid].balance;
           }else{
             revert("deposting to wrong wallet, take these coins back please");
           }
        }
        emit ReceivedDeposit(operator, from, to, amount, userData, operatorData);
    }
    function WithdrawTokens(uint _amt,uint256 _avatarId) public returns (bool){
        require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
        bool out=false;
        (,uint pid) = getPlayerId(_avatarId);
        if (_amt <= Players[pid].balance){
           AURToken.send(msg.sender,_amt,"");
           Players[pid].balance -=_amt;
           emit PlayerBalanceChange(_avatarId,Players[pid].balance);
           out = true;
        }
        return out;

    }
    function getPlayerAddress(uint256 avatarId) public view returns (address){
        require(isPlaying(avatarId),'not playing');
        return IERC721(avatarContract).ownerOf(avatarId);
    }

    function BuyATile(uint16 _ind,uint256 _avatarId) public payable returns (bool) {
         //this is how you start. it costs ether
         //change to if it is owned u can buy it for 3x
         require(_ind < N,TILEOFFMAP);
         require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
         (uint oldowner,uint tid) = WhoOwnsTile(_ind);
         (,uint pid) = getPlayerId(oldowner);
         if (oldowner>0){//isowned
                if (msg.value>=3*TileBuyFee){
                    Players[pid].balance += Tiles[tid].bal;
                    emit PlayerBalanceChange(_avatarId,Players[pid].balance);
                    Tiles[tid].bal=0;
                    changeTileOwner(_ind,_avatarId);
                }else{
                   revert('Tile is owned, and you paid too little');
                }
         }else{
         //uint i = getPlayerId(_avatarId);
           if (msg.value>=TileBuyFee){
               changeTileOwner(_ind,_avatarId);
           }else{
              revert(ERR_INSUF_VAL);
         }
        }
         return true;
    }
    function newTileOwner(uint16 _ind,uint256 _avatarId) private returns(uint){
         //only called by changeTile so event is sent out there
         require(isTileOwned(_ind)==false,'already owned');//this is redundant now
         Tiles.push();
         Tiles[Tiles.length-1].owner = _avatarId;
         Tiles[Tiles.length-1].ind = _ind;
         Tiles[Tiles.length-1].LastMineBlockTime = block.number; 
         return Tiles.length-1;
    }
    function TakeATile(uint16 _ind, uint256 _avatarId,uint16 _myind1,uint16 _myind2) public returns (bool){
	//roughly how it hsould go, as the functions here just authorize rather than search for the gamplay mechanics
	// as a result we have to specify the tiles we are using to take it. 
         require(CanTakeATile(_ind,_avatarId,_myind1,_myind2),'can not take');
         changeTileOwner(_ind,_avatarId);
         return true;
    }
    function AerialAttack(uint16 _ind,uint256 _avatarId, uint256 _resourcesMobilized)public returns (bool){
         require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
         (,uint pid) = getPlayerId(_avatarId);
         bool win = false;
         uint burnamt;
         uint opnewbal;
         uint mynewbal = _resourcesMobilized;
         if (Players[pid].balance <= _resourcesMobilized){
              revert(ERR_INSUF_VAL);
         }
         //dividing resources mobilized by 2 to punish aerial attacker, cost of mounting
         //home team advantage. 
         (uint oponentavatarId,uint oponenttid) = WhoOwnsTile(_ind);
         uint winner_avatarId=oponentavatarId;
         if (oponentavatarId>0){
             (mynewbal, opnewbal) =  RiskRoll(_resourcesMobilized/2,Tiles[oponenttid].bal);
             Tiles[oponenttid].bal = opnewbal;
             if (opnewbal==0){
                changeTileOwner(_ind,_avatarId);
                win = true;
                winner_avatarId=_avatarId;
             }else{
               emit TileChanged(_ind,oponentavatarId, Tiles[oponenttid].bal);
             }
             burnamt = (Tiles[oponenttid].bal - opnewbal) + (_resourcesMobilized - mynewbal);
             
         }else{//if not owned already
             mynewbal = _resourcesMobilized/2;
             burnamt = (_resourcesMobilized - mynewbal);
             changeTileOwner(_ind,_avatarId);
             win=true;
             winner_avatarId=_avatarId;
         }
          Players[pid].balance -= (_resourcesMobilized - mynewbal); //remove used mobilized coins 
          emit PlayerBalanceChange(_avatarId,Players[pid].balance);
          burnTokens(burnamt);
          emit Battle(_avatarId,oponentavatarId,winner_avatarId, _ind, 'Aerial', burnamt);
          return win;
    }
    //both these functions are using simple logic that will not stay. just a place holder til 
     //i figure out the best way to implement risk style face off
    function BattleTile(uint16 _ind, uint256 _avatarId,uint16 _myind1) public returns (bool){
        //attack tile _ind from tile _myind1
        require(CanBattleTile( _ind, _avatarId, _myind1),'Can not battle tile');
        bool win = false; 
        uint opavatarId;
        uint oponenttid;
        uint burnamt = 0; 
        (,uint mytid) = WhoOwnsTile(_myind1);
        (opavatarId,oponenttid) = WhoOwnsTile(_ind);
        uint winner_avatarId=opavatarId;
        if (opavatarId>0){
           (uint mynewbal, uint opnewbal) =  RiskRoll(Tiles[mytid].bal,Tiles[oponenttid].bal);
           if (opnewbal==0){ //not the actual logic just bullshit start
              changeTileOwner(_ind,_avatarId);
              win = true;
              winner_avatarId= _avatarId;
           }
           burnamt = (Tiles[oponenttid].bal - opnewbal) + (Tiles[mytid].bal - mynewbal);
           Tiles[mytid].bal = mynewbal;
           Tiles[oponenttid].bal = opnewbal;
        }else if (Tiles[mytid].bal>minAURUnit){//if tile not owned
           changeTileOwner(_ind,_avatarId);
           Tiles[mytid].bal -= minAURUnit;
           emit TileChanged(_myind1,_avatarId, Tiles[mytid].bal);
           burnamt = minAURUnit;
           win=true;
           winner_avatarId= _avatarId;
        }else{
           revert('failed, not enough AUR on tile');
        }
        burnTokens(burnamt);
        emit Battle(_avatarId,opavatarId,winner_avatarId, _ind, 'Battle', burnamt);
        return win;
    }
    function getEntropy() public view returns(uint){
          return uint(keccak256(abi.encodePacked(block.number,blockhash(block.number))));
          //use both block number nad hash becuase in test env the block hash is often the same
          // due to launch same contracts. in main net neither may be controlled without extreme cost
    }
    function min(uint x,uint y) public pure returns(uint){
        //helper function to do safe math abvoid overflow
        if (x>y){
           return y;
        }else{
           return x;
        }

    }
    function RiskRoll(uint mybal, uint opbal) public view returns (uint,uint){
        //does risk style roll. thing is it operates on sats! so this loop is quite long. 
        //mnake sure you use safe math if you switch from sats or you will be in a world of hurt. 
        // maybe should be using safe math here JIC but should be ok. 
        uint entropy = getEntropy();
        uint count = 0;
        while(mybal*opbal > 0 ){ //when one is 0 stop. put a limit on this 
             if (pullbit(entropy,count%256)){
                mybal -= min(mybal,minAURUnit);
             }else{//watch the fuck out here. must use safe math or floor...
                 opbal -= min(opbal,minAURUnit);
             }
             count++;
             if (count%256==0){ entropy = uint(keccak256(abi.encode(entropy)));}//rolls the entropy
        }
        return(mybal,opbal);
    }
    function CanBattleTile(uint16 _ind,uint256 _avatarId,uint16 _myind1) public view returns (bool){
          require(_ind < N,TILEOFFMAP);
          require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
          (uint tileowner1,) = WhoOwnsTile(_myind1);
          return isneighbor(_ind,_myind1) && (tileowner1==_avatarId);
         
    }
    function CanTakeATile(uint16 _ind, uint256 _avatarId,uint16 _myind1,uint16 _myind2) public view returns (bool){
         require(_ind < N,TILEOFFMAP);
         require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
         //we might want to to take owned tile
         //require(isTileOwned(_ind)==false,'Tile is already owned, must attack to take');
         (uint tileowner1,) = WhoOwnsTile(_myind1);
         (uint tileowner2,) = WhoOwnsTile(_myind2);
         bool DoIOwn = (tileowner1==_avatarId)&&(tileowner2==_avatarId);
         return (isneighbor(_ind,_myind1) && isneighbor(_ind,_myind2) && DoIOwn);
    }
    function changeTileOwner(uint16 _ind,uint256 _avatarId) private returns (bool){
         require(_ind < N,TILEOFFMAP);
         require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
         (uint256 cOwn,uint256 ti) = WhoOwnsTile(_ind);
         bool out = false;
         if (cOwn>0){//make sure owned currently
             Tiles[ti].owner = _avatarId;
             Tiles[ti].ind = _ind;
             out = true;
         }else if(cOwn==0){
             ti = newTileOwner(_ind,_avatarId);
         }
         emit TileChanged(_ind,_avatarId, Tiles[ti].bal);//change this it will be wrong if calls newTileOwner
         return out;
    }
    function CreateNewPlayer(uint256 _avatarId) public payable returns(uint){
        //initializes gameplay, adding player to player struct
    	require(msg.sender==IERC721(avatarContract).ownerOf(_avatarId),UNAUTHMSG);
        //this above line checks if the sender is owner of _avatarId. 
        //this is needed because the function for it checks isPlaying too...
	require(isPlaying(_avatarId)==false,'YOU ARE ALREADY INITIALIZED');
	Players.push();
	Players[Players.length-1].avatarId = _avatarId;
        emit NewPlayer(_avatarId);
	return Players.length-1;//returns playerid aka pid
    }
    function isPlaying(uint _avatarId) public view returns (bool){
        //this calls getPlayerId because it was almost a copy of it. 
        (bool out,) = getPlayerId(_avatarId);
	return out;
    }
    function getPlayerId(uint _avatarId) public view returns (bool,uint){
        //gets index from Players[] array for given avatarId
        bool isplay = false;
        uint pid; 
        for (uint i=0; i<Players.length;i++){
                if (Players[i].avatarId == _avatarId){
                   isplay=true;
                    pid = i;
                    break;
                }
        }
        return (isplay,pid);
    }

    
    function isTileOwned(uint16 _ind) public view returns (bool){
       require(_ind < N,TILEOFFMAP);
       (uint256 _avatarId,) = WhoOwnsTile(_ind);
       return _avatarId>0;
    }
    function WhoOwnsTile(uint16 _ind) public view returns (uint256,uint256){
        require(_ind < N,TILEOFFMAP);
        uint256 aId = 0;//return 0, if not found. Tokenids start at 1 so no issue
        uint256 tid=0;
        for (uint i=0; i<Tiles.length;i++){
		if (Tiles[i].ind==_ind){aId=Tiles[i].owner; tid = i; break;}
        }
       return (aId,tid);
    }
    function mkindex(uint256 x, uint256 y) public pure returns (uint256) {
        //0 start row major
        uint256 out = x + Nx * y;
        return out;
    }

    //function get2Dcoord(uint16 ind) public pure returns (uint256, uint256) {
    //    uint256 x = uint256(ind) % Nx;
    //    uint256 y = (uint256(ind) - x) / Nx;
    //    return (x, y);
    //}
    function isneighbor(uint16 _ind1, uint16 _ind2) public pure returns(bool){
         //this tells you if two tiles are neighbors
         //sorry this function doesnt read nice but im saving ops here
         bool out = ((_ind1 + 1)%N == _ind2 )||(_ind1==(_ind2+1)%N);//hax but efficient
    	 out = out||(mkindex(uint256(_ind1)%Nx, (_ind1/Nx + 1)%Ny)==_ind2);
	 return out||(mkindex(uint256(_ind2)%Nx, (_ind2/Nx + 1)%Ny)==_ind1);
    }

    function pullbit(uint b, uint pos) public pure returns (bool) {
        //returns true if bit is one to make isLand simpler
        return ((b & (1 << pos)) >> pos) == 1;
    }

    function isLand(uint16 ind) public view returns (bool) {
	require(ind < N,TILEOFFMAP);
        uint256 loc = uint256(ind / 8); //8 bit ints, find element in array index
        uint8 bitpos = uint8(7 - (ind % 8)); //find the bit in the element, 7- because we address from left in pullbit
        return pullbit(map[loc], bitpos);
    }
}
