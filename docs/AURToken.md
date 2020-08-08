## Aurbit Token

The Aurbit token is the fungible resource used during gameplay. Tokens are used to secure land tiles against attack and for purchasing items.

The contract is based on the ERC 777 Open Zeppelin contracts and is widely compatible with ERC 20.

`constructor` builds the contract

```
constructor(
  address payable govcontract
) public ERC777("Aurbit Token", "AUR", new address[] (0))
```

- `govcontract` - address of governance contract

`isMintAuthed` Checks if the function callers is authorized to Mint tokens

`burnInternal`: Burns an amount of AUR tokens.

```
function burnInternal(
  uint256 amount
) public {
  require(ismintAuthed());
  ...
}
```

### Useful Code

```
// Create  a new instance of the token contract
var token = new AURToken(AURToken.address)

// Get the list of dev chain accounts
var accounts = await web3.eth.getAccounts()

// Get array of all past events for contracts
var event = await token.getPastEvents("allEvents", { fromBlock: '0', toBlock: 'latest' })



```
