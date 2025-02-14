const userRoutes = require("express").Router();
const UserController = require("../controllers/User.controller");

userRoutes.post("/", UserController.create);

module.exports = userRoutes;
