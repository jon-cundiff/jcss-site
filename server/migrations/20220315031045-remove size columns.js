"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.removeColumn("Themes", "gap");
        await queryInterface.removeColumn("Themes", "padding");
        await queryInterface.removeColumn("Themes", "margin");
        await queryInterface.removeColumn("Themes", "font_base");
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.addColumn("Themes", "gap", {
            type: Sequelize.STRING,
            defaultValue: "1rem",
        });
        await queryInterface.addColumn("Themes", "padding", {
            type: Sequelize.STRING,
            defaultValue: "0.5rem",
        });
        await queryInterface.addColumn("Themes", "margin", {
            type: Sequelize.STRING,
            defaultValue: "0.5rem",
        });
        await queryInterface.addColumn("Themes", "font_base", {
            type: Sequelize.STRING,
            defaultValue: "10px",
        });
    },
};
