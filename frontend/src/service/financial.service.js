import api from "./api";
const VITE_FINANCIAL_API_URL = import.meta.env.VITE_FINANCIAL_API_URL;

const getAllFinancialRecords = async () => {
  return await api.get(`${VITE_FINANCIAL_API_URL}`);
};

const getAllFinancialRecordsByUserId = async (userId) => {
  return await api.get(`${VITE_FINANCIAL_API_URL}/user/${userId}`);
};

const getFinancialRecordById = async (id) => {
  return await api.get(`${VITE_FINANCIAL_API_URL}/${id}`);
};

const createFinancialRecord = async (record) => {
  return await api.post(`${VITE_FINANCIAL_API_URL}`, record);
};

const updateFinancialRecord = async (id, record) => {
  return await api.put(`${VITE_FINANCIAL_API_URL}/${id}`, record);
};

const deleteFinancialRecord = async (id) => {
  return await api.delete(`${VITE_FINANCIAL_API_URL}/${id}`);
};

const financialservice = {
  getAllFinancialRecords,
  getAllFinancialRecordsByUserId,
  getFinancialRecordById,
  createFinancialRecord,
  updateFinancialRecord,
  deleteFinancialRecord,
};

export default financialservice;
