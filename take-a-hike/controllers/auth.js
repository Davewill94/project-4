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
                        username:  newUser.username
                    },
                    process.env.JWT_SECRET,
                    {
                        expiresIn: "10 days"
                    }
                );
                res.cookie("jwt", token);
                // would this now send a response
            })
        })
    })
}

module.exports = {
    createUser
}