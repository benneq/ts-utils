import { Validator, ValidationResult } from "./_types";

/**
 * An helper function that executes a {@link Validator} with a default
 * {@link ValidationContext}.
 *
 * @exmaple
 * ```ts
 * const isStringValidator = valueValidator(isString, "must be a string");
 * const validationResult = validate(isStringValidator)("");
 * console.log(validationResult); // []
 * ```
 *
 * @typeParam T - the type of the value to validate
 * @param validator - the {@link Validator} to execute
 * @returns the {@link ValidationResult}
 */
export const validate =
  <T>(validator: Validator<T, T, unknown>) =>
  (value: T): ValidationResult => {
    return validator(value, { path: "$", root: value, parent: undefined });
  };
