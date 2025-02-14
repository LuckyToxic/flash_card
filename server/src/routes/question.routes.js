const questionRoutes = require("express").Router();
const QuestionController = require("../controllers/Question.controller");

questionRoutes.get("/:id", QuestionController.getQuestionsByTopicId);

module.exports = questionRoutes;
