import { chain } from "./chain";
import { validate } from "./validate";
import { valueValidator } from "./valueValidator";

describe("validator.chain", () => {
  it("should return first error", () => {
    const validator = chain<number>(
      valueValidator((n) => n > 0, "err1"),
      valueValidator((n) => n < 5, "err2"),
      valueValidator(() => false, "err3")
    );

    expect(
      validator(0, {
        parent: undefined,
        path: "$",
        root: 0,
        shortCircuit: true,
      })
    ).toEqual([{ message: "err1", path: "$", value: 0 }]);
  });

  it("should return all errors", () => {
    const validator = validate(
      chain<number>(
        valueValidator((n) => n > 0, "err1"),
        valueValidator((n) => n < 5, "err2"),
        valueValidator(() => false, "err3")
      )
    );

    expect(validator(0)).toEqual([
      { message: "err1", path: "$", value: 0 },
      { message: "err3", path: "$", value: 0 },
    ]);
    expect(validator(5)).toEqual([
      { message: "err2", path: "$", value: 5 },
      { message: "err3", path: "$", value: 5 },
    ]);
  });
});

export {};
