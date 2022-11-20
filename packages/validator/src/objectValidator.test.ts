import { isString } from "@benneq/string";
import { objectValidator } from "./objectValidator";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.objectValidator", () => {
  it("should return first error", () => {
    const abObjValidator = objectValidator<{ a?: unknown; b?: unknown }>({
      a: valueValidator(isString, "err1"),
      b: valueValidator(isString, "err2"),
    });

    expect(
      abObjValidator(
        {},
        { parent: undefined, path: "$", root: {}, shortCircuit: true }
      )
    ).toEqual([{ message: "err1", path: "$.a", value: undefined }]);
  });

  it("should return all errors", () => {
    const abObjValidator = validate(
      objectValidator<{ a?: unknown; b?: unknown }>({
        a: valueValidator(isString, "err1"),
        b: valueValidator(isString, "err2"),
      })
    );

    expect(abObjValidator({})).toEqual([
      { message: "err1", path: "$.a", value: undefined },
      { message: "err2", path: "$.b", value: undefined },
    ]);
  });
});

export {};
