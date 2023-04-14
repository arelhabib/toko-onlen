const route = require("express").Router();
const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");
const ProductController = require("../controllers/ProductController");

route.get("/", ProductController.getAll);
route.post("/", auth, upload, ProductController.create);
route.post("/:id", ProductController.addStock);
route.delete("/:id", ProductController.delete);
route.put("/:id", ProductController.edit);
route.get("/:id", ProductController.getById);

module.exports = route;
