var express = require('express');
var router = express.Router();
const aboutData = require('../utils/about');

// const projects = [
//   {
//     duration: '2023 - current',
//     title: 'software Eng',
//     role: 'software Eng',
//     description: 'djnjkdfnjkfjklaj',
//   },
//   {
//     duration: '2023 - current',
//     title: 'software Eng',
//     role: 'software Eng',
//     description: 'djnjkdfnjkfjklaj',
//   },
//   {
//     duration: '2023 - current',
//     title: 'software Eng',
//     role: 'software Eng',
//     description: 'djnjkdfnjkfjklaj',
//   },
// ];
// let items = '';
// for (let item of Object.keys(projects)) {
//   items = projects[item];
//   return items;
// }
/* GET home page. */
router.use((req, res, nexts) => {
  const viewsData = {
    addAbout: aboutData.updateAbout,
    title: 'About Me',
  };
  res.render('about', viewsData);
});

module.exports = router;
