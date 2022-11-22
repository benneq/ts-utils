import { reduce } from "./reduce";

/**
 * Sums all {@link number}s of an {@link Iterable}.
 *
 * @example
 * ```ts
 * const result = sum([1,2,3]);
 * console.log(result); // 6
 * ```
 *
 * @see {@link reduce} for similar operations.
 *
 * @param iterable - the {@link Iterable} to sum
 * @returns the sum of all {@link number}s
 */
export const sum = reduce<number, number>((a, b) => a + b, 0);
