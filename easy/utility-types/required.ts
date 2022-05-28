interface ToDo3 {
  id: number;
  title: string;
  isDone: boolean;
}

type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};
