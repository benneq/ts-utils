/**
 * Inserts values into an Array at the specified index
 *
 * @mutation
 *
 * @example
 * insertAt([], 2, 1, 2) => [1,2]
 * insertAt([1,2,3], 1, 4) => [1,4,2,3]
 *
 */
export const insertAt = <T>(
  array: T[],
  index: number,
  ...values: T[]
): void => {
  array.splice(index, 0, ...values);
};
