import { isString } from "@benneq/string";
import { objectValidator } from "./objectValidator";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.objectValidator", () => {
  it("should return a new object with all keys and their values ValidationErrors", () => {
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
    expect(abObjValidator({ a: "", b: "" })).toEqual([]);
  });
});

export {};
