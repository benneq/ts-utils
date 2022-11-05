import { whitespaceRegExp } from "@benneq/regexp";

/**
 * Replaces consecutive whitespaces of a String with a single space
 *
 * @example
 * Compact every duplicate whitespaces
 * ```ts
 * const s = compactWhitespace('  a  b  ');
 * console.log(s); // ' a b '
 * ```
 *
 * @returns the compacted `String`
 */
export const compactWhitespace = (str: string): string => {
  return str.replace(new RegExp(`${whitespaceRegExp.source}{2,}`, "g"), " ");
};
