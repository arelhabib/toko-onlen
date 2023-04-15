const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../public/docs/swagger-output.json");

const options = {
  swaggerOptions: {
    url: "/docs/swagger.json",
  },
  customSiteTitle: "Store API",
};

router.get("/swagger.json", (req, res) => {
  res.send(swaggerDocument);
  //#swagger.ignore = true
});

router.use(
  "/",
  swaggerUi.serveFiles(null, options),
  swaggerUi.setup(null, options)
);

module.exports = router;
