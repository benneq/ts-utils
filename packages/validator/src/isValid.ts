import { isEmpty } from "@benneq/iterable";
import { Predicate } from "@benneq/predicate";
import { ValidationResult } from "./_types";

/**
 * Checks if a value is valid by looking at its {@link ValidationResult}.
 *
 * @exmaple
 * ```ts
 * const isStringValidator = valueValidator(isString, "must be a string");
 * const validationResult = validate(isStringValidator)("");
 * const valid = isValid(validationResult);
 * console.log(valid); // true
 * ```
 */
export const isValid: Predicate<[ValidationResult]> = isEmpty;
