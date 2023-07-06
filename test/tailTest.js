const assertEqual = require('../assertEqual')
const tail = require('../tail')

//TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs", "I", "am", "tired"]);
console.log(result)
assertEqual(result.length, 5);
assertEqual(result[0], "Lighthouse");
assertEqual(result[4], "tired");