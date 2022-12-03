import { pipe } from "@benneq/function";
import { flatMap, limit } from "@benneq/iterable";
import { ConstraintViolation, Validator } from "./_types";

/**
 *
 * @example
 * Check if `value` is positive and even
 * ```ts
 * const chainedValidator = validate(chain(
 *   valueValidator(isPositive, "err1"),
 *   valueValidator(isEven, "err2")
 * ));
 * const result = chainedValidator(-1);
 * console.log(result); // [{ path: "$", message: "err1", value: -1 }]
 * ```
 *
 * @param validators
 * @returns
 */
export const chain = <T, R = T, P = unknown>(
  ...validators: Validator<T, R, P>[]
): Validator<T, R, P> => {
  return (value, context) => {
    return pipe(
      flatMap<Validator<T, R, P>, ConstraintViolation>((validator) =>
        validator(value, context)
      ),
      limit<ConstraintViolation>(context.shortCircuit ? 1 : -1)
    )(validators);
  };
};
