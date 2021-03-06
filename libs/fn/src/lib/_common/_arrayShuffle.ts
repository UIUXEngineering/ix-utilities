import { copyArray } from './_copyArray';
import { shuffleSelf } from './_shuffleSelf';

/**
 * A specialized version of `_.shuffle` for arrays.
 *
 * @param array The _array to shuffle.
 * Returns the new shuffled _array.
 */
export function arrayShuffle(array: any[]): any[] {
  return shuffleSelf(copyArray(array));
}
