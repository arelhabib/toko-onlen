const { product, category } = require("../models");

class ProductController {
  static async getAll(req, res) {
    try {
      let result = await product.findAll({ include: [category] });

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await product.findByPk(id);

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      let { name, price, stock, description, categoryId } = req.body;

      let result = await product.create({
        name,
        imageName: req.file.originalname || null,
        imageData: req.file.buffer || null,
        price,
        stock,
        description,
        categoryId,
      });

      res.json({ message: "succesfully created", result });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async addStock(req, res) {
    try {
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await product.destroy({ where: { id } });

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, price, stock, description, categoryId } = req.body;
      let result = await product.update(
        {
          name,
          imageName: req.file.originalname || null,
          imageData: req.file.buffer || null,
          price,
          stock,
          description,
          categoryId,
        },
        { where: { id } }
      );

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dirubah`, result });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = ProductController;
