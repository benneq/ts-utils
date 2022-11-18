export type SortingDirection = "asc" | "desc";

export type Sorting<P extends string = string> = {
  property: P;
  direction: SortingDirection;
};
