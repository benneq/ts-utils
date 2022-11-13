/**
 *
 * @example
 * Check if an {@link Array} contains `2` and `3`
 * ```ts
 * const array = [1, 2, 3];
 * const result = includesAll([2, 3]);
 * console.log(result); // true
 * ```
 *
 * @param shouldIncludeValues
 * @returns
 */
export const includesAll =
  <T>(shouldIncludeValues: T[]) =>
  (array: T[]): boolean => {
    return shouldIncludeValues.every((value) => array.includes(value));
  };
