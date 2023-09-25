import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import DaysLeft from "../components/DaysLeft";
import RefreshIcon from "../components/RefreshIcon";
import TodayIncome from "../components/TodayIncome";
import CurrentText from "../components/CurrentText";
import AreaChartCard from "../components/AreaChartCard";
import StoreName from "../components/StoreName";
import TopDonaterList from "../components/TopDonaterList";
import IconButton from "../components/IconButton";
import QRCodeDisplay from "../components/QRCodeDisplay";
import ConfirmDialog from "../components/ConfirmDialog";
import QueueComponent from "../components/Queue";

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
  //card 1 data and function
  const incomeData = {
    total: 120000,
    morethan: +41500,
    morethanper: +3.75,
  };
  //card 2 data and function
  // State to control the visibility of the confirmation dialog
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const exampleData = {
    username: "JohnDoe",
    text: "ก็พบกันอีกเช่นเคยนะครับ สำหรับท่านที่เดินผ่านไปผ่านมานะครับ วันนี้ เฉาก๊วยชากังราวของเรานะครับ ก็ได้มาบริการท่านพ่อแม่พี่น้องอีกแล้วครับ อากาศร้อนร๊อนอย่างนี้นะครับ สำหรับท่านที่เดินผ่านไปผ่านมานะครับ ลองมาแวะชิมเฉาก๊วยแท้แท้กันก่อนนะครับ เฉาก๊วยชากังราวของเรานะครับ เป็นที่รู้จักไปทั่วนะครับ เฉาก๊วยนั้นนะครับ เป็นพืชสมุนไพรจีนนะครับ ที่นำเข้าจากประเทศจีนนะครับ เรานำเข้าจากประเทศจีน ก็ลองมาชิมเฉาก๊วยกันแท้ๆกัน ดูซิว่า เฉาก๊วยแท้เนี่ยกับเฉาก๊วยตามท้องตลาดนั้น มันแตกต่างกันยังไง นะครับ สำหรับท่านที่ยังไม่เคยรับประทานเฉาก๊วยแท้ๆ ก็ลองแวะมาชิมกันก่อน เฉาก๊วยนั้นน่ะครับนอกจากอร่อยแล้ว ก็ยังมีประโยชน์กับร่างกายด้วยนะครับ เช่น แก้ร้อนใน แก้ไข้หวัดนะครับ ลดความ ดันโลหิตสูง แก้กล้ามเนื้ออักเสบ ข้ออักเสบ ตับอักเสบ แล้วก็เบาหวาน อันนี้คือประโยชน์ของเฉาก๊วยนะครับ เราอยากให้ท่านได้กินของที่มีประโยชน์กับร่างกาย ก็ลองแวะมาชิมกันก่อนนะครับ อากาศร้อนร๊อน หรือว่าอากาศไม่ร้อนก็กินกันได้นะครับ บางคนบอกอากาศเย็นกินได้ไหม อากาศเย็นๆก็กินได้นะครับ คือเฉาก๊วยเนี่ยกินแล้วแก้ร้อนในได้นะครับ",
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
  //card 3 data and function
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
  //card 4 data and function
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
  //card 5 data and function
  const queueData = [
    {
      id: 'Qid1',
      username: 'UsernameA', // Include the username here
      text: 'ง่วงจังเลย',
      time: 120,
      donate: 10000,
      timestamp: 13324564,
      imageSrc: 'https://picsum.photos/200/300',
    },
    {
      id: 'Qid2',
      username: 'UsernameB', // Include the username here
      text: 'ง่วงจังเลย',
      time: 45,
      donate: 1000,
      timestamp: 13324564,
      imageSrc: 'https://picsum.photos/1080/720',
    },
    {
      id: 'Qid3',
      username: 'UsernameC', // Include the username here
      text: 'ง่วงจังเลย',
      time: 45,
      donate: 1000,
      timestamp: 13324564,
      imageSrc: 'https://picsum.photos/836/739',
    },
  ];
  //card 6 data and function
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
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <TopDonaterList topDonaters={topDonaters} />
        </div>

        {/* Card 5 */}
        <div className="col-span-2 bg-white p-4 rounded-lg drop-shadow-md h-auto">
          <div id="queues-list" className=" flex flex-col items-center space-y-2">
            <h1 id="Header" className=" text-xl font-bold  mt-2">
              ข้อความถัดไป
            </h1>
            <QueueComponent queue={queueData} handleRemoveClick={handleRemoveClick}/>
          </div>
        </div>

        {/* Card 6 */}
        <div className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md h-auto">
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
