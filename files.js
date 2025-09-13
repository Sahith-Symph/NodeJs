import fs from 'fs' //Callback based file system module
// import fs from 'fs/promises' //Promise based file system module
//readFile() -> asyncronusly reads file

//writeFile()-> over writes existing file data 

fs.writeFile('./test.txt', 'I am writing to a file', (err, data) => {
    console.log('data will be undefined in writeFile method , we should use only err object here in write methods ', data);
})

//appendFile() -> appends data to existing file data
try {
    fs.appendFile('./teste.txt', '\n Appending new data to file ', (err, data) => {
        if (err) throw err;
        console.log('if File dosen\'t exist it creates one', data);
    })
} catch (err) {
    console.error('Error appending file:', err);
}

//readFile() -> asynchronously reads file 

//Used for promise version of fs module
// fs.readFile('./test.txt', 'utf-8' ).then((data) => {
//     fs.appendFile('./test.txt' , '\n Appending new data to file ' ).catch((err)=>{
//         console.error('Error appending file:', err);
//     })
// })

//Used for Callback version of fs module
try {
     fs.readFile('./teste.txt', 'utf-8', (err, data) => {
        if (err) throw err;
        fs.appendFile('./teste.txt', '\n Appending new data to file with callback version of fs ', (err) => {
            if (err) throw err.message = 'Error appending file:';
        });
})
} catch (err) {
    console.log('Error reading file:', err);
}

//readFileSync , writeFileSync , appendFileSync these are syncronus methods and will block the event loop

const data = fs.readFileSync('./teste.txt' , 'utf-8')
console.log("this is sync read: ",data);

