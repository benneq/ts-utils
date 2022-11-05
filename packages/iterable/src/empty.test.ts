import { empty } from "./empty";

describe("iterable.empty", () => {
  it("should be done immediatly and have no value", () => {
    expect(empty[Symbol.iterator]().next().done).toBe(true);
  });
});

export {};
