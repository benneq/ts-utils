import { whitespaceRegExp } from "@benneq/regexp";

/**
 *
 * @example
 * compactWhitespace('abc') => 'acb'
 * compactWhitespace('  a  b  ') => ' a b '
 *
 * @param str
 * @returns
 */
export const compactWhitespace = (str: string): string => {
  return str.replace(new RegExp(`${whitespaceRegExp.source}{2,}`, "g"), " ");
};
