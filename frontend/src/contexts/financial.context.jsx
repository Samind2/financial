import { createContext, useContext, useEffect, useState } from "react";
import financialservice from "../service/financial.service";
import { useUser } from "@clerk/clerk-react";

// เปลี่ยนชื่อ Context ให้ถูกต้อง
export const FinancialRecordContext = createContext();

export const FinancialRecordsProvider = ({ children }) => {
    const [records, setRecords] = useState([]);
    const { user } = useUser();
    
    const fetchRecords = async () => {
        if (!user) return;
        try {
            const response = await financialservice.getAllFinancialRecordsByUserId(user.id);
            if (response.status === 200) {
                setRecords(response.data);
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
  

    const updateRecord = async (id, newRecord) => {
        try {
            const response = await financialservice.updateFinancialRecord(id, newRecord);
            if (response.status === 200) {
                setRecords((prev) =>
                    prev.map((record) =>
                        record.id === id ? { ...record, ...response.data } : record
                    )
                );
            }
        } catch (error) {
            console.log(error);
        }
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

// ส่งออก hook สำหรับการใช้ context
export const useFinancialRecord = () => useContext(FinancialRecordContext);
