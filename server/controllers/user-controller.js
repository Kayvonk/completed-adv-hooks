const { User, Post } = require('../models');

const userController = {
  async getAllUsers(req, res) {
    try {
      const userData = await User.find()
        .select('-__v').populate("posts")

      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createUser(req, res) {
    try {
      const userData = await User.create(req.body);
      res.json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
}


module.exports = userController;
