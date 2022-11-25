/**
 * Checks if a `value` is an {@link ArrayBuffer}.
 *
 * @example
 * ```
 * const result = isArrayBuffer(new ArrayBuffer(0));
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isArrayBuffer([]);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is an {@link ArrayBuffer}, otherwise `false`
 */
export const isArrayBuffer = (value: unknown): value is ArrayBuffer => {
  return value instanceof ArrayBuffer;
};
