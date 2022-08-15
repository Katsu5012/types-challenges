interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

// 你的答案
type HasVal<U, T extends U[keyof U]> = T extends U[keyof U] ? U : never;
type LookUp<U, T extends U[keyof U]> = U extends HasVal<U, T> ? U : never;
type MyDog = LookUp<Cat | Dog, "dog">; // expected to be `Dog`
