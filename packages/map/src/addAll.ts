import { Entry } from "@benneq/object";
import { add } from "./add";

/**
 *
 * @mutation
 *
 * @returns
 */
export const addAll =
  <K, V>(map: Map<K, V>) =>
  (value: Entry<K, V>[]): void => {
    value.forEach(add(map));
  };
