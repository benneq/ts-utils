/**
 * A RegExp that matches non-whitespaces
 *
 * @example
 * Match non-whitespace character
 * ```ts
 * const result = nonWhitespaceRegExp.test("💩");
 * console.log(result); // true
 * ```
 *
 */
export const nonWhitespaceRegExp = /\S/;
