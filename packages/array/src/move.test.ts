import { move } from "./move";

describe("array.move", () => {
  it("should move an element from sourceIndex to targetIndex", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(array)(1, 2);
    expect(array).toEqual([value1, value3, value2]);
  });

  it("should not modify the Array if both indexes are equal", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(array)(1, 1);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(-1, -1);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(-2, 1);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(1, -2);
    expect(array).toEqual([value1, value2, value3]);
  });

  it("should not modify the Array if any index is out of bounds", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(array)(-4, 1);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(-1, -4);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(1, 3);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(-1, 4);
    expect(array).toEqual([value1, value2, value3]);
  });

  it("move", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(array)(0, 1);
    expect(array).toEqual([value2, value1, value3]);

    move(array)(1, -1);
    expect(array).toEqual([value2, value3, value1]);

    move(array)(-3, -2);
    expect(array).toEqual([value3, value2, value1]);

    move(array)(2, 1);
    expect(array).toEqual([value3, value1, value2]);
  });

  it("move multiple", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    move(array)(1, 0, 2);
    expect(array).toEqual([value2, value3, value1]);

    move(array)(-3, 1, 2);
    expect(array).toEqual([value2, value3, value1]);

    move(array)(2, 0, 2);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(3, 0, 2);
    expect(array).toEqual([value1, value2, value3]);

    move(array)(0, 2, 2);
    expect(array).toEqual([value3, value1, value2]);

    move(array)(0, 1, 2);
    expect(array).toEqual([value3, value1, value2]);
  });
});

export {};
