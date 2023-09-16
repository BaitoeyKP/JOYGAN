import React from "react";
import NavBar from "./components/NavBar";
import DaysLeft from "./components/DaysLeft";
import RefreshIcon from "./components/RefreshIcon";

const App: React.FC = () => {
  const menuItems = [
    { label: "หน้าหลัก", path: "home" },
    { label: "ประวัติรายได้", path: "IncomeHist" },
    { label: "จัดการบัญชี", path: "Account" },
  ];
  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time

  return (
    <div className="bg-cream">
      <NavBar menuItems={menuItems} />
      <div className="flex flex-row justify-between items-center mx-10 my-6 font-['kanit'] ">
        <RefreshIcon dateTime={refreshDateTime} />
        <DaysLeft days={45} />
      </div>
      <div className="grid grid-cols-4 gap-4 mx-10 pb-10">
        {/* Card 1 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md" style={{ height: "200px" }}>
          Card 1
        </div>
        
        {/* Card 2 */}
        <div className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md" style={{ height: "200px" }}>
          Card 2
        </div>
        
        {/* Card 3 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md" style={{ height: "200px" }}>
          Card 3
        </div>
        
        {/* Card 4 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md" style={{ height: "600px" }}>
          Card 4
        </div>
        
        {/* Card 5 */}
        <div className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md" style={{ height: "600px" }}>
          Card 5
        </div>
        
        {/* Card 6 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md" style={{ height: "400px" }}>
          Card 6
        </div>
      </div>
    </div>
  );
};

export default App;
