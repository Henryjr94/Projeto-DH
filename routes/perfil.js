var express = require('express');
var router = express.Router();
const perfilController = require("../controllers/perfil")

router.get ("/perfil", perfilController.index)
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('perfil', { title: 'Users' });
});

module.exports = router;

