const Financial = require("../models/financial.model");

// Create a new Financial record
exports.create = async (req, res) => {
  const { userId, date, description, amount, category, paymentMethod } =
    req.body;
  const newRecord = {
    userId,
    date,
    description,
    amount,
    category,
    paymentMethod,
  };

  Financial.create(newRecord)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while saving the Financial Record",
      });
    });
};

// Retrieve all financial records
exports.findAll = async (req, res) => {
  Financial.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while retrieving the Financial Records",
      });
    });
};

// Retrieve financial records by user ID
exports.findAllByUserID = async (req, res) => {
  const userId = req.params.userId;
  Financial.findAll({ where: { userId: userId } }) // Ensure the column name matches your model
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      res.status(500).send({
        message:
          error.message ||
          "Some error occurred while retrieving the Financial Records",
      });
    });
};

exports.findOne = async (req, res) => {
  const id = req.params.id; // Assuming you are passing the financial record ID in the URL

  try {
    const data = await Financial.findByPk(id); // Use findByPk to retrieve by primary key
    if (data) {
      res.send(data);
    } else {
      res.status(404).send({
        message: `Cannot find Financial Record with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || `Error retrieving Financial Record with id=${id}.`,
    });
  }
};

exports.update = async (req, res) => {
  const id = req.params.id; // Assuming you are passing the financial record ID in the URL

  try {
    // Find the financial record by primary key (id)
    const financialRecord = await Financial.findByPk(id);

    if (financialRecord) {
      // Update the financial record with the data from the request body
      const updatedRecord = await financialRecord.update(req.body);

      res.send({
        message: `Financial Record with id=${id} was updated successfully.`,
        data: updatedRecord, // Return the updated record
      });
    } else {
      res.status(404).send({
        message: `Cannot find Financial Record with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || `Error updating Financial Record with id=${id}.`,
    });
  }
};

exports.delete = async (req, res) => {
  const id = req.params.id; // Assuming you are passing the financial record ID in the URL

  try {
    // Find the financial record by primary key (id)
    const financialRecord = await Financial.findByPk(id);

    if (financialRecord) {
      // Delete the financial record
      await financialRecord.destroy();

      res.send({
        message: `Financial Record with id=${id} was deleted successfully.`,
      });
    } else {
      res.status(404).send({
        message: `Cannot find Financial Record with id=${id}.`,
      });
    }
  } catch (error) {
    res.status(500).send({
      message:
        error.message || `Error deleting Financial Record with id=${id}.`,
    });
  }
};
{}