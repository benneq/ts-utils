import { jest } from "@jest/globals";
import { tap } from "./tap";

describe("iterable.tap", () => {
  it("should call the callback for each element of the Iterable", () => {
    const [value1, value2] = symbolGenerator();

    const callback = jest.fn();

    const iterable = tap(callback)([value1, value2]);
    expectIterableToEqual(iterable, [value1, value2]);

    expect(callback).toHaveBeenNthCalledWith(1, value1);
    expect(callback).toHaveBeenNthCalledWith(2, value2);
    expect(callback).toHaveBeenCalledTimes(2);
  });
});

export {};
