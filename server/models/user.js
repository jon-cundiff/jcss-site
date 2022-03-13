"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.User.hasMany(models.Theme, {
                as: "themes",
                foreignKey: "user_id",
                onDelete: "CASCADE",
            });
            models.User.hasMany(models.Favorite, {
                as: "favorites",
                foreignKey: "user_id",
                onDelete: "CASCADE",
            });
        }
    }
    User.init(
        {
            username: DataTypes.STRING,
            url: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
