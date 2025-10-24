//Question 1: Coffee Size Pricing
const prompt = require('prompt-sync')();
let item= prompt("Enter the size of the drink you are going to get. ");
switch (item) {
  case "small":
   console.log("Your price is $2.50");
    break;
  case "medium":
   console.log("Your price is $3.50");
    break;
   case "large":
   console.log("Your price is $4.25");
    break;
    case "extra large":
   console.log("Your price is $5.00");
    break;
  default:
   console.log("Enter a size");
}