/**
 * The numerical representation of a character
 */
export type CharCode = number & { __brand?: never };

/**
 * Represents a range of CharCodes
 */
export type CharCodeRange = [CharCode, CharCode];
