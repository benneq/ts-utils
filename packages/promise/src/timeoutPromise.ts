import { rejectAfterTimeout } from "./rejectAfterTimeout";

/**
 * Creates a {@link Promise} that rejects after `ms` milliseconds if the
 * provided {@link Promise} did not resolve or reject in time.
 *
 * @example
 * Reject if promise takes over 500ms to resolve or reject
 * ```ts
 * const timeoutAfter500ms = timeoutPromise(500, "err");
 * try {
 *   await timeoutAfter500ms(myPromise); // takes over 500 ms
 * } catch(err) {
 *   console.log(err); // "err"
 * }
 * ```
 *
 * @param ms - the number of milliseconds for the timeout
 * @param error - the optional error to reject with
 * @returns a new {@link Promise} that either uses the response of the provided
 * {@link Promise} or rejects after `ms` milliseconds
 */
export const timeoutPromise =
  (ms: number, error?: unknown) =>
  <T>(promise: Promise<T>): Promise<T> => {
    return Promise.race([promise, rejectAfterTimeout(ms, error)]);
  };
