// https://bigfrontend.dev/quiz/const

function func() {
  const a = b = c = 1
}
func()
console.log(typeof a, typeof b, typeof c) // undefined, number, number

// because const a = (window.b = ( window.c = 1))
