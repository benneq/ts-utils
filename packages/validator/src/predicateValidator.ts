import { Predicate } from "@benneq/predicate";
import { Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const isStringValidator = predicateValidator(isString, "err");
 * const result = isStringValidator(42);
 * console.log(result); // ["err"]
 * ```
 *
 * @param predicate
 * @param msg
 * @returns
 */
export const predicateValidator =
  <T>(predicate: Predicate<[T]>, msg: string): Validator<T> =>
  (value) => {
    if (predicate(value)) {
      return [];
    } else {
      return [msg];
    }
  };
