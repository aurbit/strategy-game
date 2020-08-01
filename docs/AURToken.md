## Aurbit Token

The Aurbit token is the fungible resource used during gameplay. Tokens are used to secure land tiles against attack and for purchasing items.

The contract is based on the ERC 721 Open Zeppelin contract and is widely compatible with ERC 20.

`constructor` builds the contract

```
constructor(
  address payable planet0
) public ERC777("Aurbit Token", "AUR", new address[] (0))
```

- `planet0` The initial planet that will be able to mint or burn token according to gameplay.
