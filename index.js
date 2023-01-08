// Follow along with the examples here
function sayHello() {
    console.log("Hello!");
}
sayHello();

function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
}
sayHelloToGuadalupe();

function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
sayHelloToLiz();

function sayHelloToSamip() {
    console.log("Hello, Samip!")
}
sayHelloToSamip();

const skip = "\n"
console.log(skip); 

sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();
console.log(skip);

function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything");

let num = 5;
function age(num) {
    console.log("Age: ", num + 20);
}
 age(num);
console.log(skip);

function sayHelloTo(firstname) {
    console.log(`Hello, ${firstname}!`)
}
sayHelloTo("Guadalupe");
sayHelloTo("Liz");
sayHelloTo("Samip");
sayHelloTo("Dennis");
console.log(skip);

function say (greeting, firstname) {
    console.log("first name: ", firstname);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstname}`);
}
say("Hello","Julio");
say("Julio","hello");

function skipper() {
    console.log("\n");
}
skipper();

function add(x,y) {
    return x + y;
}
console.log(add(1,2));

function adder(x,y) {
    console.log(x + y);
}
adder(1,2);
skipper();

let num1 = 10;
let num2 = 5;
const message = `Your number is: ${add(num1, num2)}`;
console.log(message);