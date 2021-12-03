var express = require('express');
const perfilController = require('../controllers/perfil');
var router = express.Router();

/* PERFIL. */
router.get('/', perfilController );

module.exports = router;
