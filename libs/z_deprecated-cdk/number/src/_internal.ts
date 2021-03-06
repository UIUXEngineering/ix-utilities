/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { default as isString } from 'lodash-es/isString';

export function convertToNumber(value: string | number): number {
  let _value: number;

  if (isString(value)) {
    _value = parseFloat(value.toString());
  } else {
    _value = Number(value);
  }

  return _value;
}
