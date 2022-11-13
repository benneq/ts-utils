import { mod } from "@benneq/number";

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
  (array: ArrayLike<unknown>) =>
  (index: number): number => {
    return mod(index, array.length);
  };
