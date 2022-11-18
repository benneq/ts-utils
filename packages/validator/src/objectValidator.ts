import { ValidationErrors, Validator } from "./_types";

export const objectValidator =
  <T extends Record<string, any>>(def: Record<string, Validator<any>>) =>
  (value: T): Record<string, ValidationErrors> => {
    return Object.entries(def).reduce((acc, [key, validator]) => {
      acc[key] = validator(value[key]);
      return acc;
    }, {} as Record<string, ValidationErrors>);
  };
