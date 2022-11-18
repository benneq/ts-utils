export type ValidationErrors = string[];

/**
 * @example
 * Check if name is valid
 * ```ts
 * const nameValidator: Validator<string> = (name) =>
 *   name.trim().length > 2 ? [] : ["name must be longer"];
 * const result = nameValidator("ab");
 * console.log(result); // ["name must be longer"]
 * ```
 */
export type Validator<T> = (value: T) => ValidationErrors;
