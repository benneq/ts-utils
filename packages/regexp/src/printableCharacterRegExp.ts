/**
 * A RegExp that matches all printable ASCII and Unicode characters
 *
 * @example
 * Match printable character
 * ```ts
 * const b = printableCharacterRegExp.test("💩");
 * console.log(b); // true
 * ```
 *
 * @remark
 * Using uppercase `P` to exclude all control characters.
 */
export const printableCharacterRegExp = /\P{C}/u;
