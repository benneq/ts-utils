import { isString } from "@benneq/string";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.valueValidator", () => {
  it("should return empty ValidationResult if predicate matches", () => {
    const stringValidator = validate(valueValidator(isString, "err"));

    expect(stringValidator("")).toEqual([]);
    expect(stringValidator("ab")).toEqual([]);
  });

  it("should return 'err' as ValidationResult if predicate does not match", () => {
    const stringValidator = validate(valueValidator(isString, "err"));

    expect(stringValidator(1)).toEqual([
      { message: "err", path: "$", value: 1 },
    ]);
    expect(stringValidator(null)).toEqual([
      { message: "err", path: "$", value: null },
    ]);
  });
});

export {};
