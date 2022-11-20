import { validate } from "./validate";

describe("validator.validate", () => {
  it("should execute the validator with the default context", () => {
    const [value] = symbolGenerator();
    const validatorResult = [];
    const validator = jest.fn(() => validatorResult);

    const validationResult = validate(validator)(value);

    expect(validationResult).toEqual(validatorResult);
    expect(validator).toHaveBeenNthCalledWith(1, value, { path: "$" });
    expect(validator).toHaveBeenCalledTimes(1);
  });
});

export {};
