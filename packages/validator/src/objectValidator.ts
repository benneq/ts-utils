import { ObjectValidationError, ObjectValidator, Validator } from "./_types";

export type ObjectValidatorInput<
  T extends Record<string | number | symbol, unknown>
> = { [key in keyof T]: Validator<T[key]> };

/**
 *
 * @example
 * ```ts
 * const isMyObjectValidator = objectValidator({
 *   a: predicateValidator(isString, "err1"),
 *   b: predicateValidator(isString, "err2"),
 * });
 * const result = isMyObjectValidator({ a: "", b: 42 });
 * console.log(result); // { a: [], b: ["err2"] }
 * ```
 *
 * @param def
 * @returns
 */
export const objectValidator =
  <T extends Record<string | number | symbol, unknown>>(
    def: ObjectValidatorInput<T>
  ): ObjectValidator<T> =>
  (value) => {
    return Object.entries(def).reduce(
      (acc, [key, validator]: [keyof T, Validator<T[keyof T]>]) => {
        acc[key] = validator(value[key]);
        return acc;
      },
      {} as ObjectValidationError<T>
    );
  };
