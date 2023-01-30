import {ProviderBaseOptions} from './types';
import EventEmitter from 'events';

export class Provider<T extends object> extends EventEmitter {
  protected _options: T & ProviderBaseOptions;

  constructor(options: T & ProviderBaseOptions) {
    super()
    this._options = options;
  }

  abort() {
  }
}
