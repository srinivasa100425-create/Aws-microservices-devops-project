const http = require('http');

const PORT = 3003;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.writeHead(200);
        return res.end(JSON.stringify({ status: 'healthy' }));
    }

    if (req.url === '/orders') {
        res.writeHead(200);
        return res.end(JSON.stringify({
            service: 'Order Service',
            orders: [
                { id: 1001, product: 'Laptop', quantity: 1 },
                { id: 1002, product: 'Mobile', quantity: 2 }
            ]
        }));
    }

    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Order Service running on port ${PORT}`);
});
