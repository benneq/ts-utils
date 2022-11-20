/**
 * @packageDocumentation
 *
 * This module contains utilities for working with {@link Validator}s
 *
 * @example
 * Validate registration form
 * ```ts
 * const registrationFormValidator = validate(chain(
 *   objectValidator({
 *     email: valueValidator(isEmail, "must be am email"),
 *     password: valueValidator(isSecure, "must be secure"),
 *   }),
 *   valueValidator(
 *     { password, repetition } => password === repetition,
 *     "passwords must match"
 *   ),
 * ));
 *
 * const validationResult = registrationFormValidator(
 *   {
 *     email: "a@b.c",
 *     password: "secure",
 *     repetition: "",
 *   }
 * );
 *
 * console.log(validationResult);
 * // [{ path: "$", message: "passwords must match",
 * //   value: {email: "a@b.c", password: "secure", repetition: "" }
 * // }]
 * ```
 *
 * @example
 * Validate a complex object
 * ```ts
 * const myValidator = validate(objectValidator({
 *   name: valueValidator(isString, "must be a string"),
 *   numbers: arrayValidator(valueValidator(isNumber, "must be a number")),
 *   tuple: tupleValidator([
 *     valueValidator(isBoolean, "must be a boolean"),
 *     valueValidator(isString, "must be a string"),
 *   ])
 * }));
 *
 * const result = myValidator({
 *   name: "a",
 *   numbers: [1, 2, 3],
 *   tuple: [true, ""],
 * });
 *
 * console.log(result); // []
 * ```
 */

export * from "./_types";
export * from "./arrayValidator";
export * from "./chain";
export * from "./isValid";
export * from "./objectValidator";
export * from "./tupleValidator";
export * from "./validate";
export * from "./valueValidator";
