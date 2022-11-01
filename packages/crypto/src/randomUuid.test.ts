import { randomUuid } from "./randomUuid";

const uuidRegExp =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

describe("crypto.randomUuid", () => {
  it("should return a UUID", () => {
    expect(randomUuid()).toMatch(uuidRegExp);
    expect(randomUuid()).toMatch(uuidRegExp);
    expect(randomUuid()).toMatch(uuidRegExp);
  });
});

export {};
