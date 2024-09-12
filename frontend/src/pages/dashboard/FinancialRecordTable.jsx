import  { useState } from 'react';
import { useFinancialRecord } from '../../contexts/financial.context';

const FinancialRecordTable = () => {
  const { records = [], updateRecord = () => {}, deleteRecord = () => {} } = useFinancialRecord() || {};
  const [editRecord, setEditRecord] = useState(null);

  const handleEdit = (record) => {
    setEditRecord(record);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      deleteRecord(id);
    }
  };

  const handleSaveEdit = () => {
    if (editRecord) { 
      updateRecord(editRecord.id, editRecord);
      setEditRecord(null);
    }
  };

  const handleCancelEdit = () => {
    setEditRecord(null);
  };


  return (
    <div className="overflow-x-auto mt-4 pb-6">
      <table className="min-w-full table-auto border-collapse bg-[#F5EDED] shadow-md rounded-lg mb-4">
        <thead className="bg-[#7FA1C3] text-white">
          <tr>
            <th className="px-4 py-2 border-b-2 text-left">User ID</th>
            <th className="px-4 py-2 border-b-2 text-left">Description</th>
            <th className="px-4 py-2 border-b-2 text-left">Date</th>
            <th className="px-4 py-2 border-b-2 text-left">Amount</th>
            <th className="px-4 py-2 border-b-2 text-left">Category</th>
            <th className="px-4 py-2 border-b-2 text-left">Payment Method</th>
            <th className="px-4 py-2 border-b-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={record.id || index} className="bg-[#E2DAD6] hover:bg-[#F5EDED]">
              <td className="px-4 py-2 border-b">{record.userId}</td>
              <td className="px-4 py-2 border-b">{record.description}</td>
              <td className="px-4 py-2 border-b">{record.date}</td>
              <td className="px-4 py-2 border-b">{record.amount}</td>
              <td className="px-4 py-2 border-b">{record.category}</td>
              <td className="px-4 py-2 border-b">{record.paymentMethod}</td>
              <td className="px-4 py-2 border-b">
                <button
                  onClick={() => handleEdit(record)}
                  className="bg-[#6482AD] text-white px-3 py-1 rounded mr-2 hover:bg-[#7FA1C3]"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(record.id)}
                  className="bg-[#6482AD] text-white px-3 py-1 rounded hover:bg-[#7FA1C3]"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editRecord && (
        <div className="bg-[#F5EDED] p-4 rounded-lg shadow-lg mt-6">
          <h3 className="text-lg font-semibold mb-4 text-[#6482AD]">Edit Record</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            handleSaveEdit();
          }} className="flex flex-wrap gap-4">
            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
              <input
                type="text"
                value={editRecord.description}
                onChange={(e) => setEditRecord({ ...editRecord, description: e.target.value })}
                placeholder="Description"
                className="border border-[#7FA1C3] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6482AD] bg-[#F5EDED]"
              />
            </div>

            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="date" className="text-sm font-medium text-gray-700">Date</label>
              <input
                type="date"
                value={editRecord.date}
                onChange={(e) => setEditRecord({ ...editRecord, date: e.target.value })}
                className="border border-[#7FA1C3] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6482AD] bg-[#F5EDED]"
              />
            </div>

            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="amount" className="text-sm font-medium text-gray-700">Amount</label>
              <input
                type="number"
                value={editRecord.amount}
                onChange={(e) => setEditRecord({ ...editRecord, amount: e.target.value })}
                placeholder="Amount"
                className="border border-[#7FA1C3] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6482AD] bg-[#F5EDED]"
              />
            </div>

            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="category" className="text-sm font-medium text-gray-700">Category</label>
              <select
                value={editRecord.category}
                onChange={(e) => setEditRecord({ ...editRecord, category: e.target.value })}
                className="border border-[#7FA1C3] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6482AD] bg-[#F5EDED]"
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

            <div className="flex flex-col w-full md:w-auto">
              <label htmlFor="paymentMethod" className="text-sm font-medium text-gray-700">Payment Method</label>
              <select
                value={editRecord.paymentMethod}
                onChange={(e) => setEditRecord({ ...editRecord, paymentMethod: e.target.value })}
                className="border border-[#7FA1C3] px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6482AD] bg-[#F5EDED]"
              >
                <option value="">Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="creditCard">Credit Card</option>
                <option value="debitCard">Debit Card</option>
                <option value="onlineBanking">Online Banking</option>
              </select>
            </div>

            <div className="flex items-center mt-4 w-full">
              <button
                type="submit"
                className="bg-[#6482AD] text-white px-4 py-2 rounded-md hover:bg-[#7FA1C3] w-full"
              >
                Save
              </button>
            </div>
            <div className="flex items-center mt-4 w-full">
              <button
                type="button"
                onClick={handleCancelEdit}
                className="bg-[#7FA1C3] text-white px-4 py-2 rounded-md hover:bg-[#6482AD] w-full"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}; 

export default FinancialRecordTable;