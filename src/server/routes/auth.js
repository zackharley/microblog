const {Router} = require('express');
const jwt = require('express-jwt');
const authController  = require('./../controllers/auth');
const router = Router();

router.post('/auth/google', jwt({
	secret: 'OSmHJL41a0WcXWtjdQB0XL8M',
	credentialsRequired: false
}), authController);

module.exports = router;
