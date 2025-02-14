const { Question } = require("../db/models");

class QuestionService {
  static async getQuestionsByTopicId(id) {
    return await Question.findAll({ where: { topic_id: id } });
  }
}
module.exports = QuestionService;
