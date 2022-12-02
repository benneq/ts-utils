import { counter } from "./counter";

describe("number.clamp", () => {
  it("should have initial value of 0", () => {
    expect(counter().get()).toBe(0);
  });

  it("should override initial value", () => {
    expect(counter(1).get()).toBe(1);
  });

  it("should increment value", () => {
    const c = counter();
    c.inc();
    expect(c.get()).toBe(1);
  });

  it("should increment value with delta", () => {
    const c = counter();
    c.inc(2);
    expect(c.get()).toBe(2);
  });

  it("should decrement value", () => {
    const c = counter();
    c.dec();
    expect(c.get()).toBe(-1);
  });

  it("should increment value with delta", () => {
    const c = counter();
    c.dec(2);
    expect(c.get()).toBe(-2);
  });

  it("should override value", () => {
    const c = counter();
    c.set(2);
    expect(c.get()).toBe(2);
  });
});

export {};
