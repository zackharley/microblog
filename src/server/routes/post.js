const {Router} = require('express');
const postAddController = require('./../controllers/post-add');
const postDeleteController = require('./../controllers/post-delete');

const router = Router();

router.post('/post/add', postAddController);

router.delete('/post/delete', postDeleteController);

module.exports = router;
