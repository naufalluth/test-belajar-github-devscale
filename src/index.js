// // importing modules path (COMMON JS)
// const math = require("./libs/math.js");

// // how to use modules

// const resultAdd = math.addition(5, 3);

// console.log(resultAdd);


// ES MODULE
import * as math from "./libs/math.js "

const hasilTambah = math.addition(2, 5);
const hasilKali = math.multiply(hasilTambah, 5);

console.log(hasilKali);