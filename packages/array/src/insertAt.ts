/**
 * Inserts values into an Array at the specified index
 *
 * @mutation
 *
 * @example
 * Insert values `4` and `5` at index `1`
 * ```ts
 * const array = [1, 2, 3];
 * insertAt(array, 1, 4, 5);
 * console.log(array); // 1, 4, 5, 2, 3
 * ```
 *
 * @typeParam T - the {@link Array} element type
 */
export const insertAt = <T>(
  array: T[],
  index: number,
  ...values: T[]
): void => {
  array.splice(index, 0, ...values);
};
