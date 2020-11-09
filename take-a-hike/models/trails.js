'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trails.belongsTo(models.user, {foreignKey: 'userId', as: 'AddedTrails'});
      trails.belongsToMany(models.user, {
        as: 'savedtrails',
        through: 'savedtrail',
        foreignKey: 'trailId',
        otherKey: 'userId'
      });
      trails.hasMany(models.review, {foreignKey: 'trailId'});
      // define association here
    }
  };
  trails.init({
    title: DataTypes.STRING,
    trail_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    image: DataTypes.STRING,
    difficulty: DataTypes.STRING,
    description: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    length: DataTypes.FLOAT,
    location: DataTypes.STRING,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'trails',
  });
  return trails;
};