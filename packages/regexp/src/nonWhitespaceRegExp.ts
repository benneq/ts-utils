/**
 * A RegExp that matches non-whitespaces
 *
 * @example
 * Match non-whitespace character
 * ```ts
 * const b = nonWhitespaceRegExp.test("💩");
 * console.log(b); // true
 * ```
 *
 */
export const nonWhitespaceRegExp = /\S/;
