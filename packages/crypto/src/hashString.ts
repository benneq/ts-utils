/**
 * Hashes a String using the given `algorithm`
 *
 * @example
 * Hash a String using `SHA-256`
 * ```ts
 * const sha256hasher = hashString("SHA-256");
 * const arrayBuffer = sha256hasher("test");
 *
 * const hexString = arrayBufferToHexString(arrayBuffer);
 * console.log(hexString); // "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08"
 * ```
 *
 * @param algorithm
 * @returns the ArrayBuffer containing the hash in binary form
 */
export const hashString =
  (algorithm: AlgorithmIdentifier) =>
  async (str: string): Promise<ArrayBuffer> => {
    const msgUint8 = new TextEncoder().encode(str);
    return await crypto.subtle.digest(algorithm, msgUint8);
  };
