/**
 * Checks if a Set contains any element
 *
 * @example
 * Returns `true` if the Set is empty
 * ```ts
 * const result = isEmpty(new Set());
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the Set contains elements
 * ```ts
 * const result = isEmpty(new Set([1]));
 * console.log(result); // false
 * ```
 *
 * @param set - the {@link Set} to check
 * @returns `true` if the Set is empty, otherwise `false`
 */
export const isEmpty = (set: ReadonlySet<unknown>): boolean => {
  return !set.size;
};
