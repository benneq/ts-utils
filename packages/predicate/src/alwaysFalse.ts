/**
 * A Predicate that always returns `false`
 *
 * Opposite of {@link alwaysTrue}
 *
 * @remark
 * All arguments are ignored
 *
 * @example
 * Returns always `false`
 * ```ts
 * const b = alwaysFalse();
 * console.log(b); // false
 * ```
 *
 * @example
 * As default value for an optional Function argument
 * ```ts
 * function canParseBoolean(canParse: ((s: String) => boolean) = alwaysFalse) {
 *   return canParse("true");
 * }
 *
 * const b = canParseBoolean();
 * console.log(b); // false
 * ```
 *
 * @returns `false`
 */
export const alwaysFalse = (..._: unknown[]): boolean => {
  return false;
};
