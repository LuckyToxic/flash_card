const indexRouter = require("express").Router();
const { formatResponse } = require("../utils/formatResponse");
const userRoutes = require("./user.routes");

indexRouter.use("/users", userRoutes);
indexRouter.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});
