//Question 2: Season Finder
const prompt = require('prompt-sync')();
let item= prompt("Enter a month name. ");
switch (item) {
  case "December":
  case "January":
  case "February":
   console.log("Winter");
    break;
  case "March":
  case "April":
  case "May":
   console.log("Spring");
    break;
   case "June":
   case "July":
   case "August":
   console.log("Summer");
    break;
    case "September":
    case "October":
    case "November":
   console.log("November and Fall");
    break;
  default:
   console.log("Enter a mouth");
}