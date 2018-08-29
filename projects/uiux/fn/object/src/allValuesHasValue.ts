/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isEmpty, isPlainObject, hasValue } from '@uiux/fn/common';

/**
 * @param object to evaluate
 */
export function allValuesHasValue(object: any): boolean {
  if (isPlainObject(object)) {
    if (!isEmpty(object)) {
      return Object.keys(object).reduce((_allPropsHaveValue: boolean, key: string) => {
        if (!_allPropsHaveValue) {
          return _allPropsHaveValue;
        }
        return hasValue(object[key]);
      }, true);
    } else {
      // object is empty
      return false;
    }
  } else {
    // not plain object
    return false;
  }
}