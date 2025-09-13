import os from 'os';

console.log("Os info: " , os.userInfo())

//Total availiable memeor in bytes

console.log("Total memory :" , os.totalmem());
//Available memory in bytes
console.log("Free memory: " , os.freemem());

//cpus
console.log("CPU's: ", os.cpus()) //provides an object of every core information of system 
