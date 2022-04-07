var express = require('express');
var router = express.Router();
const control = require('../controller/indexControl')

router.get('/lista-Cliente',control.listCliente)
router.get('/lista-Endereco',control.listEndereco)
router.get('/lista-Livro',control.listLivro)
router.get('/lista-Troca',control.listTroca)

module.exports = router;