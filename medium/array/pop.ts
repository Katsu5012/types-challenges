type arr11 = ["a", "b", "c", "d"];
type arr12 = [3, 2, 1];

type Pop<T extends any[]> = T extends [...infer U, any] ? [...U] : never;

type popArr11 = Pop<arr11>;
type popArr12 = Pop<arr12>;
