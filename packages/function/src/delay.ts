import { Callback, CancelCallback } from "./_types";

/**
 * Delays the invocation of a {@link Callback} function.
 *
 * @example
 * Call `callback` after 500ms
 * ```ts
 * const callback = (val) => console.log(val);
 * delay(callback, 500, "val");
 *
 * // prints "val" after 500ms
 * ```
 *
 * @example
 * Cancel delay
 * ```ts
 * const callback = (val) => console.log(val);
 * const cancelDelay = delay(callback, 500, "val");
 * cancelDelay();
 *
 * // will not call the callback
 * ```
 *
 * @param callback - the {@link Callback} to call
 * @param ms - the {@link number} of milliseconds to delay the function call
 * @param args - the `arguments` to pass to the `callback` function
 * @returns the cancel {@link Callback} function
 */
export const delay = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>,
  ms: number,
  ...args: TArgs
): CancelCallback => {
  const timeout = setTimeout(callback, ms, ...args);

  return () => clearTimeout(timeout);
};
