import {TransactionRequest} from '@ethersproject/abstract-provider';
import EventEmitter from 'events';

export type ProviderBaseOptions = {
  getPassword: () => Promise<string>
}

export interface ProviderInterface extends EventEmitter {
  getIdentifier: () => string;
  getMnemonic: () => Promise<string>;
  getAccountInfo: (hdPath: string) => Promise<{publicKey: string, address: string}>;
  getPrivateKey: (hdPath: string) => Promise<string>;
  getSignedTx: (hdPath: string, transaction: TransactionRequest) => Promise<string>;
  signTypedData: (hdPath: string, domainHash: string, valueHash: string) => Promise<string>;
  abort: () => void;
}

