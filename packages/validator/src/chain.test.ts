import { chain } from "./chain";
import { valueValidator } from "./valueValidator";

describe("validator.chain", () => {
  it("should return empty ValidationErrors if validators is empty", () => {
    const validator = chain();

    expect(validator("", { path: "$" })).toEqual([]);
    expect(validator("ab", { path: "$" })).toEqual([]);
  });

  it("should return first error as ValidationErrors", () => {
    const validator = chain<number>(
      valueValidator((n) => n > 0, "err1"),
      valueValidator((n) => n < 5, "err2")
    );

    expect(validator(0, { path: "$" })).toEqual([
      { message: "err1", path: "$", value: 0 },
    ]);
    expect(validator(5, { path: "$" })).toEqual([
      { message: "err2", path: "$", value: 5 },
    ]);
  });
});

export {};
