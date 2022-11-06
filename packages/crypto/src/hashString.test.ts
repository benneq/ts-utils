import { arrayBufferToHexString } from "./arrayBufferToHexString";
import { digestString } from "./hashString";

describe("crypto.hashString", () => {
  it("should binary representation of SHA-265 digest", async () => {
    const arrayBuffer = await digestString("SHA-256")("test");

    expect(arrayBufferToHexString(arrayBuffer)).toBe(
      "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
    );
  });
});

export {};
