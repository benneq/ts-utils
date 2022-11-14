import { isRelativeIndex } from "./isRelativeIndex";
import { normalizeIndex } from "./normalizeIndex";
import { RelativeIndex } from "./_types";

/**
 * Moves elements of an Array from sourceIndex to targetIndex
 *
 * @mutation
 *
 * @example
 * Move two elements from index `2` to index `0`
 * ```ts
 * const array = [1, 2, 3, 4];
 * move(array)(2, 0, 2);
 * console.log(array); // [3, 4, 1, 2]
 * ```
 *
 * @param array
 * @param sourceIndex
 * @param targetIndex
 */
export const move = (
  array: unknown[]
): ((
  sourceIndex: RelativeIndex,
  targetIndex: RelativeIndex,
  moveCount: number
) => void) => {
  const isRelativeIndexOfArray = isRelativeIndex(array);
  const normalizeIndexForArray = normalizeIndex(array);

  return (sourceIndex, targetIndex, moveCount = 1) => {
    if (
      isRelativeIndexOfArray(sourceIndex) &&
      isRelativeIndexOfArray(targetIndex)
    ) {
      // adjust the count to stay in bounds of the array
      moveCount = Math.min(
        moveCount,
        array.length - normalizeIndexForArray(sourceIndex)
      );

      array.splice(
        normalizeIndexForArray(targetIndex) - moveCount + 1,
        0,
        ...array.splice(sourceIndex, moveCount)
      );
    }
  };
};
