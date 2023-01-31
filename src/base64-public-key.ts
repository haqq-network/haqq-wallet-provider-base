import {compressPublicKey} from './compress-public-key';

export const base64PublicKey = (publicKey: string) => {
  return Buffer.from(compressPublicKey(publicKey), 'hex').toString('base64');
}
