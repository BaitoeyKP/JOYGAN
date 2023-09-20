import React, { useState, useEffect } from 'react';
import IconButton from './IconButton';


interface CurrentTextProps {
  data: {
    username: string;
    text: string;
    time: number; // in minutes
    donate: number;
    imagesrc?: string; // optional
  };
  onEditClick: () => void;
  onRemoveClick: () => void;
}

const CurrentText:React.FC<CurrentTextProps> = ({ data, onEditClick, onRemoveClick }) => {
  // Destructure the data object
  const { username, text, time, donate, imagesrc } = data;
    // State to hold the remaining time
  const [remainingTimeSeconds, setRemainingTime] = useState(time * 60);

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
    return (
        <div className=' flex flex-col'>
          <h1 className="text-xl font-bold">ข้อความที่กำลังแสดงบนจอ</h1>
          <div className='flex flex-row'>
            <span>{text}</span>
            <img
                className=" rounded-lg"
                src={imagesrc}
                alt="current displaying"
              />
            <div>ปุม</div>
          </div>
          <div className='flex flex-row'>
            <span>{username}</span>
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
              <div>{donate.toLocaleString()} บาท</div>
          </div>
        </div>
    );
};

export default CurrentText;