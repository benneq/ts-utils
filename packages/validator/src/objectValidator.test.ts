import { isString } from "@benneq/string";
import { objectValidator } from "./objectValidator";
import { predicateValidator } from "./predicateValidator";

describe("validator.objectValidator", () => {
  it("should return a new object with all keys and their values ValidationErrors", () => {
    const abObjValidator = objectValidator<{ a?: unknown; b?: unknown }>({
      a: predicateValidator(isString, "err1"),
      b: predicateValidator(isString, "err2"),
    });

    expect(abObjValidator({})).toEqual({ a: ["err1"], b: ["err2"] });
    expect(abObjValidator({ a: "", b: "" })).toEqual({ a: [], b: [] });
  });
});

export {};
