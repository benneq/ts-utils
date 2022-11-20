import { isString } from "@benneq/string";
import { arrayValidator } from "./arrayValidator";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.arrayValidator", () => {
  it("should return a new array with ValidationErrors for each element", () => {
    const abObjValidator = validate(
      arrayValidator(valueValidator(isString, "err"))
    );

    expect(abObjValidator([])).toEqual([]);
    expect(abObjValidator(["", 1])).toEqual([
      { message: "err", path: "$.1", value: 1 },
    ]);
  });
});

export {};
