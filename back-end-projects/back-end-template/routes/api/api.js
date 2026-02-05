var express = require('express');
var router = express.Router();

var indexRouter = require('./controller/index.js');

router.use("/index", indexRouter);

module.exports = router;
