var express = require('express');
var router = express.Router();
const projectData = require('../utils/projects');

/* GET home page. */
router.use((req, res, next) => {
  const viewData = {
    addProject: projectData.updateProject,
    title: "Tobi's Projects",
  };

  res.render('projects', viewData);
});

module.exports = router;
