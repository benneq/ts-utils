import { ValueOrProvider, valueOrProviderResult } from "./valueOrProvider";

/**
 * If the provided value matches the Predicate, the default value will be returned
 *
 * @example
 * Default to `1` if `value` is less than `0`
 * ```ts
 * const defaultTo1IfNegative = defaultIf(value => value < 0)(1);
 * const n = defaultTo1IfNegative(-1);
 * console.log(n); // 1
 * ```
 *
 * @example
 * Call initializer function if `value` is less than `0`
 * ```ts
 * const callInitFnIfNegative = defaultIf(value => value < 0)(() => 2);
 * const n = callInitFnIfNegative(-1);
 * console.log(n); // 2
 * ```
 *
 * @returns the defaultValue if the Predicate matches, else the provided value
 */
export const defaultIf =
  <T, S extends T>(predicate: (value: T) => value is S) =>
  <D>(defaultValue: ValueOrProvider<D>) =>
  <V extends T>(value: V): Exclude<V, S> | D => {
    if (predicate(value)) {
      return valueOrProviderResult(defaultValue);
    } else {
      return value as Exclude<V, S>;
    }
  };
