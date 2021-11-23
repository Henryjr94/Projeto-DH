var express = require('express');
var router = express.Router();
let loginController = require('../controllers/login');

/* GET login page. */
router.get('/', loginController.displayLoginPage);

module.exports = router;
