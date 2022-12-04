/**
 * Checks if a Number is an index of an {@link ArrayLike}
 *
 * @example
 * Is `index` in bounds of `array`?
 * ```ts
 * const result = isIndex(4)([1, 2, 3]);
 *
 * console.log(result); // false
 * ```
 *
 * @example
 * Works with strings, too
 * ```ts
 * const result = isIndex(3)("test");
 *
 * console.log(result); // true
 * ```
 *
 * @returns `true` if the `index` is between `0` and `array.length`, otherwise `false`
 */
export const isIndex =
  (index: number) =>
  (array: ArrayLike<unknown>): boolean => {
    return index >= 0 && index < array.length;
  };
