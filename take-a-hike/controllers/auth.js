const User = require('../models').user;
const Trails = require('../models').trails;
const bcrypt = require('bcryptjs');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const createUser = (req, res) => {
    bcrypt.genSalt(10, (err, salt) => {
        if(err) {
            return res.send(err);
        }
        bcrypt.hash(req.body.password, salt, (err, hashedPwd) => {
            if(err) {
                return res.send(err);
            }

            req.body.password = hashedPwd;
            User.create(req.body)
            .then(newUser => {
                const token = jwt.sign (
                    {
                        id: newUser.id,
                        username:  newUser.name
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "10 days"
                    }
                );
                res.status(200).json({
                    "token" : token,
                    "user" : newUser
                })
            })
            .catch(err => {
                res.status(400).send(`ERROR: ${err}`);
            })
        })
    })
}

const verifyUser = (req, res) => {
    User.findByPk(req.user.id, {
        attributes: ['id', 'name', 'updatedAt', 'email', 'password', 'location', 'bio']
    })
    .then(foundUser => {
        res.status(200).json(foundUser);
    })
    .catch(err => {
        res.status(400).send(`ERROR: ${err}`);
    })
}

module.exports = {
    createUser,
    verifyUser,

}