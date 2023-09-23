import React from "react";

interface TodayIncomeProps {
  todayIncome: number;
  yesterdayIncome: number;
}

const TodayIncome: React.FC<TodayIncomeProps> = ({
  todayIncome,
  yesterdayIncome,
}) => {
  // Calculate the change and percentage change
  const incomeChange = todayIncome - yesterdayIncome;
  const percentageChange =
    yesterdayIncome === 0
      ? "0.00" // To prevent division by zero
      : ((incomeChange / yesterdayIncome) * 100).toFixed(2);

  return (
    <>
      <div className="flex flex-col">
        <h1 className="text-black font-kanit font-medium text-2xl">
          รายได้วันนี้
        </h1>
        <div className="flex flex-wrap my-suto justify-between m-5">
          <h2 className={`${incomeChange > 0 ? "text-green" : "text-red"} font-kanit font-normal text-3xl lg:text-5xl mx-2`}>
            {todayIncome.toLocaleString()}
          </h2>
          <h3 className={`${incomeChange > 0 ? "text-green" : "text-red"} font-kanit font-normal text-lg lg:text-2xl mt-3`}>
            {`${incomeChange >= 0 ? "+" : ""}
            ${incomeChange.toLocaleString()} (${percentageChange}%)`}
          </h3>
        </div>
        <div className="flex justify-between">
          <div></div>
          <button className="bg-purple hover:bg-purple-100 active:outline-none active:ring active:ring-purple-300 text-white font-kanit p-3 rounded-xl shadow-md">
            ผู้ที่ Donate วันนี้
          </button>
        </div>
      </div>
    </>
  );
};

export default TodayIncome;
