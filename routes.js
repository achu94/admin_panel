const router = require('express').Router();

const homeController = require('./controllers/homeController');
const adminController = require('./controllers/adminController');

router.use('/', homeController);
router.use('/admin', adminController);

module.exports = router;
