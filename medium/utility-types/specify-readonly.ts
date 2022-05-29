import {ExculudeKey} from "./omit"

export type InculudeKey<T,K>=T extends K?T:never

interface Todo5{
  title: string
  description: string
  completed: boolean
}

type SpecifyReadonly1<T, K extends keyof T> = {
    [P in ExculudeKey<keyof T, K>]: T[P] 
} & { readonly [P in InculudeKey<keyof T, K>]: T[P]}

const todo: SpecifyReadonly1<Todo5, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

// todo.title = "Hello" // Error: cannot reassign a readonly property
// todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK