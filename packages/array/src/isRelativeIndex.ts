/**
 * Checks if a Number is a {@link RelativeIndex} of an {@link ArrayLike}
 *
 * @example
 * A {@link RelativeIndex} can be negative
 * ```ts
 * const result = isRelativeIndex(index)([1, 2, 3]);
 *
 * console.log(result); // true
 * ```
 *
 * @example
 * Works with Strings, too
 * ```ts
 * const result = isRelativeIndex(-5)("test");
 *
 * console.log(result); // false
 * ```
 *
 * @returns `true` if the `index` is between `-array.length` and `array.length`, otherwise `false`
 */
type IsRelativeIndex = (
  index: number
) => (array: ArrayLike<unknown>) => boolean;

export const isRelativeIndex: IsRelativeIndex =
  (index) =>
  (array, length = array.length) => {
    return index >= -length && index < length;
  };
