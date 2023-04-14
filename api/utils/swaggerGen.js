const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    title: "Store API", // by default: 'REST API'
    description: "file json diatas bisa diimport ke imsomnia/postman", // by default: ''
  },
  servers: [
    {
      url: "http://localhost:3000",
      description: "local server",
    },
    {
      url: "http://localhost:5000",
      description: "the other server",
    },
  ],
  tags: [{ name: "Users" }, { name: "Product" }, { name: "Category" }],
  definitions: {
    RegisterUser: {
      username: "john",
      $email: "john@mail.com",
      $password: "johnpassword",
    },
    RegisterAdmin: {
      username: "admini",
      $email: "admini@mail.com",
      $password: "adminpassword",
      roleId: 1,
    },
    login: {
      username: "john",
      email: "john@mail.com",
      $password: "johnpassword",
    },
  },
};

const outputFile = "./public/docs/swagger-output.json";
const endpointsFiles = ["./app.js"];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
