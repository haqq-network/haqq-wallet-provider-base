import {WalletInterface} from './types';

export class Provider {
  protected _wallet: WalletInterface;

  constructor(wallet: WalletInterface) {
    this._wallet = wallet;
  }

  getEthAddress() {
    return this._wallet.address;
  }

  getCosmosAddress() {
    return this._wallet.cosmosAddress;
  }

  abort() {}
}
