export type ValidationErrors = string[];

export type Validator<T> = (value: T) => ValidationErrors;
