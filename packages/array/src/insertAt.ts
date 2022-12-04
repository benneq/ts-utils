import { RelativeIndex } from "./_types";

/**
 * Inserts values into an Array at the specified index
 *
 * @mutation
 *
 * @example
 * Insert values `4` and `5` at index `1`
 * ```ts
 * const array = [1, 2, 3];
 *
 * insertAt(1, 4, 5)(array);
 *
 * console.log(array); // 1, 4, 5, 2, 3
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param index - the index to insert the `values`
 * @param values - the values to insert
 */
export const insertAt =
  <T>(index: RelativeIndex, ...values: T[]) =>
  (array: T[]): void => {
    if (process.env.NODE_ENV !== "production") {
      console.assert(index >= -array.length);
      console.assert(index < array.length);
    }

    array.splice(index, 0, ...values);
  };
