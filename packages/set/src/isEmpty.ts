/**
 * Checks if a Set contains any element
 *
 * @example
 * Returns `true` if the Set is empty
 * ```ts
 * const b = isEmpty(new Set());
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the Set contains elements
 * ```ts
 * const b = isEmpty(new Set([1]));
 * console.log(b); // false
 * ```
 *
 * @param set - the {@link Set} to check
 * @returns `true` if the Set is empty, otherwise `false`
 */
export const isEmpty = (set: ReadonlySet<unknown>): boolean => {
  return !set.size;
};
