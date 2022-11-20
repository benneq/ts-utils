import { tupleValidator } from "./tupleValidator";
import { valueValidator } from "./valueValidator";
import { isString } from "@benneq/string";

describe("validator.tupleValidator", () => {
  it("should return a new array with ValidationErrors for each element", () => {
    const myTupleValidator = tupleValidator<[number, unknown]>([
      valueValidator((n) => n > 0, "err1"),
      valueValidator(isString, "err2"),
    ]);

    expect(myTupleValidator([1, ""], { path: "$" })).toEqual([]);
    expect(myTupleValidator([5, 42], { path: "$" })).toEqual([
      { message: "err2", path: "$.1", value: 42 },
    ]);
  });
});

export {};
