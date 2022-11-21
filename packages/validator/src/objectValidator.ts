import { pipe } from "@benneq/function";
import { flatMap, limit } from "@benneq/iterable";
import { ConstraintViolation, Validator } from "./_types";

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
    return pipe(
      flatMap<[keyof T, Validator<T[keyof T], R, T>], ConstraintViolation>(
        ([key, validator]) =>
          validator(obj[key], {
            ...context,
            path: context.path + "." + (key as string),
            parent: obj,
          })
      ),
      limit<ConstraintViolation>(context.shortCircuit ? 1 : -1)
    )(Object.entries(def));
  };
