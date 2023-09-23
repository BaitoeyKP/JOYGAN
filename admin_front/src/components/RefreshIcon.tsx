import React from 'react';

interface RefreshIconProps {
  dateTime: string;
}

const RefreshIcon: React.FC<RefreshIconProps> = ({ dateTime }) => {
  return (
    <a href='update' className="flex flex-row text-neutral">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#a3a0a0" d="M20.5 5.835A10.485 10.485 0 0 0 12 1.5c-5.427 0-9.89 4.115-10.443 9.396l-.104.994l1.99.209l.103-.995A8.501 8.501 0 0 1 19.212 7.5H15.5v2h7v-7h-2v3.335Zm.057 6.066l-.104.995A8.501 8.501 0 0 1 4.787 16.5H8.5v-2h-7v7h2v-3.335A10.485 10.485 0 0 0 12 22.5c5.426 0 9.89-4.115 10.442-9.396l.104-.994l-1.989-.209Z"/>
      </svg>
      อัปเดตเมื่อ
      <div className="text-dark-purple-highlight mx-2">{dateTime}</div>
    </a>
  );
};

export default RefreshIcon;
