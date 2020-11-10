const User = require('../models').user;
const Trails = require('../models').trails;
const SavedTrails = require('../models').savedtrail;

const getAllUsers = (req,res) => {
    console.log("Made it to request")
    User.findAll()
    .then(users => {
        // res.status(200).send('OK')
        res.send(users);
    })
    .catch((err) => {
        res.send(err)
        res.send("Request, Failed")
    })
}

module.exports = {
    getAllUsers
}