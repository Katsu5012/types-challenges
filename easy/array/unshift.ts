type Unshift<T extends unknown[], K extends unknown> = [K, ...T];

type Result1 = Unshift<[1, 2], 0>; // [0, 1, 2,]
