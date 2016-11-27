const {Router} = require('express');
const postsController  = require('./../controllers/posts');
const router = Router();

router.get('/posts', postsController);

module.exports = router;
