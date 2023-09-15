import React from "react";
import NavBar from "./components/NavBar";
import DaysLeft from "./components/DaysLeft";
import RefreshIcon from "./components/efreshIcon";

const App: React.FC = () => {
  const menuItems = [
    { label: "หน้าหลัก", path: "home" },
    { label: "ประวัติรายได้", path: "IncomeHist" },
    { label: "จัดการบัญชี", path: "Account" },
  ];
  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time

  return (
    <div>
      <NavBar menuItems={menuItems} />
      <div className="flex flex-row justify-between items-center my-3 font-['kanit'] mb-px ml-16 mr-12">
        <RefreshIcon dateTime={refreshDateTime} />
        <DaysLeft days={45} />
      </div>
    </div>
  );
};

export default App;
