
const sequelize = require('sequelize');

var dbConection = {
        username: 'root',
        password: '',
        host: 'localhost',
        port: '3306',
        database: 'fake-instagram',
        dialect: 'mysql'
    
}

var models = [                 
    'Users',            
  ];
module.exports={dbConection,models}