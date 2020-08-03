## Aurbit Avatars (AURA Tokens)

Aurbit Avatars are used as the Player ID during gameplay and chat. They are also a uniquely generated Race of being that is rendered from a DNA integer. The AvatarAUR.sol contract is an ERC 721 token contract that creates the AURA avatars. AURAs, or Aurbit Avatars, are used as a unique IDs that enable gameplay. You cannot buy tiles on a Planet without an AURA, which is used to hold the AUR tokens.

The AavatarAUR contract inherits the Open Zeppelin ERC 721 contract code.

```go
struct Avatar {
  string name;
  uint dna;
}
```

### DNA

The AURA DNA is unique and has user selected elements and random elements. The DNA is first assembled on the client by user inputs and looks like this:

```
[165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
```

The numbers of the array map to the following:

```
[
  haircolor[0],haircolor[1],haircolor[2],
  eyecolor[0],eyecolor[1],eyecolor[2],
  skincolor[0],skincolor[1],skincolor[2],
  hairtype,
  eyetype,
  skintype,
  mouth,
  gender,
  race
]
```

The user will send the DNA array to the AvatarAUR contract which will add some random characteristics to the front of the array, which will now look like this:

```
[
  strength,
  intelligence,
  vitality,
  haircolor[0],haircolor[1],haircolor[2],
  eyecolor[0],eyecolor[1],eyecolor[2],
  skincolor[0],skincolor[1],skincolor[2],
  hairtype,
  eyetype,
  skintype,
  mouth,
  gender,
  race
]
```

Strength, Intelligence and Vitality are randomly generated and once created, the DNA is used to render the AURA graphics based upon pre-created assets stored on IPFS using Fleek.

The AURA serves as the PlayerID, and without the Avatar, a player will be unable to withdraw AUR tokens kept on planets.

### Contract Usage

<b>BeforeAll</b>

```bash
yarn truffle:chain
<open a new terminal screen>
yarn truffle:migrate
yarn truffle:console
```

<b>How to create a new avatar...</b>

```javascript
var avatar = new AvatarAUR(AvatarAUR.address)
var accounts = await web3.eth.getAccounts()
var dna = [165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
var request = await avatar.mintAvatar('Avatar Name', dna, {
  from: accounts[0],
  value: web3.utils.toWei('0.01', 'ether')
})
var balance = await avatar.balanceOf(accounts[0])
balance.toString()
// '1'
```

<b>How to get the DNA of an Avatar...</b>

1. Get the balance of the account:

```javascript
var balance = await avatar.balanceOf(accounts[0])
// '3' // this is the number of AURA held by this account
```

2. If the balance is 3 AURA, you have to repeat 3 times to get each index:

```javascript
var a1 = await avatar.tokenOfOwnerByIndex(accounts[0], 0)
var a2 = await avatar.tokenOfOwnerByIndex(accounts[0], 1)
var a3 = await avatar.tokenOfOwnerByIndex(accounts[0], 2)
```

3. To get the avatar info, you have to call 1 less the avatar Index from tokenOfOnwerByIndex

```javascript
var myAvatar1 = await avatar.avatars(a1.toNumber() - 1)
var myAvatar2 = await avatar.avatars(a2.toNumber() - 1)
var myAvatar3 = await avatar.avatars(a3.toNumber() - 1)

myAvatar1

// Result {
// '0': 'Gary The Destroyer',
// '1': <BN: 3f333aa5e4ef7544ef0504ef990502090355>,
// name: 'Gary The Destroyer',
// dna: <BN: 3f333aa5e4ef7544ef0504ef990502090355> }

myAvatar1.name
// 'Gary The Destroyer'

myAvatar1.dna.toString()
// '3508051535640044586598194807279620738057045'
```

4. Convert the DNA integer into array:

```javascript
var toHex = web3.utils.toHex('3508051535640044586598194807279620738057045')
var padLeft = web3.utils.padLeft(toHex, 36)
var dnaArray = web3.utils.hexToBytes(padLeft)
dnaArray
// [40, 69, 60, 165, 228, 239, 117, 68, 239, 5, 4, 239, 153, 5, 2, 9, 3, 85]
```
