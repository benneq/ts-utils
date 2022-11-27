import { SortedSet } from "./sortedSet";

/**
 * Checks if a `value` is a {@link SortedSet}
 *
 * @example
 * ```ts
 * const value = sortedSet(numberComparator);
 * const result = isSortedSet(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link SortedSet}, otherwise `false`
 */
export const isSortedSet = <T>(value: unknown): value is SortedSet<T> => {
  return value instanceof SortedSet;
};
