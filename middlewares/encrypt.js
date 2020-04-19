const bcrypt = require('bcrypt');
const path = require('path')
const {
    check,
    validationResult,
    body
} = require('express-validator')

encriptaCadastro = (req, res, next) => {
    let {
        nome,
        email,
        nickname,
        password
    } = req.body;
    
    let listaDeErros =validationResult(req)
    if (listaDeErros.isEmpty()) {
         req.body.password = bcrypt.hashSync(
            req.body.password
             , 10);
        
    } next();


}

module.exports = { encriptaCadastro }