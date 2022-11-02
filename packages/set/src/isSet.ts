/**
 *
 * @example
 * isSet([]) => false
 * isSet(new Set()) => true
 * isSet(new Map()) => false
 *
 * @returns `true` if `value` is a Set, otherwise `false`
 */
export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};
