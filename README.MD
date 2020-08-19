<img src="https://xhad-team-bucket.storage.fleek.co/aurbit-banner.png" />

Aurbit is a map based strategy game built with Ethereum Contracts. The objective of the game is to hold pixels, or tiles of land coordinates on a planet for as many blocks as possible. Each new block will mint you new AUR tokens according to how many land pixels you hold. Aurbit is an Interplanetary Strategy game built for <a href="https://hackfs.com/">HackFS</a>, an <a href="https://ethglobal.co/">ETHGlobal</a> hackathon in 2020.

<a href="https://aurbit.io">https://www.aurbit.io</a>

## Overview

Project Aurbit is an entry to the HackFS ETHGlobal Hackathon sponsored by Protocol Labs, among others. Aurbit is a game that uses Fungible and Non-Fungible tokens on Planet Contracts. Assets are Stored on IPFS and the client applicaiton is hosted and deployed with Fleek Hosting.

Developers: <a href="https://github.com/aurbit/strategy-game/blob/master/docs/Developers.md">Documentation</a>

## How it's Made

Aurbit is a mono repo with two packages, Client and Truffle.

<b>Client</b>
The client was created with Create-React-App and uses Redux Saga State management. Important libraries in use are React-Bootstrap, Metamask-Provider, WalletConect, and Redux-Sata. The deployment and hosting for production assets are hosted with Fleek Hosting with continuous deployments happening on merges to master branch. The client features a decentralized chat built with Textile services that's available within the Planet game maps. We are also using Infura as our core proider, with the exception of signed transactions with Metamask. All requests to the networks happen with Infura, including those signed with WalletConnect.

Aurbit is a strategy game the following pages:

- /auth: The Auth page is a basic landing container to get the wallets setup.
- /avatar: The Avatar Page allows the user to create a new Avatar.
- /planet: The Planet Page has the game map, contol panel and chat components.

All state management happens with Redux Sagas and we use generator functions to handle state transition logic.

<b>Contracts</b>
It was our hope to use Buidler for this project, but we found Truffle to be a more mature and easy-to-use library to quickly get working with contract deployements. We are using Ganache-Cli and and Truffle to compile, deloy and migrate for development and mainnent/testnet builds.

## Game Play

The game rules are a combination of the map based strategy game Risk, and the ancient game Go. It is designed to never end, and as a result is impossible to win conclusively. The player is designated by a ERC721 token called the Avatar. Any wallet containing the corresponding avatar token inherits control of the resources belonging to that avatar.

There are two types of tiles, land and water. In gameplay their only difference is the ability to mine. There is also a fungible token used in gameplay called AUR. This token is an abstraction of resources and can be mined at a designated rate per block passed, per tile of land. AUR can be held in a map/planet contract, on a tile, or in a wallet. A transaction must be sent to mine your AUR. The resulting AUR will be minted and added to the balance of the avatar in the given map. <a href="https://github.com/aurbit/strategy-game/blob/master/docs/GamePlay.md">Read More</a>

## Governance

<a href="https://app.ens.domains/name/aurbit.eth">Aurbit.eth [<a href="https://https://ens.domains/">ENS]</a>

The Aurbit Contracts and AUR Tokens are controlled via the AURGov contract which seeks to preserve transparency, fairness and community engagement. The AURGov contract of Aurbit should fullfill the
vision of building safe and high-quality Ethereum dAPPS.

Aurbit seeks to be an open and positive community. <a href="https://github.com/aurbit/strategy-game/blob/master/docs/Governance.md">Read More</a>

## Planets

In the Spirit of IPFS and the ETHGlobal community, Aurbit is an Interplanetary strategy game. Planets are maps of land and water 112 X 63 pixels. Ownership of land tiles rewards your Avatar with new AUR tokens every block. The tokens can be claimed at anytime and withdrawn to a wallet or used by the Avatar during game play.

AUR Tokens can be allocated to a tile which bolsters defences against attack from another player. An attack will burn tokens for both players, but having more AUR allocated to a tile will greatly improve the chances of defending an attack.

The above rules apply to the first Planet contract, Earth. Aurbit is designe to be Interplanetary, and more Planet games are being considered with different game rules. <a href="https://github.com/aurbit/strategy-game/blob/master/docs/AvatarAUR.md">Read More</a>

## Avatar AUR

The Avatar AUR contract is an ERC 721 collectible token that holds AUR tokens. It's also an in game avatar that has unique DNA. The DNA is pseudo-random generated to create Strength, Intelligence and Vitality. The user selected various cosmetic attritubtes and the DNA is stored on Ethereum.
<a href="https://github.com/aurbit/strategy-game/blob/master/docs/AvatarAUR.md">Read More</a>

## AUR Token

The AUR Token is the in-game resource that is minted to avatars that hold tiles of land on Planet maps and burned during attacks. The Token is based on ERC777 and is ERC20 compatible. 100 Million AUR tokens were minted on Mainnet and new tokens are minted or burned during game play.
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
