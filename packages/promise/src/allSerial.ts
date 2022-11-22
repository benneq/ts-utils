/**
 * Executes all {@link Promise}s in serial order and returns either all results
 * or throws the first error.
 *
 * The results will be returned in an {@link Array} with the same order as the
 * executed {@link Promise}s.
 *
 * @example
 * Execute all {@link Promise}s in serial
 * ```ts
 * const promise = allSerial([
 *   Promise.resolve(1),
 *   Promise.resolve(2)
 * ]);
 *
 * promise.then(v => console.log(v)); // [1, 2]
 * ```
 *
 * @param promises - the {@link Promise}s to execute in serial order
 * @returns a {@link Promise} that executes all {@link Promise}s in serial
 */
export const allSerial = async <T>(
  promises: Iterable<Promise<T>>
): Promise<T[]> => {
  const values: T[] = [];
  for (const promise of promises) {
    values.push(await promise);
  }
  return values;
};
