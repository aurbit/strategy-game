//SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.7.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
//import "@openzeppelin/contracts/token/ERC777/IERC777.sol";
import "./IAUR.sol";
import "@openzeppelin/contracts/introspection/IERC1820Registry.sol"; //figure out what this actually does
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
    uint256 constant N = Nx * Ny;
    string UNAUTHMSG = "UNAUTHORIZED";
    address payable tokenContract;
    IAUR private AURToken;
    IERC1820Registry private _erc1820 = IERC1820Registry(
        0x1820a4B7618BdE71Dce8cdc73aAB6C95905faD24
    );
    //figure out what the fuck this address is and why i need it here.
    bytes32 private constant TOKENS_RECIPIENT_INTERFACE_HASH = keccak256(
        "ERC777TokensRecipient"
    );
    event ReceivedDeposit(
        address operator,
        address from,
        address to,
        uint256 amount,
        bytes userData,
        bytes operatorData
    );

    uint8[N / 8] public map;
    //actually should have ownership array. maps tile to owner
    struct tile {
        uint16 ind; // tile address/index
        uint256 bal; // resources allocated to tile
        uint256 owner;
    }

    struct Player {
        uint256 avatarId; //tokenid of avatar
        uint256 balance; //BALANCE OF UNALOCATED TOKENS
        uint256 LastFarmBlockTime; //to keep track of last time the player farmed/minted
    }
    Player[] Players;
    tile[] Tiles;

    constructor(
        address payable _avatarContract,
        uint8[N / 8] memory _map //,address payable addyerc1820)
    ) public {
        //_erc1820 = IERC1820Registry(addyerc1820);
        _erc1820.setInterfaceImplementer(
            address(this),
            TOKENS_RECIPIENT_INTERFACE_HASH,
            address(this)
        );
        owner = msg.sender;
        avatarContract = _avatarContract;
        map = _map;
        //mkmap();
    }

    function bytes2uint(bytes memory b) public pure returns (uint256) {
        uint256 number;
        for (uint256 i = 0; i < b.length; i++) {
            number =
                number +
                uint256(uint8(b[i])) *
                (2**(8 * (b.length - (i + 1))));
        }
        return number;
    }

    function changeContractOwner(address payable _newOwner)
        public
        returns (address)
    {
        require(msg.sender == owner, UNAUTHMSG);
        owner = _newOwner;
    }

    function setTokenContract(address payable _tokencontract) public {
        require(msg.sender == owner, UNAUTHMSG);
        tokenContract = _tokencontract;
        AURToken = IAUR(_tokencontract);
    }

    function mintTokens(uint256 _ammount) public {
        //must change to private after test
        AURToken.mintInternal(_ammount);
    }

    function burnTokens(uint256 _ammount) private {
        //must change to private after test
        AURToken.burnInternal(_ammount);
    }

    function farmAllTokens() public {
        require(farmtime());
        uint256 _add = 0;
        for (uint256 i; i < Tiles.length; i++) {
            if (isLand(Tiles[i].ind)) {
                _add = _add + Tiles[i].bal;
                Tiles[i].bal = 2 * Tiles[i].bal;
            }
        }
        mintTokens(_add);
    }

    function deallocateTokens(
        uint16 _ind,
        uint256 _avatarId,
        uint256 _amt
    ) public returns (bool) {
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        (uint256 _tileOwner, uint256 _tileindex) = WhoOwnsTile(_ind);
        bool out = false;
        (, uint256 pid) = getPlayerId(_avatarId);
        if ((_tileOwner == _avatarId) && (Tiles[_tileindex].bal >= _amt)) {
            Tiles[_tileindex].bal -= _amt;
            Players[pid].balance += _amt;
            out = true;
        }
        return out;
    }

    function allocateTokens(
        uint16 _ind,
        uint256 _avatarId,
        uint256 _amt
    ) public returns (bool) {
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        (uint256 _tileOwner, uint256 _tileindex) = WhoOwnsTile(_ind);
        bool out = false;
        (, uint256 pid) = getPlayerId(_avatarId);
        if ((_tileOwner == _avatarId) && (Players[pid].balance >= _amt)) {
            Tiles[_tileindex].bal += _amt;
            Players[pid].balance -= _amt;
            out = true;
        }
        return out;
    }

    function farmtime() public pure returns (bool) {
        return true;
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
        if (keccak256(userData) != keccak256(abi.encodePacked("MINTEDCOINS"))) {
            //do this if not minted coins, IE they are deposited to some id
            //this needs to be done with events... so its more proper
            uint256 _avatarId = bytes2uint(userData);
            (, uint256 pid) = getPlayerId(_avatarId);
            if (tx.origin == getPlayerAddress(_avatarId)) {
                Players[pid].balance += amount;
                // + Players[pid].balance;
            } else {
                revert(
                    "deposting to wrong wallet, take these coins back please"
                );
            }
        }
        emit ReceivedDeposit(
            operator,
            from,
            to,
            amount,
            userData,
            operatorData
        );
    }

    function WithdrawTokens(uint256 _amt, uint256 _avatarId)
        public
        returns (bool)
    {
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        bool out = true;
        (, uint256 pid) = getPlayerId(_avatarId);
        if (_amt <= Players[pid].balance) {
            AURToken.send(msg.sender, _amt, "");
            Players[pid].balance -= _amt;
        } else {
            out = false;
        }
        return out;
    }

    //function getAvatarBal(uint256 _avatarId) public view returns(uint256){
    //       (,uint pid) = getPlayerId(_avatarId);
    //       return Players[pid].balance;
    //}
    //function setAvatarBal(uint _amt,uint256 _avatarId) private{
    //    (,uint pid) = getPlayerId(_avatarId);
    //    Players[pid].balance = _amt;
    //}

    // gets the wallet address of the ERC 721 Token owner
    function getPlayerAddress(uint256 avatarId) public view returns (address) {
        require(isPlaying(avatarId), "not playing");
        return IERC721(avatarContract).ownerOf(avatarId);
    }

    function BuyATile(uint16 _ind, uint256 _avatarId)
        public
        payable
        returns (bool)
    {
        //         require(msg.value==10**16);
        require(_ind < N, "off map");
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        //require(isTileOwned(_ind)==false,'already owned');
        //uint i = getPlayerId(_avatarId);
        newTileOwner(_ind, _avatarId);
        return true;
    }

    function newTileOwner(uint16 _ind, uint256 _avatarId)
        private
        returns (bool)
    {
        require(isTileOwned(_ind) == false, "already owned");
        Tiles.push();
        Tiles[Tiles.length - 1].owner = _avatarId;
        Tiles[Tiles.length - 1].ind = _ind;
        return true;
    }

    function TakeATile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1,
        uint16 _myind2
    ) public returns (bool) {
        //roughly how it hsould go, as the functions here just authorize rather than search for the gamplay mechanics
        // as a result we have to specify the tiles we are using to take it.
        //require(_ind < N,'off map');
        //require(msg.sender==getPlayerAddress(_avatarId),UNAUTHMSG);
        //require(isPlaying(_avatarId),'not playing');
        require(
            CanTakeATile(_ind, _avatarId, _myind1, _myind2),
            "can not take"
        );
        changeTileOwner(_ind, _avatarId);
        return true;
    }

    function BattleTile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1
    ) public returns (bool) {
        //attack tile _ind from tile _myind1
        require(CanBattleTile(_ind, _avatarId, _myind1), "Can not battle tile");
        bool win = false;
        (, uint256 mytid) = WhoOwnsTile(_myind1);
        (, uint256 oponenttid) = WhoOwnsTile(_ind);
        if (Tiles[mytid].bal > Tiles[oponenttid].bal) {
            //not the actual logic just bullshit start
            changeTileOwner(_ind, _avatarId);
            win = true;
        }
        return win;
    }

    function getEntropy() public view returns (uint256) {
        return
            uint256(
                keccak256(
                    abi.encodePacked(block.number, blockhash(block.number))
                )
            );
    }

    function CanBattleTile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1
    ) public view returns (bool) {
        require(_ind < N, "off map");
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        (uint256 tileowner1, ) = WhoOwnsTile(_myind1);
        return isneighbor(_ind, _myind1) && (tileowner1 == _avatarId);
    }

    function CanTakeATile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1,
        uint16 _myind2
    ) public view returns (bool) {
        require(_ind < N, "off map");
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        (uint256 tileowner1, ) = WhoOwnsTile(_myind1);
        (uint256 tileowner2, ) = WhoOwnsTile(_myind2);
        bool DoIOwn = (tileowner1 == _avatarId) && (tileowner2 == _avatarId);
        //require(isPlaying(_avatarId),'not playing');
        return (isneighbor(_ind, _myind1) &&
            isneighbor(_ind, _myind2) &&
            DoIOwn);
    }

    function changeTileOwner(uint16 _ind, uint256 _avatarId)
        private
        returns (bool)
    {
        require(_ind < N, "off map");
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        //require(isPlaying(_avatarId),'not playing');
        (uint256 cOwn, uint256 ti) = WhoOwnsTile(_ind);
        bool out = false;
        if (cOwn > 0) {
            //make sure owned currently
            Tiles[ti].owner = _avatarId;
            Tiles[ti].ind = _ind;
            out = true;
        } else if (cOwn == 0) {
            out = newTileOwner(_ind, _avatarId);
        }
        return out;
    }

    function CreateNewPlayer(uint256 _avatarId)
        public
        payable
        returns (uint256)
    {
        //initializes gameplay, adding player to player struct
        require(msg.sender == getPlayerAddress(_avatarId), UNAUTHMSG);
        require(isPlaying(_avatarId) == false, "YOU ARE ALREADY INITIALIZED");
        Players.push();
        Players[Players.length - 1].avatarId = _avatarId;
        return Players.length - 1; //returns playerid aka pid
    }

    function isPlaying(uint256 _avatarId) public view returns (bool) {
        //bool out = false;
        //for (uint i=0; i<Players.length;i++){
        //	if (Players[i].avatarId == _avatarId){out=true; break;}
        //}
        (bool out, ) = getPlayerId(_avatarId);
        return out;
    }

    function getPlayerId(uint256 _avatarId)
        public
        view
        returns (bool, uint256)
    {
        bool isplay = false;
        uint256 pid;
        for (uint256 i = 0; i < Players.length; i++) {
            if (Players[i].avatarId == _avatarId) {
                isplay = true;
                pid = i;
                break;
            }
        }
        return (isplay, pid);
    }

    function isTileOwned(uint16 _ind) public view returns (bool) {
        require(_ind < N, "off map");
        (uint256 tID, ) = WhoOwnsTile(_ind);
        return tID > 0;
    }

    function WhoOwnsTile(uint16 _ind) public view returns (uint256, uint256) {
        require(_ind < N, "off map");
        uint256 out = 0; //return 0, if not found. Tokenids start at 1 so no issue
        uint256 tid = 0;
        for (uint256 i = 0; i < Tiles.length; i++) {
            if (Tiles[i].ind == _ind) {
                out = Tiles[i].owner;
                tid = i;
                break;
            }
        }
        return (out, tid);
    }

    function mkindex(uint256 x, uint256 y) public pure returns (uint256) {
        //0 start row major
        uint256 out = x + Nx * y;
        return out;
    }

    function get2Dcoord(uint16 ind) public pure returns (uint256, uint256) {
        uint256 x = uint256(ind) % Nx;
        uint256 y = (uint256(ind) - x) / Nx;
        return (x, y);
    }

    function isneighbor(uint16 _ind1, uint16 _ind2) public pure returns (bool) {
        //this tells you if two tiles are neighbors
        //sorry this function doesnt read nice but im saving ops here
        bool out = ((_ind1 + 1) % N == _ind2) || (_ind1 == (_ind2 + 1) % N); //hax but efficient
        out =
            out ||
            (mkindex(uint256(_ind1) % Nx, (_ind1 / Nx + 1) % Ny) == _ind2);
        return
            out ||
            (mkindex(uint256(_ind2) % Nx, (_ind2 / Nx + 1) % Ny) == _ind1);
    }

    function pullbit(uint8 b, uint8 pos) public pure returns (bool) {
        //returns true if bit is one to make isLand simpler
        return ((b & (1 << pos)) >> pos) == 1;
    }

    function isLand(uint16 ind) public view returns (bool) {
        require(ind < N, "coord off map");
        uint256 loc = uint256(ind / 8); //8 bit ints, find element in array index
        uint8 bitpos = uint8(7 - (ind % 8)); //find the bit in the element, 7- because we address from left in pullbit
        return pullbit(map[loc], bitpos);
    }
}
