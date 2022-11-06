import { defaultIf } from "./defaultIf";
import { isNullish } from "./isNullish";

/**
 * If the provided value is `null` the defaultValue will be returned
 *
 * @example
 * defaultIfNullish(0)(null) => 0
 * defaultIfNullish(0)(undefined) => 0
 * defaultIfNullish(0)(2) => 2
 * defaultIfNullish(() => 3)(null) => 3
 */
export const defaultIfNullish = defaultIf(isNullish);
