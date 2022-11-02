import { Mapper } from "@benneq/function";
import { map as iterableMap } from "@benneq/iterable";

/**
 * Maps the values of a Map from type `S` to `T`
 *
 * @param mapper
 * @returns a new Map with the mapped values
 */
export const mapValues =
  <S, T>(mapper: Mapper<S, T>) =>
  <K>(map: Map<K, S>): Map<K, T> => {
    return new Map(
      iterableMap<[K, S], [K, T]>(([k, v]) => [k, mapper(v)])(map)
    );
  };
