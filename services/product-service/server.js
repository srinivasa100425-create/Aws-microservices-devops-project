const http = require('http');

const PORT = 3002;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.writeHead(200);
        return res.end(JSON.stringify({ status: 'healthy' }));
    }

    if (req.url === '/products') {
        res.writeHead(200);
        return res.end(JSON.stringify({
            service: 'Product Service',
            products: [
                { id: 101, name: 'Laptop', price: 55000 },
                { id: 102, name: 'Mobile', price: 20000 }
            ]
        }));
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Product Service running on port ${PORT}`);
});
