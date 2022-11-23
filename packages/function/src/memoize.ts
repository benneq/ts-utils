/**
 * Create a new {@link Function} that returns the memoized results of a
 * {@link Function}. The key for the lookup cache is determined by the
 * `keyExtractor` {@link Function}.
 *
 * @remarks
 * The memoized function should be a pure function, because else side effects
 * will only be executed once for each cached key.
 *
 * @example
 * ```ts
 * const expensiveFunction = (a, b) => a + b;
 * const memoizedFunction = memoize(expensiveFunction, (a, b) => `${a}_${b}`);
 * const result = memoizedFunction(2, 3);
 * console.log(result); // 5
 * ```
 *
 * @param fn - the {@link Function} to memoize
 * @param keyExtractor - the {@link Function} to extract the key for the cache
 * @returns the memoized result
 */
export const memoize = <TArgs extends unknown[], R>(
  fn: (...args: TArgs) => R,
  keyExtractor: (...args: TArgs) => unknown
): ((...args: TArgs) => R) => {
  const cache = new Map<unknown, R>();

  return (...args) => {
    const key = keyExtractor(...args);
    if (cache.has(key)) {
      return cache.get(key) as R;
    }

    const value = fn(...args);
    cache.set(key, value);
    return value;
  };
};
