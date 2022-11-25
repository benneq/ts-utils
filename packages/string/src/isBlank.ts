import { nonWhitespaceRegExp } from "@benneq/regexp";

/**
 * Checks if a String contains only whitespace characters
 *
 * @example
 * Returns `true` if the String is empty
 * ```ts
 * const result = isBlank("");
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `true` if the String contains only whitespace characters
 * ```ts
 * const result = isBlank(" ");
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the String contains any non-whitespace character
 *
 * ```ts
 * const result = isBlank(" a ");
 * console.log(result); // false
 * ```
 *
 * @param str - the {@link String} to check
 * @returns `true` if the String is empty or all characters are whitespace, otherwise `false`
 */
export const isBlank = (str: string): boolean => {
  return !nonWhitespaceRegExp.test(str);
};
