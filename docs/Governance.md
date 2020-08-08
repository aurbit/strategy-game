## Aurbit Governance

The Aurbit Governance Contract is primarily responsible for holding any proceeds or fees that are charged during gameplay. Ownership and control of the Deployed contracts is managed and can be transfered. The governance contract also controls which Planets are added to the ecosystem.

The following is a list of the functions and params for the Governance contract:

constractor takes no arguments



`addPlanet`: adds a planet, which enables it to mint AUR and interace with the avatar contract

`addRace`: adds a race code so that it is authorized to play. race code is a byte(int 0-255). 

`isRaceAUthed`: Checks if race has been added, called by planet contracts

`setCreateAvatarFee`: sets the fee to mint a new avatar with the avatar contract

`setMinAURUnit`: sets the unit of AUR tokens(in wei) to attack, and to roll for battle purposes. 

`setPlanetMiningRate`: sets the rate at which AUR is mined. wei per block per tile. 

`setPlanetTileBuyFee`: set the fee in wei to buy an unoccupied tile. 

`isPlanet`: checks if a contract address is a planet added with addPlanet.

`getPlanets`: returns array of planet contract addresses. 


`isAuthed` checks that the function caller is an Administrator.

```
function isAuthed() private view returns(bool){
  return Admins[msg.sender];
}
```

`TODO`
