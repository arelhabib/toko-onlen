const { product, category } = require("../models");

class ProductController {
  static async getAll(req, res) {
    // #swagger.summary = 'get all products'

    try {
      let result = await product.findAll({
        include: [category],
        order: [["id", "DESC"]],
      });

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    // #swagger.summary = 'get products by ID'
    const id = +req.params.id;

    try {
      let result = await product.findByPk(id);

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    // #swagger.summary = 'create new products'
    /*
    #swagger.requestBody = {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              price: {
                type: "integer",
              },
              stock: {
                type: "integer",
              },
              description: {
                type: "string",
              },
              categoryId: {
                type: "integer",
              },
              image: {
                type: "string",
                format: "binary",
              },
            },
            required: ["name"],
          },
        },
      },
    };
    */

    let { name, price, stock, description, categoryId } = req.body;
    let imageName = req.file ? req.file.originalname : null;
    let data = req.file ? req.file.buffer : null;

    // console.log(req.file);
    try {
      let result = await product.create({
        name,
        imageName,
        imageData: data,
        price,
        stock,
        description,
        categoryId,
      });

      const { imageData, ...response } = result.dataValues;
      res
        .status(201)
        .json({ message: "succesfully created", result: response });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async addStock(req, res) {
    // #swagger.summary = 'supposed to be add stock, by product Id'
    // #swagger.ignore = true
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    // #swagger.summary = 'delete products by ID'
    const id = +req.params.id;
    let result = await product.destroy({ where: { id } });

    try {
      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async edit(req, res) {
    // #swagger.summary = 'update products by ID'
    /*
    #swagger.requestBody = {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              price: {
                type: "integer",
                default: 0
              },
              stock: {
                type: "integer",
                default: 0
              },
              description: {
                type: "string",
              },
              categoryId: {
                type: "integer",
              },
              image: {
                type: "string",
                format: "binary",
              },
            },
            required: ["name"],
          },
        },
      },
    };
    */

    const id = +req.params.id;
    const { name, price, stock, description, categoryId } = req.body;
    let imageName = req.file ? req.file.filename : null;
    let imageData = req.file ? req.file.buffer : null;

    try {
      let result = await product.update(
        {
          name,
          imageName,
          imageData,
          price,
          stock,
          description,
          categoryId,
        },
        { where: { id } }
      );

      if (!result[0]) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dirubah` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
