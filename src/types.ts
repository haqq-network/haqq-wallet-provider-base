import {TransactionRequest} from '@ethersproject/abstract-provider';
import EventEmitter from 'events';

export type ProviderBaseOptions = {
  cosmosPrefix: string
}

export interface ProviderInterface extends EventEmitter {
  getEthAddress: (path: string) => Promise<string>;
  getCosmosAddress: (path: string) => Promise<string>;
  getPublicKey: (path: string) => Promise<string>;
  getBase64PublicKey: (path: string) => Promise<string>;
  getSignedTx: (path: string, transaction: TransactionRequest) => Promise<string>;
  signTypedData: (path: string, domainHash: string, valueHash: string) => Promise<string>;
  abort: () => void;
}

