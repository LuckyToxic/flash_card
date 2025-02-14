const { Topic } = require("../db/models");

class TopicService {
  static async getAll() {
    return await Topic.findAll();
  }

  static async getById(id) {
    return await Topic.findByPk(id);
  }
}
module.exports = TopicService;
