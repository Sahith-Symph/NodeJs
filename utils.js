function generateRandomNumbers (){
    return Math.floor(Math.random()*100) ;
}

function greet(string){
    return `Hello ${string}`
}

//common Js
// Not only funtions we can export  , we can only export objects , arrays and other data.
module.exports = {
    generateRandomNumbers,
    greet
};