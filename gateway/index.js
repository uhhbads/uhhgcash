const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

// Proxy rules
app.use('/api/users', createProxyMiddleware({ target: 'http://user-service:8080', changeOrigin: true, pathRewrite: {'^/api/users': ''} }));
app.use('/api/wallet', createProxyMiddleware({ target: 'http://wallet-service:8080', changeOrigin: true, pathRewrite: {'^/api/wallet': ''} }));
app.use('/api/payment', createProxyMiddleware({ target: 'http://payment-service:8080', changeOrigin: true, pathRewrite: {'^/api/payment': ''} }));
app.use('/api/credit', createProxyMiddleware({ target: 'http://credit-service:8000', changeOrigin: true, pathRewrite: {'^/api/credit': ''} }));

app.get('/', (req, res) => res.send('Mini GCash API Gateway'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Gateway listening on ${PORT}`));
