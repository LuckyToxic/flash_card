const UserService = require("../services/User.service");
const { formatResponse } = require("../utils/formatResponse");

class UserController {
  static async create(req, res) {
    const { username } = req.body;

    try {
      const newUser = await UserService.create({ username });
      if (!newUser) {
        return res
          .status(400)
          .json(formatResponse(400, "Failed to create user"));
      }

      return res
        .status(201)
        .json(formatResponse(201, "User successfully created", newUser));
    } catch (error) {
      return res
        .status(500)
        .json(
          formatResponse(500, "Internal server error", null, error.message)
        );
    }
  }
}

module.exports = UserController;
