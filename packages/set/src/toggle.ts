/**
 *
 * @mutation
 *
 * @example
 * toggle([1,2])(2) => [1]
 * toggle([1,2])(3) => [1,2,3]
 *
 * @param set
 * @returns
 */
export const toggle =
  <T>(set: Set<T>) =>
  (value: T): void => {
    set.has(value) ? set.delete(value) : set.add(value);
  };
