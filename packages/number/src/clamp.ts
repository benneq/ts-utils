/**
 * Ensures a value is between min and max
 *
 * @example
 * Clamp value between 1 and 5
 * ```ts
 * const clampBetween1And5 = clamp(1, 5);
 * const result = clampBetween1And5(8);
 * console.log(result); // 5
 * ```
 *
 * @returns `min` if `value < min`, or `max` if `value > max`, otherwise `value`
 */
export const clamp =
  (min: number, max: number) =>
  (value: number): number => {
    return value < min ? min : value > max ? max : value;
  };
