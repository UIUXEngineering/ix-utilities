/**
 * @license
 * Copyright UIUX Engineering All Rights Reserved.
 */

import { propsAreTruthy } from './props-are-truthy';

describe('propsAreTruthy', () => {
  beforeEach(() => {});

  afterEach(() => {});

  describe('object with multiple props', () => {
    it('should return false for object with false prop', () => {
      const obj: any = {
        foo: true,
        bar: false,
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: true,
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return true for object with null prop', () => {
      const obj: any = {
        foo: true,
        bar: null,
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return true for object with undefined prop', () => {
      const obj: any = {
        foo: true,
        bar: undefined,
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: [],
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return true for object with filled array and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: ['asdf'],
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return false for object with empty string', () => {
      const obj: any = {
        foo: true,
        bar: '',
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeFalsy();
    });

    it('should return false for object with empty array', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
      };
      expect(propsAreTruthy(obj, ['foo', 'bar'])).toBeTruthy();
    });

    it('should return true for all props defined and truthy prop', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(propsAreTruthy(obj, ['foo', 'bar', 'baz', 'bum'])).toBeTruthy();
    });

    it('should return true for all props defined and falsey prop', () => {
      const obj: any = {
        foo: false,
        bar: 'asdf',
        baz: ['foo'],
        bum: { someKey: 'someValue' },
      };
      expect(propsAreTruthy(obj, ['foo', 'bar', 'baz', 'bum'])).toBeFalsy();
    });

    it('should return false for all props defined with empty string and array', () => {
      const obj: any = {
        foo: true,
        bar: '',
        baz: [],
        bum: { someKey: 'someValue' },
      };
      expect(propsAreTruthy(obj, ['foo', 'bar', 'baz', 'bum'])).toBeFalsy();
    });

    it('should return false for all props defined and empty object', () => {
      const obj: any = {
        foo: true,
        bar: 'asdf',
        baz: ['foo'],
        bum: {},
      };
      expect(propsAreTruthy(obj, ['foo', 'bar', 'baz', 'bum'])).toBeFalsy();
    });
  });

  describe('object', () => {
    it('should return false for empty object value', () => {
      expect(propsAreTruthy({})).toBeFalsy();
    });

    it('should return false for empty object with no keys', () => {
      expect(propsAreTruthy({}, [])).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      expect(propsAreTruthy({}, ['foo'])).toBeFalsy();
    });

    it('should return false for empty object with keys', () => {
      const obj: any = {
        foo: 'foo',
      };
      expect(propsAreTruthy(obj, ['bar'])).toBeFalsy();
    });

    it('should return false for object with falsey prop', () => {
      const obj: any = {
        foo: false,
      };
      expect(propsAreTruthy(obj, ['foo'])).toBeFalsy();
    });

    it('should return true for object with truthy prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(propsAreTruthy(obj, ['foo'])).toBeTruthy();
    });

    it('should return false for object with missing prop', () => {
      const obj: any = {
        foo: true,
      };
      expect(propsAreTruthy(obj, ['bar'])).toBeFalsy();
    });
  });

  describe('empty value', () => {
    it('should return false for empty object value', () => {
      expect(propsAreTruthy({})).toBeFalsy();
    });

    it('should return false for null value', () => {
      expect(propsAreTruthy(null)).toBeFalsy();
    });

    it('should return false for undefined value', () => {
      expect(propsAreTruthy(undefined)).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(propsAreTruthy('')).toBeFalsy();
    });

    it('should return false for empty string value', () => {
      expect(propsAreTruthy([])).toBeFalsy();
    });
  });
});
