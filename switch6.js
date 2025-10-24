//Question 6: Shipping Cost Calculator (Using Pounds)
const prompt = require('prompt-sync')();
let item= prompt("Enter the shipping zone ");
let s= prompt("Enter the package weight in pounds (lb). ");

switch (item) {
  case "local":
   console.log("$2.50 per lb");
   let bonus = s * 2.5;
   s = s + bonus;
   console.log(+bonus);
    break;
  case "regional":
   console.log("$3.50 per lb");
   let bonus2 = s * 3.5;
   console.log(+bonus2);
    break;
   case "national":
   console.log("$5.00 per lb");
   let bonus3 = s * .5;
   console.log(+bonus3);
    break;
    case "international":
   console.log("$10.00 per lb");
   let bonus4 = s * 1;
   console.log(+bonus4);
    break;
  default:
   console.log("Enter a time zone");
}