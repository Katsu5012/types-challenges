type X = { 
  x: { 
    a: 1,
        b: 'hi',
        c: {
            d:[1,2]
    }
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: true
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type DeepReadonly<T> = {
readonly [P in keyof T]: T[P] extends string | boolean | number | symbol ?T[P]:DeepReadonly<T[P]>
}

type Todo6 = DeepReadonly<X>;

const x: Todo6 = {
    x: {
        a: 1,
        b: "hi",
        c: {
            d:[1,2]
        }
    },
    y:"hey"
}

// x.x = 1
// x.x.a = 10
// x.x.b = 3
// x.x.c.d = true


