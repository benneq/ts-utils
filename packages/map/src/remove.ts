/**
 *
 * @mutation
 *
 * @returns
 */
export const remove =
  <K>(map: Map<K, unknown>) =>
  (key: K): void => {
    map.delete(key);
  };
