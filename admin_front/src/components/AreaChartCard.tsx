import React from "react";
import Chart from "react-apexcharts";

interface AreaChartCardProps {
  chartData: {
    xAxisLabels: string[];
    yAxisData: number[];
  };
}

const AreaChartCard: React.FC<AreaChartCardProps> = ({ chartData }) => {
  const { xAxisLabels, yAxisData } = chartData;

  const options = {
    chart: {
      id: "linechart",
      zoom: {
        enabled: false,
      },
    },
    xaxis: {
      categories: xAxisLabels,
    },
    dataLabels: {
      enabled: true,
    },
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
      <div className="flex justify-center">
        <div></div>
        <h1 className="flex text-xl font-bold ">กราฟแสดงยอดเงินย้อนหลัง</h1>
      </div>
      <h2 className="text-sm">ยอดเงิน : พันบาท</h2>
      <div id="chart" className="mt-4">
        <Chart
          options={options}
          series={series}
          type="area"
          width="100%"
          height="210"
        />
      </div>
    </div>
  );
};

export default AreaChartCard;