/**
 * Ensures a value is between min and max
 *
 * @example
 * clamp(1, 5)(3) => 3
 * clamp(1, 5)(8) => 5
 * clamp(1, 5)(0) => 1
 *
 * @returns `min` if `value < min`, or `max` if `value > max`, otherwise `value`
 */
export const clamp =
  (min: number, max: number) =>
  (value: number): number => {
    return value < min ? min : value > max ? max : value;
  };
