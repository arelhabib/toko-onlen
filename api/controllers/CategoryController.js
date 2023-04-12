const { category } = require("../models");

class CategoryController {
  static async getAll(req, res) {
    try {
      let result = await category.findAll();

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    try {
      const id = +req.params.id;
      let result = await category.findByPk(id);

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    try {
      let { name } = req.body;
      let result = await category.create({ name });

      res.json({ message: "succesfully created", result });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;
      let result = await category.destroy({ where: { id } });

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
      const { name } = req.body;
      let result = await category.update({ name }, { where: { id } });

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dirubah`, result });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = CategoryController;
