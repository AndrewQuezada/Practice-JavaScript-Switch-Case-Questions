//Programming Language
const prompt = require('prompt-sync')();
let item= prompt("Enter a file extension ");
switch (item) {
  case ".js":
   console.log("JavaScript");
    break;
  case ".py":
   console.log("Python");
    break;
   case ".java":
   console.log("Java");
    break;
    case ".cpp":
   console.log("C++");
    break;
    case ".html":
   console.log("HTML");
    break;
  default:
   console.log("Enter a file type");
}