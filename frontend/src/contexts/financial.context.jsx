import React, { createContext, useContext, useState, useEffect } from "react";
import financialservice from "../service/financial.service";
import { useUser } from "@clerk/clerk-react";

export const FinancialRecordContext = createContext();

export const FinancialRecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user?.id) return;
    try {
      const response = await financialservice.getAllFinancialRecordsByUserId(user.id);
      console.log(response.data); // Log the response to verify
      if (response.status === 200) {
        setRecords(response.data); // Assuming it's an array
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record) => {
    try {
      const response = await financialservice.createFinancialRecord(record);
      if (response.status === 200) {
        setRecords((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateRecord = (id, updatedRecord) => {
    setRecords((prevRecords) =>
      prevRecords.map((record) =>
        record.id === id ? updatedRecord : record
      )
    );
  };


  const deleteRecord = async (id) => {
    try {
      const response = await financialservice.deleteFinancialRecord(id);
      if (response.status === 200) {
        setRecords((prev) => prev.filter((record) => record.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FinancialRecordContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecords = () => useContext(FinancialRecordContext);