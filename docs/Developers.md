## Developers

Dependencies:

- NodeJS
- Yarn

To get started, build the repo on your machine. You must have the Ganache GUI running or start a dev chai in a seperate terminal window to build the development contracts and have them available to the client. Follow these commands to get started:

```
git clone git@github.com:aurbit/strategy-game
cd strategy-game
npm i -g yarn
yarn
```

Terminal 1

```
yarn chain
```

Terminal 2

```
yarn console
truffle(development)> migrate
```

Terminal 3

```
yarn start
```
