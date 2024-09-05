import React from "react";
import { useUser } from "@clerk/clerk-react";
import { useFinancialRecord } from "../../contexts/financial.context";
import AddRecordForm from "./AddRecordForm";
import FinancialReccordTable from "./FinancialRecordTable";

function index() {
  const { user } = useUser();
  const { records } = useFinancialRecord();
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div>Welcome {user?.firstName}! Here are your finance</div>
      <AddRecordForm />
      <div>Total Monthly: 0000฿</div>
      <FinancialReccordTable />
    </div>
  );
}

export default index;
