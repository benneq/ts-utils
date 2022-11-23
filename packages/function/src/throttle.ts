import { Callback, CancelCallback } from "./_types";

/**
 *
 * @example
 * Throttle a Function
 * ```ts
 * const callback = (arg) => console.log(arg);
 *
 * const throttledCallback = throttle(callback);
 *
 * throttledCallback(100, 1);
 * // wait 50ms
 *
 * throttledCallback(100, 2);
 * // wait 50ms
 *
 * // callback is called with arg = 2
 * ```
 *
 * @param callback
 * @returns
 */
export const throttle = <TArgs extends unknown[] = []>(
  callback: Callback<TArgs>
): ((ms: number, ...args: TArgs) => CancelCallback) => {
  let timeout: NodeJS.Timeout | undefined;
  let lastArgs: TArgs;

  const cancel = () => {
    clearTimeout(timeout);
  };

  return (ms, ...args) => {
    lastArgs = args;

    if (!timeout) {
      timeout = setTimeout(() => {
        callback(...lastArgs);
        timeout = undefined;
      }, ms);
    }

    return cancel;
  };
};
