/**
 * if a value `hasValue` then return that value,
 * else return a conditional value.
 */
import { hasValue } from './hasValue';

export function ternary(ifHasValue: any, elseValue): any {
  return hasValue(ifHasValue) ? ifHasValue : elseValue;
}
