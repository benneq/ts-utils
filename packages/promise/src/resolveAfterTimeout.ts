/**
 * Creates a {@link Promise} that resolves after `ms` milliseconds with a
 * `value`.
 *
 * @example
 * Resolve after 100ms
 * ```ts
 * resolveAfterTimeout(100)
 *   .then(() => console.log("then"))    // will be called after 100ms
 *   .catch(() => console.log("catch")); // this will never be called
 * ```
 *
 * @example
 * Resolve after 100ms with `"val"`
 * ```ts
 * resolveAfterTimeout(100, "val")
 *   .then((val) => console.log(val))    // will be called after 100ms
 *   .catch(() => console.log("catch")); // this will never be called
 * ```
 *
 * @param ms - the number of milliseconds to wait
 * @param error - the optional value to resolve with
 * @returns a {@link Promise} that resolves after `ms` milliseconds
 */
export const resolveAfterTimeout: {
  (ms: number): Promise<void>;
  <T>(ms: number, value: T): Promise<T>;
} = <T>(ms: number, value?: T): Promise<T | void> => {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
};
