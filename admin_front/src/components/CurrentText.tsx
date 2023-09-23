import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';


interface CurrentTextProps{
    Username: string;
    Usertext: string;
    timeLeft: number;// for countdown in seconds
    imagesrc: string;
    onEditClick: () => void;
    onRemoveCLick: () => void;
}

const CurrentText:React.FC<CurrentTextProps> = ({Username, Usertext, timeLeft, imagesrc, onEditClick, onRemoveCLick}) => {
    // State to hold the remaining time
  const [remainingTime, setRemainingTime] = useState(timeLeft);

  // Update the remaining time every second
  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, [remainingTime]);

  // Format the remaining time as minutes and seconds
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
    return (
        <div className="flex flex-col">
        <h1 className="text-3xl" id="row1">
          ข้อความปัจจุบัน
        </h1>
        <div className="flex justify-between" id="row2">
          <div className="flex flex-auto mr-5 w-3/4" id="col2.1-ImageTextContainer">
            <div className="flex flex-col space-y-5" id="col1-TextContainer"
            >
              <h2 className="font-semibold text-2xl text-purple hover:text-purple-100" id="Username"
              >
                {Username}
              </h2>
              <div className="h-32 w-fit overflow-y-auto" id="UsertextContainer"
              >
                {/* Apply a fixed height and scroll when content is too long */}
                <h3 className="font-light text-lg" id="Usertext">
                  {/* Long text that can wrap and scroll */}
                  {Usertext}
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
                <span>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</span>
                <p>นาที</p>
              </div>
            </div>
            <div className="" id="col2.1-ImageContainer">
              <img
                className="mx-32 max-h-52 object-cover"
                src={imagesrc}
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
              text="แก้ไข"
              onClick={onEditClick}
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
              text="ลบ"
              onClick={onRemoveCLick}
              bgColor="purple"
            />
          </div>
        </div>
      </div>
    );
};

export default CurrentText;