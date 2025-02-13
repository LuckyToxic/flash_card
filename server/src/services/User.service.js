const { User } = require("../db/models");

class UserService {
  static async create(data) {
    return await User.create(data);
  }
}

module.exports = UserService;
