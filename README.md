<p align=center>
<img src="/dapp/src/images/titlelogo.png">
</p>


Squirt and Burny is a crypto card game that uses [OpenZepplin](https://github.com/OpenZeppelin/openzeppelin-solidity).

The contract is compiled and deployed under the ERC-721 non-fungible token standard.

Acquiring game cards:
Users can acquire game cards using BNB. Every game card will have a game point on it, which will be used to determine the winner later in the game.

## Roles

#### Card Collection
Players can aquire card using BNB. Each card will have random points on it, which will be used to deternmine the winner in the card game.

![Card Collection](herocollection.gif)

#### Card Battle
Once entered the game, players will need to choose a card to play for the round. Each round, the smart contract will 
randomly decide either card with larger or smaller point wins the round. At the same time, the smart contract will 
also randomly generate a number in order to compete with the player. Winner of the game will receive the price.

![Card Battle](cardbattle.gif)

#### Dashboard
You can view the card battle history about all the games you played.

![Game History](gamehistory.gif)

## ERC-721 Token

ERC-721 non-fungible token:
    ERC-721 is a free, open standard that describes how to build non-fungible or unique tokens on the Binance Smart blockchain. 
	While most tokens are fungible (every token is the same as every other token), ERC-721 tokens are all unique (with unique ID).

[Reference](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md)


## Contracts
You can find contract detail under `contracts/` directory:
- [`CryptoHerosGame.sol`](./contracts/CryptoHerosGame.sol):
    The implementation of game execution and rule.

- [`CryptoHerosToken.sol`](./contracts/CryptoHerosToken.sol):
    The implementation of game cards purchase and generation.

## Technical stack

### Frontend
- React
- Redux
- Saga
- Web3(MetaMask)

### UI
- Sass
- Material-UI

### Smart contract/Solidity
- Truffle

### Test environment/Private chain
- ganache

## Requirements

* NodeJS 8.0+ recommended.
* Windows, Linux or Mac OS X.

## How To Install Dependencies

First install required dependencies:

You'll need local ethereum node, I recommend `ganache-cli`. You can install it from npm.

Deploy contracts

```
npm install
```

## Card List

See [CARD.md](./dapp/CARD.md) for more information.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for how to help out.

## Licence

See [LICENSE](./LICENSE) for details.
"# squirt-burny-2022" 
