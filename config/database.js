
const Sequelize = require('sequelize');

/* // Option 1: Passing parameters separately
  const sequelize = new Sequelize('fake-instagram', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});  */ 

const config ={
username:'root',
password:'',
database:'fake-instagram',
host:'localhost',
dialect:'mysql'

}



module.exports = config


