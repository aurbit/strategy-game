## Aurbit Avatars Contract

The AvatarAUR contract is an ERC 721 token contract that creates the AURA avatars. AURAs are used as a unique IDs that enable gameplay. You cannot buy tiles on a Planet without an AURA, which is used to hold the AUR tokens.

The AavatarAUR contract inherits the Open Zeppelin ERC 721 contract code.

```
struct Avatar {
  string name;
  uint dna;
}
```

### Usage

<b>Before</b>

```

yarn truffle:chain
`mintAvatar`
```
