[@haqq/provider-base - v0.0.20](../README.md) / [Exports](../modules.md) / ProviderInterface

# Interface: ProviderInterface

Base provider for other providers
extends EventEmitter

## Hierarchy

- `EventEmitter`

  ↳ **`ProviderInterface`**

## Implemented by

- [`Provider`](../classes/Provider.md)

## Table of contents

### Properties

- [abort](ProviderInterface.md#abort)
- [clean](ProviderInterface.md#clean)
- [getAccountInfo](ProviderInterface.md#getaccountinfo)
- [getIdentifier](ProviderInterface.md#getidentifier)
- [getPrivateKey](ProviderInterface.md#getprivatekey)
- [signPersonalMessage](ProviderInterface.md#signpersonalmessage)
- [signTransaction](ProviderInterface.md#signtransaction)
- [signTypedData](ProviderInterface.md#signtypeddata)
- [updatePin](ProviderInterface.md#updatepin)

### Methods

- [addListener](ProviderInterface.md#addlistener)
- [emit](ProviderInterface.md#emit)
- [eventNames](ProviderInterface.md#eventnames)
- [getMaxListeners](ProviderInterface.md#getmaxlisteners)
- [listenerCount](ProviderInterface.md#listenercount)
- [listeners](ProviderInterface.md#listeners)
- [off](ProviderInterface.md#off)
- [on](ProviderInterface.md#on)
- [once](ProviderInterface.md#once)
- [prependListener](ProviderInterface.md#prependlistener)
- [prependOnceListener](ProviderInterface.md#prependoncelistener)
- [rawListeners](ProviderInterface.md#rawlisteners)
- [removeAllListeners](ProviderInterface.md#removealllisteners)
- [removeListener](ProviderInterface.md#removelistener)
- [setMaxListeners](ProviderInterface.md#setmaxlisteners)

## Properties

### abort

• **abort**: () => `void`

#### Type declaration

▸ (): `void`

Stop action

##### Returns

`void`

#### Defined in

[src/types.ts:46](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L46)

___

### clean

• **clean**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Clean provider storage

##### Returns

`Promise`<`void`\>

#### Defined in

[src/types.ts:55](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L55)

___

### getAccountInfo

• **getAccountInfo**: (`hdPath`: `string`) => `Promise`<{ `address`: `string` ; `publicKey`: `string`  }\>

#### Type declaration

▸ (`hdPath`): `Promise`<{ `address`: `string` ; `publicKey`: `string`  }\>

Get public key and address for hd path

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path |

##### Returns

`Promise`<{ `address`: `string` ; `publicKey`: `string`  }\>

#### Defined in

[src/types.ts:19](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L19)

___

### getIdentifier

• **getIdentifier**: () => `string`

#### Type declaration

▸ (): `string`

##### Returns

`string`

#### Defined in

[src/types.ts:14](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L14)

___

### getPrivateKey

• **getPrivateKey**: (`hdPath`: `string`) => `Promise`<`string`\>

#### Type declaration

▸ (`hdPath`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `hdPath` | `string` |

##### Returns

`Promise`<`string`\>

#### Defined in

[src/types.ts:20](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L20)

___

### signPersonalMessage

• **signPersonalMessage**: (`hdPath`: `string`, `message`: [`BytesLike`](../modules.md#byteslike)) => `Promise`<`string`\>

#### Type declaration

▸ (`hdPath`, `message`): `Promise`<`string`\>

Sign personal message

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `message` | [`BytesLike`](../modules.md#byteslike) | message |

##### Returns

`Promise`<`string`\>

signature of personal message

#### Defined in

[src/types.ts:35](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L35)

___

### signTransaction

• **signTransaction**: (`hdPath`: `string`, `transaction`: [`TransactionRequest`](../modules.md#transactionrequest)) => `Promise`<`string`\>

#### Type declaration

▸ (`hdPath`, `transaction`): `Promise`<`string`\>

Sign transaction

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `transaction` | [`TransactionRequest`](../modules.md#transactionrequest) | transaction for sign |

##### Returns

`Promise`<`string`\>

signature of transaction

#### Defined in

[src/types.ts:27](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L27)

___

### signTypedData

• **signTypedData**: (`hdPath`: `string`, `typedData`: [`TypedData`](../modules.md#typeddata)) => `Promise`<`string`\>

#### Type declaration

▸ (`hdPath`, `typedData`): `Promise`<`string`\>

Sign typed data

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `hdPath` | `string` | HD path for subscribe |
| `typedData` | [`TypedData`](../modules.md#typeddata) |  |

##### Returns

`Promise`<`string`\>

signature of typed data

#### Defined in

[src/types.ts:42](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L42)

___

### updatePin

• **updatePin**: (`pin`: `string`) => `Promise`<`void`\>

#### Type declaration

▸ (`pin`): `Promise`<`void`\>

Update pin for encrypted providers

##### Parameters

| Name | Type |
| :------ | :------ |
| `pin` | `string` |

##### Returns

`Promise`<`void`\>

#### Defined in

[src/types.ts:51](https://github.com/haqq-network/haqq-wallet-provider-base/blob/300472e/src/types.ts#L51)

## Methods

### addListener

▸ **addListener**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Alias for `emitter.on(eventName, listener)`.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.addListener

#### Defined in

node_modules/@types/node/events.d.ts:354

___

### emit

▸ **emit**(`eventName`, `...args`): `boolean`

Synchronously calls each of the listeners registered for the event named`eventName`, in the order they were registered, passing the supplied arguments
to each.

Returns `true` if the event had listeners, `false` otherwise.

```js
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

// First listener
myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(myEmitter.listeners('event'));

myEmitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:610

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Returns an array listing the events for which the emitter has registered
listeners. The values in the array are strings or `Symbol`s.

```js
const EventEmitter = require('events');
const myEE = new EventEmitter();
myEE.on('foo', () => {});
myEE.on('bar', () => {});

const sym = Symbol('symbol');
myEE.on(sym, () => {});

console.log(myEE.eventNames());
// Prints: [ 'foo', 'bar', Symbol(symbol) ]
```

**`Since`**

v6.0.0

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:669

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

Returns the current max listener value for the `EventEmitter` which is either
set by `emitter.setMaxListeners(n)` or defaults to defaultMaxListeners.

**`Since`**

v1.0.0

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:526

___

### listenerCount

▸ **listenerCount**(`eventName`): `number`

Returns the number of listeners listening to the event named `eventName`.

**`Since`**

v3.2.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event being listened for |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:616

___

### listeners

▸ **listeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));
// Prints: [ [Function] ]
```

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:539

___

### off

▸ **off**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Alias for `emitter.removeListener()`.

**`Since`**

v10.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:499

___

### on

▸ **on**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Adds the `listener` function to the end of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.on('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.on('foo', () => console.log('a'));
myEE.prependListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.1.101

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.on

#### Defined in

node_modules/@types/node/events.d.ts:385

___

### once

▸ **once**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Adds a **one-time**`listener` function for the event named `eventName`. The
next time `eventName` is triggered, this listener is removed and then invoked.

```js
server.once('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

By default, event listeners are invoked in the order they are added. The`emitter.prependOnceListener()` method can be used as an alternative to add the
event listener to the beginning of the listeners array.

```js
const myEE = new EventEmitter();
myEE.once('foo', () => console.log('a'));
myEE.prependOnceListener('foo', () => console.log('b'));
myEE.emit('foo');
// Prints:
//   b
//   a
```

**`Since`**

v0.3.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.once

#### Defined in

node_modules/@types/node/events.d.ts:414

___

### prependListener

▸ **prependListener**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Adds the `listener` function to the _beginning_ of the listeners array for the
event named `eventName`. No checks are made to see if the `listener` has
already been added. Multiple calls passing the same combination of `eventName`and `listener` will result in the `listener` being added, and called, multiple
times.

```js
server.prependListener('connection', (stream) => {
  console.log('someone connected!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/events.d.ts:634

___

### prependOnceListener

▸ **prependOnceListener**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Adds a **one-time**`listener` function for the event named `eventName` to the _beginning_ of the listeners array. The next time `eventName` is triggered, this
listener is removed, and then invoked.

```js
server.prependOnceListener('connection', (stream) => {
  console.log('Ah, we have our first user!');
});
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v6.0.0

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` \| `symbol` | The name of the event. |
| `listener` | (...`args`: `any`[]) => `void` | The callback function |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/events.d.ts:650

___

### rawListeners

▸ **rawListeners**(`eventName`): `Function`[]

Returns a copy of the array of listeners for the event named `eventName`,
including any wrappers (such as those created by `.once()`).

```js
const emitter = new EventEmitter();
emitter.once('log', () => console.log('log once'));

// Returns a new Array with a function `onceWrapper` which has a property
// `listener` which contains the original listener bound above
const listeners = emitter.rawListeners('log');
const logFnWrapper = listeners[0];

// Logs "log once" to the console and does not unbind the `once` event
logFnWrapper.listener();

// Logs "log once" to the console and removes the listener
logFnWrapper();

emitter.on('log', () => console.log('log persistently'));
// Will return a new Array with a single function bound by `.on()` above
const newListeners = emitter.rawListeners('log');

// Logs "log persistently" twice
newListeners[0]();
emitter.emit('log');
```

**`Since`**

v9.4.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:569

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ProviderInterface`](ProviderInterface.md)

Removes all listeners, or those of the specified `eventName`.

It is bad practice to remove listeners added elsewhere in the code,
particularly when the `EventEmitter` instance was created by some other
component or module (e.g. sockets or file streams).

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:510

___

### removeListener

▸ **removeListener**(`eventName`, `listener`): [`ProviderInterface`](ProviderInterface.md)

Removes the specified `listener` from the listener array for the event named`eventName`.

```js
const callback = (stream) => {
  console.log('someone connected!');
};
server.on('connection', callback);
// ...
server.removeListener('connection', callback);
```

`removeListener()` will remove, at most, one instance of a listener from the
listener array. If any single listener has been added multiple times to the
listener array for the specified `eventName`, then `removeListener()` must be
called multiple times to remove each instance.

Once an event is emitted, all listeners attached to it at the
time of emitting are called in order. This implies that any`removeListener()` or `removeAllListeners()` calls _after_ emitting and _before_ the last listener finishes execution
will not remove them from`emit()` in progress. Subsequent events behave as expected.

```js
const myEmitter = new MyEmitter();

const callbackA = () => {
  console.log('A');
  myEmitter.removeListener('event', callbackB);
};

const callbackB = () => {
  console.log('B');
};

myEmitter.on('event', callbackA);

myEmitter.on('event', callbackB);

// callbackA removes listener callbackB but it will still be called.
// Internal listener array at time of emit [callbackA, callbackB]
myEmitter.emit('event');
// Prints:
//   A
//   B

// callbackB is now removed.
// Internal listener array [callbackA]
myEmitter.emit('event');
// Prints:
//   A
```

Because listeners are managed using an internal array, calling this will
change the position indices of any listener registered _after_ the listener
being removed. This will not impact the order in which listeners are called,
but it means that any copies of the listener array as returned by
the `emitter.listeners()` method will need to be recreated.

When a single function has been added as a handler multiple times for a single
event (as in the example below), `removeListener()` will remove the most
recently added instance. In the example the `once('ping')`listener is removed:

```js
const ee = new EventEmitter();

function pong() {
  console.log('pong');
}

ee.on('ping', pong);
ee.once('ping', pong);
ee.removeListener('ping', pong);

ee.emit('ping');
ee.emit('ping');
```

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.1.26

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:494

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ProviderInterface`](ProviderInterface.md)

By default `EventEmitter`s will print a warning if more than `10` listeners are
added for a particular event. This is a useful default that helps finding
memory leaks. The `emitter.setMaxListeners()` method allows the limit to be
modified for this specific `EventEmitter` instance. The value can be set to`Infinity` (or `0`) to indicate an unlimited number of listeners.

Returns a reference to the `EventEmitter`, so that calls can be chained.

**`Since`**

v0.3.5

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ProviderInterface`](ProviderInterface.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:520
