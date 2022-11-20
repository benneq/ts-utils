import { Validator } from "./_types";

/**
 *
 * @example
 * ```ts
 * const myTupleValidator = tupleValidator([
 *   valueValidator(isString, "err1"),
 *   valueValidator(isString, "err2"),
 * ]);
 * const result = myTupleValidator(["", 1], { path: "$" });
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
    return tuple.flatMap((elem, i: keyof T) => {
      return validators[i](elem, {
        ...context,
        path: `${context.path}.${i as number}`,
        parent: tuple,
      });
    });
  };
};
