"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.belongsTo(models.role);
    }
  }
  user.init(
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        validate: { notEmpty: true, isAlphanumeric: true },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { isEmail: true },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      roleId: {
        type: DataTypes.INTEGER,
        validate: { notEmpty: true, isInt: true, min: 1 },
      },
    },
    {
      sequelize,
      modelName: "user",
      hooks: {
        beforeCreate: (item, options) => {
          if (!item.roleId) {
            item.roleId = 3;
          }
        },
      },
    }
  );
  return user;
};
