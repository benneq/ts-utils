import { isRelativeIndex } from "./isRelativeIndex";
import { RelativeIndex } from "./_types";

/**
 * Swaps the elements at the given indexes of the provided Array.
 * Also works with relative indexes like {@link Array.prototype.at}
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
export const swap = <T>(
  array: Array<T>,
  indexA: RelativeIndex,
  indexB: RelativeIndex
): void => {
  const isRelativeIndexOfArray = isRelativeIndex(array);
  if (isRelativeIndexOfArray(indexA) && isRelativeIndexOfArray(indexB)) {
    array.splice(
      indexB,
      1,
      array.splice(indexA, 1, array.at(indexB) as T)[0] as T
    );
  }
};
