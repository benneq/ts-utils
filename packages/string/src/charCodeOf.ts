import { CharCode } from "./_types";

/**
 * Converts a character to its CharCode
 *
 * If string contains multiple characters only the first one is converted
 *
 * @param character
 * @returns the CharChode of the character, or `NaN` if there is no character
 */
export const charCodeOf = (character: string): CharCode => {
  return character.charCodeAt(0);
};
