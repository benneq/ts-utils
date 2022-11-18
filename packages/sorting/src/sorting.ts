import { SortingDirection } from "./_types";

export const sorting = <T extends string>(
  property: T,
  direction: SortingDirection
) => {
  return {
    property,
    direction,
  };
};
