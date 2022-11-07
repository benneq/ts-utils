import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map([["a", ["b", "c"]]]);
 * multiMapRemove(multiMap, "a", "b");
 * console.log(multiMap); // Map([["a", ["c"]]])
 * ```
 *
 */
export const multiMapRemove =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (key: K, value: V): void => {
    const values = multiMap.get(key);

    if (values) {
      const index = values.indexOf(value);
      if (index > -1) {
        values.splice(index, 1);
      }
    }

    // const values = multiMap.get(key) || [];
    // values.push(value);
    // multiMap.set(key, values);
  };
