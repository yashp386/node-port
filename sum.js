// modules are protected byv default they are protected their functions and variables from leaking
// to use modules in node js u have to explicitly export it 
  //exported the specified module
console.log("sum JS ececuted");

let a=10,b=10;

function calculatesum(a,b){
    let sum =a+b;
    console.log(sum);
}

module.exports ={x:x,
calculatesum: calculatesum;} 