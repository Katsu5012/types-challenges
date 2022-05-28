interface User {
  id: number;
  name: string;
  age: number;
}

type MyReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

const user: MyReadOnly<User> = {
  id: 10,
  name: "taro",
  age: 20,
};
