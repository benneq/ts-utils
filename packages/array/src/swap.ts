/**
 * Swaps the elements at the given indexes of an {@link Array}.
 *
 * @mutation
 *
 * @exmaple
 * ```ts
 * const array = [1, 2, 3];
 *
 * swap(1, 2)(array);
 *
 * console.log(array); // [1, 3, 2]
 * ```
 *
 * @param array
 * @param indexA
 * @param indexB
 */
export const swap =
  (indexA: number, indexB: number) =>
  (array: unknown[]): void => {
    if (process.env.NODE_ENV !== "production") {
      console.assert(indexA >= 0);
      console.assert(indexB >= 0);
    }

    [array[indexA], array[indexB]] = [array[indexB], array[indexA]];
  };
