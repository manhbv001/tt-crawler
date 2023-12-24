import { config } from '@/config';
import * as CryptoJS from 'crypto-js';

export function encodeString(plain: string): string {
  return CryptoJS.AES.encrypt(plain, config.hashKey).toString();
}

export function decodeString(cipher: string): string {
  const bytes = CryptoJS.AES.decrypt(cipher, config.hashKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
