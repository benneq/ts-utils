/**
 * An {@link Array} containing validation errors.
 */
export type ValidationErrors = string[];

/**
 * An {@link Array} where each element contains {@link ValidationErrors}.
 */
export type ArrayValidationErrors = ValidationErrors[];

/**
 * An object where each value contains {@link ValidationErrors}.
 */
export type ObjectValidationErrors<
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
 * An {@link ArrayValidator} validates each element of an {@link Array} using
 * the same {@link Validator}.
 *
 * @example
 * ```ts
 * const myArrayValidator = arrayValidator(predicateValidator(isString, "must be a string"));
 * const result = myArrayValidator(["", 1]);
 * console.log(result); // [[], ["must be a string"]]
 * ```
 *
 * @param obj - the array to validate
 * @returns an {@link ArrayValidationErrors} containing the {@link ValidationErrors} for each element
 */
export type ArrayValidator<T> = (value: T[]) => ArrayValidationErrors;

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
 * @returns an {@link ObjectValidationErrors} containing the {@link ValidationErrors} for each entry
 */
export type ObjectValidator<
  T extends Record<string | number | symbol, unknown>
> = (obj: T) => ObjectValidationErrors<T>;
