import React, { Component } from "react";
import NavBar from "./components/NavBar";
import DaysLeft from "./components/DaysLeft";
import RefreshIcon from "./components/RefreshIcon";
import TodayIncome from "./components/TodayIncome";
import CurrentText from "./components/CurrentText";

const App: React.FC = () => {
  const menuItems = [
    { label: "หน้าหลัก", path: "home" },
    { label: "ประวัติรายได้", path: "IncomeHist" },
    { label: "จัดการบัญชี", path: "Account" },
  ];
  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time
  const handleEditClick = () => {
    // Handle edit action here
    console.log("Edit button clicked!");
  };

  const handleRemoveClick = () => {
    // Handle remove action here
    console.log("Remove button clicked!");
  };

  return (
    <div className="bg-cream font-kanit">
      <NavBar menuItems={menuItems} />
      <div className="flex flex-row justify-between items-center mx-10 my-6 font-['kanit'] ">
        <RefreshIcon dateTime={refreshDateTime} />
        <DaysLeft days={45} />
      </div>
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-10 pb-10"
        id="grid-container"
      >
        {/* Card 1 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md flex flex-col "
          style={{ height: "300px" }}
        >
          <TodayIncome todayIncome={124500} yesterdayIncome={120000} />
        </div>

        {/* Card 2 */}
        <div
          className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          <CurrentText
            Username="Licky"
            Usertext="สวัสดีชาว social cam ig: inwZaa007"
            timeLeft={30}
            imagesrc="https://i.pinimg.com/1200x/de/da/81/deda811e570b5395e8e2affe66e72996.jpg"
            onEditClick={handleEditClick}
            onRemoveCLick={handleRemoveClick}
          />
        </div>

        {/* Card 3 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          <div className="flex flex-col justify-center">
            <h1>กราฟแสดงยอดเงินย้อนหลัง</h1>
            <h2>5 วันล่าสุด</h2>
            <div id="chart">

            </div>
            <div className="flex justify-between"id="buttonLayout">
              <div id="dummy box"></div>
            <button className=" bg-purple hover:bg-purple-100 active:outline-none active:ring active:ring-violet-300 text-white font-kanit p-3 rounded-xl drop-shadow-md">รายละเอียดยอดเงินย้อนหลัง</button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "600px" }}
        >
          Card 4
        </div>

        {/* Card 5 */}
        <div
          className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "600px" }}
        >
          Card 5
        </div>

        {/* Card 6 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "400px" }}
        >
          Card 6
        </div>
      </div>
    </div>
  );
};

export default App;
