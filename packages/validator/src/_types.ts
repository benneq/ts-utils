/**
 * An {@link Array} containing validation errors.
 */
export type ValidationErrors = string[];

/**
 * An object where each value contains {@link ValidationErrors}.
 */
export type ObjectValidationError<
  T extends Record<string | number | symbol, unknown>
> = { [key in keyof T]: ValidationErrors };

/**
 * A {@link Validator} checks if a `value` is valid and returns the resulting
 * {@link ValidationErrors}.
 *
 * If the `value` is valid the returned {@link ValidationErrors} must be empty.
 *
 * @example
 * Check if `name` is valid
 * ```ts
 * const nameValidator: Validator<string> = (name) =>
 *   name.trim().length > 2 ? [] : ["name must be longer"];
 * const result = nameValidator("ab");
 * console.log(result); // ["name must be longer"]
 * ```
 *
 * @param value - the value to validate
 * @returns `[]` if the `value` is valid, otherwise non-empty {@link ValidationErrors}
 */
export type Validator<T> = (value: T) => ValidationErrors;

/**
 * An {@link ObjectValidator} validates each entry of an object individually.
 *
 * @example
 * ```ts
 * const myObjValidator = objectValidator({
 *   a: predidateValidator(isEmpty, "must be empty"),
 *   b: predicateValidator(isString, "must be a string"),
 * });
 * const result = myObjValidator({ a: "", b: "" });
 * console.log(result); // { a: [], b: [] }
 * ```
 *
 * @param obj - the object to validate
 * @returns an {@link ObjectValidationError} containing the {@link ValidationErrors} for each entry
 */
export type ObjectValidator<
  T extends Record<string | number | symbol, unknown>
> = (obj: T) => ObjectValidationError<T>;
