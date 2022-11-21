import { pipe } from "@benneq/function";
import { flatMap, limit } from "@benneq/iterable";
import { ConstraintViolation, Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const myTupleValidator = validate(tupleValidator([
 *   valueValidator(isString, "err1"),
 *   valueValidator(isString, "err2"),
 * ]));
 * const result = myTupleValidator(["", 1]);
 * console.log(result); // [{ path: "$.1", message: "err2", value: 1 }]
 * ```
 *
 * @param validators
 * @returns
 */
export const tupleValidator = <
  T extends unknown[],
  R = T,
  P = unknown
>(validators: {
  [I in keyof T]: Validator<T[I], R, T>;
}): Validator<T, R, T> => {
  return (tuple, context) => {
    let i = 0;

    return pipe(
      flatMap<Validator<T[keyof T], R, T>, ConstraintViolation>((validator) =>
        validator(tuple[i as keyof T], {
          ...context,
          path: `${context.path}.${i++}`,
          parent: tuple,
        })
      ),
      limit<ConstraintViolation>(context.shortCircuit ? 1 : -1)
    )(validators);
  };
};
