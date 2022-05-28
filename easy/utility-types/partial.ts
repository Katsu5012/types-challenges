interface ToDo2 {
  id: number;
  title: string;
  isDone: boolean;
}

type MyPartial<T> = {
  [P in keyof T]?: T[P];
};
