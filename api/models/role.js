"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      role.hasMany(models.user);
    }
  }
  role.init(
    {
      level_access: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "role",
      hooks: {
        beforeDestroy: (item, options) => {
          if (item.id === 1) {
            throw new Error("Role admin cannot be deleted");
          }
        },
      },
    }
  );
  return role;
};
