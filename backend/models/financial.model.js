const { DataTypes } = require("sequelize");
const sequelize = require("./db"); // Import the sequelize instance

const Financial = sequelize.define("financial", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    // You can add validation to ensure the amount is always a positive number
    validate: {
      min: 0
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database
Financial.sync({ force: false }) // Set to true only if you need to drop and recreate the table
  .then(() => {
    console.log("Table created or already exists");
  })
  .catch((error) => {
    console.error("Error creating table", error);
  });

module.exports = Financial;
