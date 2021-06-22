module.exports = (app) => {
    const productRouter = require('./product.routers');
    const categoryRouter = require('./category.routers');
    const BillRouter = require('./bill.routers');
    const UserRouter = require('./user.routers');
    const { login, adminLogin } = require('../controllers/login.controller');
    const { register } = require('../controllers/register.controller');

    // Product API Routing
    app.use('/api/products', productRouter);

    // Category API Routing
    app.use('/api/categories', categoryRouter);

    // Bill API Routing
    app.use('/api/bills', BillRouter)

    //User API Routing
    app.use('/api/users', UserRouter)

    //Login Routing
    app.post('/login', login)

    app.post('/register', register)

}