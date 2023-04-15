const route = require("express").Router();
const UserController = require("../controllers/UserController");

route.get("/", UserController.getAll);
route.get("/:id", UserController.getById);
route.post("/register", UserController.register);
route.post("/login", UserController.login);
route.delete("/:id", UserController.delete);
route.put("/:id", UserController.edit);

module.exports = route;
