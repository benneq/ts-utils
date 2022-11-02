/**
 * A Comparator returns a `number` based on the comparison result of `valueA` and `valueB`.
 *
 * | return value | sort order           |
 * | :------------| :------------------- |
 * | > 0          | valueA after valueB  |
 * | < 0          | valueA before valueB |
 * | === 0        | keep original order  |
 */
export type Comparator<T> = (valueA: T, valueB: T) => number;
