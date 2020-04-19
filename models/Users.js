
var Sequelize = require("sequelize");
/* const User = Sequelize.define('user', {
    // attributes
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING
      // allowNull defaults to true
    },
    username: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      password: {
        type: DataTypes.STRING
        // allowNull defaults to true
      },
      avatar: {
        type: DataTypes.STRING
        // allowNull defaults to true
      }
  }, {
    // options
  }); */


  module.exports = (DataTypes , sequelize) => {
    const User = sequelize.define('user', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING
            // allowNull defaults to true
          },
          username: {
              type: DataTypes.STRING
              // allowNull defaults to true
            },
            password: {
              type: DataTypes.STRING
              // allowNull defaults to true
            },
            avatar: {
              type: DataTypes.STRING
              // allowNull defaults to true
            }

    })
    return User;
    };