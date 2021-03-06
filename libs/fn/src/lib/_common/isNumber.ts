import { baseGetTag } from './_baseGetTag';

/** `Object#toString` result references. */
import { isObjectLike } from './isObjectLike';

const numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or _object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @param value The value to check.
 * Returns `true` if `value` is a _number, else `false`.
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
export function isNumber(value: any): boolean {
  return (
    (!isNaN(value - parseFloat(value)) && typeof value === 'number') ||
    (isObjectLike(value) && baseGetTag(value) === numberTag)
  );
}
