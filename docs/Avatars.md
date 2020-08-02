### Aurbit Avatars Contract

The AvatarAUR contract is an ERC 721 token contract that creates the use avatar. This avatar is used as a unique ID that enables gameplay.

The AavatarAUR contract inherits the Open Zeppelin ERC 721 contract code.

```
struct Avatar {
  string name;
  uint dna;
}
```

An AURA token has a user selected name and a partly user generated and partly randomized DNA. The following outlines the structure of the Avatar DNA:

000 000 000 000 000 000 000 000 000 000 000 000 000 000 000
