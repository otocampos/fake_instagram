


  module.exports = (sequelize , DataTypes) => {
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

    },{
      tableName: 'users',
      timestamps: false
    }
    
    )
  
    return User;
  };