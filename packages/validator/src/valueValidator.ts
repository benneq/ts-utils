import { Predicate } from "@benneq/predicate";
import { ValueOrProvider, valueOrProviderResult } from "@benneq/object";
import { ValidationContext, Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const isStringValidator = validate(valueValidator(isString, "err"));
 * const result = isStringValidator(42);
 * console.log(result); // [{ path: "$", message: "err", value: 42 }]
 * ```
 *
 * @param isValid
 * @param message
 * @returns
 */
export const valueValidator =
  <T, R = T, P = unknown>(
    isValid: Predicate<[T, ValidationContext<R, P>]>,
    message: ValueOrProvider<string, [T, ValidationContext<R, P>]>
  ): Validator<T, R, P> =>
  (value, context) => {
    if (isValid(value, context)) {
      return [];
    }

    return [
      {
        path: context.path,
        value,
        message: valueOrProviderResult(message, value, context),
      },
    ];
  };
