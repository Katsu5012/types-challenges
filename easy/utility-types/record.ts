interface TODO4 {
  title: string;
  description: string;
  completed: boolean;
}

type MyRecord<T extends string | number | symbol, K> = {
  [P in T]: K;
};
