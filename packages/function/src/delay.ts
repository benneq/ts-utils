import { Callback } from "./_types";

/**
 * Delays the invocation of a Function.
 *
 * @example
 * Call callback after 500ms
 * ```ts
 * const callback = (val) => console.log(val);
 * delay(callback, 500, "val");
 * ```
 *
 * @example
 * Cancel delay
 * ```ts
 * const callback = (val) => console.log(val);
 * const cancelDelay = delay(callback, 500, "val");
 * cancelDelay();
 * ```
 *
 * @returns the cancel Callback
 */
export const delay = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>,
  ms: number,
  ...args: TArgs
): Callback => {
  const timeout = setTimeout(callback, ms, ...args);

  return () => clearTimeout(timeout);
};
