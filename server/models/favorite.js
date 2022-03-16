"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Favorite extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // models.Favorite.belongsTo(models.User, { foreignKey: "id" });
            // models.Favorite.belongsTo(models.Theme), { foreignKey: "id" };
        }
    }
    Favorite.init(
        {
            user_id: DataTypes.INTEGER,
            theme_id: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Favorite",
        }
    );
    return Favorite;
};
