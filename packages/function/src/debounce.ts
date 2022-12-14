import { Callback, CancelCallback } from "./_types";

/**
 *
 * @example
 * Debounce a Function
 * ```ts
 * const callback = (arg) => console.log(arg);
 *
 * const debouncedCallback = debounce(callback);
 *
 * debouncedCallback(100, 1);
 * // wait 50ms
 *
 * debouncedCallback(100, 2);
 * // wait 100ms
 *
 * // callback is called with arg = 2
 * ```
 *
 * @param callback
 * @returns
 */
type Debounce = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>
) => (ms: number, ...args: TArgs) => CancelCallback;

export const debounce: Debounce = (
  callback,
  // internal variables:
  timeout?: NodeJS.Timeout,
  cancel = () => {
    clearTimeout(timeout);
  }
) => {
  return (ms, ...args) => {
    cancel();
    timeout = setTimeout(callback, ms, ...args);
    return cancel;
  };
};
