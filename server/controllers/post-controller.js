const { Post, User } = require("../models");

const postController = {
  async getAllPosts(req, res) {
    try {
      const postData = await Post.find().sort({ createdAt: -1 });

      res.json(postData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async createPost(req, res) {
    try {
      const postData = await Post.create(req.body);

      const dbUserData = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { posts: postData._id } },
        { new: true }
      );

      if (!dbUserData) {
        return res
          .status(404)
          .json({ message: "Post created but no user with this id!" });
      }

      res.json({ message: "Post successfully created!" });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async addComment(req, res) {},
};

module.exports = postController;
