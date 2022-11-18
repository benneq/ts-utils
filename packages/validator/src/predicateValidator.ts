import { Predicate } from "@benneq/predicate";
import { ValidationErrors } from "./_types";

export const predicateValidator =
  <T>(predicate: Predicate<[T]>, msg: string) =>
  (value: T): ValidationErrors => {
    if (predicate(value)) {
      return [];
    } else {
      return [msg];
    }
  };
