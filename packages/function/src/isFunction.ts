/**
 * Checks if a value is a {@link Function}
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
export const isFunction = (value: unknown): value is Function => {
  return typeof value === "function";
};
