/**
 * Creates a Promise that resolves after `ms` milliseconds with `value`
 *
 * @example
 * Resolve after 100ms
 * ```ts
 * resolveAfterTimeout(100)
 *   .then(() => console.log("then"))    // this will never be called
 *   .catch(() => console.log("catch")); // will be called after 100ms
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
 * @returns a new Promise that resolves after `ms` milliseconds
 */
export const resolveAfterTimeout: {
  (ms: number): Promise<void>;
  <T>(ms: number, value: T): Promise<T>;
} = <T>(ms: number, value?: T): Promise<T | void> => {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
};