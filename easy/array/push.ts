type Push<T extends unknown[], K extends unknown> = [...T, K];

type Result4 = Push<[1, 2], "3">;
