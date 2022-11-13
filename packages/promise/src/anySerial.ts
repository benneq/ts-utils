import { isEmpty } from "@benneq/array";

/**
 * Executes all {@link Promise}s in serial order and returns either the first
 * result or throws an {@link AggregateError} containing all errors.
 *
 * @example
 * Execute all {@link Promise}s in serial
 * ```ts
 * const promise = anySerial([
 *   Promise.reject("err"),
 *   Promise.resolve(1)
 * ]);
 *
 * promise.then(v => console.log(v)); // 1
 * ```
 *
 * @param promises the {@link Promise}s to execute in serial order
 * @returns a {@link Promise} that executes all {@link Promise}s in serial
 */
export const anySerial: {
  (promises: []): Promise<void>;
  <T>(promises: Promise<T>[]): Promise<T>;
} = async <T>(promises: Array<Promise<T>>): Promise<T | void> => {
  if (isEmpty(promises)) {
    return;
  }

  const errors = [];
  for (const promise of promises) {
    try {
      return await promise;
    } catch (err) {
      errors.push(err);
    }
  }

  // if all promises rejected
  throw new AggregateError(errors);
};
