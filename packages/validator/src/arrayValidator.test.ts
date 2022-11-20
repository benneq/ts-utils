import { isString } from "@benneq/string";
import { arrayValidator } from "./arrayValidator";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.arrayValidator", () => {
  it("should return first error", () => {
    const abObjValidator = arrayValidator(valueValidator(isString, "err"));

    expectIterableToEqual(
      abObjValidator(["", 1, 2], {
        parent: undefined,
        path: "$",
        root: 0,
        shortCircuit: true,
      }),
      [{ message: "err", path: "$.1", value: 1 }],
      { toEqual: true }
    );
  });

  it("should return all errors", () => {
    const abObjValidator = validate(
      arrayValidator(valueValidator(isString, "err"))
    );

    expectIterableToEqual(
      abObjValidator(["", 1, 2]),
      [
        { message: "err", path: "$.1", value: 1 },
        { message: "err", path: "$.2", value: 2 },
      ],
      { toEqual: true }
    );
  });
});

export {};
