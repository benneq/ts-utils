import { ArrayValidator, Validator } from "./_types";

export const arrayValidator =
  <T>(validator: Validator<T>): ArrayValidator<T> =>
  (arr) => {
    return arr.map(validator);
  };
