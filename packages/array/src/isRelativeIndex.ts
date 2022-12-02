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
 * const result = isRelativeIndexOfArray(index);
 * console.log(result); // true
 * ```
 *
 * @example
 * Works with Strings, too
 * ```ts
 * const isRelativeIndexOfTest = isRelativeIndex("test");
 * const result = isRelativeIndexOfTest(-5);
 * console.log(result); // false
 * ```
 *
 * @returns `true` if the `index` is between `-array.length` and `array.length`, otherwise `false`
 */
export const isRelativeIndex =
  (array: ArrayLike<unknown>) =>
  (index: number, length = array.length): index is RelativeIndex => {
    return index >= -length && index < length;
  };
