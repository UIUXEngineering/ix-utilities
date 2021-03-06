import { cloneArrayBuffer } from './_cloneArrayBuffer';

/**
 * Creates a clone of `typedArray`.
 *
 * @param typedArray The typed _array to clone.
 * @param isDeep Specify a deep clone.
 * Returns the cloned typed _array.
 */
export function cloneTypedArray(typedArray: any, isDeep?: boolean): any[] {
  const buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
