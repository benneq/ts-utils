/**
 * A RegExp that matches all printable ASCII and Unicode characters
 *
 * @example
 * Match printable character
 * ```ts
 * const result = printableCharacterRegExp.test("💩");
 * console.log(result); // true
 * ```
 *
 * @remark
 * Using uppercase `P` to exclude all control characters.
 */
export const printableCharacterRegExp = /\P{C}/u;
