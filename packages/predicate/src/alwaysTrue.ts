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
 * const b = alwaysTrue();
 * console.log(b); // true
 * ```
 *
 * @example
 * As default value for an optional Function argument
 * ```ts
 * function canParseBoolean(canParse: ((s: String) => boolean) = alwaysTrue) {
 *   return canParse("false");
 * }
 *
 * const b = canParseBoolean();
 * console.log(b); // true
 * ```
 *
 * @returns `true`
 */
export const alwaysTrue = (..._: unknown[]): true => {
  return true;
};
