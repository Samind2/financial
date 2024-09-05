import React, { useState } from "react"; // นำเข้า useState จาก React

function Add() {


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center mb-4">Add Financial Record</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="input input-bordered flex items-center gap-2">
          User ID
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="User ID"
            name="userId"
            onChange={handleChange}
            value={financialRecord.userId}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Date
          <input
            type="date"
            className="grow p-2 border border-gray-300 rounded"
            name="date"
            onChange={handleChange}
            value={financialRecord.date}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Description
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Description"
            name="description"
            onChange={handleChange}
            value={financialRecord.description}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Amount
          <input
            type="number"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Amount"
            name="amount"
            onChange={handleChange}
            value={financialRecord.amount}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Category
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Category"
            name="category"
            onChange={handleChange}
            value={financialRecord.category}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          Payment Method
          <input
            type="text"
            className="grow p-2 border border-gray-300 rounded"
            placeholder="Payment Method"
            name="paymentMethod"
            onChange={handleChange}
            value={financialRecord.paymentMethod}
          />
        </label>
        <button
          className="btn btn-success bg-green-500 text-white py-2 px-4 rounded mx-auto block"
          type="submit"
        >
          Add Financial Record
        </button>
      </form>
    </div>
  );
}

export default Add;
