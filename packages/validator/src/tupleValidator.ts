import { ValidationErrors, Validator } from "./_types";

/**
 * A tuple where each element contains {@link ValidationErrors}.
 */
export type TupleValidationErrors = ValidationErrors[];

/**
 * A {@link TupleValidator} validates each element of a tuple using
 * an individual {@link Validator}.
 *
 * @param tuple - the tuple to validate
 * @returns a {@link TupleValidationErrors} containing the {@link ValidationErrors} for each element
 */
export type TupleValidator<T extends unknown[]> = (tuple: T) => {
  [I in keyof T]: ValidationErrors;
};

export type TupleValidatorInput<T extends unknown[]> = {
  [I in keyof T]: Validator<T[I]>;
};

/**
 *
 * @example
 * ```ts
 * const myTupleValidator = tupleValidator([
 *   predicateValidator(isString, "err1"),
 *   predicateValidator(isString, "err2"),
 * ]);
 * const result = myTupleValidator(["", 1]);
 * console.log(result); // [[], ["err2"]]
 * ```
 *
 * @param validator
 * @returns
 */
export const tupleValidator = <T extends unknown[]>(
  validators: TupleValidatorInput<T>
): TupleValidator<T> => {
  return (tuple) => {
    return tuple.map((value, i) => validators[i]!(value)) as {
      [I in keyof T]: ValidationErrors;
    };
  };
};
