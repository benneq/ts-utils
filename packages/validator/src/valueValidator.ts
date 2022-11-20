import { Predicate } from "@benneq/predicate";
import { ValueOrProvider, valueOrProviderResult } from "../../object/src";
import { objectValidator } from "./objectValidator";
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
 * @param msg
 * @returns
 */
export const valueValidator =
  <T, R = T, P = unknown>(
    isValid: Predicate<[T, ValidationContext<R, P>]>,
    msg: ValueOrProvider<string, [T, ValidationContext<R, P>]>
  ): Validator<T, R, P> =>
  (value, context) => {
    if (isValid(value, context)) {
      return [];
    }

    return [
      {
        path: context.path,
        value,
        message: valueOrProviderResult(msg, value, context),
      },
    ];
  };
