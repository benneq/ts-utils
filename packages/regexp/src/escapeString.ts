/**
 * Escapes a string for use within RegExp
 *
 * @see https://github.com/sindresorhus/escape-string-regexp
 *
 * @returns the escaped string
 */
export const escapeString = (str: string): string => {
  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  return str.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
