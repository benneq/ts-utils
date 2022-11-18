import { isEmpty } from "@benneq/array";
import { Validator } from "./_types";

export const chain = <T>(...validators: Validator<T>[]): Validator<T> => {
  return (value) => {
    for (const validator of validators) {
      const validationErrors = validator(value);
      if (!isEmpty(validationErrors)) {
        return validationErrors;
      }
    }

    return [];
  };
};
