import { numberComparator } from "@benneq/comparator";
import { ClosedRange } from "./closedRange";

describe("range.closedRange", () => {
  it("should contain from", () => {
    const range = new ClosedRange(numberComparator, 1, 3);

    expect(range.contains(1)).toBe(true);
  });

  it("should contain to", () => {
    const range = new ClosedRange(numberComparator, 1, 3);

    expect(range.contains(3)).toBe(true);
  });

  it("should contain values between from and to", () => {
    const range = new ClosedRange<number>(numberComparator, 1, 3);

    expect(range.contains(2)).toBe(true);
  });
});

export {};
