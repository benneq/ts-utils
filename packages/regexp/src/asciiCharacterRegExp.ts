/**
 * A RegExp that matches all ASCII characters, this also inclues non-printable characters
 *
 * @example
 * Match ASCII characters
 * ```ts
 * const result = asciiCharacterRegExp.test(" ");
 * console.log(result); // true
 * ```
 *
 */
export const asciiCharacterRegExp = /\p{ASCII}/u;
