// Pickを実装しよう
interface TODO {
  title: string;
  description: string;
  completed: boolean;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const todo: MyPick<TODO, "title"> = {
  title: "My Pick",
};
