const sequelize = require('sequelize');
const config = require('../config/database')
const user = require ('../models/Users').Users
const {
    check,
    validationResult,
    body
} = require('express-validator')

const db = new sequelize(config)
const userController = {

    cadastroUsuario: async (req, res) => {

        let {
            nome,
            email,
            nickname,
            password
        } = req.body;

        console.log('usuarioController')
        console.log("dados do usuario")
        console.log(req.body)
        console.log("validação do cadastro")
        console.log(validationResult(req))
        let listadeErros = validationResult(req);
        if (listadeErros.isEmpty()) {
            const novoUsuario =  user.create({ name: nome, email: email,username:nickname,password:password});
            console.log("Usuario auto-generated ID:", novoUsuario.id);

        }


    }
}

module.exports = userController