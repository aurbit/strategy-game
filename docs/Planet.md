## Planet Contracts


```
constructor(
        address payable _govContract,
        uint8[N / 8] memory _map //,address payable addyerc1820)
    )
```

- `_govContract` - address of governance contract
- `map` - uint8 array that encodes the map. Row major, little endian in each element. First element is first 8 tiles rowwise from top left of map, little endian. so if first element is 187, that is 10111011 in binary, the first tile on the map would be 1, second 1m third 0 and so on. 





`getMap()` - spits out map as array same encoding as above

getPlayers() - spits out array of Player structure

```
    struct Player {
        uint256 avatarId; //tokenid of avatar in avatar erc721 contract
        uint256 balance; //BALANCE OF UNALOCATED TOKENS
    }
```

getTiles() - spits out array of tile structures

```
    struct tile {
        uint16 ind; // tile address in the map[] array
        uint256 bal; // resources allocated to tile in AUR wei
        uint256 owner; //avatarId of owner
        uint256 LastMineBlockTime; //- last block tile was mined
    }
```



```
    function allocateTokens(
        uint16 _ind,
        uint256 _avatarId,
        uint256 _amt
    )
```
 allocates `_amt` wei of AUR tokens to a tile denoted by ind, on behalf of `_avatarId`. Removed from `balance` in corresponding Player structure.  



```
    function deallocateTokens(
        uint16 _ind,
        uint256 _avatarId,
        uint256 _amt
    )
```
 deallocates `_amt` wei of AUR tokens to a tile denoted by ind, on behalf of `_avatarId`. they are added to `balance` in corresponding Player structure. 




`mineMyTokens(uint256 _avatarId)` - mine your tokens, from the tiles `_avatarId` owns



`function WithdrawTokens(uint256 _amt, uint256 _avatarId)` - Withdraw unallocated AUR `_amt` in wei from `_avatarId`, max ammount withdrawabe wuld be `balance` in corresponding Player structure as described above. 




`function BuyATile(uint16 _ind, uint256 _avatarId)` - 

``` 
   function TakeATile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1,
        uint16 _myind2
    )
```
 - take a tile `_ind` by go-like gameplay mechanics, must have two neighbors to tile denoted by `_myind1` and `_myind2`. costs only transaction fees

```
    function AerialAttack(
        uint16 _ind,
        uint256 _avatarId,
        uint256 _resourcesMobilized
    )
```
- Attack tile `_ind` you are not required to be neighboring, with player corresponding to `_avatarId` and AUR tokens in wei `_resourcesMobilized`. Mechanics is similar to BattleTile but defending tile gets an advantage. 


```
    function BattleTile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1
    )
```
- battle tile `_ind` with risk-like gameplay mechanics from tile `_myind1` that must be neighboring by von-neumann neighborhood. A random process happens pitting units of AUR tokens in each tile against eachother, each unit rolls against the other until there are no AUR on one tile, making the other tile the winner.  


```
    function CanBattleTile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1
    )
```
 - view function that checks if you are disqualified from Battling a tile. returns true if you can battle


```
    function CanTakeATile(
        uint16 _ind,
        uint256 _avatarId,
        uint16 _myind1,
        uint16 _myind2
    )
```
 - view function that checks if you can take a tile by Go type rules. returns true if you can take. 




`function isLand(uint16 ind)` - returns true if `ind` is a land tile. 
