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

    expectIterableToEqual(
      validator(0, {
        parent: undefined,
        path: "$",
        root: 0,
        shortCircuit: true,
      }),
      [{ message: "err1", path: "$", value: 0 }],
      { toEqual: true }
    );
  });

  it("should return all errors", () => {
    const validator = validate(
      chain<number>(
        valueValidator((n) => n > 0, "err1"),
        valueValidator((n) => n < 5, "err2"),
        valueValidator(() => false, "err3")
      )
    );

    expectIterableToEqual(
      validator(0),
      [
        { message: "err1", path: "$", value: 0 },
        { message: "err3", path: "$", value: 0 },
      ],
      { toEqual: true }
    );
    expectIterableToEqual(
      validator(5),
      [
        { message: "err2", path: "$", value: 5 },
        { message: "err3", path: "$", value: 5 },
      ],
      { toEqual: true }
    );
  });
});

export {};
