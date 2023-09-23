// AreaChartCard.tsx
import React from "react";
import Chart from "react-apexcharts";

interface AreaChartCardProps {
  yAxisData: number[];
  xAxisLabels: string[];
}

const AreaChartCard: React.FC<AreaChartCardProps> = ({
  yAxisData,
  xAxisLabels,
}) => {
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
      <div className="flex justify-center">
        <div></div>
        <h1 className="flex text-lg font-semibold ">กราฟแสดงยอดเงินย้อนหลัง</h1>
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
