import { Provider } from "./_types";

/**
 * Calls a {@link Function} with the given arguments if it is defined.
 *
 * @example
 * ```
 * const fn = (arg) => console.log(arg);
 * callIfDefined(fn, 1); // 1
 * ```
 *
 * @param fn - the {@link Function} to call
 * @param args - the `arguments` to pass to the {@link Function}
 * @returns the result of the provided {@link Function} or undefined
 */
export const callIfDefined: {
  <TArgs extends unknown[], T>(fn: Provider<T, TArgs>, ...args: TArgs): T;
  <TArgs extends unknown[], T>(
    fn: undefined | Provider<T, TArgs>,
    ...args: unknown[]
  ): undefined | T;
} = <TArgs extends unknown[], T>(
  fn?: Provider<T, TArgs>,
  ...args: TArgs
): T | undefined => {
  return fn && fn(...args);
};
