/**
 * A RegExp that matches UUIDs
 *
 * @example
 * Match UUID String
 * ```ts
 * const b = uuidRegExp.test("ffffffff-ffff-1fff-bfff-ffffffffffff");
 * console.log(b); // true
 * ```
 *
 * @see https://stackoverflow.com/a/13653180
 */
export const uuidRegExp =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
