import {ProviderBaseOptions, WalletInterface} from './types';
import converter from 'bech32-converting';

export class Provider<T extends object> {
  protected _wallet: WalletInterface;
  protected _options: T & ProviderBaseOptions;

  constructor(wallet: WalletInterface, options: T & ProviderBaseOptions) {
    this._wallet = wallet;
    this._options = options;
  }

  getEthAddress() {
    return this._wallet.address;
  }

  getCosmosAddress() {
    return converter(this._options.cosmosPrefix).toBech32(this._wallet.address);
  }

  abort() {
  }
}
