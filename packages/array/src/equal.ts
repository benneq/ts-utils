/**
 * Checks if two Arrays are equal
 *
 * @example
 * equal([])([]) => true
 * equal([1])([2]) => false
 * equal([1,2,3])([1,2,3]) => true
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
