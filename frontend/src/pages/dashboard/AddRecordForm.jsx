
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecord } from "../../contexts/financial.context";
import { useState } from "react";

const AddRecordForm = () => {
  const [financial, setFinancial] = useState({
    category: '',
    date: '',
    description: '',
    amount: '',
    paymentMethod: ''
  });
  const { addRecord } = useFinancialRecord();
  const { user } = useUser();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFinancial({ ...financial, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check if all fields are filled
    if (!financial.category || !financial.date || !financial.description || !financial.amount || !financial.paymentMethod) {
      Swal.fire({
        title: 'Error',
        text: 'Please fill out all fields',
        icon: 'error'
      });
      return; // Return early if validation fails
    }

    const record = { ...financial, userId: user.id };

    try {
      // Call addRecord from context to update state
      await addRecord(record);
      
      Swal.fire({
        title: 'Success',
        text: 'Record added successfully',
        icon: 'success'
      }).then(() => {
        navigate('/'); // Navigate after successful addition
      });
      
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to add record',
        icon: 'error'
      });
    }
  };

  return (
    <div className="bg-[#F5EDED] p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-[#6482AD] mb-6">Add Financial Record</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            id="category"
            name="category"
            value={financial.category}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-[#7FA1C3] rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6482AD]"
            required
          >
            <option value="">Select Category</option>
            <option value="อาหาร">อาหาร</option>
            <option value="ขนมทานเล่น">ขนมทานเล่น</option>
            <option value="น้ำดื่ม">น้ำดื่ม</option>
            <option value="ของใช้">ของใช้</option>
            <option value="เสื้อผ้า">เสื้อผ้า</option>
            <option value="เครื่องใช้ไฟฟ้า">เครื่องใช้ไฟฟ้า</option>
            <option value="สุขภาพ">สุขภาพ</option>
            <option value="อื่นๆ">อื่นๆ</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={financial.date}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-[#7FA1C3] rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6482AD]"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={financial.description}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-[#7FA1C3] rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6482AD]"
            placeholder="Enter Description"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={financial.amount}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-[#7FA1C3] rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6482AD]"
            placeholder="Enter Amount"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={financial.paymentMethod}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-[#7FA1C3] rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#6482AD]"
            required
          >
            <option value="">Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="onlineBanking">Online Banking</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#6482AD] text-white py-3 rounded-md hover:bg-[#7FA1C3] focus:outline-none focus:ring-2 focus:ring-[#7FA1C3]"
        >
          Add Record
        </button>
      </form>
    </div>
  );
};

export default AddRecordForm;
