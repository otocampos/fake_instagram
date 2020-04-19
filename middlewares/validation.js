const path = require('path')
const {
    check,
    validationResult,
    body
} = require('express-validator')
const nome = "nome";
const email = "email";
const nickname = "nickname";
const password = "password";


exports.validarCadastro =  [
    check(nome)
        .exists()
        .isLength({min: 1 , max: 50}).withMessage('tamanho maximo 50 character'),
         
    body(email)
        .exists()
        .isEmail().withMessage('utilize um formato de e-mail'),
    
    body(nickname).isAlphanumeric()
        .isLength({ min: 3, max: 15 }).withMessage('cadastre um nick de 3 a 15 characters em espaço')
        .notEmpty(),
    
        check(password, "Password is required")
        .notEmpty()
        .isLength({
          min: 6
        })
        .withMessage("Password must contain at least 6 characters")
        .isLength({
          max: 8
        })
        .withMessage("Password can contain max 8 characters"),

] 



