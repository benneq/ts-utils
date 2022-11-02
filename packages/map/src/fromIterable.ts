import { Mapper } from "@benneq/function";
import { map } from "@benneq/iterable";

export const fromIterable =
  <T, K, V>(mapper: Mapper<T, [K, V]>) =>
  (iterable: Iterable<T>): Map<K, V> => {
    return new Map(map<T, [K, V]>((e) => [...mapper(e)])(iterable));
  };
