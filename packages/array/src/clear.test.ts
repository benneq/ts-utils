import { clear } from "./clear";

describe("array.clear", () => {
  it("should clear an array", () => {
    const array = [Symbol(), Symbol()];

    clear(array);

    expect(array).toEqual([]);
  });
});

export {};
