/**
 * Checks if a `value` is a {@link Function}
 *
 * @example
 * Call some unknown function
 * ```ts
 * if(isFunction<void, [string]>(value)) {
 *   value("arg");
 * }
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Function, otherwise `false`
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = <T extends Function>(value: unknown): value is T => {
  return typeof value === "function";
};
