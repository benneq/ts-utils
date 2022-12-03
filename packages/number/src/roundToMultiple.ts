/**
 * Rounds a number to a multiple.
 *
 * @example
 * Round to multiple of `5`
 * ```
 * const roundTo5 = roundToMultiple(5);
 *
 * console.log(roundTo5(4)); // 5
 *
 * console.log(roundTo5(-3)); // -5
 * ```
 *
 * @example
 * Round to `-3`, `2`, `7`, ...
 * ```
 * const roundTo5Plus2 = roundToMultiple(5, 2);
 *
 * console.log(roundTo5Plus2(0)); // 2
 *
 * console.log(roundTo5Plus2(8)); // 7
 *
 * console.log(roundTo5Plus2(-5)); // -3
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
