## Aurbit Governance

The Aurbit Governance Contract is primarily responsible for holding any proceeds or fees that are charged during gameplay. Ownership and control of the Deployed contracts is managed and can be transfered. The governance contract also controls which Planets are added to the ecosystem.

The following is a list of the functions and params for the Governance contract:

`contructor` builds the contract.s

```
  constructor(
    address initplanet,
    address _tokenContract,
    address _avatarContract)
    public
}
```

- `initPlanet`: An initial Planet game contract address.
- `tokneContract`: An AUR Token contract address.
- `avatarContract`: An Avatar contract address.

`isAuthed` checks that the function caller is an Administrator.

```
function isAuthed() private view returns(bool){
  return Admins[msg.sender];
}
```

`TODO`
