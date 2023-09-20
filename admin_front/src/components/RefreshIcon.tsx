import React from 'react';

interface RefreshIconProps {
  dateTime: string;
}

const RefreshIcon: React.FC<RefreshIconProps> = ({ dateTime }) => {
  return (
    <a href='update' className="flex flex-row text-neutral">
      <img
        src="https://file.rendit.io/n/Z1KOiRVX3BXpeQPRvwNC.svg"
        className="mt-px  w-4 shrink-0 "
        alt="Refresh Icon"
      />
      อัปเดตเมื่อ
      <div className="text-dark-purple-highlight ">{dateTime}</div>
    </a>
  );
};

export default RefreshIcon;
