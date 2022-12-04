/**
 * Checks if two comparison results are equal, i.e. if both are either
 * "greater than", "less than" or "equal".
 *
 * @param resultA - the comparison reesult to compare agains
 * @returns `true` if both comparison results have the same sign, otherwise `false`
 */
type EqualSign = (resultA: number) => (resultB: number) => boolean;

export const equalSign: EqualSign =
  (resultA: number, sign = Math.sign) =>
  (resultB: number): boolean => {
    return sign(resultA) == sign(resultB);
  };
