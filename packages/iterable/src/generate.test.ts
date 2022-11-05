import { jest } from "@jest/globals";
import { generate } from "./generate";

describe("iterable.generate", () => {
  it("should call the provider each time and yield its returned value", () => {
    const value = Symbol();
    const provider = jest.fn(() => value);

    const generator = generate(provider);

    expect(generator.next().value).toEqual(value);
    expect(generator.next().value).toEqual(value);
    expect(generator.next().value).toEqual(value);
    expect(generator.next().done).toBe(false);
    expect(provider).toHaveBeenCalledTimes(4);
  });
});

export {};
