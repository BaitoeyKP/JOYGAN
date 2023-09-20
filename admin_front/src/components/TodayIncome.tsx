import React from "react";

interface TodayIncomeProps {
  incomeData: {
    total: number;
    morethan: number;
    morethanper: number;
  };
}

const TodayIncome: React.FC<TodayIncomeProps> = ({ incomeData }) => {
  const { total, morethan, morethanper } = incomeData;

  return (
    <div className="flex flex-col items-center justify-center space-y-16">
      <h1 className="text-xl font-bold">รายได้รวมวันนี้</h1>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl flex items-center">{total.toLocaleString()} บาท</h2>
        <h3 className={`${morethan > 0 ? "text-green-ok" : "text-red-cancel"}  text-lg lg:text-2xl `}>
          {morethan.toLocaleString()} ({morethanper.toFixed(2)}%)
        </h3>
      </div>
      <div className="flex justify-center">
        <div></div>
        <button className="px-2.5 py-2 bg-purple-btn rounded-xl shadow-lg text-white">
          ดูย้อนหลัง
        </button>
      </div>
    </div>
  );
};

export default TodayIncome;
