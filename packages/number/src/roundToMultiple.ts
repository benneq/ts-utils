/**
 * Rounds a number to a multiple.
 *
 * @example
 * Round to multiple of `5`
 * ```
 * const roundTo5 = roundToMultiple(5);
 *
 * console.log(roundTo5(1)); // 0
 *
 * console.log(roundTo5(4)); // 5
 *
 * console.log(roundTo5(-3)); // -5
 * ```
 *
 * @param multiple - the multiple to round to
 * @param shift - optional shift to apply
 * @returns the rounded number
 */
export const roundToMultiple =
  (multiple: number, shift = 0) =>
  (num: number): number => {
    return Math.round((num - shift) / multiple) * multiple + shift;
  };
