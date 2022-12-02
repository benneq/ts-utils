/**
 * Tries to parse a Float from a String
 *
 * @example
 * Parse Float
 * ```ts
 * const f = parseFloat("3.3");
 * console.log(f); // 3.3
 * ```
 *
 * @example
 * Parse the first valid Float
 * ```ts
 * const f = parseFloat(" 9.0001e3a");
 * console.log(f); // 9000.1
 * ```
 *
 * @returns the parsed Float if successful, otherwise `undefined`
 */
type ParseFloat = (str: string) => number | undefined;

export const parseFloat: ParseFloat = (
  str,
  // internal variables:
  number = Number.parseFloat(str)
) => {
  return Number.isNaN(number) ? undefined : number;
};
