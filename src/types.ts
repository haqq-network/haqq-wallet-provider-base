import {TransactionRequest} from '@ethersproject/abstract-provider';
import EventEmitter from 'events';

export type ProviderBaseOptions = {
  cosmosPrefix: string
}

export interface WalletInterface {
  get address(): string

  get deviceId(): string

  get path(): string

  get publicKey(): string

  set publicKey(key: string)
  getPrivateKey(): Promise<string>
}

export interface ProviderInterface extends EventEmitter {
  getSignedTx: (transaction: TransactionRequest) => Promise<string>;
  getEthAddress: () => string;
  getCosmosAddress: () => string;
  getBase64PublicKey: () => Promise<string>;
  signTypedData: (domainHash: string, valueHash: string) => Promise<string>;
  abort: () => void;
}

