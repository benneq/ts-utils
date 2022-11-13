/**
 *
 * @example
 * Convert ArrayBuffer to hex String
 * ```ts
 * const sha256hasher = hashString("SHA-256");
 * const arrayBuffer = sha256hasher("test");
 *
 * const hexString = arrayBufferToHexString(arrayBuffer);
 * console.log(hexString); // "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
 * ```
 *
 * @param arrayBuffer
 * @returns
 */
export const arrayBufferToHexString = (
  arrayBuffer: ArrayBufferLike
): string => {
  return [...new Uint8Array(arrayBuffer)]
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("");
};
