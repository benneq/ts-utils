import { isEmpty } from "@benneq/array";
import { Validator } from "./_types";

/**
 *
 * @example
 * Check if `value` is between 0 and 5
 * ```ts
 * const chainedValidator = validate(chain(
 *   valueValidator((n) => n > 0, "err1"),
 *   valueValidator((n) => n < 5, "err2")
 * ));
 * const result = chainedValidator(-1);
 * console.log(result); // [{ path: "$", message: "err1", value: -1 }]
 * ```
 *
 * @param validators
 * @returns
 */
export const chain = <T, R = T, P = unknown>(
  ...validators: Validator<T, R, P>[]
): Validator<T, R, P> => {
  return (value, context) => {
    for (const validator of validators) {
      const validationErrors = validator(value, context);
      if (!isEmpty(validationErrors)) {
        return validationErrors;
      }
    }

    return [];
  };
};
