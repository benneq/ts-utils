/**
 * Checks if two values are strictly equal, using `===`
 *
 * @example
 * isEqualTo(1)(1) => true
 * isEqualTo("")(" ") => false
 * isEqualTo(null)(undefined) => false
 *
 * @returns `true` if both values are equal, otherwise `false`
 */
export const isEqualTo =
  <T>(valueA: T) =>
  (valueB: unknown): valueB is T => {
    return valueA === valueB;
  };
