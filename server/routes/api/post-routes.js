const router = require('express').Router();
const {
  getAllPosts,
  createPost,
} = require('../../controllers/post-controller');

router.route('/').get(getAllPosts).post(createPost);

module.exports = router;
