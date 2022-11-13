import { Mapper } from "@benneq/function";
import { fromIterable } from "./fromIterable";

/**
 * Maps the values of a {@link Map} from type `S` to `T`
 *
 * @example
 * Map all values from number to string
 * ```ts
 * const mapper = mapValues((n) => String(n));
 * const map = mapValues(new Map([1, 1]));
 * console.log(map); // Map([[1, "1"]])
 * ```
 *
 * @param mapper
 * @returns the new {@link Map} with the mapped values
 */
export const mapValues = <S, T>(
  mapper: Mapper<S, T>
): (<K>(map: Map<K, S>) => Map<K, T>) => {
  return fromIterable(([k, v]) => [k, mapper(v)]);
};
