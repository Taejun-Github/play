var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const data = { message: 'Hello, World!' };
  res.json(data);
});

module.exports = router;
