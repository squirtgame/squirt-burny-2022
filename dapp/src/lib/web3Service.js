export const getProvider = (networkId) => {
  switch (networkId) {
    case '1':
      return 'https://mainnet.infura.io/';
    case '3':
      return 'https://ropsten.infura.io/';
    case '4':
      return 'https://rinkeby.infura.io/';
    case '42':
      return 'https://kovan.infura.io/';
    case '56':
      return 'https://bsc-dataseed.binance.org/';
    case '97':
      return 'https://data-seed-prebsc-1-s1.binance.org:8545/';
    default:
      return 'http://localhost:8545/';




  }
}

export const getSimpleTokenAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x0';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case '56':
      return '0x0';
    case '97':
      return '0x0';
    default:
      return '0x0';
  }
}

export const getCryptoHerosTokenAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x0';
    case '4':
      return '0x0';
    case '42':
      return '0x0';
    case '56':
      return '0x0';
    case '97':
      return '0xa20C4cED36417a0ec1Ddb648f30972bfa2084fa8';
    default:
      return '0x0';
  }
}

export const getCryptoHerosGameAddress = (networkId) => {
  switch (networkId) {
    case '1':
      return '0x0';
    case '3':
      return '0x0';
    case '4':
      return '0x0';
    case '56':
      return '0x0';
    case '97':
      return '0xc3Ba17A938F5eFd9ea5906346BCe160066077305';
    default:
      return '0x0';
  }
}

export const getCurrentAddress = (web3) => {
  if (web3 === null) return;
  return web3.eth.accounts[0];
}

export const getCurrentNetwork = (web3) => {
  if (web3 === null) return;
  return web3.version.network;
}
