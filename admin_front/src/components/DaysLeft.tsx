import React from 'react';

interface DaysLeftProps {
  Day: {
    expire: string;
  }
}

const DaysLeft: React.FC<DaysLeftProps> = ({ Day }) => {
  return (
    <div className="flex flex-row">
      อายุการใช้งานคงเหลือ
      <div className="text-dark-purple-highlight">{Day.expire} วัน</div>
    </div>
  );
};

export default DaysLeft;
