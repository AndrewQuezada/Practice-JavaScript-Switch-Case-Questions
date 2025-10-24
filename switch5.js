//Question 5: Salary Bonus Calculator
const prompt = require('prompt-sync')();
let item= prompt("Enter level in the company ");
let s= prompt("Enter salary in the company ");
switch (item) {
  case "junior":
   console.log("You get a 5% bonus");
   let bonus = s * .05;
   s = s + bonus;
   console.log(+bonus);
    break;
  case "mid":
   console.log("You get a 10% bonus");
   let bonus2 = s * .1;
   console.log(+bonus2);
    break;
   case "senior":
   console.log("You get a 15% bonus");
   let bonus3 = s * .15;
   console.log(+bonus3);
    break;
    case "lead":
   console.log("You get a 20% bonus");
   let bonus4 = s * .2;
   console.log(+bonus4);
    break;
  default:
   console.log("Enter a level");
}