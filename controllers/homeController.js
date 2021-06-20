const router = require('express').Router();

router.get('/', (req, res) => {
  res.status(200).send('<a href="/admin">Admin</a>');
});

module.exports = router;
