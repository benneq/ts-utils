/**
 * @packageDocumentation
 *
 * This module contains utilities for working with {@link Validator}s
 *
 * @example
 * Validate a complex object
 * ```ts
 * const validate = objectValidator({
 *   name: valueValidator(isString, "must be a string"),
 *   numbers: arrayValidator(valueValidator(isNumber, "must be a number")),
 *   tuple: tupleValidator([
 *     valueValidator(isBoolean, "must be a boolean"),
 *     valueValidator(isString, "must be a string"),
 *   ])
 * });
 *
 * const result = validate({
 *   name: "a",
 *   numbers: [1, 2, 3],
 *   tuple: [true, ""],
 * }, { path: "$" });
 *
 * console.log(result); // []
 * ```
 */

export * from "./_types";
export * from "./arrayValidator";
export * from "./chain";
export * from "./objectValidator";
export * from "./tupleValidator";
export * from "./valueValidator";
