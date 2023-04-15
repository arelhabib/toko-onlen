require("dotenv").config(); // besok lagi jan lupa tanda kurung
//render.com connect host via lokal gajalan, tpi bisa migrate

module.exports = {
  development: {
    username: "postgres",
    password: "admin",
    database: "store_api_dev",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "admin",
    database: "store_api_dev",
    host: "127.0.0.1",
    dialect: "postgres",
    logging: false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
