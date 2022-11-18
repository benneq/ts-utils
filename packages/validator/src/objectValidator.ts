import { ValidationErrors, Validator } from "./_types";

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
  <T extends Record<string, unknown>>(def: {
    [key in keyof T]: Validator<T[key]>;
  }) =>
  (value: T): { [key in keyof T]: ValidationErrors } => {
    return Object.entries(def).reduce(
      (acc, [key, validator]: [keyof T, Validator<T[keyof T]>]) => {
        acc[key] = validator(value[key]);
        return acc;
      },
      {} as { [key in keyof T]: ValidationErrors }
    );
  };
