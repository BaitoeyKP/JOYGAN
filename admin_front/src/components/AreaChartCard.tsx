// AreaChartCard.tsx
import React from "react";
import Chart from "react-apexcharts";

interface AreaChartCardProps {
  yAxisData: number[];
  xAxisLabels: string[];
}

const AreaChartCard: React.FC<AreaChartCardProps> = ({ yAxisData, xAxisLabels }) => {
  const options = {
    chart: {
      id: "linechart",
    },
    xaxis: {
      categories: xAxisLabels,
    },
    dataLabels: {
      enabled: false,
    },
    // fill: {
    //   type: 'gradient',
    //   gradient: {
    //       shadeIntensity: 1,
    //       inverseColors: false,
    //       opacityFrom: 0.9,
    //       opacityTo: 0.9,
    //       stops: [0, 100]
    //     },
    // },
    // colors: ["#D692F6"],
    fill: {
      type: "solid",
    },
    colors: ["#D692F6"],
  };

  const series = [
    {
      name: "ยอดเงิน donate",
      data: yAxisData,
    },
  ];

  return (
      <div className="flex flex-col justify-center">
        <h1 className="text-lg font-semibold">กราฟแสดงยอดเงินย้อนหลัง</h1>
        <h2 className="text-sm">7 วันล่าสุด หน่วย : พันบาท</h2>
        <div id="chart" className="mt-4">
          <Chart
            options={options}
            series={series}
            type="area"
            width="100%"
            height="130"
          />
        </div>
        <div className="flex justify-between items-center mt-4" id="buttonLayout">
          <div className="flex-grow"></div>
          <button className="bg-purple hover:bg-purple-100 active:outline-none active:ring active:ring-violet-300 text-white font-kanit p-3 rounded-xl drop-shadow-md">
            รายละเอียดยอดเงินย้อนหลัง
          </button>
        </div>
      </div>

  );
};

export default AreaChartCard;
