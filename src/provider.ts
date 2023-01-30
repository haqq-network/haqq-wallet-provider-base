import {ProviderBaseOptions} from './types';
import EventEmitter from 'events';
import converter from 'bech32-converting';

export class Provider<T extends object> extends EventEmitter {
  protected _options: T & ProviderBaseOptions;

  constructor(options: T & ProviderBaseOptions) {
    super()
    this._options = options;
  }

  getEthAddress(_hdPath: string) {
    return Promise.resolve('')
  }

  async getCosmosAddress(hdPath: string) {
    const address = await this.getEthAddress(hdPath)
    return converter(this._options.cosmosPrefix).toBech32(address);
  }

  abort() {
  }
}
