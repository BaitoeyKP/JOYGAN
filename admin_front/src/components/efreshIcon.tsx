import React from 'react';

interface RefreshIconProps {
  dateTime: string;
}

const RefreshIcon: React.FC<RefreshIconProps> = ({ dateTime }) => {
  return (
    <div className="flex flex-row">
      <img
        src="https://file.rendit.io/n/Z1KOiRVX3BXpeQPRvwNC.svg"
        className="mt-px w-4 shrink-0"
        alt="Refresh Icon"
      ></img>
      อัปเดตเมื่อ<div className="text-purple-100">{dateTime}</div>
    </div>
  );
};

export default RefreshIcon;
