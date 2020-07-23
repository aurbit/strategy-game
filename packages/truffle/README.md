## Aurbit Smart Contract Library

### Setup

NVM node version manage. https://github.com/nvm-sh/nvm
Truffle installe globally. https://github.com/trufflesuite/truffle
Ganache Cli. https://github.com/trufflesuite/ganache-cli

```
nvm use v11.15
npm i -g truffle
npm i -g ganache-cli
```

## Development

1. Start the Ganache Cli in a new terminal screen.

```
ganache-cli
```

- Must use the correct version of node, or you'll get a callback error.

2. Deploy the contracts.

```
truffle deploy
```

3. Use the Console to check out the contracts.

```
truffle console

var planet = new Planet('PASTE CONTRACT ADDRESS')
plannet.address

```

## Testing

You must have a ganache-cli or the ganache gui running on port 8545.

The tests are in the `test` folder.

```
truffle test
```
