var family = ['shaheen', 'siraj', 'luqman', 'yousuf']

arrayLoop = () => {
    family.forEach((item, index, obj) => {
        console.log(item, "\n", index, "\n")
    })
}

// console.log(family.length) 
// console.log(family[familyNames.length - 1 ])
// console.log(family.shift())
// console.log(family.unshift('Unknown') ) 
// console.log("Family Object :::",family)
// console.log(family.indexOf(('Siraj').toLowerCase()))
// let splicedElements = family.splice(1,1)
// console.log(splicedElements)
// console.log(family.slice(1,3))
// console.log(family)

//  family.push('Zainab')

// console.log(Array.isArray({}))


let frequencyOfArray = [1, 2, 2, 3, 3, 4, 5, 5]

frequencyCount = (frequencyOfArray) => {
    var findOccurences = []
    frequencyOfArray.map((item, index) => {
        if (item[index] === item[index + 1]) {
            findOccurences.push(item)
        }

        // console.log(item , '++++', index )
    })
    return findOccurences
}

// console.log(frequencyCount(frequencyOfArray))


occurences = (frequencyOfArray) => {

    for (let i = 1; i <= frequencyOfArray.length; i++) {
        var count = 0;
        for (let j = 0; j < frequencyOfArray.length; j++) {
            console.log("i value is", i )
            if (frequencyOfArray[j] === i)
                count++;
        }
        console.log(i + " has " + count + " times " )
    }
   
}

occurences(frequencyOfArray)

var stringVal = 'abc'
stringPermutation = ()=> {

}