const { Op } = require("sequelize");
const { user, role } = require("../models");
const bcrypt = require("../helpers/bcrypt");
const jwt = require("../helpers/jwt");

class UserController {
  static async getAll(req, res) {
    // #swagger.summary = 'get all users'

    try {
      let result = await user.findAll({
        include: [role],
        order: [["id", "DESC"]],
      });

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
    // #swagger.summary = 'login to get access token'
    // #swagger.description = 'you can use between combination of username:password or email:password, or both'
    let username = req.body.username || "";
    let email = req.body.email || "";
    let password = req.body.password || "";

    try {
      let findUser = await user.findOne({
        where: { [Op.or]: [{ username }, { email }] },
      });

      if (!findUser) {
        return res
          .status(404)
          .json({ message: "email/username not found or registered" });
      }

      if (!(await bcrypt.decryptPass(password, findUser.password))) {
        return res.status(403).json({ message: "password invalid" });
      }

      let access_token = await jwt.tokenGenerate(findUser);
      res.json({ access_token });
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
