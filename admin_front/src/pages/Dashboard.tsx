import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import DaysLeft from "../components/DaysLeft";
import RefreshIcon from "../components/RefreshIcon";
import TodayIncome from "../components/TodayIncome";
import CurrentText from "../components/CurrentText";
import AreaChartCard from "../components/AreaChartCard";
import StoreName from "../components/StoreName";

const Dashboard: React.FC = () => {  
  const TavernData = {
    name: "ABC",
    code: "B394F7",
  };
  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time
  const license = {
    expire: "45"
  }
  const incomeData = {
    total: 120000,
    morethan: -41500,
    morethanper: 3.75,
  };
  const exampleData = {
    username: 'JohnDoe',
    text: 'ง่วงจังเลย',
    time: 45, // 45 minutes
    donate: 1000,
    imagesrc: 'path/to/your/image.jpg', // Optional
  };
  const handleEditClick = () => {
    // Handle edit action here
    console.log("Edit button clicked!");
  };
  const handleRemoveClick = () => {
    // Handle remove action here
    console.log("Remove button clicked!");
  };
  

  return (
    <div className="bg-cream-bg font-kanit">
      <div className="flex justify-between mx-10 pt-5">
        <StoreName store={TavernData} />
        <ToggleSwitch onText="เปิดระบบ" offText="ปิดระบบ" />
      </div>
      <div className="flex flex-row justify-between items-center mx-10 my-6 font-['kanit'] ">
        <RefreshIcon dateTime={refreshDateTime} />
        <DaysLeft Day={license}/>
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
          <TodayIncome incomeData={incomeData} />
        </div>

        {/* Card 2 */}
        <div
          className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
           <CurrentText data={exampleData} onEditClick={handleEditClick} onRemoveClick={handleRemoveClick} />
        </div>

        {/* Card 3 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          <AreaChartCard
            yAxisData={[150, 134, 123, 111, 95, 90, 120]} // Pass Y-axis data as a prop
            xAxisLabels={[
              "12/Sep",
              "13/Sep",
              "14/Sep",
              "15/Sep",
              "16/Sep",
              "17/Sep",
              "18/Sep",
            ]} // Pass X-axis labels as a prop
          />
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

export default Dashboard;
