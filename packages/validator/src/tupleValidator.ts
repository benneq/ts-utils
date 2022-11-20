import { pipe } from "@benneq/function";
import { flatMap, limit, toArray } from "@benneq/iterable";
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
}): Validator<T, R, P> => {
  return (tuple, context) => {
    let i = 0;

    return pipe(
      flatMap<T[number], ConstraintViolation>((elem) =>
        validators[i as keyof T](elem, {
          ...context,
          path: `${context.path}.${i++}`,
          parent: tuple,
        })
      ),
      limit(context.shortCircuit ? 1 : -1),
      toArray<ConstraintViolation>
    )(tuple);
  };
};
