/**
 *
 * @mutation
 *
 * @returns
 */
export const deleteAll =
  <K>(map: Map<K, unknown>) =>
  (keys: K[]): void => {
    keys.forEach(map.delete, map);
  };
