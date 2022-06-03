import { ArrayLength } from './../../easy/array/length';
type LastOfArray<T extends any[]> = T extends [...any, infer R] ? R : never

type LastOfArrayResult=LastOfArray<[1,2,3,4,100]>