const route = require("express").Router();
const userRoutes = require("./user");
// const roleRoutes = require();
const productRoutes = require("./product");
const categoryRoutes = require("./category");
const docsRoutes = require("./docs");

route.use("/users", userRoutes
// #swagger.tags = ['Users']
);

// route.use("/roles", roleRoutes);

route.use("/products", productRoutes
// #swagger.tags = ['Product']
);

route.use("/category", categoryRoutes
// #swagger.tags = ['Category']
);

route.use("/docs", docsRoutes);

module.exports = route;
