const sequelize = require('sequelize');
const config = require('../config/database')
const {User} = require('../models/')
const {
    check,
    validationResult,
    body
} = require('express-validator')
console.log(User);
const db = new sequelize(config);

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
        
         db.authenticate()
        .then(() => {
          console.log('CONEXÃO COM O BANCO REALIZADA COM SUCESSO');
       })
        .catch(err => {
          console.error('NÃO CONSEGUIU CONECTAR COM O BANCO DE DADOS:', err);
        });
         let usuarioCadastrado = await db.query("INSERT INTO users (name,email,username,password) VALUES ('"+nome+"','"+email+"', '"+nickname+"', '"+password+"')");
         console.log(usuarioCadastrado);
        
        }
        


    }
}

module.exports = userController