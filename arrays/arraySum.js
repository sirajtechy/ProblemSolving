let array = [1,3,5,7,2,8,9]

sumOfArray = (array,sum) => {
    for (let i = 0; i < array.length; i++) {
       for (let j = i+1; j < array.length; j++) {
           if(array[i]+array[j] == sum)
           return true ; 
       }
        
    }
    return false ; 
}

console.log(sumOfArray(array,7))