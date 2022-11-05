/**
 * Tries to parse a Float from a String
 *
 * @example
 * Parse the first valid Float
 * ```ts
 * const f = parseFloat(" 9.001e3a");
 * console.log(f); // 9001
 * ```
 *
 * @returns the parsed Float if successful, otherwise `undefined`
 */
export const parseFloat = (str: string): number | undefined => {
  const number = Number.parseFloat(str);

  return Number.isNaN(number) ? undefined : number;
};
