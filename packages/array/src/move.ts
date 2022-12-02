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
export const move =
  (sourceIndex: RelativeIndex, targetIndex: RelativeIndex, moveCount = 1) =>
  (array: unknown[]): void => {
    if (process.env.NODE_ENV !== "production") {
      console.assert(sourceIndex >= 0);
      console.assert(sourceIndex < array.length);
      console.assert(targetIndex >= 0);
      console.assert(targetIndex < array.length);
      console.assert(moveCount >= 0);
      console.assert(moveCount <= array.length - sourceIndex);
    }

    array.splice(
      targetIndex - moveCount + 1,
      0,
      ...array.splice(sourceIndex, moveCount)
    );
  };
