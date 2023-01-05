import {TransactionRequest} from '@ethersproject/abstract-provider';

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

export interface ProviderInterface {
  getSignedTx: (transaction: TransactionRequest) => Promise<string>;
  getEthAddress: () => string;
  getCosmosAddress: () => string;
  getBase64PublicKey: () => Promise<string>;
  signTypedData: (domainHash: string, valueHash: string) => Promise<string>;
  abort: () => void;
}

