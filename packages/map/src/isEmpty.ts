/**
 * Checks if a Map contains any entry
 *
 * @example
 * Returns `true` if the Map is empty
 * ```ts
 * const b = isEmpty(new Map());
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the Map contains elements
 * ```ts
 * const b = isEmpty(new Map([[1, 2]]));
 * console.log(b); // false
 * ```
 *
 * @returns `true` if the Map is empty, otherwise `false`
 */
export const isEmpty = (map: ReadonlyMap<unknown, unknown>): boolean => {
  return !map.size;
};
