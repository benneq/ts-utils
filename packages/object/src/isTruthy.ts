import { Truthy } from "./_types";

/**
 * Checks if the provided value is Truthy
 *
 * @example
 * isTruthy(1) => true
 * isTruthy([]) => true
 * isTruthy({}) = true
 * isTruthy(null) => false
 * isTruthy(undefined) => false
 *
 * @returns `true` if `value` is a Truthy, otherwise `false`
 */
export const isTruthy = <T>(value: T): value is Truthy<T> => {
  return !!value;
};
