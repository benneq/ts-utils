import { roundToMultiple } from "./roundToMultiple";

describe("number.roundToMultiple", () => {
  it("should not round if number is already multiple", () => {
    const roundTo5 = roundToMultiple(5);

    expect(roundTo5(-5)).toBe(-5);
    expect(roundTo5(0)).toBe(0);
    expect(roundTo5(5)).toBe(5);
    expect(roundTo5(10)).toBe(10);
  });

  it("should round if number is no multiple", () => {
    const roundTo5 = roundToMultiple(5);

    expect(roundTo5(-6)).toBe(-5);
    expect(roundTo5(-4)).toBe(-5);
    expect(roundTo5(2)).toBe(0);
    expect(roundTo5(7)).toBe(5);
  });

  it("should round to shifted multiple", () => {
    const roundTo5 = roundToMultiple(5, 2);

    expect(roundTo5(-5)).toBe(-3);
    expect(roundTo5(0)).toBe(2);
    expect(roundTo5(2)).toBe(2);
    expect(roundTo5(8)).toBe(7);
  });

  it("should round to negative shifted multiple", () => {
    const roundTo5 = roundToMultiple(5, -2);

    expect(roundTo5(-5)).toBe(-7);
    expect(roundTo5(0)).toBe(-2);
    expect(roundTo5(2)).toBe(3);
    expect(roundTo5(8)).toBe(8);
  });

  it("should work with negative multiple", () => {
    const roundToMinus5 = roundToMultiple(-5);

    expect(roundToMinus5(-6)).toBe(-5);
    expect(roundToMinus5(-4)).toBe(-5);
    expect(roundToMinus5(2)).toBe(0);
    expect(roundToMinus5(7)).toBe(5);
  });
});

export {};
