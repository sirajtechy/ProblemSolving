// let points = 100 ;
// let winner = false
// if(points > 90){
//   let  winner = true ;
// }
// console.log("Winner value is ", winner)

const mysql = require('mysql')

var sampleArray = {100:'siraj', 1: 'shaheen', 0:'yousuf',2:'luqman'};

console.log(Object.keys(sampleArray))




const countryName = [India , pakistan,australia, USA ]

http://localhost:8080/getCountryList 

countList = []
const countList = select countryName from countryList ; 
http://localhost:8080/getStateList?countryName='$CountryName'

getStateList = (countryName) =>{

    const stateList = [];
   stateName = select stateName from CountryList where countryName = countryName
    return stateName
   return  res.json({stateName : stateName})
}
http://localhost:8080/getStateList?countryName='$CountryName'

res.json(countList)



{stateName : [tamilNadu , KErala , AP , UP]}

