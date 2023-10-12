import React, { useState, useEffect } from "react";
import IconButton from "./IconButton";
import { Link } from "react-router-dom";
import axios from 'axios';

interface CurrentTextProps {
  data: {
    id: number;
    username: string;
    text: string;
    time: number; // in second
    donate: number;
    imagesrc?: string; // optional
  };
  onEditClick: () => void;
  onRemoveClick: () => void;
}
interface fetchdata {

  id: string;
  pic: string;
  state: string;
  text: string;
  time_display: number;
  time_stamp: number;


}

const CurrentText: React.FC<CurrentTextProps> = ({
  data,
  onEditClick,
  onRemoveClick,
}) => {
  // Destructure the data object
  const { id, username, text, time, donate, imagesrc } = data;
  // State to hold the remaining tim

  const [Data, setData] = useState<fetchdata>();
  const ipAddress = '10.66.14.173';

  useEffect(() => {
    // console.log(localStorage.getItem("JWT"));

    axios({
      method: 'get',
      url: `http:///${ipAddress}:3000/admin/content/show`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("JWT")}`
      }
    }).then((res) => {
      // console.log("content : " + res.data.text);
      setData(res.data)
      // console.log(res.data);

    });
  }, []);




const [remainingTimeSeconds, setRemainingTime] = useState(time);

// Update the remaining time every second
useEffect(() => {
  const timer = setInterval(() => {
    if (remainingTimeSeconds > 0) {
      setRemainingTime(remainingTimeSeconds - 1);
    }
  }, 1000);

  // Clean up the interval when the component unmounts
  return () => clearInterval(timer);
}, [remainingTimeSeconds]);


// Format the remaining time as minutes and seconds
const minutes = Math.floor(remainingTimeSeconds / 60);
const seconds = remainingTimeSeconds % 60;
if (!Data) {
  return;
}

if (minutes == 0 && seconds == 0) {
  // console.log("testDelete")
  // axios({
  //   method:'delete',
  //   url:`http://10.66.14.173:3000/admin/content/show`,

  //   headers:{
  //       Authorization:`Bearer ${localStorage.getItem("JWT")}`
  //   },
  //   }).then((res)=>{
  //       console.log(res.data);
  //       // localStorage.setItem("JWT",res.data.access_token);
  //   }).catch((error)=>{
  //       console.log(error)
  //   })
}
return (
  <div className="flex flex-col space-y-4">
    <div id="Header-box" className="flex flex-col items-center">
      <Link to="/monitor">
        <h1 id="Header" className="text-xl font-bold flex items-center">
          <span>
            ข้อความที่กำลังแสดงบนจอ
          </span>

          <span className="ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
              <path d="M13.6225 7.09116L10.81 9.90366C10.6779 10.0358 10.4987 10.11 10.3119 10.11C10.1251 10.11 9.94596 10.0358 9.81387 9.90366C9.68178 9.77157 9.60757 9.59242 9.60757 9.40561C9.60757 9.21881 9.68178 9.03966 9.81387 8.90757L11.4258 7.29683H9.66797C8.57653 7.29647 7.51594 7.6589 6.65298 8.32713C5.79002 8.99535 5.17364 9.93146 4.90078 10.9882C4.8777 11.0776 4.83723 11.1616 4.78168 11.2354C4.72614 11.3092 4.65661 11.3713 4.57706 11.4182C4.49752 11.4651 4.40951 11.4959 4.31807 11.5088C4.22663 11.5216 4.13355 11.5164 4.04414 11.4933C3.95473 11.4702 3.87074 11.4298 3.79697 11.3742C3.7232 11.3187 3.66109 11.2491 3.61418 11.1696C3.56728 11.09 3.53651 11.002 3.52362 10.9106C3.51073 10.8192 3.51598 10.7261 3.53906 10.6367C3.88932 9.27771 4.68161 8.07384 5.79118 7.21461C6.90076 6.35538 8.2646 5.88959 9.66797 5.89058H11.4258L9.81504 4.27808C9.68295 4.14598 9.60874 3.96683 9.60874 3.78003C9.60874 3.59322 9.68295 3.41407 9.81504 3.28198C9.94713 3.14989 10.1263 3.07568 10.3131 3.07568C10.4999 3.07568 10.679 3.14989 10.8111 3.28198L13.6236 6.09448C13.6892 6.15989 13.7412 6.23761 13.7766 6.32317C13.8121 6.40873 13.8303 6.50045 13.8301 6.59306C13.83 6.68568 13.8116 6.77735 13.776 6.86283C13.7403 6.94831 13.6882 7.0259 13.6225 7.09116ZM11.25 12.4531H2.57812V5.6562C2.57812 5.46972 2.50405 5.29088 2.37218 5.15902C2.24032 5.02715 2.06148 4.95308 1.875 4.95308C1.68852 4.95308 1.50968 5.02715 1.37782 5.15902C1.24595 5.29088 1.17188 5.46972 1.17188 5.6562V12.6875C1.17188 12.9983 1.29534 13.2963 1.51511 13.5161C1.73488 13.7359 2.03295 13.8593 2.34375 13.8593H11.25C11.4365 13.8593 11.6153 13.7852 11.7472 13.6534C11.879 13.5215 11.9531 13.3427 11.9531 13.1562C11.9531 12.9697 11.879 12.7909 11.7472 12.659C11.6153 12.5272 11.4365 12.4531 11.25 12.4531Z" fill="#393939" />
            </svg>
          </span>
        </h1>
      </Link>
    </div>
    <div id="TetxImageButton" className="flex justify-between">
      <div
        id="text-container"
        className="flex items-center text-center xl:mx-5 w-20 md:w-36  xl:w-full"
      >
        <span id="text" className="overflow-y-auto max-h-48">{Data.text}</span>
      </div>
      <img
        className="max-h-48 rounded-lg mx-10"
        src={Data!.pic}
        alt="current displaying"
      />
      <div id="buttons" className="flex flex-col self-center xl:mx-5">
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
                fill-rule="evenodd"
                d="M21.455 5.416a.75.75 0 0 1-.096.943l-9.193 9.192a.75.75 0 0 1-.34.195l-3.829 1a.75.75 0 0 1-.915-.915l1-3.828a.778.778 0 0 1 .161-.312L17.47 2.47a.75.75 0 0 1 1.06 0l2.829 2.828a.756.756 0 0 1 .096.118Zm-1.687.412L18 4.061l-8.518 8.518l-.625 2.393l2.393-.625l8.518-8.519Z"
                clip-rule="evenodd"
              />
              <path
                fill="white"
                d="M19.641 17.16a44.4 44.4 0 0 0 .261-7.04a.403.403 0 0 1 .117-.3l.984-.984a.198.198 0 0 1 .338.127a45.91 45.91 0 0 1-.21 8.372c-.236 2.022-1.86 3.607-3.873 3.832a47.77 47.77 0 0 1-10.516 0c-2.012-.225-3.637-1.81-3.873-3.832a45.922 45.922 0 0 1 0-10.67c.236-2.022 1.86-3.607 3.873-3.832a47.75 47.75 0 0 1 7.989-.213a.2.2 0 0 1 .128.34l-.993.992a.402.402 0 0 1-.297.117a46.164 46.164 0 0 0-6.66.255a2.89 2.89 0 0 0-2.55 2.516a44.421 44.421 0 0 0 0 10.32a2.89 2.89 0 0 0 2.55 2.516c3.355.375 6.827.375 10.183 0a2.89 2.89 0 0 0 2.55-2.516Z"
              />
            </svg>
          }
          text="แก้ไข"
          onClick={onEditClick}
          bgColor="purple-btn"
          hoverColor="dark-purple-highlight"
        />
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
          onClick={onRemoveClick}
          bgColor="red-cancel"
          hoverColor="dark-red-cancel"
        />
      </div>
    </div>
    <div id="UserTimeDonate" className="flex justify-between ">
      <div id="Username" className="text-dark-purple-highlight font-bold ">
        @{username}
      </div>
      <div id="TimeLeft" className="flex flex-row gap-2 content-end mx-10">
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
        <span>{`${minutes.toString().padStart(2, "0")}:${seconds
          .toString()
          .padStart(2, "0")}`}</span>
      </div>
      <div id="donateAmt" className="flex flex-row ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 48 48"
        >
          <g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
            <path d="M28.772 24.667A4.001 4.001 0 0 0 25 22v-1h-2v1a4 4 0 1 0 0 8v4c-.87 0-1.611-.555-1.887-1.333a1 1 0 1 0-1.885.666A4.001 4.001 0 0 0 23 36v1h2v-1a4 4 0 0 0 0-8v-4a2 2 0 0 1 1.886 1.333a1 1 0 1 0 1.886-.666ZM23 24a2 2 0 1 0 0 4v-4Zm2 10a2 2 0 1 0 0-4v4Z" />
            <path d="M13.153 8.621C15.607 7.42 19.633 6 24.039 6c4.314 0 8.234 1.361 10.675 2.546l.138.067c.736.364 1.33.708 1.748.987L32.906 15C41.422 23.706 48 41.997 24.039 41.997S6.479 24.038 15.069 15l-3.67-5.4c.283-.185.642-.4 1.07-.628c.212-.114.44-.231.684-.35Zm17.379 6.307l2.957-4.323c-2.75.198-6.022.844-9.172 1.756c-2.25.65-4.75.551-7.065.124a25.167 25.167 0 0 1-1.737-.386l1.92 2.827c4.115 1.465 8.981 1.465 13.097.002ZM16.28 16.63c4.815 1.86 10.602 1.86 15.417-.002a29.255 29.255 0 0 1 4.988 7.143c1.352 2.758 2.088 5.515 1.968 7.891c-.116 2.293-1.018 4.252-3.078 5.708c-2.147 1.517-5.758 2.627-11.537 2.627c-5.785 0-9.413-1.091-11.58-2.591c-2.075-1.438-2.986-3.37-3.115-5.632c-.135-2.35.585-5.093 1.932-7.87c1.285-2.648 3.078-5.197 5.005-7.274Zm-1.15-6.714c.8.238 1.636.445 2.484.602c2.15.396 4.306.454 6.146-.079a54.097 54.097 0 0 1 6.53-1.471C28.45 8.414 26.298 8 24.038 8c-3.445 0-6.658.961-8.908 1.916Z" />
          </g>
        </svg>
        <div className="mx-2"> บาท</div>
      </div>
    </div>
  </div>
);
};

export default CurrentText;
