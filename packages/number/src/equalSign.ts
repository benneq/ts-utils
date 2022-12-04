/**
 * Checks if two numbers have equal signs.
 *
 * `+0` and `-0` are considered equal.
 *
 * @example
 * ```ts
 * const result = equalSign(3, 0.5);
 *
 * console.log(result); // true
 * ```
 *
 * @param numberA - the number to compare against
 * @returns `true` if both numbers have the same sign, otherwise `false`
 */
type EqualSign = (numberA: number) => (numberB: number) => boolean;

export const equalSign: EqualSign =
  (numberA: number, sign = Math.sign) =>
  (numberB: number): boolean => {
    return sign(numberA) == sign(numberB);
  };
