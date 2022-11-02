const hasProperties = (
  obj: unknown
): obj is Record<string, unknown> & Array<unknown> => {
  return typeof obj === "object" && obj !== null;
};

/**
 *
 * @example
 * shallowEqual("", "") => true
 * shallowEqual({ a: 1 }, { a: 1 }) => true
 * shallowEqual([1,2,3], [1,2,3]) => true
 * shallowEqual({ a: 1 }, { b: 1 }) => false
 * shallowEqual([1,2], [2,3]) => false
 * shallowEqual(null, undefined) => false
 *
 * @returns `true` if both values are shallowly equal, otherwise `false`
 */
export const shallowEqual = (valueA: unknown, valueB: unknown): boolean => {
  if (Object.is(valueA, valueB)) {
    return true;
  }

  if (!hasProperties(valueA) || !hasProperties(valueB)) {
    return false;
  }

  const keysA = Object.keys(valueA);
  const keysB = Object.keys(valueB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (const currentKey of keysA) {
    if (
      !(currentKey in valueB) ||
      !Object.is(valueA[currentKey], valueB[currentKey])
    ) {
      return false;
    }
  }

  return true;
};
