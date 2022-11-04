/**
 * Checks if a String contains no characters
 *
 * @example
 * isEmpty("") => true
 * isEmpty(" ") => false
 *
 * @returns `true` if the String has a `length` of `0`, otherwise `false`
 */
export const isEmpty = (str: string): str is "" => {
  return !str;
};
