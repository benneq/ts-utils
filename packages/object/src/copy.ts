/**
 * Copies all entries of an Object into a new Object
 *
 * @example
 * Copy an Object
 * ```ts
 * const object = { age: 1, name: "A" };
 * const copiedObject = copy(object);
 * console.log(copiedObject); // { age: 1, name: "A" }
 * console.log(object === copiedObject); // false
 * ```
 *
 * @returns a new Object containing all entries of the source Object
 */
export const copy = <T extends Record<string | number | symbol, unknown>>(
  obj: T
): T => {
  return { ...obj };
};
