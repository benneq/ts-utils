import { pipe } from "@benneq/function";
import { flatMap, limit } from "@benneq/iterable";
import { ConstraintViolation, Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const myArrayValidator = validate(
 *   arrayValidator(valueValidator(isString, "must be a string"))
 * );
 * const result = myArrayValidator(["", 1]);
 * console.log(result); // [{ path: "$.1", message: "must be a string", value: 1 }]
 * ```
 *
 * @param validator
 * @returns
 */
export const arrayValidator =
  <T, R = T, P = unknown>(
    validator: Validator<T, R, T[]>
  ): Validator<T[], R, P> =>
  (arr, context) => {
    let i = 0;

    return pipe(
      flatMap<T, ConstraintViolation>((elem) =>
        validator(elem, {
          ...context,
          path: `${context.path}.${i++}`,
          parent: arr,
        })
      ),
      limit<ConstraintViolation>(context.shortCircuit ? 1 : -1)
    )(arr);
  };
