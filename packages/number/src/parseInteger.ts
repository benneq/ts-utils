/**
 * Tries to parse an Integer from a String
 *
 * @example
 * Parse Integer
 * ```ts
 * const i = parseInteger("1");
 * console.log(i); // 1
 * ```
 *
 * @example
 * Parse the first valid Integer
 * ```ts
 * const i = parseInteger(" 3.4a");
 * console.log(i); // 3
 * ```
 *
 * @returns the parsed Iloat if successful, otherwise `undefined`
 */
export const parseInteger = (str: string): number | undefined => {
  const number = Number.parseInt(str);

  return Number.isNaN(number) ? undefined : number;
};
