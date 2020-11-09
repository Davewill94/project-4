'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class savedtrail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  savedtrail.init({
    userId: DataTypes.INTEGER,
    trailId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'savedtrail',
  });
  return savedtrail;
};