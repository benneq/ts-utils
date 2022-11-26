import { numberComparator } from "@benneq/comparator";
import { OpenClosedRange } from "./openClosedRange";

describe("range.openClosedRange", () => {
  it("should not contain from", () => {
    const range = new OpenClosedRange(numberComparator, 1, 3);

    expect(range.contains(1)).toBe(false);
  });

  it("should contain to", () => {
    const range = new OpenClosedRange(numberComparator, 1, 3);

    expect(range.contains(3)).toBe(true);
  });

  it("should contain values between from and to", () => {
    const range = new OpenClosedRange<number>(numberComparator, 1, 3);

    expect(range.contains(2)).toBe(true);
  });

  it("should return true if from is equal to to", () => {
    const range = new OpenClosedRange(numberComparator, 1, 1);

    expect(range.empty).toBe(true);
  });

  it("should return false if from is not equal to to", () => {
    const range = new OpenClosedRange(numberComparator, 1, 3);

    expect(range.empty).toBe(false);
  });
});

export {};
