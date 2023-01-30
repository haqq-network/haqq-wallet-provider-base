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

  getPublicKey(_hdPath: string) {
    return Promise.resolve('')
  }

  async getBase64PublicKey(hdPath: string) {
    let resp = ''
    try {
      const publicKey = await this.getPublicKey(hdPath)
      resp = Buffer.from(publicKey, 'hex').toString('base64');
      this.emit('getBase64PublicKey', true);
    } catch (e) {
      if (e instanceof Error) {
        this.catchError(e, 'getBase64PublicKey');
      }
    }
    return resp
  }

  async getCosmosAddress(hdPath: string) {
    const address = await this.getEthAddress(hdPath)
    return converter(this._options.cosmosPrefix).toBech32(address);
  }

  catchError(e: Error, source: string) {
    this.emit(source, false, e.message, e.name);
    throw new Error(e.message);
  }

  abort() {
  }
}
