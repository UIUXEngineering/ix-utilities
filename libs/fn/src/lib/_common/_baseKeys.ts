import { isPrototype } from './_isPrototype';
import { nativeKeys } from './_nativeKeys';

/** Used for built-in method references. */
const objectProto = Object.prototype;

/** Used to check objects for own properties. */
const hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 * Returns the _array of property names.
 * @param object The _object to query.
 */
export function baseKeys(object: any): string[] {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  const result: string[] = [];
  for (const key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key !== 'constructor') {
      result.push(key);
    }
  }
  return result;
}
