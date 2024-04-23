const router = require('express').Router();
const userRoutes = require('./user-routes');
const PostRoutes = require('./post-routes');

router.use('/users', userRoutes);
router.use('/posts', PostRoutes);

module.exports = router;
