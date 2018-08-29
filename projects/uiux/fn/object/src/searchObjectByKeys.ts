/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { isObject, isFunction, isArray, hasValue } from '@uiux/fn/common';

import { ISearchObjectByKeysResult } from './_interfaces';

/**
 * Search Object by property keys. If a key matches,
 * return results array of objects of IFindPropertiesResult type:
 * [{
 *   key: 'searchKey',
 *   path: 'path.to.result',
 *   data: 'result node value'
 * }]
 *
 *
 * @param node
 * @param _searchParam
 * @param path
 */
export function searchObjectByKeys(node: any, _searchParam: any, path: string = ''): any[] {
  let tempPath = '';

  if (isArray(node)) {
    return (<any[]>node).reduce((result: ISearchObjectByKeysResult[], item: any, index: number) => {
      return result.concat(searchObjectByKeys(item, _searchParam, path + '[' + index + ']'));
    }, []);
  } else {
    return Object.keys(node).reduce((result: ISearchObjectByKeysResult[], key: string) => {
      tempPath = path.length ? '.' + key : key;

      if (isArray(_searchParam)) {
        if (isObject(node[key]) || isArray(node[key])) {
          result = result.concat(searchObjectByKeys(node[key], _searchParam, path + tempPath));
        } else {
          if (_searchContains(_searchParam, key) && hasValue(node[key])) {
            const _result: ISearchObjectByKeysResult = _findPropertiesResultObject();
            _result.key = key;

            // concat path if recursion
            _result.path = path + tempPath;
            _result.data = node[key];

            result.push(_result);
          }
        }
      } else if (isFunction(_searchParam)) {
        // Call function on every node
        const _callResultTruthy: boolean = _searchParam.apply(null, [node[key], key]);

        if (_callResultTruthy) {
          const _result: ISearchObjectByKeysResult = _findPropertiesResultObject();

          _result.key = key;
          _result.path = path + tempPath;
          _result.data = node[key];

          result.push(_result);
        }

        if (isObject(node[key])) {
          result = result.concat(searchObjectByKeys(node[key], _searchParam, path + tempPath));
        }
      }
      return result;
    }, []);
  }
}

function _findPropertiesResultObject(): ISearchObjectByKeysResult {
  return {
    key: '',
    path: '',
    data: '',
  };
}

function _searchContains(collection, search) {
  return collection.indexOf(search) > -1;
}