import { ValidationResult, Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const isMyObjectValidator = validate(objectValidator({
 *   a: valueValidator(isString, "err1"),
 *   b: valueValidator(isString, "err2"),
 * }));
 * const result = isMyObjectValidator({ a: "", b: 42 });
 * console.log(result); // [{ path: "$.b", message: "err2", value: 42 }]
 * ```
 *
 * @param def
 * @returns
 */
export const objectValidator =
  <T extends Record<string, unknown>, R = T, P = unknown>(def: {
    [key in keyof T]: Validator<T[key], R, T>;
  }): Validator<T, R, P> =>
  (obj, context) => {
    return Object.entries(def).reduce(
      (acc, [key, validator]: [keyof T, Validator<T[keyof T], R, T>]) => {
        acc.push(
          ...validator(obj[key], {
            ...context,
            path: context.path + "." + (key as string),
            parent: obj,
          })
        );
        return acc;
      },
      [] as ValidationResult
    );
  };
