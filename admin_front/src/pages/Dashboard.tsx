import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import DaysLeft from "../components/DaysLeft";
import RefreshIcon from "../components/RefreshIcon";
import TodayIncome from "../components/TodayIncome";
import CurrentText from "../components/CurrentText";
import AreaChartCard from "../components/AreaChartCard";
import StoreName from "../components/StoreName";
import TopDonaterList from "../components/TopDonaterList";

const Dashboard: React.FC = () => {
  const TavernData = {
    name: "ABC",
    code: "B394F7",
  };
  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time
  const license = {
    expire: "45",
  };
  const incomeData = {
    total: 120000,
    morethan: +41500,
    morethanper: +3.75,
  };
  const exampleData = {
    username: "JohnDoe",
    text: "วันหยุดสั้น ๆ ก็อยากคั่นความเครียดจากงานด้วยการพาตัวเองไปสูดอากาศดี ๆ หรือทำกิจกรรมสนุก ๆ ที่ผ่อนคลาย และยิ่งถ้าอยู่ใกล้กรุงเทพฯ ได้ก็ยิ่งเลิฟ",
    imagesrc:
      "https://i.pinimg.com/1200x/de/da/81/deda811e570b5395e8e2affe66e72996.jpg",
    time: 45, // 45 minutes
    donate: 1000,
  };
  const handleEditClick = () => {
    // Handle edit action here
    console.log("Edit button clicked!");
  };
  const handleRemoveClick = () => {
    // Handle remove action here
    console.log("Remove button clicked!");
  };
  const topDonaters = [
    { username: "user1", donate: 26000 },
    { username: "user2", donate: 83000 },
    { username: "user3", donate: 2000 },
    { username: "user4", donate: 35000 },
    { username: "user5", donate: 84000 },
    { username: "user6", donate: 28000 },
    { username: "user7", donate: 43000 },
    { username: "user8", donate: 86000 },
    { username: "user9", donate: 52000 },
    { username: "user10", donate: 8000 },
  ];

  return (
    <div className="bg-cream-bg font-kanit">
      <div className="flex justify-between mx-10 pt-5">
        <StoreName store={TavernData} />
        <ToggleSwitch onText="เปิดระบบ" offText="ปิดระบบ" />
      </div>
      <div className="flex flex-row justify-between items-center mx-10 my-6 font-['kanit'] ">
        <RefreshIcon dateTime={refreshDateTime} />
        <DaysLeft Day={license} />
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
          <CurrentText
            data={exampleData}
            onEditClick={handleEditClick}
            onRemoveClick={handleRemoveClick}
          />
        </div>

        {/* Card 3 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          <AreaChartCard
            yAxisData={[150, 134, 123, 111, 95, 90, 120]}
            xAxisLabels={[
              "12/Sep",
              "13/Sep",
              "14/Sep",
              "15/Sep",
              "16/Sep",
              "17/Sep",
              "18/Sep",
            ]}
          />
        </div>

        {/* Card 4 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-96"
        >
          <TopDonaterList topDonaters={topDonaters} />
        </div>

        {/* Card 5 */}
        <div
          className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md h-96"
        >
          Card 5
        </div>

        {/* Card 6 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-96"
        >
          Card 6
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
