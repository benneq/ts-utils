import { empty } from "./empty";

describe("iterable.empty", () => {
  it("should be done immediatly and have no value", () => {
    expectIterableToEqual(empty, []);
  });
});

export {};
