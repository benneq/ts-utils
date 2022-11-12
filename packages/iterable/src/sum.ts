import { reduce } from "./reduce";

/**
 *
 * @example
 * ```ts
 * const result = sum([1,2,3]);
 * console.log(result); // 6
 * ```
 */
export const sum = reduce<number, number>((a, b) => a + b, 0);
