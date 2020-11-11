'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.hasMany(models.trails, {foreignKey: 'userId', as: 'AddedTrails'});
      user.belongsToMany(models.trails, {
        as: 'savedtrails',
        through: 'savedtrail',
        foreignKey: 'userId',
        otherKey: 'trailId'
      });
      user.hasMany(models.review, {foreignKey: 'userId'});
      // define association here
    }
  };
  user.init({
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    img: DataTypes.STRING,
    bio: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};