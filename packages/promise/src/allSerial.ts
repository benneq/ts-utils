/**
 * Executes all {@link Promise}s in serial order and returns either all results
 * first or throws the first error.
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
 * @param promises the {@link Promise}s to execute in serial order
 * @returns a {@link Promise} that executes all {@link Promise}s in serial
 */
export const allSerial = async <T>(
  promises: Array<Promise<T>>
): Promise<T[]> => {
  const values: T[] = [];
  for (const promise of promises) {
    values.push(await promise);
  }
  return values;
};
