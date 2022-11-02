/**
 * Creates a Promise that rejects after `ms` milliseconds with `error`
 *
 * @example
 * rejectAfterTimeout(100) => ... 100ms later ... Promise.reject()
 * rejectAfterTimeout(100, "err") => ... 100ms later ... Promise.reject("err")
 *
 * @param ms
 * @param error
 * @returns a new Promise that rejects after `ms` milliseconds
 */
export const rejectAfterTimeout: {
  (ms: number): Promise<void>;
  (ms: number, error: unknown): Promise<void>;
} = (ms: number, error?: unknown): Promise<void> => {
  return new Promise((_, reject) => setTimeout(reject, ms, error));
};
