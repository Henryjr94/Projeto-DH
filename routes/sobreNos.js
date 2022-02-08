var express = require('express');
const sobreNosController = require('../controllers/sobreNos');
var router = express.Router();

/* Sobre Nós. */
router.get('/', sobreNosController );

module.exports = router
