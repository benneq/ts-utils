export const roundToMultiple =
  (multiple: number, shift = 0) =>
  (num: number): number => {
    return Math.round((num - shift) / multiple) * multiple + shift;
  };
