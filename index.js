let myArray = [3,5,6,9,12]

let transformedArray = myArray.map((number)=>{
    return number * 2
})
// console.log(transformedArray)

let evens = myArray.filter((number)=>{
    return number %2 == 0
})
// console.log(evens)


let flattenArray = myArray.reduce((acc, cur)=>{
    // console.log(acc, cur)
    return acc + cur
})
// console.log(flattenArray)

function reducer(array){
    //write a function that takes an array of numbers and returns the sum of all numbers 
    let sum = 0
    for(let i=0;i<array.length;i++){
        sum += array[i] 
    }
    return sum

}

// console.log(reducer(myArray))



let triple = myArray.map(number => number * 3)
console.log(triple)

let filterEvenTriple = triple.filter(number => number % 2 == 0)
console.log(filterEvenTriple)

let reduceTriple = filterEvenTriple.reduce((acc, cur)=> acc + cur)
// console.log(reduceTriple)

let chain = myArray.map(number => number * 3)
.filter(number => number % 2 == 0)
.reduce((acc, cur) => acc + cur)

console.log(chain)