/**
 * A RegExp that matches all printable ASCII and Unicode characters
 *
 * @remark
 * Using uppercase P to exclude all control characters.
 */
export const printableCharacterRegExp = /\P{C}/u;
