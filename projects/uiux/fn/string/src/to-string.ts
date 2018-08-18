/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */
import { hasValue } from '@uiux/fn/value';
import { default as isDate } from 'lodash-es/isDate';

export function toString(value: any, defaultValue?: any): any {
  if (isDate(value)) {
    return value.toJSON();
  } else if (value && hasValue(value) && value.toString) {
    return value.toString();
  } else {
    if (defaultValue) {
      return defaultValue;
    } else {
      return '';
    }
  }
}
