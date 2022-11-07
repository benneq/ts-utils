/**
 * Modulus function
 *
 * @remark
 * JavaScript's `%` operator returns the remainder, not the modulus. This
 * behave different from modulus for negative values: `-4 % 3 === -1`.
 *
 * @example
 * Modulus of negative value
 * ```ts
 * const n = mod(-4, 3)
 * console.log(n); // 2
 * ```
 *
 * @returns the modulus of `n` and `m`
 */
export const mod = (n: number, m: number): number => {
  return ((n % m) + m) % m;
};
