let binaryArray = [2,5,7,8,4,9,1,6,10,3]

let employees = [
    {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
    {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
    {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
];

sortArray = (binaryArray) =>{
    return binaryArray.sort((a,b)=>{ return b-a})
}

// console.log(sortArray(binaryArray))


let numbers = [1, 4, 1, 2, 7, 5, 2];

let max = Math.max(...numbers); 

console.log(max)