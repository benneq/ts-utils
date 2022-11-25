/**
 * Checks if a `value` is an {@link ArrayBuffer}.
 *
 * @example
 * ```
 * const b = isArrayBuffer(new ArrayBuffer(0));
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isArrayBuffer([]);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is an {@link ArrayBuffer}, otherwise `false`
 */
export const isArrayBuffer = (value: unknown): value is ArrayBuffer => {
  return value instanceof ArrayBuffer;
};
