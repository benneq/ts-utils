import { isString } from "@benneq/string";
import { arrayValidator } from "./arrayValidator";
import { predicateValidator } from "./predicateValidator";

describe("validator.arrayValidator", () => {
  it("should return a new array with ValidationErrors for each element", () => {
    const abObjValidator = arrayValidator<unknown>(
      predicateValidator(isString, "err")
    );

    expect(abObjValidator([])).toEqual([]);
    expect(abObjValidator(["", 1])).toEqual([[], ["err"]]);
  });
});

export {};
