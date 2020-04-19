//const sequelize = require('sequelize')
module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement:true

        },
        name: {
            type: DataType.STRING,
            allowNull:true},
        email: {
            type: DataType.STRING,
            allowNull: true
        },
        username: {
            type: DataType.STRING,
            allowNull: true
        },
        password: {
            type: DataType.STRING,
            allowNull: true
        },
        avatar: {
            type: DataType.STRING,
            allowNull:true}
        
    },
        {
            tableName:'users'
        }
    )
}