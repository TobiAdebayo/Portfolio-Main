var express = require('express');
var router = express.Router();

/* GET home page. */
router.use((req, res, next) => {
  res.render('projects', { title: "Tobi's Projects" });
});

module.exports = router;
