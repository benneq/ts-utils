/**
 * Generates a random UUID
 *
 * @example
 * Create a random UUID
 * ```ts
 * const s = randomUUID();
 * console.log(s); // some random UUID like "ffffffff-ffff-1fff-bfff-ffffffffffff"
 * ```
 *
 * @return the generated random UUID
 */
export const randomUuid = (): string => crypto.randomUUID();
