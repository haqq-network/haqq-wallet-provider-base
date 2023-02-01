import EventEmitter from 'events';

export type ProviderBaseOptions = {
  getPassword: () => Promise<string>
}

export interface ProviderInterface extends EventEmitter {
  getIdentifier: () => string;
  getAccountInfo: (hdPath: string) => Promise<{publicKey: string, address: string}>;
  getPrivateKey: (hdPath: string) => Promise<string>;
  signTransaction: (hdPath: string, transaction: TransactionRequest) => Promise<string>;
  signPersonalMessage: (hdPath: string, message: string) => Promise<string>;
  signTypedData: (hdPath: string, domainHash: string, valueHash: string) => Promise<string>;
  abort: () => void;
  updatePin: (pin: string) => Promise<void>;
  clean: () => Promise<void>;
}

export type Bytes = ArrayLike<number>;

export type BigNumberish = Bytes | bigint | string | number;

export type BytesLike = Bytes | string;

export type AccessList = {address: string, storageKeys: string[]}[];

// Input allows flexibility in describing an access list
export type AccessListish = AccessList |
  [string, string[]][] |
  Record<string, string[]>;

export type TransactionRequest = {
  to?: string,
  from?: string,
  nonce?: BigNumberish,

  gasLimit?: BigNumberish,
  gasPrice?: BigNumberish,

  data?: BytesLike,
  value?: BigNumberish,
  chainId?: number

  type?: number;
  accessList?: AccessListish;

  maxPriorityFeePerGas?: BigNumberish;
  maxFeePerGas?: BigNumberish;

  customData?: Record<string, any>;
  ccipReadEnabled?: boolean;
}
