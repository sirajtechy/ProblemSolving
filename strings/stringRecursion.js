let arr = 'Sirajuddeen'

stringReversal = (arr) => {
  let reversed =   arr.split("").reverse().join("")
  return reversed ;
}

console.log(stringReversal(arr))