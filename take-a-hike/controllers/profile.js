const User = require('../models').user;
const Trails = require('../models').trails;
const SavedTrails = require('../models').savedtrail;

const editProfile = (req, res) => {
    User.update(req.body, {
        where: {
            id: req.user.id
        },
        returning: true
    })
    .then(() => {
        User.findByPk(req.user.id, {
            attributes: ['id', 'name', 'updatedAt', 'email', 'password', 'location', 'img', 'bio']
        })
        .then(userProfile => {
            res.status(200).json(userProfile);
        })
    })
    .catch(err => {
        res.status(500).send(`ERROR: ${err}`)
    })
  
}

const deleteProfile =(req, res) => {
    SavedTrails.destroy({
        where: {userId: req.user.id}
    })
    .then(() => {
        User.destroy({
            where: {id: req.user.id}
        })
        .then(()=> {
            res.status(200).send(`User deleted`);
        })
        .catch(err => {
            res.status(500).send(`ERROR in Delete User: ${err}`);
        })
    })
    .catch(err => {
        res.status(500).send(`ERROR in Delete Saved Trails: ${err}`);
    })
}

const getSavedTrails = (req, res) => {
    User.findByPk(req.user.id, {
        attributes: ["id"],
        include: [{
            association: 'savedtrails',
            model: Trails,
            attributes: ["id", 'title', 'trail_id', 'type', 'image',
            'difficulty', "description", 'rating', 'length', 'location',
            'lat', 'lng']
        }]
    })
    .then(userSavedTrails => {
        res.status(200).json(userSavedTrails)
    })
    .catch(err => {
        res.status(500).send(`ERROR: ${err}`)
    })
}

const deleteSavedTrail = (req, res) => {
    SavedTrails.destroy({
        where: {
            userId: req.params.userId,
            trailId: req.params.trailId
        }
    })
    .then(()=> {
        res.status(200).send(`User saved trail Deleted`);
    })
    .catch(err => {
        res.status(500).send(`ERROR: ${err}`)
    })

}

const addSavedTrail = (req, res) => {
    
    SavedTrails.create(req.body)
    .then(newSaved => {
        res.status(200).send("Trail added!")
    })
    .catch(err => {
        res.status(500).send(`ERROR: ${err}`)
    })


}

module.exports = {
    editProfile,
    deleteProfile,
    getSavedTrails,
    deleteSavedTrail,
    addSavedTrail
}