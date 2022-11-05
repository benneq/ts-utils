/**
 * A RegExp that matches all ASCII characters, this also inclues non-printable characters
 *
 * @example
 * Match ASCII characters
 * ```ts
 * const b = asciiCharacterRegExp.test(" ");
 * console.log(b); // true
 * ```
 *
 */
export const asciiCharacterRegExp = /\p{ASCII}/u;
