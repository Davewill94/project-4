const review = require('./review');

const Trail = require('../models').trails;
const User = require('../models').user;
const Review = require('../models').review;

const GetTrails = (req, res) => {
    // console.log(req)
    Trail.findAll()
    .then(trail => {
        res.status(200).send(trail)
        // res.send(trail);
    })
    .catch((err) => {
        res.send(err)
        res.send("Request, Failed")
    })
}

const GetTrail = (req, res) => {
    Trail.findByPk(req.params.index)
    .then(foundTrail => {
        Review.findAll({
            where: {trailId: foundTrail.id},
            include: [{
                model: User,
                attributes:['name']
            }],
            order: [['createdAt', "DESC"]]
        })
        .then(reviews => {
            let reviewArray = [...reviews];
            let response = {...foundTrail, reviewArray};
            res.status(200).send(response)
        })
        .catch((err) => {
            res.send(err)
            res.send("Request, Failed")
        })
    })
}

module.exports = {
    GetTrails,
    GetTrail
}