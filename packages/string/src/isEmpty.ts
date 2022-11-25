/**
 * Checks if a String contains no characters
 *
 * @example
 * Returns `true` if the String is empty
 * ```ts
 * const result = isEmpty("");
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the String contains any character
 * ```ts
 * const result = isEmpty(" ");
 * console.log(result); // false
 * ```
 *
 * @param str - the {@link String} value to check
 * @returns `true` if the String has a `length` of `0`, otherwise `false`
 */
export const isEmpty = (str: string): str is "" => {
  return !str;
};
