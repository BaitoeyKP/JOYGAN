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
    <div className="flex flex-col items-center content-evenly space-y-4 lg:space-y-14">
      <h1 className="text-xl font-bold">รายได้รวมวันนี้</h1>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl xl:text-5xl flex items-center">{total.toLocaleString()} บาท</h2>
        <h3 className={`${morethan > 0 && morethanper > 0 ? "text-green-ok" : "text-red-cancel"}  text-xl xl:text-3xl `}>
          {morethan > 0? "+":""}{morethan.toLocaleString()} ({morethanper > 0? "+":""}{morethanper.toFixed(2)}%)
        </h3>
      </div>
      <div className="flex justify-center ">
        <button className="px-5 py-2 bg-purple-btn rounded-xl shadow-lg text-white">
          ดูย้อนหลัง
        </button>
      </div>
    </div>
  );
};

export default TodayIncome;
