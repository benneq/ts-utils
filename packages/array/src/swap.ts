/**
 * Swaps the elements at the given indexes of an {@link Array}.
 *
 * @mutation
 *
 * @exmaple
 * ```ts
 * const array = [1, 2, 3];
 * swap(array, 1, 2);
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

// export const swap = (
//   array: Array<unknown>,
//   indexA: RelativeIndex,
//   indexB: RelativeIndex
// ): void => {
//   if (isRelativeIndex(indexA)(array) && isRelativeIndexOfArray(indexB)(array)) {
//     array.splice(indexB, 1, array.splice(indexA, 1, array.at(indexB))[0]);
//   }
// };
