/**
 * Checks if the provided value is `undefined`
 *
 * @example
 * isUndefined(undefined) => true
 * isUndefined(0) => false
 *
 * @returns `true` if `value` is `undefined`, otherwise `false`
 */
export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};
