/**
 * Checks if a value is of type ArrayBuffer
 *
 * @example
 * ```
 * const b = isArrayBuffer(new ArrayBuffer());
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isArrayBuffer([]);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is an ArrayBuffer, otherwise `false`
 */
export const isArrayBuffer = (value: unknown): value is ArrayBuffer => {
  return value instanceof ArrayBuffer;
};
