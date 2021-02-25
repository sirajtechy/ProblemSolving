let array = [4234234,8,7,56,90,3432,1,21,3434,53543534]

largestElement = (array) => {
    let max,min = array[0];
    for (let index = 1; index < array.length; index++) {
       if (array[index] < min ) {
           min = array[index]
       }
    }
    return "the minimum element is "+ min
}

console.log(largestElement(array))
