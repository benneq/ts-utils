import { reduce } from "./reduce";

/**
 * Counts the number of elements in an {@link Iterable}.
 *
 * @example
 * ```ts
 * const result = count([1, 2, 3]);
 * console.log(result); // 3
 * ```
 *
 * @param iterable - the {@link Iterable} to count
 * @returns the number of elements
 */
export const count: (iterable: Iterable<unknown>) => number = reduce(
  (acc) => acc + 1,
  0
);
