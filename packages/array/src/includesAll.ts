/**
 *
 * @example
 * Check if an {@link Array} contains `2` and `3`
 * ```ts
 * const includes2And3 = includesAll([2, 3]);
 * const result = includes2And3([1, 2, 3]);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param shouldIncludeValues
 * @returns
 */
export const includesAll =
  <T>(shouldIncludeValues: T[]) =>
  (array: T[]): boolean => {
    return shouldIncludeValues.every((value) => array.includes(value));
  };
