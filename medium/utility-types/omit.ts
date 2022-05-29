interface Todo {
  title: string
  description: string
  completed: boolean
}

// 内部定期にはExculudeと同じ
export type ExculudeKey<T,K > =T extends K ?never:T

type MyOmit<T, K extends keyof T> = {
    [P in  ExculudeKey<keyof T,K> ]:T[P]
}

type TodoPreview = MyOmit<Todo, 'description' | "title" >

const todo2: TodoPreview = {
    completed: false,
}
