import React from "react";
import NavBar from "./components/NavBar";
import DaysLeft from "./components/DaysLeft";
import RefreshIcon from "./components/RefreshIcon";
import IconButton from "./components/IconButton";
import TodayIncome from "./components/TodayIncome";

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
          <div className="flex flex-col">
            <h1 className="text-3xl" id="row1">
              ข้อความปัจจุบัน
            </h1>
            <div className="flex flex-row" id="row2">
              <div className="flex flex-row" id="col2.1-ImageTextContainer">
                <div
                  className="flex flex-col w-1/2 space-y-5"
                  id="col1-TextContainer"
                >
                  <h2
                    className="font-semibold text-2xl text-purple hover:text-purple-100"
                    id="Username"
                  >
                    ชื่อผู้ใช้
                  </h2>
                  <div
                    className="h-32 w-fit overflow-y-auto"
                    id="UsertextContainer"
                  >
                    {/* Apply a fixed height and scroll when content is too long */}
                    <h3 className="font-light text-lg" id="Usertext">
                      {/* Long text that can wrap and scroll */}
                      ฟิวเจอร์ดีพาร์ทเมนต์ มือถือ คีตปฏิภาณโค้ช
                      ผ้าห่มเบิร์ดแอ็คชั่นม็อบ เดอะคอนโด คอลัมน์เห่ย กราวนด์
                      เกรดภคันทลาพาธพาร์ทเนอร์ปักขคณนา แอพพริคอทตัวตนเจ๊าะแจ๊ะ
                      บิ๊กบูมมาร์จินเทวาวิลเลจ เพรียวบางอินดอร์
                      นอมินีอพาร์ทเมนท์เชฟ คาเฟ่เชฟ แอนด์ทอร์นาโดม้งซูมซ้อ
                      รองรับ บลูเบอร์รียูโรปาร์ตี้ อีโรติกซิมเวสต์ซีเนียร์
                      อัลมอนด์﻿กรรมาชน หยวนเวณิกาฟีเวอร์รีเสิร์ชซีดาน
                      แพกเกจตุ๊กอัลไซเมอร์ แฮปปี้ ดอกเตอร์โจ๋ซิมดีพาร์ทเมนต์
                      นิวฟรุตเที่ยงคืนเทวา โกเต็กซ์ชิฟฟอนสติ๊กเกอร์ซีเรียส มั้ย
                      ซีดานไฮเวย์ชัตเตอร์ ทอร์นาโดเกสต์เฮาส์ซัพพลายธรรมานรีแพทย์
                      แมชีนช็อปปิ้งพีเรียดจิ๊กโก๋ ควีนจตุคามแคทวอล์คฟลุต อวอร์ด
                      สลัม รามาธิบดี
                    </h3>
                  </div>
                  <div
                    className="flex flex-row gap-2 content-end"
                    id="TimeLeft"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18Zm11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-8 4.414l-4-4V5.5h2v6.086L16.414 15L15 16.414Z"
                      />
                    </svg>
                    <p>เวลาที่เหลือ</p>
                    <span>00:12</span>
                    <p>นาที</p>
                  </div>
                </div>
                <div className=" w-1/2" id="col2.1-ImageContainer">
                  <img
                    className="mx-32 max-h-52 object-cover"
                    src="https://images.pexels.com/photos/4298629/pexels-photo-4298629.jpeg?cs=srgb&dl=pexels-arsham-haghani-4298629.jpg&fm=jpg"
                    alt="displaying"
                  />
                </div>
              </div>
              <div className="" id="col2.2-ButtonsContainer">
                <IconButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21 12a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1Zm-15 .76V17a1 1 0 0 0 1 1h4.24a1 1 0 0 0 .71-.29l6.92-6.93L21.71 8a1 1 0 0 0 0-1.42l-4.24-4.29a1 1 0 0 0-1.42 0l-2.82 2.83l-6.94 6.93a1 1 0 0 0-.29.71Zm10.76-8.35l2.83 2.83l-1.42 1.42l-2.83-2.83ZM8 13.17l5.93-5.93l2.83 2.83L10.83 16H8Z"
                      />
                    </svg>
                  }
                  text="Edit"
                  onClick={handleEditClick}
                  bgColor="grey"
                  hoverColor="grey-100"
                />
                <IconButton
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M11 1.75V3h2.25a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1 0-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75ZM4.496 6.675l.66 6.6a.25.25 0 0 0 .249.225h5.19a.25.25 0 0 0 .249-.225l.66-6.6a.75.75 0 0 1 1.492.149l-.66 6.6A1.748 1.748 0 0 1 10.595 15h-5.19a1.75 1.75 0 0 1-1.741-1.575l-.66-6.6a.75.75 0 1 1 1.492-.15ZM6.5 1.75V3h3V1.75a.25.25 0 0 0-.25-.25h-2.5a.25.25 0 0 0-.25.25Z"
                      />
                    </svg>
                  }
                  text="Remove"
                  onClick={handleRemoveClick}
                  bgColor="purple"
                  hoverColor="purple-100"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="col-span-1 bg-white p-4 rounded-lg drop-shadow-md"
          style={{ height: "300px" }}
        >
          Card 3
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
