//Question 7: Currency Converter
const prompt = require('prompt-sync')();
let item= prompt("Enter the target currency (EUR, GBP, JPY, AUD). ");
let s= prompt("Enter the amount in USD ");

switch (item) {
  case "EUR":
   let bonus = s * .93;
   console.log("$"+s + " = "+ bonus+ "€");
    break;
  case "GBP":
    let bonus2 = s * 0.8;
   console.log("$"+s + " = "+ bonus2+ "£");
    break;
   case "JPY":
    let bonus3 = s * 150.20;
   console.log("$"+s + " = "+ bonus3+ "¥");
    break;
    case "AUD":
    let bonus4 = s * 1.52;
   console.log("$"+s + " = "+ bonus4+ "A$");
    break;
  default:
   console.log("Enter a target currency");
}