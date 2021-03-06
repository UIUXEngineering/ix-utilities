import { dataView } from './_DataView';
import { map } from './map';
import { promise } from './promise';
import { Set } from './_Set';
import { weakMap } from './_WeakMap';
import { baseGetTag } from './_baseGetTag';
import { toSource } from './_toSource';

/** `Object#toString` result references. */
const mapTag = '[object Map]',
  objectTag = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]';

const dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
const dataViewCtorString = toSource(dataView),
  mapCtorString = toSource(map),
  promiseCtorString = toSource(promise),
  setCtorString = toSource(Set),
  weakMapCtorString = toSource(weakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 *
 * @param value The value to query.
 * Returns the `toStringTag`.
 */
let getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node < 6.
if (
  (dataView && getTag(new dataView(new ArrayBuffer(1))) !== dataViewTag) ||
  (map && getTag(new map()) !== mapTag) ||
  (promise && getTag(promise.resolve()) !== promiseTag) ||
  (Set && getTag(new Set()) !== setTag) ||
  (weakMap && getTag(new weakMap()) !== weakMapTag)
) {
  getTag = function(value) {
    const result = baseGetTag(value),
      Ctor = result === objectTag ? value.constructor : undefined,
      ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    }
    return result;
  };
}

export { getTag };
