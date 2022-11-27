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
 * @see {@link avg} and {@link reduce} for similar operations.
 *
 * @param iterable - the {@link Iterable} to sum
 * @returns the sum of all {@link number}s, or `undefined` if {@link Iterable} was empty
 */
export const sum = reduce<number, number | undefined>(
  (acc, val) => (acc ?? 0) + val,
  undefined
);
