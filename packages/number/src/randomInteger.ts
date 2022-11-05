/**
 * Generates a random Integer between min (incl.) and max (incl.)
 *
 * @example
 * ```ts
 * const i = randomInteger(-1, 1);
 * console.log(i); // -1 or 0 or 1
 * ```
 *
 * @returns the generated random Integer
 */
export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
