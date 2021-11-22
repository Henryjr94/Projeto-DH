var express = require('express');
var router = express.Router();
let controller = require('../controllers/home')

/* GET home page. */
router.get('/', controller.homeDisplay);

module.exports = router;