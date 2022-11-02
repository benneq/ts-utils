/**
 * Checks if a String contains any character
 *
 * @example
 * isEmpty("") => true
 * isEmpty(" ") => false
 *
 * @returns `true` if the Set is empty, otherwise `false`
 */
export const isEmpty = (str: string): str is "" => {
  return !str;
};
