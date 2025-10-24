//Question 10: Gym Membership Duration Calculator
const prompt = require('prompt-sync')();
let item= prompt("Enter the plan type (monthly, quarterly, semi-annual, annual). ");
let s= prompt("Enter the monthly rate (for example, $40). ");

switch (item) {
   case "monthly":
   console.log("Your original cost is $"+ s +" Your discount is 0%, Your total is $"+s);
    break;
  case "quarterly":
    let bonus2 = s*3;
    let bonus = bonus2 * (5/100);
   console.log("Your original cost is $"+ bonus2 +" Your discount is 5%, Your total is $"+bonus);
    break;
    case "semi-annual":
    let bonus3 = s*6;
    let bonus4 = bonus3 * (10/100);
   console.log("Your original cost is $"+ bonus3 +" Your discount is 10%, Your total is $"+bonus4);
    break;
     case "annual":
    let bonus5 = s*12;
    let bonus6 = bonus5* (20/100);
   console.log("Your original cost is $"+ bonus5 +" Your discount is 20%, Your total is $"+bonus6);
    break;
    default:
   console.log("Enter a plan type.");

}
