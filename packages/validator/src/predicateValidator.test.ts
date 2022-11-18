import { isString } from "@benneq/string";
import { predicateValidator } from "./predicateValidator";

describe("validator.predicateValidator", () => {
  it("should return empty ValidationErrors if predicate matches", () => {
    const stringValidator = predicateValidator(isString, "err");

    expect(stringValidator("")).toEqual([]);
    expect(stringValidator("ab")).toEqual([]);
  });

  it("should return 'err' as ValidationErrors if predicate does not match", () => {
    const stringValidator = predicateValidator(isString, "err");

    expect(stringValidator(1)).toEqual(["err"]);
    expect(stringValidator(null)).toEqual(["err"]);
  });
});

export {};
