import {
  BytesLike,
  ProviderBaseOptions,
  ProviderInterface,
  TransactionRequest
} from './types';
import EventEmitter from 'events';

export class Provider<T extends object> extends EventEmitter implements ProviderInterface {
  protected _options: T & ProviderBaseOptions;

  constructor(options: T & ProviderBaseOptions) {
    super()
    this._options = options;
  }

  signTransaction(_hdPath: string, _transaction: TransactionRequest): Promise<string> {
    throw new Error('not implemented')
  }

  signPersonalMessage(_hdPath: string, _message: BytesLike): Promise<string> {
    throw new Error('not implemented')
  }

  signTypedData(_hdPath: string, _domainHash: string, _valueHash: string): Promise<string> {
    throw new Error('not implemented')
  }

  getIdentifier() {
    return ''
  }

  getAccountInfo(_hdPath: string) {
    return Promise.resolve({publicKey: '', address: ''})
  }

  getPrivateKey(_hdPath: string): Promise<string> {
    throw new Error('not implemented')
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
