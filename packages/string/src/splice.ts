import { mod } from "@benneq/number";

/**
 * Removes characters from a String, and insert new characters in their place.
 *
 * Works like {@link Array.prototype.splice}
 *
 * @example
 * splice(2)("abc") => "ab"
 * splice(1, 1)("abc") => "ac"
 * splice(1, 2, "def")("abc") => "adef"
 * splice(0, 2, "d")("abc") => "dc"
 *
 * @return the spliced String
 */
export const splice =
  (start = 0, deleteCount?: number, replacement = "") =>
  (str: string): string => {
    // normalize start index to align with Array.prototype.splice behavior
    start =
      start < -str.length ? 0 : start < 0 ? mod(start, str.length) : start;

    // normalize deleteCount to align with Array.prototype.splice behavior
    deleteCount = Math.max(deleteCount ?? str.length - start, 0);

    return str.slice(0, start) + replacement + str.slice(start + deleteCount);
  };
