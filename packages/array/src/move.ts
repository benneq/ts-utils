import { isRelativeIndex } from "./isRelativeIndex";
import { normalizeIndex } from "./normalizeIndex";
import { RelativeIndex } from "./_types";

/**
 * Moves elements of an Array from sourceIndex to targetIndex
 *
 * @mutation
 *
 * @example
 * move([])(1, 2) => []
 * move([1,2,3,4])(0, 2) => [2,3,1,4]
 * move([1,2,3,4])(3, 1) => [1,4,2,3]
 * move([1,2,3,4])(2, 0, 2) => [3,4,1,2]
 *
 * @param array
 * @param sourceIndex
 * @param targetIndex
 */
export const move = (array: unknown[]) => {
  const isRelativeIndexOfArray = isRelativeIndex(array);
  const normalizeIndexForArray = normalizeIndex(array);

  return (
    sourceIndex: RelativeIndex,
    targetIndex: RelativeIndex,
    moveCount = 1
  ): void => {
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
