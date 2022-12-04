import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { findAndThen } from "./findAndThen";

describe("array.findAndThen", () => {
  it("should call the callback for the first element that matches the predicate", () => {
    const callback = jest.fn();
    const [value1, value2] = symbolGenerator();
    const array = [value1, value2];

    findAndThen(callback)(alwaysTrue)(array);

    expect(callback).toHaveBeenNthCalledWith(1, value1, 0, array);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should return defaultValue if predicate does not match", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1];

    const result = findAndThen(() => {}, value2)(alwaysFalse)(array);

    expect(result).toBe(value2);
  });
});

export {};
