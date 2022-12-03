import { Predicate } from "@benneq/predicate";
import { isString } from "./isString";
import { isArray } from "@benneq/array";
import { isRegExp } from "@benneq/regexp";
import { isEqualTo } from "@benneq/object";

/**
 *
 */
export type StringPredicateInput =
  | string
  | string[]
  | RegExp
  | Predicate<[string]>;

/**
 * Creates a {@link Predicate} for Strings.
 *
 * @example
 * Match against an array of allowed values
 * ```ts
 * const isAorB = stringPredicate(['a', 'b']);
 * const matches = isAorB('b');
 * console.log(matches); // true
 * ```
 *
 * @example
 * Match against a RegExp
 * ```ts
 * const startsWithA = stringPredicate(/a.+/);
 * const matches = startsWithA('ab');
 * console.log(matches); // true
 * ```
 *
 * @returns the {@link Predicate}
 */
export const stringPredicate = (
  predicateInput: StringPredicateInput
): Predicate<[string]> => {
  return isString(predicateInput)
    ? isEqualTo(predicateInput)
    : isArray(predicateInput)
    ? (key) => predicateInput.includes(key)
    : isRegExp(predicateInput)
    ? (key) => predicateInput.test(key)
    : predicateInput;
};
