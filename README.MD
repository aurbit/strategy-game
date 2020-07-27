# Aurbit Strategy Game

Aurbit is an Interplanetary Strategy game built with Ethereum Contracts. The objective of the game is to hold pixel of land on a planet for as many blocks as possible. Each new block will mint new AUR tokens according to how many land pixels you hold.

## How to Play

Clone the repo onto your computer or hit the url at: https://aurbit.io. To build the repo, you will need the following:

Dependencies:

- NodeJS
- Yarn
- Truffle

To get started, build the repo on your machine.

```
git clone git@github.com:aurbit/strategy-game
cd strategy-game
npm i -g yarn
npm i -g truffle

yarn
yarn start
```

## Game Mechanics and Rules

// TODO

## Governence

// TODO

## AUR Token

// TODO

## How to Play

// TODO

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
