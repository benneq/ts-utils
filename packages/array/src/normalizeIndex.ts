import { mod } from "@benneq/number";

/**
 *
 * @example
 * normalizeIndex([1,2,3])(-1) => 2
 * normalizeIndex([1,2,3])(-5) => 1
 * normalizeIndex([1,2,3])(6) => 0
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