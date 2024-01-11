[@haqq/provider-base - v0.0.20](README.md) / Exports

# @haqq/provider-base - v0.0.20

## Table of contents

### Classes

- [Provider](classes/Provider.md)

### Interfaces

- [ProviderInterface](interfaces/ProviderInterface.md)

### Type Aliases

- [AccessList](modules.md#accesslist)
- [AccessListish](modules.md#accesslistish)
- [BigNumberish](modules.md#bignumberish)
- [Bytes](modules.md#bytes)
- [BytesLike](modules.md#byteslike)
- [ProviderBaseOptions](modules.md#providerbaseoptions)
- [TransactionRequest](modules.md#transactionrequest)
- [TypedData](modules.md#typeddata)
- [TypedDataTypesNames](modules.md#typeddatatypesnames)

### Functions

- [base64PublicKey](modules.md#base64publickey)
- [compressPublicKey](modules.md#compresspublickey)
- [cosmosAddress](modules.md#cosmosaddress)
- [hexStringToByteArray](modules.md#hexstringtobytearray)
- [joinSignature](modules.md#joinsignature)
- [prepareHashedEip712Data](modules.md#preparehashedeip712data)
- [stringToUtf8Bytes](modules.md#stringtoutf8bytes)

## Type Aliases

### AccessList

Ƭ **AccessList**: { `address`: `string` ; `storageKeys`: `string`[]  }[]

#### Defined in

[src/types.ts:64](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L64)

___

### AccessListish

Ƭ **AccessListish**: [`AccessList`](modules.md#accesslist) \| [`string`, `string`[]][] \| `Record`<`string`, `string`[]\>

#### Defined in

[src/types.ts:67](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L67)

___

### BigNumberish

Ƭ **BigNumberish**: [`Bytes`](modules.md#bytes) \| `bigint` \| `string` \| `number`

#### Defined in

[src/types.ts:60](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L60)

___

### Bytes

Ƭ **Bytes**: `ArrayLike`<`number`\>

#### Defined in

[src/types.ts:58](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L58)

___

### BytesLike

Ƭ **BytesLike**: [`Bytes`](modules.md#bytes) \| `string`

#### Defined in

[src/types.ts:62](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L62)

___

### ProviderBaseOptions

Ƭ **ProviderBaseOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getPassword` | () => `Promise`<`string`\> |

#### Defined in

[src/types.ts:4](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L4)

___

### TransactionRequest

Ƭ **TransactionRequest**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessList?` | [`AccessListish`](modules.md#accesslistish) |
| `ccipReadEnabled?` | `boolean` |
| `chainId?` | `number` |
| `customData?` | `Record`<`string`, `any`\> |
| `data?` | [`BytesLike`](modules.md#byteslike) |
| `from?` | `string` |
| `gasLimit?` | [`BigNumberish`](modules.md#bignumberish) |
| `gasPrice?` | [`BigNumberish`](modules.md#bignumberish) |
| `maxFeePerGas?` | [`BigNumberish`](modules.md#bignumberish) |
| `maxPriorityFeePerGas?` | [`BigNumberish`](modules.md#bignumberish) |
| `nonce?` | [`BigNumberish`](modules.md#bignumberish) |
| `to?` | `string` |
| `type?` | `number` |
| `value?` | [`BigNumberish`](modules.md#bignumberish) |

#### Defined in

[src/types.ts:71](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L71)

___

### TypedData

Ƭ **TypedData**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `domain` | `Record`<`string`, `any`\> |
| `message` | `Record`<`string`, `any`\> |
| `types` | `Record`<[`TypedDataTypesNames`](modules.md#typeddatatypesnames), `TypedDataField`[]\> |

#### Defined in

[src/types.ts:95](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L95)

___

### TypedDataTypesNames

Ƭ **TypedDataTypesNames**: `string` \| ``"EIP712Domain"``

#### Defined in

[src/types.ts:93](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L93)

## Functions

### base64PublicKey

▸ **base64PublicKey**(`publicKey`): `string`

Base64 encode public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | public key |

#### Returns

`string`

base64 encoded public key

#### Defined in

[src/base64-public-key.ts:8](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/base64-public-key.ts#L8)

___

### compressPublicKey

▸ **compressPublicKey**(`publicKey`): `string`

Compress public key

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `publicKey` | `string` | public key |

#### Returns

`string`

compressed public key

#### Defined in

[src/compress-public-key.ts:6](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/compress-public-key.ts#L6)

___

### cosmosAddress

▸ **cosmosAddress**(`address`, `prefix`): `string`

get cosmos address

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | eth address |
| `prefix` | `string` | prefix for address |

#### Returns

`string`

#### Defined in

[src/cosmos-address.ts:8](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/cosmos-address.ts#L8)

___

### hexStringToByteArray

▸ **hexStringToByteArray**(`hexString`): `number`[]

convert hex string to byte array

#### Parameters

| Name | Type |
| :------ | :------ |
| `hexString` | `string` \| `number`[] |

#### Returns

`number`[]

Byte array like

#### Defined in

[src/hex-string-to-byte-array.ts:6](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/hex-string-to-byte-array.ts#L6)

___

### joinSignature

▸ **joinSignature**(`signature`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `signature` | `string` |

#### Returns

`string`

#### Defined in

[src/join-signature.ts:1](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/join-signature.ts#L1)

___

### prepareHashedEip712Data

▸ **prepareHashedEip712Data**(`«destructured»`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`TypedData`](modules.md#typeddata) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `domainSeparatorHex` | `string` |
| `hashStructMessageHex` | `string` |

#### Defined in

[src/prepare-hashed-eip712-data.ts:4](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/prepare-hashed-eip712-data.ts#L4)

___

### stringToUtf8Bytes

▸ **stringToUtf8Bytes**(`input`): `number`[]

convert string to byte array

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `string` |

#### Returns

`number`[]

Byte array like for input string

#### Defined in

[src/string-to-utf8-bytes.ts:8](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/string-to-utf8-bytes.ts#L8)
