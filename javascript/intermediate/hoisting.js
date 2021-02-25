// Context : 

/**
 * Execution Context : 


 Function declararation are scanned and made available .

 Variable declararation are scanned and made undefined .
  /** */


tipper("80")

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5)
}

var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15)
}
bigTipper("200")


console.log(myName)
var myName = "siraj"

function sayName() {
    var name = "luqman"
    console.log(name)
    
}
sayName ()

console.log(myName)

