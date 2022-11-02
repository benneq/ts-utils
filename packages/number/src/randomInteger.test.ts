import { randomInteger } from "./randomInteger";

describe("number.randomInteger", () => {
  it("should return an Integer between min and max", () => {
    const min = -5;
    const max = 5;

    const result = randomInteger(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it("should return an Integer between min and max for negative range", () => {
    const min = -5;
    const max = 0;

    const result = randomInteger(max, min);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});

export {};
