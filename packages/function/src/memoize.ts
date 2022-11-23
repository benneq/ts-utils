/**
 * Create a new {@link Function} that returns the memoized results of a
 * {@link Function}. The key for the lookup cache is determined by the
 * `keyExtractor` {@link Function}.
 *
 * An optional {@link Map} instance can be provided to be used as cache. This
 * allows for example to prepopulate the cache, or to force recomputation of
 * some values by removing their corresponding keys. If no instance is provided
 * an empty {@link Map} will be created.
 *
 * @remarks
 * The memoized function should be a pure function, because else side effects
 * will only be executed once for each cached key.
 *
 * @example
 * Memoize an expensive function
 * ```ts
 * const expensiveFunction = (a, b) => a + b;
 * const keyExtractor = (a, b) => `${a}_${b}`;
 *
 * const memoizedFunction = memoize(expensiveFunction, keyExtractor);
 *
 * const result = memoizedFunction(2, 3);
 * console.log(result); // 5
 * ```
 *
 * @example
 * Provide an initial cache restored from database
 * ```ts
 * const restoredCacheFromDatabase = new Map([["a", 1], ["ab", 2]]);
 * const expensiveFunction = (s) => s.length;
 * const keyExtractor = (s) => s;
 *
 * const memoizedFunction = memoize(expensiveFunction, keyExtractor, restoredCacheFromDatabase);
 *
 * const result = memoizedFunction("ab");
 * console.log(result); // 2
 * ```
 *
 * @example
 * Clear cache after 5 seconds
 * ```ts
 * const cache = new Map();
 * const expensiveFunction = (s) => s.length;
 * const keyExtractor = (s) => s;
 *
 * const memoizedFunction = memoize(expensiveFunction, keyExtractor, cache);
 *
 * // ... fill the cache
 *
 * setTimeout(() => {
 *   cache.clear();
 * }, 5000);
 * ```
 *
 * @param fn - the {@link Function} to memoize
 * @param keyExtractor - the {@link Function} to extract the key for the cache
 * @param cache - an optional, possibly prefilled {@link Map} instance to use as cache
 * @returns the memoized result
 */
export const memoize = <TArgs extends unknown[], R>(
  fn: (...args: TArgs) => R,
  keyExtractor: (...args: TArgs) => unknown,
  cache = new Map<unknown, R>()
): ((...args: TArgs) => R) => {
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
