type Arr = ['1', 2, true]

type TupleToUnion<T extends unknown[]>= T[number]

type Test =TupleToUnion<Arr> 