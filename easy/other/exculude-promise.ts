type Hello = Promise<{ id: number }>;

type ExculudePromise<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R
  : never;

type VC = ExculudePromise<Hello>;
