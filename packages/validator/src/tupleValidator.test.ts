import { tupleValidator } from "./tupleValidator";
import { predicateValidator } from "./predicateValidator";
import { isString } from "@benneq/string";

describe("validator.tupleValidator", () => {
  it("should return a new array with ValidationErrors for each element", () => {
    const myTupleValidator = tupleValidator<[number, unknown]>([
      predicateValidator((n) => n > 0, "err1"),
      predicateValidator(isString, "err2"),
    ]);

    expect(myTupleValidator([1, ""])).toEqual([[], []]);
    expect(myTupleValidator([5, 42])).toEqual([[], ["err2"]]);
  });
});

export {};
