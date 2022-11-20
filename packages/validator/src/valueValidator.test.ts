import { isString } from "@benneq/string";
import { valueValidator } from "./valueValidator";

describe("validator.valueValidator", () => {
  it("should return empty ValidationResult if predicate matches", () => {
    const stringValidator = valueValidator(isString, "err");

    expect(stringValidator("", { path: "$" })).toEqual([]);
    expect(stringValidator("ab", { path: "$" })).toEqual([]);
  });

  it("should return 'err' as ValidationResult if predicate does not match", () => {
    const stringValidator = valueValidator(isString, "err");

    expect(stringValidator(1, { path: "$" })).toEqual([
      { message: "err", path: "$", value: 1 },
    ]);
    expect(stringValidator(null, { path: "$" })).toEqual([
      { message: "err", path: "$", value: null },
    ]);
  });
});

export {};
