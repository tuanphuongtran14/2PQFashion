module.exports = (app) => {
    const productRouter = require('./product.routers');
    const categoryRouter = require('./category.routers');
    const ordersRouter = require('./ordrers.routers');
    const BillRouter = require('./bill.routers');

    // Product API Routing
    app.use('/api/products', productRouter);

    // Category API Routing
    app.use('/api/categories', categoryRouter);

    // Orders API Routing
    app.use('/api/orders', ordersRouter);
    // Bill API Routing
    app.use('/api/bill', BillRouter)
}