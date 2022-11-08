/**
 * Checks if a {@link Map} contains any entry
 *
 * @example
 * Returns `true` if the {@link Map} is empty
 * ```ts
 * const b = isEmpty(new Map());
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the {@link Map} contains elements
 * ```ts
 * const b = isEmpty(new Map([[1, 2]]));
 * console.log(b); // false
 * ```
 *
 * @param map - the {@link Map} to check
 * @returns `true` if the {@link Map} is empty, otherwise `false`
 */
export const isEmpty = (map: ReadonlyMap<unknown, unknown>): boolean => {
  return !map.size;
};
