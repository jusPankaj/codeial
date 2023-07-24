const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

router.get('/', usersController.profile);

module.exports = router;

// const express = require('express');
// const router = express.Router();

// const postsController = require('../controllers/posts_controller');


// router.get('/' , postsController.posts);

// module.exports = router;