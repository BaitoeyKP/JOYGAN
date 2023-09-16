import React from 'react';

interface TodayIncomeProps {
  todayIncome: number; // You can change the type if needed
  yesterdayIncome: number; // You can change the type if needed
}

const TodayIncome: React.FC<TodayIncomeProps> = ({ todayIncome, yesterdayIncome }) => {
  // Calculate the change and percentage change
  const incomeChange = todayIncome - yesterdayIncome;
  const percentageChange = ((incomeChange / yesterdayIncome) * 100).toFixed(2);

  return (
    <div>
      <h1 className="text-black font-kanit font-medium text-2xl">รายได้วันนี้</h1>
      <div className="flex flex-row  justify-between m-5">
        <h2 className={`text-${incomeChange >= 0 ? 'green' : 'red'} font-kanit font-normal text-5xl mx-2`}>
          {todayIncome.toLocaleString()}
        </h2>
        <h3
          className={`text-${incomeChange >= 0 ? 'green' : 'red'} font-kanit font-normal text-2xl mt-3`}
        >
          {`${incomeChange >= 0 ? '+' : ''}${incomeChange.toLocaleString()} (${percentageChange}%)`}
        </h3>
      </div>
      <button className="ml-68 bg-purple hover:bg-purple-100 active:outline-none active:ring active:ring-violet-300 text-white font-kanit p-3 rounded-xl drop-shadow-md">
        ผู้ที่ Donate วันนี้
      </button>
    </div>
  );
};

export default TodayIncome;
