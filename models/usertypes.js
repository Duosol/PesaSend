'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserTypes = sequelize.define('UserTypes', {
    id: DataTypes.INTEGER,
    user_type: DataTypes.STRING
  }, {});
  UserTypes.associate = function(models) {
    // associations can be defined here
  };
  return UserTypes;
};