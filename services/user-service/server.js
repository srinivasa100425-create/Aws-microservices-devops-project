const http = require('http');

const PORT = 3001;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.writeHead(200);
        return res.end(JSON.stringify({ status: 'healthy' }));
    }

    if (req.url === '/users') {
        res.writeHead(200);
        return res.end(JSON.stringify({
            service: 'User Service',
            users: [
                { id: 1, name: 'Srinivas' },
                { id: 2, name: 'Ravi' }
            ]
        }));
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`User Service running on port ${PORT}`);
});
