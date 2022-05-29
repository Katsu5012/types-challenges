const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type x=number

type MyReturnType<T extends (...args:any[])=>any>=T extends infer R ?R:never

type a = MyReturnType<typeof fn> // should be "1 | 2"