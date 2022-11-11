import { identity } from "./identity";

describe("function.identity", () => {
  it("should return the argument it was given", () => {
    const [value] = symbolGenerator();
    expect(identity(value)).toBe(value);
  });
});

export {};
