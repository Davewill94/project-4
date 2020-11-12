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
    console.log("Made Request")
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
            console.log("Finished Request")
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

const bulkTrailPost = (req, res) => {
    // console.log(req.body)
    // async (queryInterface, Sequelize) => {
    //     await queryInterface.bulkInsert('trails', req.body, {});
    //   }
    req.body.forEach((trail) => {
        Trail.create(trail)
        .then(()=> {
            res.status(200).send("Trail Created");
        })
        .catch(err => {
            res.status(400).send(`ERROR: ${err}`);
        })
    })
}

module.exports = {
    GetTrails,
    GetTrail,
    bulkTrailPost
}