module.exports = (app) => {
    const productRouter = require('./product.routers');
    const categoryRouter = require('./category.routers');
    const tagRouter = require('./tag.routers');
    const BillRouter = require('./bill.routers');
    const CartRouter = require('./cart.routers');
    const UserRouter = require('./user.routers');
    const { login, adminLogin } = require('../controllers/login.controller');
    const { register } = require('../controllers/register.controller');

    // Product API Routing
    app.use('/api/products', productRouter);

    // Category API Routing
    app.use('/api/categories', categoryRouter);

    // Tag API Routing
    app.use('/api/tags', tagRouter);

    // Bill API Routing
    app.use('/api/bills', BillRouter)

    //User API Routing

    app.use('/api/users', UserRouter)

    app.use('/api/carts', CartRouter)

    //Login Routing
    app.post('/login', login)

    app.post('/register', register)

}