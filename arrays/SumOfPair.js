// Program to Count pairs with given sum from an array 
// input :  var inputArray = [1,2,4,5,3,8,0,6]
// sum value = 5 
// combinations = [(1,4),(2,3),(5,0)]
// time complexity = O(n)

var inputArray = [1,2,4,5,3,8,0,6]
sumOfPair = () => {
    var tempHash = {occurence:[]}
   inputArray.map((element,index)=>{
     tempHash = tempHash.occurence.push(element);
     if((element+tempHash)=== 5){
         index ++ ; 

     }
        // console.log(tempHash.occurence.push(element))
   })
   return tempHash;
}

console.log(sumOfPair())