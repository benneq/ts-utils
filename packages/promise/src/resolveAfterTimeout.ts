/**
 * Creates a Promise that resolves after `ms` milliseconds with `value`
 *
 * @example
 * resolveAfterTimeout(100) => ... 100ms later ... Promise.resolve()
 * resolveAfterTimeout(100, "val") => ... 100ms later ... Promise.resolve("val")
 *
 * @param ms
 * @param value
 * @returns a new Promise that resolves after `ms` milliseconds
 */
export const resolveAfterTimeout: {
  (ms: number): Promise<void>;
  <T>(ms: number, value: T): Promise<T>;
} = <T>(ms: number, value?: T): Promise<T | void> => {
  return new Promise((resolve) => setTimeout(resolve, ms, value));
};
