import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import DaysLeft from "../components/DaysLeft";
import RefreshIcon from "../components/RefreshIcon";
import TodayIncome from "../components/TodayIncome";
import CurrentText from "../components/CurrentText";
import AreaChartCard from "../components/AreaChartCard";
import StoreName from "../components/StoreName";
import TopDonaterList from "../components/TopDonaterList";
import ConfirmDialog from "../components/ConfirmDialog";
import QRCodeDisplay from "../components/QRCodeDisplay";
import IconButton from "../components/IconButton";

const Dashboard: React.FC = () => {
  //outside grid
  const TavernData = {
    name: "ABC",
    code: "B394F7",
  };
  const refreshDateTime = "15/09/2023 23:43"; // Replace with your actual date and time
  const license = {
    expire: "45",
  };
  //card 1
  const incomeData = {
    total: 120000,
    morethan: +41500,
    morethanper: +3.75,
  };
  //card 2
  // State to control the visibility of the confirmation dialog
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
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
    // Display the confirmation dialog
    setShowConfirmDialog(true);
  };
  // Function to handle confirmation of removal
  const handleConfirmRemove = () => {
    // Handle the removal action here
    console.log("Removing...");

    // Hide the confirmation dialog
    setShowConfirmDialog(false);
  };

  // Function to handle canceling removal
  const handleCancelRemove = () => {
    console.log("Canceling...");
    // Hide the confirmation dialog
    setShowConfirmDialog(false);
  };
  //card 3
  const chartData = {
    xAxisLabels: [
      "12/Sep",
      "13/Sep",
      "14/Sep",
      "15/Sep",
      "16/Sep",
      "17/Sep",
      "18/Sep",
    ],
    yAxisData: [150, 134, 123, 111, 95, 90, 120],
  };
  //card 4
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
  //card 5

  //card 6
  const handleQrClick = () => {
    console.log("Qr button clicked!");
  };
  const account = {
    name: "สุปรีญา อรุณฉาย",
    number: "7070148614333071",
  };

  return (
    <div className="bg-cream-bg font-kanit p-6">
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
          <AreaChartCard chartData={chartData} />
        </div>

        {/* Card 4 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-96">
          <TopDonaterList topDonaters={topDonaters} />
        </div>

        {/* Card 5 */}
        <div className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md h-96">
          <div className=" flex flex-col items-center space-y-2">
            <h1 className=" text-xl font-bold  mt-2">ข้อความถัดไป</h1>
            <div className="border-solid border-black border-2 rounded-md p-2 flex flex-row justify-around">
              <div>
                <h2>@UsernameA</h2>
                <h3>
                  เฟรช อุรังคธาตุ แฟลช เจ๊าะแจ๊ะซิ้ม งั้น แบคโฮซังเตฮาราคีรี
                  เซอร์วิสสกรัมจุ๊ยจ๊อกกี้
                </h3>
              </div>
              <div className="w-24 mx-4">
                <img
                  className="rounded-lg"
                  src="https://www.npg.org.uk/assets//image-cache//npg-image-crops/square.45371ee7.x222907_2022_cropped_yevonde.8609c98b.webp"
                />
              </div>
              <div>
                <div>time</div>
                <div>money</div>
                <IconButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M10 5h4a2 2 0 1 0-4 0ZM8.5 5a3.5 3.5 0 1 1 7 0h5.75a.75.75 0 0 1 0 1.5h-1.32l-1.17 12.111A3.75 3.75 0 0 1 15.026 22H8.974a3.75 3.75 0 0 1-3.733-3.389L4.07 6.5H2.75a.75.75 0 0 1 0-1.5H8.5Zm2 4.75a.75.75 0 0 0-1.5 0v7.5a.75.75 0 0 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-7.516 9.467a2.25 2.25 0 0 0 2.24 2.033h6.052a2.25 2.25 0 0 0 2.24-2.033L18.424 6.5H5.576l1.158 11.967Z"
                      />
                    </svg>
                  }
                  text="ลบ"
                  onClick={handleRemoveClick}
                  bgColor="red-cancel"
                  hoverColor="dark-red-cancel"
                />
              </div>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-96">
          <QRCodeDisplay account={account} />
        </div>
      </div>
      {/* ConfirmDialog component */}
      {showConfirmDialog && (
        <ConfirmDialog
          message="Are you sure you want to remove?"
          onConfirm={handleConfirmRemove}
          onCancel={handleCancelRemove}
        />
      )}
    </div>
  );
};

export default Dashboard;
