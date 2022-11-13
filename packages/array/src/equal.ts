/**
 * Checks if two Arrays are equal
 *
 * @example
 * ```ts
 * const array1 = [1, 2, 3];
 * const array2 = [1, 3, 2];
 * const result = equal(array1, array2);
 * console.log(result); // false
 * ```
 *
 * @returns `true` if both Arrays have the same elements in the same order, otherwise `false`
 */
export const equal =
  <T>(arrayB: ArrayLike<T>) =>
  (arrayA: T[]): boolean => {
    return (
      arrayA.length === arrayB.length &&
      arrayA.every((value, index) => value === arrayB[index])
    );
  };
