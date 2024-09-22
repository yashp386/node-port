require("./xyz.js")      //this is called modules in node js this files runs first u cant access another modules function and

const calculatesum=require("./sum.js")       // imported here given module 


calculatesum(a,b);
var h="namaste node-js";

var a=10,b=15;

console.log(a+b);

// console.log(global);    //global is now replaced with global this cause of usage in
// console.log(this);       // defining the global variable in program

// console.log(globalThis === global);
// C:\Users\yashp\OneDrive\Documents\GitHub\node-port