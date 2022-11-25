/**
 * A RegExp that matches all printable ASCII characters
 *
 * @example
 * Match printable ASCII character
 * ```ts
 * const result = printableCharacterRegExp.test(" ");
 * console.log(result); // true
 * ```
 *
 * @remark
 * The printable range in the ASCII table starts with space (`" "`) and ends with tilde ("`~`").
 */
export const printableAsciiCharacterRegExp = /[ -~]/;
