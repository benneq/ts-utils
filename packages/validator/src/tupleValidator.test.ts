import { tupleValidator } from "./tupleValidator";
import { valueValidator } from "./valueValidator";
import { isString } from "@benneq/string";
import { validate } from "./validate";

describe("validator.tupleValidator", () => {
  it("should return a new array with ValidationErrors for each element", () => {
    const myTupleValidator = validate(
      tupleValidator<[number, unknown]>([
        valueValidator((n) => n > 0, "err1"),
        valueValidator(isString, "err2"),
      ])
    );

    expect(myTupleValidator([1, ""])).toEqual([]);
    expect(myTupleValidator([5, 42])).toEqual([
      { message: "err2", path: "$.1", value: 42 },
    ]);
  });
});

export {};
