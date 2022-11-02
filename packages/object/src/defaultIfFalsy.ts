import { defaultIf } from "./defaultIf";
import { isFalsy } from "./isFalsy";

/**
 * If the provided value is Falsy the defaultValue will be returned
 *
 * @example
 * defaultIfFalsy(1)(null) => 1
 * defaultIfFalsy(1)(undefined) => 1
 * defaultIfFalsy(1)("") => 1
 * defaultIfFalsy(1)(2) => 2
 * defaultIfFalsy(() => 1)(null) => 1
 */
export const defaultIfFalsy = defaultIf(isFalsy);
