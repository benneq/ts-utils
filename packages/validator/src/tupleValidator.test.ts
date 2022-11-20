import { tupleValidator } from "./tupleValidator";
import { valueValidator } from "./valueValidator";
import { isString } from "@benneq/string";
import { validate } from "./validate";

describe("validator.tupleValidator", () => {
  it("should return first error", () => {
    const abObjValidator = tupleValidator<[number, unknown]>([
      valueValidator((n) => n > 0, "err1"),
      valueValidator(isString, "err2"),
    ]);

    expect(
      abObjValidator([-1, 2], {
        parent: undefined,
        path: "$",
        root: [-1, 2],
        shortCircuit: true,
      })
    ).toEqual([{ message: "err1", path: "$.0", value: -1 }]);
  });

  it("should return all errors", () => {
    const abObjValidator = validate(
      tupleValidator<[number, unknown]>([
        valueValidator((n) => n > 0, "err1"),
        valueValidator(isString, "err2"),
      ])
    );

    expect(abObjValidator([-1, 2])).toEqual([
      { message: "err1", path: "$.0", value: -1 },
      { message: "err2", path: "$.1", value: 2 },
    ]);
  });
});

export {};
