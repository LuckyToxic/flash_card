const { Question } = require("../db/models");

class QuestionService {
  static async getQuestionsByTopicId(id) {
    return await Question.findAll({ where: { topicId: id } });
  }
}
module.exports = QuestionService;
