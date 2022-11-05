/**
 * A Predicate that always returns `false`
 *
 * All arguments are ignored
 *
 * @example
 * alwaysFalse() => false
 * [1,2,3].filter(alwaysFalse) => []
 *
 * @returns `false`
 */
export const alwaysFalse = (..._: unknown[]): boolean => {
  return false;
};
