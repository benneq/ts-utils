import { isUndefined } from "./isUndefined";

/**
 * Checks if the provided value is not `undefined`
 *
 * @example
 * isNotUndefined(0) => true
 * isNotUndefined(undefined) => false
 *
 * @returns `true` if `value` is not `undefined`, otherwise `false`
 */
export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return !isUndefined(value);
};
