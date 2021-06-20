const router = require('express').Router();

const homeController = require('./controllers/homeController');

const adminController = require('./controllers/adminController').router().then( (res) => {
    return router.use('/admin', res);
} );

router.use('/', homeController);

module.exports = router;
