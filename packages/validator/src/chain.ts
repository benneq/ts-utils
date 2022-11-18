import { isEmpty } from "@benneq/array";
import { Validator } from "./_types";

/**
 *
 * @example
 * Check if `value` is between 0 and 5
 * ```ts
 * const chainedValidator = chain(
 *   predicateValidator((n) => n > 0, "err1"),
 *   predicateValidator((n) => n < 5, "err2")
 * );
 * const result = chainedValidator(-1);
 * console.log(result); // ["err1"]
 * ```
 *
 * @param validators
 * @returns
 */
export const chain = <T>(...validators: Validator<T>[]): Validator<T> => {
  return (value) => {
    for (const validator of validators) {
      const validationErrors = validator(value);
      if (!isEmpty(validationErrors)) {
        return validationErrors;
      }
    }

    return [];
  };
};
