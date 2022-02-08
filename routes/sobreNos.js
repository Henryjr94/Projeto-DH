var express = require('express');
const sobreNosController = require('../controllers/sobreNos');
var router = express.Router();

/* PERFIL. */
router.get('/', sobreNosController );

module.exports = router