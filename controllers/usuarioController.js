const sequelize = require('sequelize');
const config = require('../config/database')
const {
    check,
    validationResult,
    body
} = require('express-validator')
let transaction;    

const userController = {
    cadastroUsuario: async (req, res) => {

        let {
            nome,
            email,
            nickname,
            password
        } = req.body;
        console.log(User);

        console.log('usuarioController')
        console.log("dados do usuario")
        console.log(req.body)
        console.log("validação do cadastro")
        console.log(validationResult(req))
        let listadeErros = validationResult(req);
        const db = new sequelize(config);

        if (listadeErros.isEmpty()) {
         

        }


    }
}

module.exports = userController