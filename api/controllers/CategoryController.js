const { category } = require("../models");

class CategoryController {
  static async getAll(req, res) {
    // #swagger.summary = 'get all category'

    try {
      let result = await category.findAll();

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    // #swagger.summary = 'get category by ID'
    const id = +req.params.id;

    try {
      let result = await category.findByPk(id);

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async create(req, res) {
    // #swagger.summary = 'create new category'
    let { name } = req.body;

    try {
      let result = await category.create({ name });

      res.status(201).json({ message: "succesfully created", result });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    // #swagger.summary = 'delete category by ID'
    const id = +req.params.id;

    try {
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
    // #swagger.summary = 'update category by ID'
    const id = +req.params.id;
    const { name } = req.body;

    try {
      let result = await category.update({ name }, { where: { id } });

      if (!result[0]) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dirubah` });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = CategoryController;
