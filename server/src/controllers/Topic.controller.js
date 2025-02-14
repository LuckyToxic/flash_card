const { formatResponse } = require("../utils/formatResponse");
const TopicService = require("../services/Topic.service");
const isValidId = require("../utils/isValidId");

class TopicController {
  static async getAllTopics(req, res) {
    try {
      const topics = await TopicService.getAll();
      if (topics.length === 0) {
        return res.status(200).json(formatResponse(200, "No topics found",[]));
      }
      res.status(200).json(formatResponse(200,'success',topics));
    } catch (error) {
        console.error(error);
        res.status(500).json(formatResponse(500,'Internal server error',null,error))
        
    }
  }
  static async getTopicById(req,res){
    const {id} = req.params;
    if (!isValidId(id)){
        return res.status(400).json(formatResponse(400,'Invalid topic ID'));
    }
    try {
        const topic = await TopicService.getById(id);
        if(!topic){
            return res.status(404).json(formatResponse(404,`Topic with id ${id} not found`));
            }
            res.status(200).json(formatResponse(200,'success',topic))
    } catch (error) {
        console.error(error);
      res.status(500).json(formatResponse(500, 'Internal server error', null, error));
    }
  }
}
module.exports =TopicController;