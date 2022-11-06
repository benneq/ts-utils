import { arrayBufferToHexString } from "./arrayBufferToHexString";

describe("crypto.arrayBufferToHexString", () => {
  it("should return the hex representation", () => {
    const enc = new TextEncoder();

    expect(arrayBufferToHexString(enc.encode("test"))).toBe("74657374");
  });
});

export {};
