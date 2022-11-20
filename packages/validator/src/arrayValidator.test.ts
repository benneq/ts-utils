import { isString } from "@benneq/string";
import { arrayValidator } from "./arrayValidator";
import { valueValidator } from "./valueValidator";

describe("validator.arrayValidator", () => {
  it("should return a new array with ValidationErrors for each element", () => {
    const abObjValidator = arrayValidator<unknown>(
      valueValidator(isString, "err")
    );

    expect(abObjValidator([], { path: "$" })).toEqual([]);
    expect(abObjValidator(["", 1], { path: "$" })).toEqual([
      { message: "err", path: "$.1", value: 1 },
    ]);
  });
});

export {};
