import { mod } from "@benneq/number";
import { RelativeIndex } from "./_types";

/**
 *
 * @example
 * ```ts
 * const array = [1, 2, 3];
 * const index = -5;
 * const normalizedIndex = normalizeIndex(array)(index);
 * console.log(normalizedIndex); // 1
 * ```
 *
 * @param array
 * @param index
 * @returns the normalized index, or `0` if the array is empty
 */
export const normalizeIndex =
  (index: RelativeIndex) =>
  (array: ArrayLike<unknown>): number => {
    if (process.env.NODE_ENV !== "production") {
      console.assert(index >= -array.length);
      console.assert(index < array.length);
    }

    return mod(index, array.length);
  };
