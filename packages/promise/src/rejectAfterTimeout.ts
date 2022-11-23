/**
 * Creates a {@link Promise} that rejects after `ms` milliseconds with an
 * `error`.
 *
 * @example
 * Reject after 100ms
 * ```ts
 * rejectAfterTimeout(100)
 *   .then(() => console.log("then"))    // this will never be called
 *   .catch(() => console.log("catch")); // will be called after 100ms
 * ```
 *
 * @example
 * Reject after 100ms with `"err"`
 * ```ts
 * rejectAfterTimeout(100, "err")
 *   .then(() => console.log("then"))   // this will never be called
 *   .catch((err) => console.log(err)); // will be called after 100ms
 * ```
 *
 * @param ms - the number of milliseconds to wait
 * @param error - the optional error to reject with
 * @returns a {@link Promise} that rejects after `ms` milliseconds
 */
export const rejectAfterTimeout = (
  ms: number,
  error?: unknown
): Promise<never> => {
  return new Promise((_resolve, reject) => setTimeout(reject, ms, error));
};
