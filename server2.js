import { create } from 'domain';
import { createServer } from 'http';

const PORT = 8000;
const users = [
    { id: 1, name: 'Shiva' },
    { id: 2, name: 'Sai' }
]
const regex = /^\/api\/users\/[0-9]+$/;


//middlewares

const attachJsonHeader = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}

const createUserHandler = (req, res) => {
    let body = '';

    //wait for data stream to collect completely
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        //parse the collected data and create user object
        const user = JSON.parse(body);
        if (users.find((u) => u.id === user.id)) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'User with this id already exists' }));
        } else {
            users.push(user);
            res.writeHead(201, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(user));
        }

    });

}

const server = createServer((req, res) => {
    attachJsonHeader(req, res, () => {
        if (req.method === 'GET') {
            if (req.url === '/users') {
                res.end(JSON.stringify(users));
            } else if (req.url.match(regex)) {
                const id = req.url.split('/')[3];
                const user = users.find((user) => (user.id === parseInt(id)))

                if (user) {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify(user));
                } else {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ message: 'User not found' }))
                }

            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: 'Route not found' }))
            }


        } else if (req.method === 'POST') {
            if (req.url === '/api/users') {
                createUserHandler(req, res);
            }
        }
    })

})

server.listen(PORT, () => {
    console.log(`Server is running from on port ${PORT}`);
})

