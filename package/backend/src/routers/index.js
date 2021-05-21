module.exports = (app) => {
    const productRouter = require('./product.routers');
    const categoryRouter = require('./category.routers');

    // Product API Routing
    app.use('/api/products', productRouter);

    // Category API Routing
    app.use('/api/categories', categoryRouter);
}