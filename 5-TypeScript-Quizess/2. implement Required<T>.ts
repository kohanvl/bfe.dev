// Easy - https://bigfrontend.dev/typescript/implement-Required-T

// the 'optional' symbol = '?'
// the 'not' symbol = '-'
// K is not optional in T
type MyRequired<T> = {[K in keyof T]-?: T[K]};
// your code here, please don't use Required<T> in your code
