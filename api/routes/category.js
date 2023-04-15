const route = require("express").Router();
const CategoryController = require("../controllers/CategoryController");

route.get("/", CategoryController.getAll);
route.get("/:id", CategoryController.getById);
route.post("/", CategoryController.create);
route.delete("/:id", CategoryController.delete);
route.put("/:id", CategoryController.edit);

module.exports = route;
