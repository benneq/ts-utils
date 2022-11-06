import { counter } from "./counter";

describe("number.clamp", () => {
  it("should have initial value of 0", () => {
    expect(counter().value).toBe(0);
  });

  it("should override initial value", () => {
    expect(counter(1).value).toBe(1);
  });

  it("should increment value", () => {
    const c = counter();
    c.inc();
    expect(c.value).toBe(1);
  });

  it("should increment value with delta", () => {
    const c = counter();
    c.inc(2);
    expect(c.value).toBe(2);
  });

  it("should decrement value", () => {
    const c = counter();
    c.dec();
    expect(c.value).toBe(-1);
  });

  it("should increment value with delta", () => {
    const c = counter();
    c.dec(2);
    expect(c.value).toBe(-2);
  });

  it("should override value", () => {
    const c = counter();
    c.value = 2;
    expect(c.value).toBe(2);
  });

  it("should reset value", () => {
    const c = counter(2);
    c.dec();
    c.reset();
    expect(c.value).toBe(2);
  });
});

export {};
