/**
 * Tries to parse an Integer from a String
 *
 * @returns the parsed Iloat if successful, otherwise `undefined`
 */
export const parseInteger = (str: string): number | undefined => {
  const number = Number.parseInt(str);

  return Number.isNaN(number) ? undefined : number;
};
