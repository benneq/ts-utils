import { isEmpty } from "@benneq/array";
import { Validator } from "./_types";

export const chain = <T>(...validators: Validator<T>[]): Validator<T> => {
  return (value) => {
    for (const validator of validators) {
      const result = validator(value);
      if (!isEmpty(result)) {
        return result;
      }
    }

    return [];
  };
};
