<img src="https://xhad-team-bucket.storage.fleek.co/aurbit-banner.png" />

Aurbit is a map based strategy game built with Ethereum Contracts. The objective of the game is to hold pixels, or tiles of land coordinates on a planet for as many blocks as possible. Each new block will mint you new AUR tokens according to how many land pixels you hold. Aurbit is an Interplanetary Strategy game build for HackFS, and ETHGlobal hackathon in 2020.

## Local Setup

Clone the repo onto your computer or hit the url at: https://aurbit.io. To build the repo, you will need the following:

Dependencies:

- NodeJS
- Yarn

To get started, build the repo on your machine. You must have the Ganache GUI running or start a dev chai in a seperate terminal window to build the development contracts and have them available to the client. Follow these commands to get started:

```
git clone git@github.com:aurbit/strategy-game
cd strategy-game
npm i -g yarn

yarn

yarn truffle:chain
yarn truffle:migrate
```

In a Second terminal:

```
yarn start
```

## Game Play

The game rules are a combination of the map based strategy game Risk, and the ancient game Go. It is designed to never end, and as a result is impossible to win conclusively. The player is designated by a ERC721 token called the Avatar. Any wallet containing the corresponding avatar token inherits control of the resources belonging to that avatar.

There are two types of tiles, land and water. In gameplay their only difference is the ability to mine. There is also a fungible token used in gameplay called AUR. This token is an abstraction of resources and can be mined at a designated rate per block passed, per tile of land. AUR can be held in a map/planet contract, on a tile, or in a wallet. A transaction must be sent to mine your AUR. The resulting AUR will be minted and added to the balance of the avatar in the given map. <a href="https://github.com/aurbit/strategy-game/blob/master/docs/GamePlay.md">Read More</a>

## Governance

The Aurbit Contracts and AUR Tokens are controlled via the AURGov contract which seeks to preserve transparency, fairness and community engagement. The AURGov contract seeks to develop the Aurbit Interplanetary Game and fullfill the
vision of building safe and high-quality Ethereum dAPPS.

Aurbit seeks to be an open and positive community. <a href="https://github.com/aurbit/strategy-game/blob/master/docs/Governance.md">Read More</a>

## Planets

In the Spirit of IPFS and the ETHGlobal community, Aurbit is a game takes place on Planets. Each planet is a map of land and water 112 X 63 pixels. Ownership of land tiles on the map mints the Avatar that owns it new AUR tokens on every new block. The tokens can be claimed at anytime and withdrawn to a wallet or used by the Avatar during game play.

AUR Tokens can be allocated to a tile which bolsters defences against attack from another player. An attack will burn tokens for both players, but having more AUR allocated to a tile will greatly improve the chances of defending an attack.

The above rules apply to the first Planet contract, Earth. Aurbit is designe to be Interplanetary, and more Planet games are being considered with different game rules.

## Avatar AUR

The Avatar AUR contract is an ERC 721 collectible token that holds AUR tokens. It's also an in game avatar that has unique DNA. The DNA is pseudo-random generated to create Strength, Intelligence and Vitality. The user selected various cosmetic attritubtes and the DNA is stored on Ethereum.
<a href="https://github.com/aurbit/strategy-game/blob/master/docs/AvatarAUR.md">Read More</a>

## AUR Token

The AUR Token is the in-game resource that is minted to avatars that hold tiles of land on Planet maps and burned during attacks to acquire other another players' tile. The Token is based on ERC777 and is ERC20 compatible. There is an initial 100 Million AUR tokens created on Mainnet and new tokens are minted or burned during game play.
<a href="https://github.com/aurbit/strategy-game/blob/master/docs/AURToken.md">Read More</a>

### Developers

![Standard Js](https://cdn.rawgit.com/feross/standard/master/badge.svg)

- `yarn client:dev`: This will run the react application development server
- `yarn eth:chain`: This will run a local EVM node
- `yarn eth:console`: Compile contracts and attach to an EVM node
- `yarn eth:compile`: Compile the solidity contracts.
- `yarn eth:deploy`: Compile the solidity contracts.
- `yarn eth:migrate`: This will publish the contracts to the ethereum network.

### Monorepo Methodology

1. To add your own package, create a folder inside the `packages` folder and treat it as its own project by running `yarn init--yes` to create a basic `package.json` file
2. Take note of the name of your project ensure the name of the `folder` and the `name` inside the `package.json` file **match**
3. Add your **scripts** to run your project as you would any normal project in your `package.json`
4. In the **root** `package.json` add your script named after the script you made in your project to run what ever you need inside the project I.E
5. Install project dependant npm packages within the projects `package.json` its self
6. In the event you need global packages (I.E If we were going to use jest to test in many projects - instead of installing it at each project package level - you could install it at the root project level)
