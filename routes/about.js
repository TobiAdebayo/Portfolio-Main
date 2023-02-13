var express = require('express');
var router = express.Router();

/* GET home page. */
router.use((req, res, next) => {
  res.render('about', { title: 'About Me' });
});

module.exports = router;
