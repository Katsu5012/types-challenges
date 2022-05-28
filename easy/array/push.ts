type Push<T extends unknown[], K extends unknown> = [...T, K];

type Result = Push<[1, 2], "3">;
