
const Sequelize = require('sequelize');

 // Option 1: Passing parameters separately 
/*   const config  = new Sequelize('fake-instagram', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
});   */

 const config ={
username:'root',
password:'',
database:'fake-instagram',
host:'localhost',
dialect:'mysql'

} 



module.exports = config


