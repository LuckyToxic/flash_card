const indexRouter = require("express").Router();
const { formatResponse } = require("../utils/formatResponse");
const questionRoutes = require("./question.routes");
const topicRoutes = require("./topic.routes");
const userRoutes = require("./user.routes");

indexRouter.use("/users", userRoutes);
indexRouter.use("/topics", topicRoutes);
indexRouter.use("/questions", questionRoutes);

indexRouter.use("*", (req, res) => {
  res
    .status(404)
    .json(formatResponse(404, "Not found", null, "Resource not found"));
});

module.exports = indexRouter;
