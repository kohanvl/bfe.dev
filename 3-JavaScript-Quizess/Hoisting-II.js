const func1 = () => console.log(1)

func1()

func2()

function func2() {
  console.log(2)
}


func3()

var func3 = function func4() {
  console.log(3)
}

/*It will log:
1
2
Error - func3 is undefined -> undefined() -> func3 is not a function
*/
