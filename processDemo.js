// console.log(process)
//global object ,which provides info about current node process

//process facilitates to work with current process , in the terminal
//like reading input from terminal , reading env variables etc

console.log(process.argv[2])
//can access command line arguments
//argv is an array which contains all command line arguments
//first element is path of node executable
//second element is path of current file
//rest are the additional arguments passed
// PS C:\projects\Git_Repos\NodeJs> node processDemo.js New-process
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\projects\\Git_Repos\\TekworksMail\\NodeJs\\processDemo.js',
//   'New-process'
// ]