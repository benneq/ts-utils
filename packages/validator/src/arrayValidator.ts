import { Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const myArrayValidator = arrayValidator(valueValidator(isString, "must be a string"));
 * const result = myArrayValidator(["", 1], { path: "$" });
 * console.log(result); // [{ path: "$.1", message: "must be a string", value: 1 }]
 * ```
 *
 * @param validator
 * @returns
 */
export const arrayValidator =
  <T>(validator: Validator<T>): Validator<T[]> =>
  (arr, context) => {
    return arr.flatMap((elem, i) => {
      return validator(elem, {
        ...context,
        path: context.path + "." + i,
      });
    });
  };