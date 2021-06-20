const router = require('express').Router();

const homeController = require('./controllers/homeController');
router.use('/', homeController);

const adminController = require('./controllers/adminController').router().then( (adminRouter) => {
    return router.use('/admin', adminRouter);
});

module.exports = router;
