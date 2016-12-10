const rp = require('request-promise');
const jwt = require('jsonwebtoken');
const User = require('./../models/user');
const config = require('./../config/auth.config');

module.exports = function auth(req, res) {

	const accessTokenUrl = 'https://www.googleapis.com/oauth2/v3/token';
    const peopleApiUrl = 'https://www.googleapis.com/plus/v1/people/me/openIdConnect';
    const params = {
        code: req.body.code,
        client_id: req.body.clientId,
        client_secret: config.googleSecret,
        redirect_uri: req.body.redirectUri,
        grant_type: 'authorization_code'
    };

    rp.post(accessTokenUrl, {json: true, form: params})
    	.then(data => {
    		const headers = {Authorization: `Bearer ${data.access_token}`};

    		rp.get({
    			url: peopleApiUrl,
    			json: true,
    			headers
    		}).then(profile => {
    			processToken(res, profile);
    		}).catch(error => {
     			res.status(500).send(error);
    		});
    	}).catch(error => {
    		res.status(500).send(error);
    	})
};

function processToken(res, profile) {
    User.findOne({sub: profile.sub})
        .then(user => {
            if(!user) {

                const userData = {
                    sub: profile.sub,
                    name: profile.name,
                    picture: profile.picture.replace('sz=50', 'sz=40')
                };

                user = new User(userData);

                user.save()
                    .then(sendJwt(res, userData))
                    .catch(error => {
                        res.status(500).send('ERROR!');
                    });
            } else {
                const userData = {
                    sub: user.sub,
                    name: user.name,
                    picture: user.picture
                };

                sendJwt(res, userData)
            }
        }).catch(error => {
            res.status(500).send(error);
        });
}

function sendJwt(res, userData) {
    jwt.sign(userData, config.googleSecret, {expiresIn: '15m'}, (error, access_token) => {
        if(error) {
            res.status(500).send(error);
        } else {
            res.send({access_token});
        }
    });
}
