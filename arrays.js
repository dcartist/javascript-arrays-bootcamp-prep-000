var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray (x,y){
x = [y,...x]
//x.unshift(y)
//x.shift()
return x
}

function destructivelyAddElementToBeginningOfArray (x,y){
x.unshift(y)
return x
}

function addElementToEndOfArray (x,y){
x = [...x, y]
//x.unshift(y)
//x.shift()
return x
}

function destructivelyAddElementToEndOfArray (x,y){
x.push(y)
return x
}

function accessElementInArray (x,y){
  return (x[y])
}

function destructivelyRemoveElementFromBeginningOfArray (x){
  x.shift()
  return x
}

function removeElementFromBeginningOfArray(x){
  x.slice(0)
  return x
}
