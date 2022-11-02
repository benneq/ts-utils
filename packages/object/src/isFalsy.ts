import { Falsy } from "./_types";

/**
 * Checks if the provided value is Falsy
 *
 * @example
 * isFalsy(null) => true
 * isFalsy(undefined) => true
 * isFalsy("") => true
 * isFalsy([]) => false
 * isFalsy(object) = false
 *
 * @returns `true` if `value` is Falsy, otherwise `false`
 */
export const isFalsy = (value: unknown): value is Falsy => {
  return !value;
};
