import { numberComparator } from "@benneq/comparator";
import { ClosedOpenRange } from "./closedOpenRange";

describe("range.closedOpenRange", () => {
  it("should contain from", () => {
    const range = new ClosedOpenRange(numberComparator, 1, 3);

    expect(range.contains(1)).toBe(true);
  });

  it("should not contain to", () => {
    const range = new ClosedOpenRange(numberComparator, 1, 3);

    expect(range.contains(3)).toBe(false);
  });

  it("should contain values between from and to", () => {
    const range = new ClosedOpenRange<number>(numberComparator, 1, 3);

    expect(range.contains(2)).toBe(true);
  });

  it("should return true if from is equal to to", () => {
    const range = new ClosedOpenRange(numberComparator, 1, 1);

    expect(range.empty).toBe(true);
  });

  it("should return false if from is not equal to to", () => {
    const range = new ClosedOpenRange(numberComparator, 1, 3);

    expect(range.empty).toBe(false);
  });
});

export {};
