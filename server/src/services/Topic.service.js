const { Topic } = require("../db/models");

class TopicService {
  static async getAll() {
    return await Topic.findAll();
  }

  static async getById(topicId) {
    return await Topic.findByPk(topicId);
  }
}
module.exports = TopicService;
