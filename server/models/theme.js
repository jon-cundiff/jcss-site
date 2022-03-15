"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Theme extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Theme.belongsTo(models.User);
            models.Theme.hasMany(models.Favorite, {
                as: "favorites",
                foreignKey: "theme_id",
                onDelete: "CASCADE",
            });
        }
    }
    Theme.init(
        {
            user_id: DataTypes.INTEGER,
            primary: DataTypes.STRING,
            secondary: DataTypes.STRING,
            info: DataTypes.STRING,
            success: DataTypes.STRING,
            danger: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Theme",
        }
    );
    return Theme;
};
