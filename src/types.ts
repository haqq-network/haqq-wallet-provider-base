import {TransactionRequest} from '@ethersproject/abstract-provider';
import EventEmitter from 'events';

export type ProviderBaseOptions = {
  cosmosPrefix: string
}

export interface ProviderInterface extends EventEmitter {
  getSignedTx: (path: string, transaction: TransactionRequest) => Promise<string>;
  getEthAddress: (path: string) => Promise<string>;
  getCosmosAddress: (path: string) => Promise<string>;
  getBase64PublicKey: (path: string) => Promise<string>;
  signTypedData: (path: string, domainHash: string, valueHash: string) => Promise<string>;
  abort: () => void;
}

