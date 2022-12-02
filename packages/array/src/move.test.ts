import { move } from "./move";

describe("array.move", () => {
  it("should move an element from sourceIndex to targetIndex", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(1, 2)(array);
    expect(array).toEqual([value1, value3, value2]);
  });

  it("should not modify the Array if both indexes are equal", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(1, 1)(array);
    expect(array).toEqual([value1, value2, value3]);
  });

  it("move", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(0, 1)(array);
    expect(array).toEqual([value2, value1, value3]);

    move(2, 1)(array);
    expect(array).toEqual([value2, value3, value1]);
  });

  it("move multiple", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(1, 0, 2)(array);
    expect(array).toEqual([value2, value3, value1]);

    move(0, 2, 2)(array);
    expect(array).toEqual([value1, value2, value3]);

    move(0, 1, 2)(array);
    expect(array).toEqual([value1, value2, value3]);
  });
});

export {};
