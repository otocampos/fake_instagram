var express = require('express');
var router = express.Router();
const usuarioController = require('../controllers/usuarioController')
const validation = require('../middlewares/validation')
const encrypt = require('../middlewares/encrypt')

const {
  check,
  validationResult,
  body
} = require('express-validator')
/* GET home page. */


router.get('/', function(req, res, next) {
  res.render('auth/login');
});

router.get('/registro', function(req, res, next) {
  res.render('auth/register');
});


router.post('/registro',validation.validarCadastro,encrypt.encriptaCadastro,usuarioController.cadastroUsuario )




router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
