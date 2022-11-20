import { ValidationResult, Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const isMyObjectValidator = objectValidator({
 *   a: valueValidator(isString, "err1"),
 *   b: valueValidator(isString, "err2"),
 * });
 * const result = isMyObjectValidator({ a: "", b: 42 }, { path: "$" });
 * console.log(result); // [{ path: "$.b", message: "err2", value: 42 }]
 * ```
 *
 * @param def
 * @returns
 */
export const objectValidator =
  <T extends Record<string, unknown>>(def: {
    [key in keyof T]: Validator<T[key]>;
  }): Validator<T> =>
  (value, context) => {
    return Object.entries(def).reduce(
      (acc, [key, validator]: [keyof T, Validator<T[keyof T]>]) => {
        acc.push(
          ...validator(value[key], {
            ...context,
            path: context.path + "." + (key as string),
          })
        );
        return acc;
      },
      [] as ValidationResult
    );
  };
