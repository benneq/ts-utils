import { nonWhitespaceRegExp } from "@benneq/regexp"

/**
 * Checks if a String contains only whitespace characters
 *
 * @example
 * isBlank("") => true
 * isBlank(" ") => true
 * isBlank(" a ") => false
 *
 * @returns `true` if the String is empty or all characters are whitespace, otherwise `false`
 */
export const isBlank = (str: string): boolean => {
  return !nonWhitespaceRegExp.test(str);
}