/**
 * Tries to parse a Float from a String
 *
 * @returns the parsed Float if successful, otherwise `undefined`
 */
export const parseFloat = (str: string): number | undefined => {
  const number = Number.parseFloat(str);

  return Number.isNaN(number) ? undefined : number;
};
