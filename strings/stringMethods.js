

var stringVal = 'Hello Walmart ! '

var testMe = 'My Name is Muhammad and I am a Muslim'

var indexMe = 'luqman Siraj Siraj ammi abba '
//charAt 
console.log('string value ',indexMe.charAt(24))

//charCodeAt 
console.log('string value ',stringVal.charCodeAt(0)) 

//concat
console.log('string value ',stringVal.concat(stringVal)) 

//constructor
console.log('string value ',stringVal.constructor) 

//endsWith
console.log('string value ',testMe.endsWith('Muslim')) 

console.log('string value ',String.fromCharCode(55)) 

console.log('String value is ',testMe.includes('Muhammad'))

console.log('string value ',indexMe.indexOf('Siraj')) 

console.log('string value ',indexMe.lastIndexOf('abba')) 
let a = 'abc'
let b = 'bac'
console.log("locale Compare:::",b.localeCompare(a))


console.log('Match the regex :::', indexMe.match('/ammi/')) 


let repeatMe = 'I am siraj '

let splitMe = 'luqman'

let startMe = 'yousuf and luqman are brothers'
console.log(repeatMe.repeat(2))

//returns new string 
console.log(repeatMe.replace('I am siraj','W3schools'))

//return the position number of the character 
console.log(repeatMe.search('siraj'))

console.log(repeatMe.slice(1,6))

//does not change the original string 
console.log(splitMe.split(""))

console.log(startMe.startsWith('yousuf'))


let subStringMe = ' I am Siraj and father of two kids    '

console.log('before trim :::', subStringMe.length)
console.log(subStringMe.substr(1,3))

console.log(subStringMe.substring(1,6))

let iamNumber = 12133

console.log(typeof iamNumber.toString())

console.log(subStringMe.trim())

console.log('after trim :::',subStringMe.length)