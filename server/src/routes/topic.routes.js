const topicRoutes = require("express").Router();
const TopicController = require("../controllers/Topic.controller");

topicRoutes.get("/", TopicController.getAllTopics);
topicRoutes.get("/:id", TopicController.getTopicById);

module.exports = topicRoutes;
