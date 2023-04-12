"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category);
    }
  }
  product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      imageName: DataTypes.STRING,
      imageData: DataTypes.BLOB,
      price: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
