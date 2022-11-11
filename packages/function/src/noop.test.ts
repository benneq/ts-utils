import { noop } from "./noop";

describe("function.noop", () => {
  it("should should return nothing", () => {
    const fn = jest.fn();

    const result = noop(fn);

    expect(result).toBeUndefined();
    expect(fn).not.toHaveBeenCalled();
  });
});

export {};
