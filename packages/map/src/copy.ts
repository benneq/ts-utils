/**
 * Copies all entries of a {@link Map} into a new {@link Map}
 *
 * @example
 * Copy a {@link Map}
 * ```ts
 * const map = new Map([["A", "B"]]);
 * const copiedMap = copy(map);
 * console.log(copiedMap); // Map([["A", "B"]])
 * console.log(map === copiedMap); // false
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to copy
 * @returns the new {@link Map} containing all entries of the source {@link Map}
 */
export const copy = <K, V>(map: Map<K, V>): Map<K, V> => {
  return new Map(map);
};
