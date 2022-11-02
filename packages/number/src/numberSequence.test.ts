import { numberSequence } from "./numberSequence";

describe("number.numberSequence", () => {
  it("should generate the same number if stepSize is 0", () => {
    const generator = numberSequence(0, 0);
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(0);
    expect(generator.next().done).toBe(false);
  });

  it("should generate an ascending sequence if stepSize is greater than 0", () => {
    const generator = numberSequence(-2, 4);
    expect(generator.next().value).toBe(-2);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(6);
    expect(generator.next().done).toBe(false);
  });

  it("should generate a descending sequence if stepSize is less than 0", () => {
    const generator3 = numberSequence(1, -3);
    expect(generator3.next().value).toBe(1);
    expect(generator3.next().value).toBe(-2);
    expect(generator3.next().value).toBe(-5);
    expect(generator3.next().done).toBe(false);
  });
});

export {};
