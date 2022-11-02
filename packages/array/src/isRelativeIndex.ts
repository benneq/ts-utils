import { RelativeIndex } from "./_types";

/**
 * Checks if the given index is a relative index of the provided Array
 *
 * @example
 * isRelativeIndex([1,2,3])(2) => true
 * isRelativeIndex([1,2,3])(3) => false
 * isRelativeIndex([1])(-3) => true
 * isRelativeIndex([1])(-4) => false
 *
 * @returns `true` if the index is between -Array.length and Array.length, otherwise `false`
 */
export const isRelativeIndex =
  <T>(array: ArrayLike<T>) =>
  (index: number): index is RelativeIndex => {
    return index >= -array.length && index < array.length;
  };
