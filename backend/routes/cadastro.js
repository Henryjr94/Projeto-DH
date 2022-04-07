var express = require('express');
var router = express.Router();
const control = require('../controller/cadastroControl')

/* GET home page. */
router.post('/cliente', control.cliente)
router.post('/endereco', control.endereco)
router.post('/livro', control.livro)
router.post('/troca', control.troca)

module.exports = router;