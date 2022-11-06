/**
 * Checks if the provided value is a Function
 *
 * @example
 * Call some unknown function
 * ```ts
 * if(isFunction<void, [string]>(someFn)) {
 *   someFn("arg");
 * }
 * ```
 *
 * @returns `true` if `value` is a Function, otherwise `false`
 */
export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === "function";
};
