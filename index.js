console.log("Hello ");
// Settimeout setinterval these are not a part of JS , these are availiable in webapi in browser
//also availiable in node js because of global object
// console.log(global);
// console.log(process);

// const {generateRandomNumbers , greet} = require(`./utils`); //no .js

// console.log("generateRandomNumber: ", generateRandomNumbers() );
// console.log("greet: " , greet("Jhon"));
import getPosts ,{getPostsLength} from "./postController.js";

console.log("Posts : " , getPosts());
console.log("Posts length: " ,getPostsLength());