## Planet Contracts

## Developers

`getMap`: Returns the byteArray map of the Planet. After getting the map on the client, use must convert with the bitmap utility.
`isPlaying`: (avatarId) Checks if the avatar is playing
`createNewPlayer`: (avatarId) must be called by the wallet that owns that avatarId to enter the planet game
`buyTile`: (tile index, avatarId): Buys a tile on the map.
