//Question 8: Parking Fee Calculator
const prompt = require('prompt-sync')();
let item= prompt("Enter vehicle type (motorcycle, car, suv, truck). ");
let s= prompt("Enter Hours Parked ");
let bonus;
switch (item) {
  case "motorcycle":
   bonus = s * 2;
    console.log("your price will be $"+bonus);
    break;
  case "car":
   bonus = s * 3;
   console.log("your price will be $"+bonus);
    break;
   case "suv":
    bonus = s * 4;
   console.log("your price will be $"+bonus);
    break;
    case "truck":
    bonus = s * 5;
   console.log("your price will be $"+bonus);
    break;
  default:
   console.log("Enter a vehicle");
}

if(s > 5){
    bonus = 10;
}
console.log("+ $"+bonus);