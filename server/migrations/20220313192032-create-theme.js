"use strict";
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Themes", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            user_id: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
                onDelete: "cascade",
                allowNull: false,
            },
            primary: {
                type: Sequelize.STRING,
                defaultValue: "#6e41e2",
            },
            secondary: {
                type: Sequelize.STRING,
                defaultValue: "#2daf93",
            },
            info: {
                type: Sequelize.STRING,
                defaultValue: "#428bf9",
            },
            success: {
                type: Sequelize.STRING,
                defaultValue: "#27ae60",
            },
            danger: {
                type: Sequelize.STRING,
                defaultValue: "#c7302b",
            },
            gap: {
                type: Sequelize.STRING,
                defaultValue: "1rem",
            },
            padding: {
                type: Sequelize.STRING,
                defaultValue: "0.5rem",
            },
            margin: {
                type: Sequelize.STRING,
                defaultValue: "0.5rem",
            },
            font_base: {
                type: Sequelize.STRING,
                defaultValue: "10px",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Themes");
    },
};
