import { CharCode } from "./_types";

/**
 * Converts a character to its CharCode
 *
 * If string contains multiple characters only the first one is converted
 *
 * @example
 * Returns CharCode of 'A'
 * ```ts
 * const cc = charCodeOf('A');
 * console.log(cc); // 65
 * ```
 *
 * @example
 * Returns `NaN` for empty `String`
 * ```ts
 * const cc = charCodeOf('');
 * console.log(cc); // NaN
 * ```
 *
 * @returns the CharChode of the character, or `NaN` if there is no character
 */
export const charCodeOf = (character: string): CharCode => {
  return character.charCodeAt(0);
};
