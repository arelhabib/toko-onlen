"use strict";
const { encryptPass } = require("../helpers/bcrypt");

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
        // did unique needs to be synchro to db first???
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
        beforeCreate: async (item, options) => {
          try {
            item.roleId = item.roleId || 2;
            item.password = await encryptPass(item.password);
          } catch (error) {
            console.log(error);
          }
        },
      },
    }
  );
  return user;
};
