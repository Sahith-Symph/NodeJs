import path from 'path';
import url from 'url';

//Provides a way to work with paths 

const baseName = path.basename('./dir1/dir2/teste.txt');
console.log('baseName ', baseName);

console.log("Dirname: " , path.dirname(baseName))
console.log("Full details of path: ", path.parse(baseName));

//To get the current file path name 
const __filename = url.fileURLToPath(import.meta.url);
console.log("File name is : ", __filename);
console.log("Directory is :" , path.dirname(__filename))

//Join method to join different paths

const fullPath = path.join( path.dirname(__filename) , 'newFile.js');
console.log("Full path is : " , fullPath);