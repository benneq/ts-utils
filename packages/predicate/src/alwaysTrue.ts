/**
 * A Predicate that always returns `true`
 *
 * All arguments are ignored
 *
 * @example
 * alwaysTrue() => true
 * [1,2,3].filter(alwaysTrue) => [1,2,3]
 *
 * @returns `true`
 */
export const alwaysTrue = (..._: unknown[]): boolean => {
  return true;
};
