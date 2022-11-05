/**
 * A RegExp that matches all printable ASCII characters
 *
 * @example
 * Match printable ASCII character
 * ```ts
 * const b = printableCharacterRegExp.test(" ");
 * console.log(b); // true
 * ```
 *
 * @remark
 * The printable range in the ASCII table starts with space (`" "`) and ends with tilde ("`~`").
 */
export const printableAsciiCharacterRegExp = /[ -~]/;
