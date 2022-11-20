import { isString } from "@benneq/string";
import { isValid } from "./isValid";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.isValid", () => {
  it("should return true if validation result is empty", () => {
    const isStringValidator = valueValidator(isString, "err");
    const validationResult = validate(isStringValidator)("");

    expect(isValid(validationResult)).toBe(true);
  });

  it("should return false if validaton result is not empty", () => {
    const isStringValidator = valueValidator(isString, "err");
    const validationResult = validate(isStringValidator)(null);

    expect(isValid(validationResult)).toBe(false);
  });
});

export {};
