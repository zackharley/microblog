const {Router} = require('express');
const postsController  = require('./../controllers/posts');
const router = Router();

router.get('/posts/:user', postsController);

module.exports = router;
