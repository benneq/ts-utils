import { Predicate } from "@benneq/predicate";
import { ValueOrProvider, valueOrProviderResult } from "../../object/src";
import { ValidationContext, Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const isStringValidator = valueValidator(isString, "err");
 * const result = isStringValidator(42, { path: "$" });
 * console.log(result); // [{ path: "$", message: "err", value: 42 }]
 * ```
 *
 * @param isValid
 * @param msg
 * @returns
 */
export const valueValidator =
  <T>(
    isValid: Predicate<[T]>,
    msg: ValueOrProvider<string, [T, ValidationContext]>
  ): Validator<T> =>
  (value, context) => {
    if (isValid(value)) {
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
