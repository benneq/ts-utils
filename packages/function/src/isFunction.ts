/**
 * Checks if the provided value is a Function
 *
 * @returns `true` if `value` is a Function, otherwise `false`
 */
export const isFunction = <T, TArgs extends unknown[] = []>(
  value: unknown
): value is (...args: TArgs) => T => {
  return typeof value === "function";
};
