import url from 'url';

const url1 = 'https://www.youtube.com/watch?v=32M1al-Y6Ag&t=6253s';

const urlObj = new URL(url1);
console.log(urlObj) //helps to create an url object with all properties
//helps to manipulate url's easily and validate url

url.format(urlObj); //converts url object to string

// import.meta.url  -> not belongs to url module , its a part of ES module which gives current file url

console.log(url.fileURLToPath(import.meta.url))

const params = new URLSearchParams(urlObj.search)
params.append('name' , 'Jhon')
console.log(params.get('v'))
console.log(params)

urlObj.searchParams.append('age' , '30');
urlObj.searchParams.delete('age')
console.log(urlObj.href);  
