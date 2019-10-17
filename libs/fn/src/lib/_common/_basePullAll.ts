import { arrayMap } from './_arrayMap';
import { baseIndexOf } from './_baseIndexOf';
import { baseIndexOfWith } from './_baseIndexOfWith';
import { baseUnary } from './_baseUnary';
import { copyArray } from './_copyArray';

/** Used for built-in method references. */
const arrayProto = Array.prototype;

/** Built-in value references. */
const splice = arrayProto.splice;

/**
 * The base implementation of `_.pullAllBy` without support for iteratee
 * shorthands.
 *
 * @param array The _array to modify.
 * @param values The values to remove.
 * @param iteratee [iteratee] The iteratee invoked per element.
 * @param comparator [comparator] The comparator invoked per element.
 * Returns `_array`.
 */
export function basePullAll(array: any[], values: any[], iteratee?: Function, comparator?: Function): any[] {
  const indexOf = comparator ? baseIndexOfWith : baseIndexOf;
  let index = -1;
  const length = values.length;
  let seen = array;

  if (array === values) {
    values = copyArray(values);
  }
  if (iteratee) {
    seen = arrayMap(array, baseUnary(iteratee));
  }
  while (++index < length) {
    let fromIndex = 0;
    const value = values[index],
      computed = iteratee ? iteratee(value) : value;

    while ((fromIndex = indexOf(seen, computed, fromIndex, comparator)) > -1) {
      if (seen !== array) {
        splice.call(seen, fromIndex, 1);
      }
      splice.call(array, fromIndex, 1);
    }
  }
  return array;
}
