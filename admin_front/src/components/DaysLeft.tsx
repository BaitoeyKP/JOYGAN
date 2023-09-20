import React from 'react';

interface DaysLeftProps {
  days: number;
}

const DaysLeft: React.FC<DaysLeftProps> = ({ days }) => {
  return (
    <div className="flex flex-row">
      อายุการใช้งานคงเหลือ
      <div className="text-purple-100">{days} วัน</div>
    </div>
  );
};

export default DaysLeft;
