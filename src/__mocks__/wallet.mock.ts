import {WalletInterface} from '../types';

export class WalletMock implements WalletInterface {
  get address(): string {
    return '0x0188Fe95ae1c09300f4042448679Fbc030e7c2c8';
  }

  get deviceId(): string {
    return 'deviceId';
  }

  getPrivateKey(): Promise<string> {
    return Promise.resolve('');
  }

  get path(): string {
    return 'path';
  }

  get publicKey(): string {
    return 'publicKey';
  }

}
