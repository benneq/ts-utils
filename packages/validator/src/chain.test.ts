import { chain } from "./chain";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.chain", () => {
  it("should return empty ValidationErrors if validators is empty", () => {
    const validator = validate(chain());

    expect(validator("")).toEqual([]);
    expect(validator("ab")).toEqual([]);
  });

  it("should return first error as ValidationErrors", () => {
    const validator = validate(
      chain<number>(
        valueValidator((n) => n > 0, "err1"),
        valueValidator((n) => n < 5, "err2")
      )
    );

    expect(validator(0)).toEqual([{ message: "err1", path: "$", value: 0 }]);
    expect(validator(5)).toEqual([{ message: "err2", path: "$", value: 5 }]);
  });
});

export {};
