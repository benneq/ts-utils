/**
 *
 * @mutation
 *
 * @typeParam K - the {@link Map} key type
 * @returns
 */
export const deleteAll =
  <K>(map: Map<K, unknown>) =>
  (keys: K[]): void => {
    keys.forEach((key) => map.delete(key));
  };
