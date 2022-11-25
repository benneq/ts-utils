/**
 * Checks if a Number is an index of an {@link ArrayLike}
 *
 * @example
 * Is `index` in bounds of `array`?
 * ```ts
 * const array = [1,2,3];
 * const isIndexOfArray = isIndex(array);
 *
 * const index = 4;
 * const b = isIndexOfArray(index);
 * console.log(b); // false
 * ```
 *
 * @example
 * Works with strings, too
 * ```ts
 * const isIndexOfTest = isIndex("test");
 * const b = isIndexOfTest(3);
 * console.log(b); // true
 * ```
 *
 * @returns `true` if the `index` is between `0` and `array.length`, otherwise `false`
 */
export const isIndex =
  (array: ArrayLike<unknown>) =>
  (index: number): boolean => {
    return index >= 0 && index < array.length;
  };
