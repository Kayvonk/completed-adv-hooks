const { Schema, model } = require("mongoose");

const commentSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    commentDescription: { type: String, required: "Please enter some text" },
  },
  {
    id: false,
  }
);

const postSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    
    postDescription: {
      type: String,
      required: "Please enter some text",
    },
    comments: [commentSchema],
  },
  {
    id: false,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
