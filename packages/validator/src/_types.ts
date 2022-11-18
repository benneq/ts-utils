export type ValidationErrors = string[];

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
 * @param value - the value to check
 * @returns `[]` if the `value` is valid, otherwise non-empty {@link ValidationErrors}
 */
export type Validator<T> = (value: T) => ValidationErrors;
