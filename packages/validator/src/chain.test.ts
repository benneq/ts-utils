import { chain } from "./chain";
import { predicateValidator } from "./predicateValidator";

describe("validator.chain", () => {
  it("should return empty ValidationErrors if validators is empty", () => {
    const validator = chain();

    expect(validator("")).toEqual([]);
    expect(validator("ab")).toEqual([]);
  });

  it("should return first error as ValidationErrors", () => {
    const validator = chain<number>(
      predicateValidator((n) => n > 0, "err1"),
      predicateValidator((n) => n < 5, "err2")
    );

    expect(validator(0)).toEqual(["err1"]);
    expect(validator(5)).toEqual(["err2"]);
  });
});

export {};
