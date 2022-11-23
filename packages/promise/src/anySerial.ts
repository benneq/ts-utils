import { isEmpty } from "@benneq/array";

/**
 * Executes all {@link Promise}s in serial order and returns either the first
 * result or throws an {@link AggregateError} containing all errors.
 *
 * An optional `defaultValue` can be provided that will be returned if
 * `promises` is empty.
 *
 * If no {@link Promise}s and no `defaultValue` were provided `undefined` will
 * be returned.
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
 * @param promises - the {@link Promise}s to execute in serial order
 * @param defaultValue - the default value to return if no promise was provided
 * @returns a {@link Promise} that executes all {@link Promise}s in serial
 */
export const anySerial: {
  <T>(promises: Iterable<Promise<T>>): Promise<T | undefined>;
  <T>(promises: Iterable<Promise<T>>, defaultValue: T): Promise<T>;
} = async <T>(
  promises: Iterable<Promise<T>>,
  defaultValue?: T
): Promise<T | undefined> => {
  const errors = [];
  for (const promise of promises) {
    try {
      return await promise;
    } catch (err) {
      errors.push(err);
    }
  }

  // if no promise was provided
  if (isEmpty(errors)) {
    return defaultValue;
  }

  // if all promises rejected
  throw new AggregateError(errors);
};
