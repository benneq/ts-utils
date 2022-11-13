import { RelativeIndex } from "./_types";

/**
 * Checks if a Number is a {@link RelativeIndex} of an {@link ArrayLike}
 *
 * @example
 * A {@link RelativeIndex} can be negative
 * ```ts
 * const array = [1,2,3];
 * const isRelativeIndexOfArray = isRelativeIndex(array);
 *
 * const index = -3;
 * const b = isRelativeIndexOfArray(index);
 * console.log(b); // true
 * ```
 *
 * @example
 * Works with Strings, too
 * ```ts
 * const isRelativeIndexOfTest = isRelativeIndex("test");
 * const b = isRelativeIndexOfTest(-5);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if the index is between `-array.length` and `array.length`, otherwise `false`
 */
export const isRelativeIndex =
  (array: ArrayLike<unknown>) =>
  (index: number): index is RelativeIndex => {
    return index >= -array.length && index < array.length;
  };
