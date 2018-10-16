const isArray = Array.isArray;
export const objKeys = Object.keys;

export function getData(object, defaultValue) {
	console.log('	get data');
  return get(object, 'data', defaultValue);
}

const objectToString = Object.prototype.toString;

/** `Object#toString` result references. */
const argsTag = '[object Arguments]';
// const arrayTag = '[object Array]';
const asyncTag = '[object AsyncFunction]';
// const boolTag = '[object Boolean]';
// const dateTag = '[object Date]';
// const errorTag = '[object Error]';
const funcTag = '[object Function]';
const genTag = '[object GeneratorFunction]';
// const numberTag = '[object Number]';
const objectTag = '[object Object]';
const proxyTag = '[object Proxy]';
// const regexpTag = '[object RegExp]';
const stringTag = '[object String]';

/** Used as references for various `Number` constants. */
// const INFINITY = 1 / 0;
const MAX_SAFE_INTEGER = 9007199254740991;
// const MAX_INTEGER = 1.7976931348623157e+308;
// const NAN = 0 / 0;


/**
 * for functional approach, we have this abstraction
 * - const myObject = { data: [...], anotherKey: ... }
 * - const dataValue = getData(myObject) // instead of : const dataValue = myObject.data
 * We do this to make more easy to read and maintain a code
 * In addition, the code that goes to the browser can be more optimized and smaller
 *
 * Abstractions are powerful things, with small modifications this function can be more efficient
 * - const getData = (obj, defaultValue) => get(obj, 'data', defaultValue)
 * seet https://lodash.com/docs#get for more details
 */
function get(object, path, defaultValue) {
  let value = object == null ? undefined : object[path];

  if (value === undefined) {
    value = defaultValue;
  }

  return isFunction(value) ? value.call(object) : value;
}

export function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  const tag = objectToString.call(value);
  return tag === funcTag || tag === genTag || tag === asyncTag || tag === proxyTag;
}


export function isObject(value) {
  const type = typeof value;
  return value !== null && (type === 'object' || type === 'function');
}
