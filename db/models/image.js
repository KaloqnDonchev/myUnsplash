const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
      "image",
      {
        id: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER
        },
        label: {
          allowNull: false,
          type: DataTypes.STRING
        },
        type: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        size: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        data: {
          allowNull: false,
          type: DataTypes.BLOB("long"),
        },
        createdAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
      },
      {
        timestamps: true,
        freezeTableName: true,
      }
  )
}