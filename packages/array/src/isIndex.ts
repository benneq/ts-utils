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
 * const result = isIndexOfArray(index);
 * console.log(result); // false
 * ```
 *
 * @example
 * Works with strings, too
 * ```ts
 * const isIndexOfTest = isIndex("test");
 * const result = isIndexOfTest(3);
 * console.log(result); // true
 * ```
 *
 * @returns `true` if the `index` is between `0` and `array.length`, otherwise `false`
 */
export const isIndex =
  (array: ArrayLike<unknown>) =>
  (index: number): boolean => {
    return index >= 0 && index < array.length;
  };
