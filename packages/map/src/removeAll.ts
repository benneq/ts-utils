import { remove } from "./remove";

/**
 *
 * @mutation
 *
 * @returns
 */
export const removeAll =
  <K>(set: Map<K, unknown>) =>
  (keys: K[]): void => {
    keys.forEach(remove(set));
  };
