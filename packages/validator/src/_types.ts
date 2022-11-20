/**
 * The context of the current validation.
 */
export type ValidationContext<R, P = unknown> = {
  path: string;
  parent?: P;
  root: R;
};

/**
 * An object containing the details of a {@link ConstraintViolation}.
 */
export type ConstraintViolation = {
  path: string;
  value: unknown;
  message: string;
};

/**
 * An {@link Array} containing {@link ConstraintViolation}s.
 */
export type ValidationResult = ConstraintViolation[];

/**
 * A {@link Validator} checks if a `value` is valid and returns a
 * {@link ValidationResult} containing the {@link ConstraintViolation}s.
 *
 * If the `value` is valid the returned {@link ValidationResult} must be empty.
 *
 * @typeParam T - the type of the value to validate
 * @param value - the value to validate
 * @returns `[]` if the `value` is valid, otherwise non-empty {@link ValidationResult}
 */
export type Validator<T, R = T, P = unknown> = (
  value: T,
  context: ValidationContext<R, P>
) => ValidationResult;
