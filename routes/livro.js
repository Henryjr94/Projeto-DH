var express = require('express');
var router = express.Router();
var { trazerLivro } = require('../controllers/livro')


/* GET home page. */
router.get('/', trazerLivro);

module.exports = router;
