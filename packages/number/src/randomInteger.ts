/**
 * Generates a random Integer between min (incl.) and max (incl.)
 *
 * @example
 * randomInteger(-1, 1) => 0
 * randomInteger(-1, 1) => -1
 * randomInteger(-1, 1) => 1
 *
 * @returns the generated random Integer
 */
export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
