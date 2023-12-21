// Strings
var code = "JavaScript Training"
console.log(typeof code)
console.log(code.length)
console.log(code.toUpperCase())
// start postion inclusive
// end postion exclusive
console.log(code.substring(0,10))
console.log(code.substring(0,"JavaScript".length))
console.log(code.substring("JavaScript ".length, 19))
console.log(code.substring("JavaScript ".length, code.length))

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// string concatination
var a = "Amigos"
var b = "code"
console.log(a + b)
console.log(a+ " " + b)
console.log(`${a} ${b}`)
