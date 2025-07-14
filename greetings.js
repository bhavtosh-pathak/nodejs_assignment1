export function greet(name){
    console.log(`hello ${name}! welcome to nodejs module system.`);
}
//calling greet function and import 
import { greet } from "./greeting.mjs";
console.log(greet("bhavosh pathak"));
