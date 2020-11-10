const Review = require('../models').review;
const User = require('../models').user;
const Trails = require('../models').trails;


const getAllReviews = (req,res) => {
    console.log("Made it to request")
    Review.findAll()
    .then(reviews => {
        // res.status(200).send('OK')
        res.send(reviews);
    })
    .catch((err) => {
        res.send(err)
        res.send("Request, Failed")
    })
}

module.exports = {
    getAllReviews
}