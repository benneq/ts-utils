import { RejectFn, ResolveFn } from "./_types";

/**
 * Create a {@link Promise}-returning {@link Function} that returns the
 * memoized results of a {@link Promise}. The key for the lookup cache is
 * determined by the `keyExtractor` {@link Function}.
 *
 * An optional {@link Map} instance can be provided to be used as cache. This
 * allows for example to prepopulate the cache, or to force recomputation of
 * some values by removing their corresponding keys. If no instance is provided
 * an empty {@link Map} will be created.
 *
 * @remarks
 * If the {@link Promise} throws an error, no result will be cached and the
 * {@link Promise} will be run again next time.
 *
 * @example
 * Memoize the `fetch` function
 * ```ts
 * const keyExtractor = (url) => url;
 *
 * const memoizedFetch = memoizePromise(fetch, keyExtractor);
 *
 * const result1 = memoizedFetch("https://...");
 * const result2 = memoizedFetch("https://...");
 * // fetch will only be called once
 * ```
 *
 * @example
 * Provide an initial cache restored from database
 * ```ts
 * const restoredCacheFromDatabase = new Map([["https://...", 1]]);
 *
 * const keyExtractor = (url) => url;
 *
 * const memoizedFetch = memoizePromise(fetch, keyExtractor, restoredCacheFromDatabase);
 *
 * const result = memoizedFetch("https://...");
 * // result will be directly returned from cache
 * ```
 *
 * @example
 * Clear cache after 5 seconds
 * ```ts
 * const cache = new Map();
 * const keyExtractor = (url) => url;
 *
 * const memoizedFetch = memoizePromise(fetch, keyExtractor, cache);
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
export const memoizePromise = <TArgs extends unknown[], R>(
  fn: (...args: TArgs) => PromiseLike<R>,
  keyExtractor: (...args: TArgs) => unknown,
  cache = new Map<unknown, R>()
): ((...args: TArgs) => Promise<R>) => {
  const pending = new Set<unknown>();
  const resolves: ResolveFn<R>[] = [];
  const rejects: RejectFn[] = [];

  return async (...args) => {
    const key = keyExtractor(...args);

    if (cache.has(key)) {
      return cache.get(key) as R;
    }

    if (pending.has(key)) {
      return new Promise((resolve, reject) => {
        resolves.push(resolve);
        rejects.push(reject);
      });
    }

    try {
      pending.add(key);
      const value = await fn(...args);
      pending.delete(key);
      cache.set(key, value);
      resolves.forEach((resolve) => resolve(value));
      return value;
    } catch (err) {
      pending.delete(key);
      rejects.forEach((reject) => reject(err));
      throw err;
    }
  };
};
