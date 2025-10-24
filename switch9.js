//Question 9: Temperature Converter with Operations
const prompt = require('prompt-sync')();
let item= prompt("Enter the conversion type: F2C or C2F. ");
let s= prompt("Enter a temperature value ");

switch (item) {
  case "F2C":
   let bonus = (s - 32)*5/9; 
   console.log(s + "F =" + bonus + "C");
    break;
  case "C2F":
    let bonus2 = (s * 9 / 5)+32; 
   console.log(s + "C =" + bonus2 + "F");
    break;
    default:
   console.log("Enter a target currency");
}