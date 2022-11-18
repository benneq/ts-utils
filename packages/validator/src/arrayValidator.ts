import { ValidationErrors, Validator } from "./_types";

/**
 * An {@link Array} where each element contains {@link ValidationErrors}.
 */
export type ArrayValidationErrors = ValidationErrors[];

/**
 * An {@link ArrayValidator} validates each element of an {@link Array} using
 * the same {@link Validator}.
 *
 * @param obj - the array to validate
 * @returns an {@link ArrayValidationErrors} containing the {@link ValidationErrors} for each element
 */
export type ArrayValidator<T> = (value: T[]) => ArrayValidationErrors;

/**
 *
 * @example
 * ```ts
 * const myArrayValidator = arrayValidator(predicateValidator(isString, "must be a string"));
 * const result = myArrayValidator(["", 1]);
 * console.log(result); // [[], ["must be a string"]]
 * ```
 *
 * @param validator
 * @returns
 */
export const arrayValidator =
  <T>(validator: Validator<T>): ArrayValidator<T> =>
  (arr) => {
    return arr.map(validator);
  };
