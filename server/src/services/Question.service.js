const { Question } = require("../db/models");
const { formatResponse } = require("../utils/formatResponse");

class QuestionService {
  static async getQuestionsByTopicId(id) {
    return await Question.findAll({ where: { topicId: id } });
  }
}
module.exports = QuestionService;
