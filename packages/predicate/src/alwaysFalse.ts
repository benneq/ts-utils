/**
 * A {@link Predicate} that always returns `false`.
 *
 * Opposite of {@link alwaysTrue}.
 *
 * @remark
 * All arguments are ignored
 *
 * @example
 * Returns always `false`
 * ```ts
 * const result = alwaysFalse();
 * console.log(result); // false
 * ```
 *
 * @example
 * As default value for an optional Function argument
 * ```ts
 * function canParseBoolean(canParse: ((s: String) => boolean) = alwaysFalse) {
 *   return canParse("true");
 * }
 *
 * const result = canParseBoolean();
 * console.log(result); // false
 * ```
 *
 * @returns `false`
 */
export const alwaysFalse = (..._: unknown[]): false => {
  return false;
};
