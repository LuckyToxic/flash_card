const { Question } = require("../db/models");
const { formatResponse } = require("../utils/formatResponse");
const isValidId = require("../utils/isValidId");

class QuestionController {
  static async getQuestionsByTopicId(req, res) {
    try {
      const { id } = req.params;
      if (!isValidId(id)) {
        return res.status(400).json(formatResponse(400, "Invalid topic ID"));
      }
      const questions = await Question.findAll({ where: { topic_id: id } });
      if (!questions.length) {
        return res
          .status(404)
          .json(formatResponse(404, `Question with id ${id} not found`));
      }
      res.status(200).json(formatResponse(200, "success", questions));
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json(formatResponse(500, "Internal server error", null, error));
    }
  }
}

module.exports = QuestionController;
