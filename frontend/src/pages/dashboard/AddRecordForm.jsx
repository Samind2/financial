import React, { useState } from "react";
import { useFinancialRecord } from "../../contexts/financial.context";

function AddRecordForm() {
  const { addRecord } = useFinancialRecord();
  const [record, setRecord] = useState({
    amount: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecord((prevRecord) => ({
      ...prevRecord,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addRecord(record);
      // Clear the form or handle success
      setRecord({ amount: "", description: "", date: "" });
    } catch (error) {
      console.error("Error adding record:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg">
      <h2 className="text-lg font-semibold mb-2">Add New Record</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="amount">
          Amount
        </label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={record.amount}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          id="description"
          name="description"
          value={record.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1" htmlFor="date">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={record.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add Record
      </button>
    </form>
  );
}

export default AddRecordForm;
