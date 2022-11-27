import { MappedSet } from "./mappedSet";

/**
 * Checks if a `value` is a {@link SortedSeMappedSett}
 *
 * @example
 * ```ts
 * const value = sortedSet(numberComparator);
 * const result = isMappedSet(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link MappedSet} element type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link MappedSet}, otherwise `false`
 */
export const isMappedSet = <T>(value: unknown): value is MappedSet<T> => {
  return value instanceof MappedSet;
};
