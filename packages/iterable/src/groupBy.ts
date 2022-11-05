import { Mapper } from "@benneq/function";
import { reduce } from "./reduce";

/**
 *
 * @example
 * groupBy(x => x % 2)([1,2,1,3]) => Map([[1, [1,1,3]], [0, [2]]])
 *
 * @param mapper
 * @returns
 */
export const groupBy = <T, K>(
  mapper: Mapper<T, K>
): ((iterable: Iterable<T>) => Map<K, T[]>) => {
  return reduce<T, Map<K, T[]>>((acc, value) => {
    const key = mapper(value);

    const values = acc.get(key) ?? [];
    values.push(value);
    return acc.set(key, values);
  }, new Map());
};
