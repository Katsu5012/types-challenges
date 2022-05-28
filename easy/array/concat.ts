type Concat<T extends unknown[], P extends unknown[]> = [...T, ...P];

type IsConcatOK = Concat<[1, 2, 3, []], [4, 5]>;
