import { copy as arrayCopy } from "@benneq/array";
import { mapValues } from "@benneq/map";
import { QueryParams } from "./_types";

export const copy: {
    (queryParams: QueryParams): QueryParams
} = mapValues<string[], string[]>(values => arrayCopy(values));