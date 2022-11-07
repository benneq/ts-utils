/**
 *
 * @mutation
 *
 * @example
 * Toggle a value
 * ```ts
 * const set = new Set([1,2,3]);
 * toggle(set)(2);
 * console.log(set); // Set([1,3]);
 * ```
 *
 * @returns
 */
export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.has(value) ? set.delete(value) : set.add(value);
  };
