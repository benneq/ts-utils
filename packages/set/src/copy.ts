/**
 * Copies all entries of a Set into a new Set
 *
 * @example
 * copy([]) => []
 * copy([1,2]) => [1,2]
 *
 * @param set
 * @returns a new Set containing all elements of the source Set
 */
export const copy = <T>(set: Set<T>): Set<T> => {
  return new Set(set);
};
