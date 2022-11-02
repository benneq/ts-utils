/**
 * Modulus function
 *
 * @remark
 * JavaScript's `%` operator returns the remainder, so `-4 % 3 === -1`
 *
 * @example
 * mod(4, 3) => 1
 * mod(-4, 3) => 2
 *
 * @returns the modulus of `n` and `m`
 */
export const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};
