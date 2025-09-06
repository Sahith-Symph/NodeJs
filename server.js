import http from 'http';
import url from 'url';
import path from 'path';//core Node js modules
import fs from 'fs/promises'
const PORT =8000;

// __filename , __dirname are directly availiable in CommonJs modules but not in Es modules

const fileName = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(fileName);

console.log(fileName, dirname)
const server = http.createServer(async (req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    try {
        let filePath;
        if (req.method === 'GET') {
            if (req.url === '/') {
                filePath = path.join(dirname, 'public', 'index.html');
            } else if (req.url === '/about') {
                filePath = path.join(dirname, 'public', 'about.html');
            } else {
                throw new Error('Method not allowed');
            }
            const data =await  fs.readFile(filePath);
            res.setHeader('Content-Type', 'text/html');
            res.write(data);
            res.statusCode = 200;
            res.end();
        }
    } catch (error) {
        res.writeHead(500, { 'Content-Type': 'text/plain' })
        res.end(`Something went wrong ${error}`)
    }
    // res.writeHead (200 ,`Content-Type`,'text/html')
    // res.end('<h1> Hello World </h1><p> Welcome to my Node.js server! </p>');
})

server.listen(PORT, () => console.log(`server running on ${PORT}`));
