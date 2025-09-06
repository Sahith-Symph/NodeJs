import { createServer } from 'http';

const PORT = 8000;
console.log(`Server running on port ${PORT}`);
const users = [
    {id: 1, name: 'Shiva'},
    {id: 2, name: 'Sai'},
    {id: 3, name: 'Vithesh'}
]

const server = createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/Home') {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(users));
        }
    }
})

server.listen(PORT, () => {
    console.log(`Server running on port `, PORT);
}
)
