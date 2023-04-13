const { user, role } = require("../models");

class UserController {
  static async getAll(req, res) {
    // #swagger.summary = 'get all users'

    try {
      let result = await user.findAll({ include: [role], order: [] });

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async getById(req, res) {
    // #swagger.summary = 'get users by ID'
    const id = +req.params.id;

    try {
      let result = await user.findByPk(id);

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async register(req, res) {
    // #swagger.summary = 'create/register new users'
    let { username, email, password, roleId } = req.body;

    try {
      let result = await user.create({ username, email, password, roleId });

      res.status(201).json({ message: "succesfully registered", result });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async login(req, res) {
    try {
      let { username, email, password } = req.body;
      let result = await user.findOne({ username, email });

      res.json({ message: "succesfully registered", result });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async delete(req, res) {
    // #swagger.summary = 'delete users by ID'
    const id = +req.params.id;

    try {
      let result = await user.destroy({ where: { id } });

      if (!result) {
        return res.status(404).json({ message: `id ${id} tidak ditemukan` });
      }

      res.json({ message: `id ${id} berhasil dihapus` });
    } catch (error) {
      res.status(500).json(error);
    }
  }

  static async edit(req, res) {
    // #swagger.summary = 'update users by ID'
    const id = +req.params.id;
    const { username, email, password, roleId } = req.body;

    try {
      let result = await user.update(
        { username, email, password, roleId },
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

module.exports = UserController;
