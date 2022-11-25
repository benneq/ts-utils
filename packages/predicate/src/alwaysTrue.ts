/**
 * A {@link Predicate} that always returns `true`.
 *
 * Opposite of {@link alwaysFalse}.
 *
 * @remark
 * All arguments are ignored
 *
 * @example
 * Returns always `true`
 * ```ts
 * const result = alwaysTrue();
 * console.log(result); // true
 * ```
 *
 * @example
 * As default value for an optional Function argument
 * ```ts
 * function canParseBoolean(canParse: ((s: String) => boolean) = alwaysTrue) {
 *   return canParse("false");
 * }
 *
 * const result = canParseBoolean();
 * console.log(result); // true
 * ```
 *
 * @returns `true`
 */
export const alwaysTrue = (..._: unknown[]): true => {
  return true;
};
