import { noop } from "./noop";

describe("function.noop", () => {
  it("should should return nothing", () => {
    expect(noop()).toBeUndefined();
  });
});

export {};
