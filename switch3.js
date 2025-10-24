//Question 3: Movie Rating Guide
const prompt = require('prompt-sync')();
let item= prompt("Enter a movie rating ");
switch (item) {
  case "G":
   console.log("Rated G: All ages admitted for General audiences.");
    break;
  case "PG":
   console.log("Parental guidance suggested");
    break;
   case "PG13":
   console.log("Some material may be inappropriate for children under 13");
    break;
    case "R":
   console.log("Material is inappropriate for children under 18");
    break;
    case "NC-17":
   console.log("No Children Under 17 Admitted");
    break;
  default:
   console.log("Enter a Rating");
}