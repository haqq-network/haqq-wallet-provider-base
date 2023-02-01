import {ProviderBaseOptions} from './types';
import EventEmitter from 'events';

export class Provider<T extends object> extends EventEmitter {
  protected _options: T & ProviderBaseOptions;

  constructor(options: T & ProviderBaseOptions) {
    super()
    this._options = options;
  }

  getIdentifier() {
    return ''
  }

  getAccountInfo(_hdPath: string) {
    return Promise.resolve({publicKey: '', address: ''})
  }

  getPrivateKey(_hdPath: string) {
    return Promise.resolve('');
  }

  catchError(e: Error, source: string) {
    this.emit(source, false, e.message, e.name);
    throw new Error(e.message);
  }

  abort() {
    return
  }

  clean() {
    return Promise.resolve()
  }

  updatePin(_pin: string) {
    return Promise.resolve()
  }
}
